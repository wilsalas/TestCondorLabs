import FetchData from './Fetch';
import io from 'socket.io-client';
import Store from './store/Store';
import { GetCountListUser } from './store/ActionCreators';


const GetDataUser = cb => FetchData("/auth/getusers", {}, "get", data => cb(data));

(async () => {

    const socket = io('http://localhost:5000/');

    // on connection to server, ask for user's name with an anonymous callback
    socket.on('connect', () => {
        // call the server-side function 'adduser' and send one parameter (value of prompt)
        GetDataUser(data => socket.emit('newuser', {
            name: data.response.name,
            profile: data.response.profile
        }))
    });


    socket.on('listusers', data => Store.dispatch(GetCountListUser(Object.keys(data))));

    socket.on('updateusers', data => Store.dispatch(GetCountListUser(Object.keys(data))));



})();



export default {
    GetDataUser
};


