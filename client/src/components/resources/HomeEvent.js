import FetchData from './Fetch';
import io from 'socket.io-client';
import Store from './store/Store';
import { GetCountListUser } from './store/ActionCreators';

//get the information from a user's database
const GetDataUser = cb => FetchData("/auth/getusers", {}, "get", data => cb(data));

//create a new group app
const NewGroup = (e, data = "") => {
    e.preventDefault();
    if (data === "") {
        console.log(e.target.group.value);
    } else {
        console.log("Hola mundo");
    }
}

//check if a user has a defined session
if (localStorage.getItem("fakeAuth") !== null) {
    (async () => {
        //start the connection of clients with server
        const socket = io('http://localhost:5000/');
        // check that a customer has connected
        socket.on('connect', () => {
            //issue the new customer's data to the server
            GetDataUser(data => socket.emit('newuser', {
                name: data.response.name,
                email: data.response.email,
                profile: data.response.profile
            }))
        });
        //fill the list of connected users and those who disconnect
        socket.on('listusers', data => Store.dispatch(GetCountListUser(ConvertInfoUsers(data))));
        socket.on('updatelistusers', data => Store.dispatch(GetCountListUser(ConvertInfoUsers(data))));
    })();
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


