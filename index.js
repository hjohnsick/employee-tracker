const inquirer = require('inquirer');
const Query = require('./lib/Query');

const employeePrompts = (query, startApplication) => {
    return inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Enter employee's first name:"
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter employee's last name:"
        },
        {
            type: "input",
            name: "roleId",
            message: "Enter employee's role id:"
        },
        {
            type: "list",
            name: "managerId",
            choices:[
                {
                    name:"Randy T",
                    value:1
                },
                {
                    name:"None",
                    value:null
                }
            ],
            message: "Enter employee's manager id:"
        }
    ]).then(({firstName, lastName, roleId, managerId}) => {
        query.addEmployee(firstName, lastName, roleId, managerId, startApplication);
    })
};

const startApplication = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department",
                "View All Employees",
                "Quit"
            ]
        }
    ])
    .then(({ choice} ) => {
        const query = new Query();
        if (choice === "Add Employee") {
            employeePrompts(query, startApplication)
        } else if (choice === "Update Employee Role") {
            query.updateEmployeeRole(startApplication);
        } else if (choice === "View All Roles") {
           query.viewAllRoles(startApplication);
        } else if (choice === "Add Role") {
           query.addRoles(startApplication);
        } else if (choice === "View All Departments") {
             query.viewDepartments(startApplication)
        } else if (choice === "View All Employees") {
            query.viewAllEmployees(startApplication);
        } 
        else {
            console.log("Have a nice day!");
            return;
        }
    });
};

startApplication();

