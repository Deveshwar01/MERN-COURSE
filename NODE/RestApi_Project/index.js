const express = require('express')
const users = require("./MOCK_DATA.json")
const app = express();
const port = 8000;



// ROUTES
/*
app.get('/users', (req, res) => {
    const html = `
    <ul>
     ${users.map((user) => `<li> ${user.first_name}</li>`).join('')}
    </ul>`
    res.send(html)
})
*/

app.get("/api/users", (req, res) => {
    return res.json(users)
})

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

app.post('/api/users', (req, res) => {
    // to do create a new user
    return res.json({ status: 'pending' })
})

app.patch('/api/users/:id', (req, res) => {
    // edit user with id
    return res.json({ status: 'pending' })
})
app.delete('/api/users/:id', (req, res) => {
    // delete user with id
    return res.json({ status: 'pending' })
    
})


app.listen(port, () => {
    console.log(`SERVER STARTED AT ${port}`);
})