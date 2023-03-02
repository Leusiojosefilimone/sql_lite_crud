const http = require('http')
const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
const path = require('path')

//rescursos
app.use(express.static(__dirname + '/'))

//server configurations
app.set('views engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: false}))
app.listen(3000, ()=>{
    console.log('server started on 3000 port')
    console.log('http://localhost:3000/')
}
   )
//database configurations
const db_name = path.join(__dirname, "db", "base.db")
const db  = new sqlite3.Database(db_name, (error)=> {
    if (error) {
        return console.error(error)
    } else {
        console.log("conected with database")
    }
})
//create table
const sql_create = "CREATE TABLE IF NOT EXISTS  Produtos (produto_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Nome VARCHAR(100) NOT NULL, Preco REAL NOT NULL, Description TEXT);"
db.run(sql_create, (error)=> {
    if (error) {
        return console.error(error)
    } else {
        console.log("TABLE CRIATED")
    }
})


//routing
app.get("/", (req, res) => {
    res.render('index.ejs')
})

app.get("/contacts", (req, res) => {
    res.render('contacts.ejs')
})

app.get("/about", (req, res) => {
    res.render('about.ejs')
})

app.get("/products", (req, res) => {
    res.render('products.ejs')
})
app.get("*", (req, res) => {
    res.render('notfound.ejs')
})

//show the products table
app.get("/contacts", (req, res) => {
    const sql="SELECT * FROM Products ORER BY  Nome"
    db.all(sql, [], (error, rovs) => {
        if(error){
            return console.error(error.message)
        }else{
            res.render("products.ejs", {modelo: rovs})
        }
    } )
})