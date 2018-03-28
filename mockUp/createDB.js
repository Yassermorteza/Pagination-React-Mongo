db.employees.drop();

var nameList = [
				'JhonDoe', 
				'DavidMataghi', 
				'OmidKordestani', 
				'Malos', 
				'PierreOmidyar', 
				'LinusTorvalds', 
				'AdamLaurie', 
				'DouglasCrockford', 
				'GuidoVanRussum', 
				'Bamzi', 
				'Sami'
		  	];

var coList = [
				'Yahoo',
				'Google',
				'Linux',
				'Linkdin',
				'JobPal',
				'Malos',
				'Ebay',
				'Firefox',
				'Freelancer',
				'Nodejs',
				'Youtube'
			];

var employees = [];
var page = 1;
var count = 11;
var iterator = 0;

for(var i = 0; i < 100; ++i){
	if(i-count === 0){page++; count+=10; iterator=0;};
	var employee = {
		name: nameList[iterator],
		email: nameList[iterator] + '@' + coList[iterator] + '.com',
		phone: '0176' + Math.floor(Math.random() * 1000000),
		company: coList[iterator],
		page: page 
	}
	iterator++;
	employees.push(employee);
};

db.createCollection('employees');
db.employees.insert(employees);




