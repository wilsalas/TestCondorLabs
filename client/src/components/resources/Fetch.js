export default async (uri, fields, method, cb) => {
    try {
        let body = JSON.stringify(fields), headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', atob(localStorage.getItem('fakeAuth')));
        let response = await fetch(uri, method === "post" ? { method, body, headers } : { method, headers }),
            data = await response.json();
        cb(data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}