

const express = require("express");
const app=express();


const path = require("path");
const hbs = require("hbs");
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, 'images')));


app.get('/', (req, res) => {
    const tableData = [
        { id: 1, name: 'Item 1', price: 10.99 },
        { id: 2, name: 'Item 2', price: 19.99 },
        { id: 3, name: 'Item 3', price: 20.99 },
    ];
    res.render('tables', { tableData });
});



app.listen(3000, () => {
    console.log("Port connected");
});
