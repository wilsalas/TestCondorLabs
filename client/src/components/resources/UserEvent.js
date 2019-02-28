import FetchData from './Fetch';

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
        alert(data.response);
    });
}

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
    FormLogin
};
