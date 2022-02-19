const inquirer = require('inquirer');

const ascii = `%c
.-------------------------------------------------------------------------------.
|																				|
|																				|
|		________					    __										|
|	    |		|__  __  ___   _ ___   |  | ____    __     __   ____  ____		|
|		| ______| \'__ \` __ \| '__ \  |  |/    \  |  |   |  | /    \/    \     |
|		|	 |  |  |  |  |  | | |  ) | |  |                                     |
`;

console.log(ascii);
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
                "Exit"
            ]
        }
    ])
    .then(({ choice} ) => {
        if (choice === "Add Employee") {

        } else if (choice === "Update Employee Role") {

        } else if (choice === "View All Roles") {

        } else if (choice === "Add Role") {

        } else if (choice === "View All Departments") {

        } else {
            console.log("Have a nice day!");
            return;
        }
    });
};

startApplication();