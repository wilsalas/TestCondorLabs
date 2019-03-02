import FetchData from './Fetch';

const GetDataUser = cb => FetchData("/auth/getusers", {}, "get", data => cb(data));

(async () => {
    var socket = io('http://localhost:5000/');
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });

    ListUsers();
})();

function ListUsers() {
    console.log("HOla mundo");
}


export default {
    GetDataUser
};
