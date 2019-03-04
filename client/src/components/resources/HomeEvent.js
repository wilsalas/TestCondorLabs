import FetchData from './Fetch';
import io from 'socket.io-client';
import Store from './store/Store';
import {
    GetCountListUser, ListGroups
} from './store/ActionCreators';

//start the connection of clients with server
const socket = io('http://localhost:5000/');
//check if a user has a defined session
if (localStorage.getItem("fakeAuth") !== null) {
    // check that a customer has connected
    socket.on('connect', () => {
        //issue the new customer's data to the server
        GetDataUser(data => socket.emit('newuser', {
            name: data.response.name,
            email: data.response.email,
            profile: data.response.profile
        }))
    });
    //get the list of groups in the client
    socket.on("getgroups", data => Store.dispatch(ListGroups(data)));
    //fill the list of connected users and those who disconnect
    socket.on('listusers', data => Store.dispatch(GetCountListUser(ConvertInfoUsers(data))));
    //refresh the list with users that are disconnecting
    socket.on('updatelistusers', data => Store.dispatch(GetCountListUser(ConvertInfoUsers(data))));

}
//get the information from a user's database
const GetDataUser = cb => FetchData("/auth/getusers", {}, "get", data => cb(data));
//create a new group app
const NewGroup = (e, data = "") => {
    if (data === "") {
        e.preventDefault();
        FetchData("/events/newgroup", { namegroup: e.target.group.value }, "post", data => {
            data.status === 200 ? socket.emit("groupregister") : alert(data.message);
        });
    } else {
        console.log("Hola mundo");
    }
}
//convert a text string to a user object
const ConvertInfoUsers = data => {
    let infoUser = [], dataUser = undefined;
    Object.values(data).forEach(info => {
        dataUser = info.split("-");
        infoUser.push({
            name: dataUser[0],
            email: dataUser[1],
            profile: dataUser[2]
        });
    });
    return infoUser;
}

export default {
    GetDataUser,
    NewGroup
};


