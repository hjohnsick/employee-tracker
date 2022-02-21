const inquirer = require('inquirer');
const Query = require('./lib/Query');

const employeePrompts = (query, startApplication) => {
    return inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "roleId",
            choices: [
                {
                    name: "Salesperson",
                    value: 1
                }
            ],
            message: "What is the employee's role?"
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
            message: "Who is the employee's manager?"
        }
    ]).then(({firstName, lastName, roleId, managerId}) => {
        query.addEmployee(firstName, lastName, roleId, managerId, startApplication);
    })
};

const rolePrompts = (query, startApplication) => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of the role?",
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary of the role?"
        },
        {
            type: "list",
            name: "department",
            message: "Which department does the role belong to?",
            choices: [
                "Engineering",
                "Finance",
                "Legal",
                "Sales",
                "Service"
            ]
        }
    ]).then(({ title, salary, department} ) => {
        query.addRole(title, salary, department, startApplication);
    })
};

const departmentPrompts = (query, startApplication) => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department?"
        }
    ]).then(({name}) => {
        query.addDepartment(name, startApplication);
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
           rolePrompts(query, startApplication);
        } else if (choice === "View All Departments") {
            query.viewDepartments(startApplication);
        } else if (choice === "Add Department") {
            departmentPrompts(query, startApplication);
        } 
        else if (choice === "View All Employees") {
            query.viewAllEmployees(startApplication);
        } 
        else {
            console.log("Have a nice day!");
            return;
        }
    });
};

startApplication();

