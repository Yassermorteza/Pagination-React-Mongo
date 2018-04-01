
## React pagination 

 A live version on [Heroku Pagination React Mongo](https://pagination-react-mongo.herokuapp.com/)

This simple app is working localy. If you have [MongoDB](https://www.mongodb.com/what-is-mongodb) on your machine. After clone the repository on your machine just you need to setup your datebase with this line os codes:

1. Create a DB name ``employee`` on your mongo terminal console after run it with ``mongo`` command :
	```use employee```
2. Load the mock data generator``createDB.js`` inside ``mockUp`` folder with this code: 
	```load("file directory like create.js")```

## Or: 
	- cd mockUp
	- mongo
	- use employee
	- load("createDB.js")
	- db.employees.find()
## Mlab:
	If you want to deploy your app on [Heroku](https://heroku.com), you may need to create your database on [Mlab](https://mlab.com/), the most elegant way to generate your mock data on Mlab is connecting to your mlab account from shell with this command:     
	```mongo ds012345.mlab.com:56789/dbname -u dbuser -p dbpassword``` and then execute the commands above, for more information please look at [Mlab documentation](http://docs.mlab.com/connecting/).

I assume you've done this part and you've created the mock data.

## Next step:
To see the data on client side and interact with the database, i created a simple server on ``Nodejs`` and ``Expressjs`` in file name ``server.js``.

```js
const app = require('express')();
```

## client: 
for that ``React`` is my choice, nad to make it more responsive and more user friendly i brougth the ``Antdesign`` to the battle ground. it does all the pagination and loading after i fetch the data from server end-point ``/get_employee``. also i added page numbers in mock generator file ``createDB.js``
however ``Antdesign`` is more convinient to work with.

````js
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
````

## Run:
  Time to run the app on your machine, after installing all the packages in ``client`` and main folder ``webApp`` with ``npm i`` command,
  install ``nodemon`` globaly if you don't have it on your machine ``npm i -g nodemon``, now you can run the app with ``npm run dev`` concurrently.
  Just you need to open the ``http://localhost:8888/`` on your browser. 






