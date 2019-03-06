import FetchData from './Fetch';

//register users
const FormRegister = e => {
    e.preventDefault();
    let { name, email, password, gender, profile } = e.target;
    FetchData('/auth/register', {
        name: name.value,
        email: email.value,
        password: password.value,
        gender: gender.value,
        profile: profile.value
    }, 'post', data => {
        if (data.status === 200) {
            alert(data.response);
            window.location.href = "/";
        } else {
            alert(data.response);
        }
    });
}

//update user data
const FormUpdate = (e, id) => {
    e.preventDefault();
    let { name, email, password, gender, profile } = e.target;
    FetchData(`/auth/update/${id}`, {
        name: name.value,
        email: email.value,
        password: password.value,
        gender: gender.value,
        profile: profile.value
    }, 'put', data => {
        console.log(data);
    });
}

//login for users
const FormLogin = e => {
    e.preventDefault();
    let { email, password } = e.target;
    FetchData('/auth/login', {
        email: email.value,
        password: password.value
    }, 'post', data => {
        if (data.status === 200) {
            localStorage.setItem('fakeAuth', btoa(data.response));
            window.location.href = "/home";
        } else {
            alert(data.response);
        }
    });
}


export default {
    FormRegister,
    FormLogin,
    FormUpdate
};
