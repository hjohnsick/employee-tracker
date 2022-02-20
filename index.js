const inquirer = require('inquirer');
const Query = require('./lib/Query');
const db = require('./db/connection');
// const ascii = `%c
// .-------------------------------------------------------------------------------.
// |																				|
// |																				|
// |		________					    __										|
// |	    |		|__  __  ___   _ ___   |  | ____    __     __   ____  ____		|
// |		| ______| \'__ \` __ \| '__ \  |  |/    \  |  |   |  | /    \/    \     |
// |		|	 |  |  |  |  |  | | |  ) | |  |                                     |
// `;

// console.log(ascii);
// const startApplication = () => {
//     return inquirer.prompt([
//         {
//             type: "list",
//             name: "choice",
//             message: "What would you like to do?",
//             choices: [
//                 "Add Employee",
//                 "Update Employee Role",
//                 "View All Roles",
//                 "Add Role",
//                 "View All Departments",
//                 "Add Department",
//                 "View All Employees",
//                 "Quit"
//             ]
//         }
//     ])
//     .then(({ choice} ) => {
//         if (choice === "Add Employee") {
//             console.log("You added an employee");
//             return startApplication();
//         } else if (choice === "Update Employee Role") {
//             console.log("You updated an employee");
//             return startApplication();
//         } else if (choice === "View All Roles") {
//             const role = new Query();
//             role.viewAllRoles();
//             console.log("You viewed all roles");
//             return startApplication();
//         } else if (choice === "Add Role") {
//             console.log("you added a role");
//             return startApplication();
//         } else if (choice === "View All Departments") {
//             console.log("you viewed all departments")
//             return startApplication();
//         } else if (choice === "View All Employees") {
//             console.log("You viewed all employees");
//             return startApplication();
//         } 
//         else {
//             console.log("Have a nice day!");
//             return;
//         }
//     });
// };

// startApplication();

// query.viewAllRoles();
const query = new Query();
query.viewAllEmployees();