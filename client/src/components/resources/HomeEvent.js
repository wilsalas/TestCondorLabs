import FetchData from './Fetch';
import io from 'socket.io-client';
import Store from './store/Store';
import Notifications from '../layouts/Notification';
import { Users, Groups, GroupName, LoadMessages } from './store/ActionCreators';

//start the connection of clients with server
const socket = io('http://localhost:5000/');
//check if a user has a defined session
if (localStorage.getItem("fakeAuth") !== null) {
    // check that a customer has connected
    socket.on('connect', () => {
        //issue the new customer's data to the server
        GetDataUser(data => socket.emit('newuser', {
            _id: data.response._id,
            name: data.response.name,
            email: data.response.email,
            profile: data.response.profile
        }));
    });
    //get the list of groups in the client
    socket.on("getgroups", data => Store.dispatch(Groups(data)));
    //fill the list of connected users and those who disconnect
    socket.on('users', data => Store.dispatch(Users(ConvertInfoUsers(data))));
    //refresh the list with users that are disconnecting
    socket.on('updateusers', data => Store.dispatch(Users(ConvertInfoUsers(data))));
    //local alert to load messages and send a message to the same customer
    socket.on("updatelocalchat", data => {
        Store.dispatch(GroupName(data.group));
        Askformessages(data.group);
        Notifications(data.status, data.message)
    });
    //alert people when there is a new status change in the chat
    socket.on("updatechat", data => {
        if (data.username !== null) Notifications(data.status, data.message)
    });
    //loading messages app store
    socket.on("loadmessages", messages => Store.dispatch(LoadMessages(messages)));
}
//get the information from a user's database
const GetDataUser = cb => FetchData("/auth/getusers", {}, "get", data => cb(data));
//create a new group app
const NewGroup = (e = undefined, data = "") => {
    let infoNewGroup = undefined;
    if (data === "") {
        e.preventDefault();
        infoNewGroup = { name: e.target.group.value, type: "All" };
    } else {
        infoNewGroup = data;
    }
    FetchData("/events/newgroup", infoNewGroup, "post", data => {
        console.log(data);
        //refresh group list
        if (data.groupname !== undefined) {
            socket.emit("groupregister");
            SwitchGroup(data.groupname);
        }
        Notifications(data.status, data.message);
    });
}

//get the group change
const SwitchGroup = data => socket.emit("switchgroup", data);
//ask for the message list
const Askformessages = groupname => socket.emit("askformessages", groupname)
//create a new message
const NewMessage = data => {
    if (data.message !== "") {
        FetchData("/events/newmessage", data, "post", info => {
            Askformessages(data.groupname);
            document.getElementsByName("message")[0].value = "";
        });
    } else {
        Notifications(406, "The message field can not be empty");
    }
}

//convert a text string to a user object
const ConvertInfoUsers = data => {
    let infoUser = [], dataUser = undefined;
    Object.values(data).forEach(info => {
        dataUser = info.split("-");
        infoUser.push({
            _id: dataUser[0],
            name: dataUser[1],
            email: dataUser[2],
            profile: dataUser[3]
        });
    });
    return infoUser;
}

export default {
    GetDataUser,
    NewGroup,
    NewMessage,
    SwitchGroup
};


