// Add your code here
// const data = {
//     name: "irvin",
//     email: "irvin@email.com"
// }

// const objectConfig = 

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(function (res) {
        return res.json()
    })
    .then(function (object) {
        document.body.textContent = object.id
    })
    .catch(function (error) {
        document.body.textContent = error.message
    })

}