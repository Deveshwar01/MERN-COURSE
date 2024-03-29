const express = require('express')
const fs = require('fs')
const users = require("./MOCK_DATA.json");
const e = require('express');
const app = express();
const port = 8000;


app.use(express.urlencoded({ extended: false }))

// ROUTES

app.get("/users", (req, res) => {
    return res.json(users)
})
app
    .route('/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        // edit user with id
        return res.json({ status: 'pending' })
    })
    .delete((req, res) => {
        // delete user with id
        return res.json({ status: 'pending' })

    })


app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: user.length })
    });
})


app.listen(port, () => {
    console.log(`SERVER STARTED AT ${port}`);
})