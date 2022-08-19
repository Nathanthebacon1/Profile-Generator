const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name= '') {
      super(name);
  
      this.github = '';
      this.role = 'Engineer'
    }
  
    getGithub() {
      return this.github
    }

  }
  
  module.exports = Engineer;
