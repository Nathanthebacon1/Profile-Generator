class Employee {
    constructor(name = '') {
      this.name = name;
      this.id = 0;
      this.email = '';
      this.role = '';

    }
 
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email
    }
   
    getRole(){
        return this.role;
    }

  }
  
  module.exports = Employee;