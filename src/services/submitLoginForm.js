export default function submitLoginForm(e, { user, password }) {
    e.preventDefault();
    let options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            'username': user,
            'password': password
        })
    }
    return fetch("http://localhost:8080/api/login", options).then((res) =>
        res.ok
            ? res.json()
            : Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrió un error",
            })
    )
        .catch((err) => err);
}