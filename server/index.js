const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'PASSWORD@123',
    database: "studentinfo"
}); 

app.post('/create', (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const transaction = req.body.transaction;

    let dt = new Date();
    let date = ("0" + dt.getDate()).slice(-2);
    let month = ("0" + dt.getMonth()).slice(-2);
    let year = dt.getFullYear();
    let dateset = month + "-" + date + "-" + year

    db.query('INSERT INTO user (Name, Email, Transactions, Date) VALUES(?,?,?,?)',
        [name,email,transaction, dateset], (err, result) =>{
            if(err){
                console.log(err)
            }
            else{
                res.send("Values Inserted")
            }
        } 
    )
})

app.get('/update/:search', (req, res) => {
    const email = req.params.search
    db.query("Select * from user where Email= ?", email, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.put('/updateUser', (req, res) => {
    const newname = req.body.newname
    const newemail =  req.body.newemail
    const newtransaction = req.body.newtransaction
    db.query('UPDATE user Set Name = ?, Transactions = ? WHERE Email = ?', [newname, newtransaction, newemail], (err, result) => {
    if ( err) {
             console.log(err);
        }
        else {  
            res.send(result);
        }
    })
})

app.listen(3001, ()=> {
    console.log('Server is running')
})