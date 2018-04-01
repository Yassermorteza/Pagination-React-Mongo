'use strict';

const client = require('mongodb').MongoClient;
const url = process.env.DB_URL;
const assert = require('assert');
const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 5555;

app.use(express.static(path.join(__dirname , 'public')));

if(process.env.NODE_ENV !== 'production'){
	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});
}

app.get('/', (req,res)=>{
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/get_employees:page', (req,res)=>{
	let page = req.params.page;
	client.connect(url, (err, db)=>{
	    listDocs(db, res, page);
		assert.equal(null, err);
	    console.log("Connected correctly to server");
	});
});

const listDocs = (db, res, page) => {
	let myDB = db.db('mylocation-devugees');
	let collection = myDB.collection('employees');
	let collectionEmployee = collection.find();
    let employees = [];
	collectionEmployee.forEach(employee=>{
		if(employee !== null){
			employees.push(employee);
		}
	}, err=>{
		res.send(employees);
		db.close();
	});
};

app.listen(port, ()=> console.log('Server is running on port ', port));


