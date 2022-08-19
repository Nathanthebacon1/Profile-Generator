const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const writeFile = require('../src/write-file');
const template = require('../src/template');

class Generator{
    constructor(){
        this.Manager = new Manager();    
        this.AllEmployees = [];
    }
    
    createManager() {
   
        var myManager = new(Manager);
        inquirer
            .prompt([
                {
                    type:'text',
                    name: 'name',
                    message:'Please enter manager name: '
                },
                {
                    type:'text',
                    name: 'id',
                    message:'Please enter manager id: '
                },
                {
                    type:'text',
                    name: 'email',
                    message:'Please enter manager email: '
                },
                {
                    type:'text',
                    name: 'officeNumber',
                    message:'Please enter manager office number: '
                }
            ])
            .then (({name,id,email,officeNumber}) => {
                myManager.name = name;
                myManager.email = email;
                myManager.officeNumber = officeNumber;  
                myManager.id = id;    

                if (myManager.getName() != ''){
                    this.AllEmployees.push(myManager);       
                    this.createEmployees();
                } else {
                    console.log('You did not enter a manager')
                }
            })

    }

    
    createEngineer() {
   
        var myEngineer = new Engineer();

        inquirer
            .prompt([
                {
                    type:'text',
                    name: 'name',
                    message:'Please enter engineer name: '
                },
                {
                    type:'text',
                    name: 'id',
                    message:'Please enter engineer id: '
                },
                {
                    type:'text',
                    name: 'email',
                    message:'Please enter engineer email: '
                },
                {
                    type:'text',
                    name: 'github',
                    message:'Please enter engineer github username: '
                }
            ])
            .then (({name,id,email,github}) => {
                myEngineer.name = name;
                myEngineer.email = email;
                myEngineer.github = github;  
                myEngineer.id = id;              
                this.AllEmployees.push(myEngineer);
                this.createEmployees();

            })
            
    }

    
    createIntern() {
   
        var myIntern = new Intern();
        inquirer
            .prompt([
                {
                    type:'text',
                    name: 'name',
                    message:'Please enter intern name: '
                },
                {
                    type:'text',
                    name: 'id',
                    message:'Please enter intern id: '
                },
                {
                    type:'text',
                    name: 'email',
                    message:'Please enter intern email: '
                },
                {
                    type:'text',
                    name: 'school',
                    message:'Please enter Interns school: '
                }
            ])
            .then (({name,id,email,school}) => {
                myIntern.name = name;
                myIntern.email = email;
                myIntern.school = school;  
                myIntern.id = id;              
                this.AllEmployees.push(myIntern);
                this.createEmployees();
            })
    }


    createEmployees() {

        var employeeType = '';

        const questions = [
        {
            type: 'input',
            name: 'employeeType',
            message: "Please enter (e)ngineer or (i)ntern or e(x)it"
        }
        ];

        inquirer.prompt(questions).then((answers) => {
        if (answers.employeeType != 'x') {
       
            if (answers.employeeType == 'e'){
                this.createEngineer();
            } else {
                this.createIntern();
            }

        } else {
            writeFile(template(this.AllEmployees));

        }
    
    });
    }
   
}

module.exports = Generator;