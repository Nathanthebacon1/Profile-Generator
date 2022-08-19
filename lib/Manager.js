const Employee = require("./employee");

class Manager extends Employee {
    constructor(name= '') {
      super(name);
      this.role = 'Manager';
      this.officeNumber = '';
      
    }
  
    getOfficeNumber(){
        return this.officeNumber;
    }


  }
  
  module.exports = Manager;