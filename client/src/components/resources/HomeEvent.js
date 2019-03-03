import FetchData from './Fetch';
import io from 'socket.io-client';
import Store from './store/Store';
import { GetCountListUser } from './store/ActionCreators';

//getdata user app
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


if (localStorage.getItem("fakeAuth") !== null) {
    (async () => {
        const socket = io('http://localhost:5000/');

        // on connection to server, ask for user's name with an anonymous callback
        socket.on('connect', () => {
            // call the server-side function 'adduser' and send one parameter (value of prompt)
            GetDataUser(data => socket.emit('newuser', {
                name: data.response.name,
                email: data.response.email,
                profile: data.response.profile
            }))
        });


        socket.on('listusers', (data, email) => Store.dispatch(GetCountListUser({
            listname: Object.keys(data),
            email
        })));
        socket.on('updateusers', (data, email) => Store.dispatch(GetCountListUser({
            listname: Object.keys(data),
            email
        })));
    })();
}



export default {
    GetDataUser,
    NewGroup
};


