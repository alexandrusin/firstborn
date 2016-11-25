// vacation-tracker.js


// I have 2 types of users: Employee & Admin.
// I should have a "class" User from which both Employee & Admin
// inherit properties & methods.

// User fields: (UserId - should be automatically generated),
// Name, DateOfBirth, CNP, Phone, Address

function User(name, dateofbirth, cnp, phone, address, type){
	this.type = type;
	this.Name = name;
	this.DateOfBirth = dateofbirth;
	this.CNP = cnp;
	this.Phone = phone;
	this.Address = address;
}

// For all classes there must be a general get(property) method
// that returns the value of a class property.
// Ex: user.get('name') //returns John Doe

User.prototype.get = function(property){
	this.property = property;
	console.log(this.property);

}


// Users should be created like this:
// var user = new User("John Doe", "1989-01-01",...)

var Employee = new User('employee');
var Admin = new User('admin');

// Employees and admin should have properties & methods of their own.

// Employee Fields: DateOfEmployment, JobPosition

Employee.DateOfEmployment = '';
Employee.JobPosition = '';

// Admin Fields: AccessLevel

Admin.AccessLevel = function(level){
	this.level = level;
	if( level == 0 ){
		// 0 - can approve days off
	}
	else if( level == 1){
		// 1 - can approve days off/add/delete new users
	}
	else{
		return "Invalid Access Level"
	}
};

console.log(Admin);



console.log(Admin.get('Name'));