'use strict';

const client = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/employee';
const assert = require('assert');
const app = require('express')();

const port = process.env.PORT || 5555;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
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
	let myDB = db.db('employee');
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