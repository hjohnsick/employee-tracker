const inquirer = require("inquirer");
const Query = require("./lib/Query");

const employeePrompts = async (managers, titles) => {
  const query = new Query();
  const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name?",
    },
    {
      type: "list",
      name: "roleId",
      message: "What is the employee's role?",
      choices: titles,
    },
    {
      type: "list",
      name: "managerId",
      message: "Who is the employee's manager?",
      choices: managers,
    },
  ]);

  query.addEmployee(firstName, lastName, roleId, managerId, startApplication);
};

// Add a new role
const rolePrompts = (departments, startApplication) => {
  const query = new Query();
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "list",
        name: "department",
        message: "Which department does the role belong to?",
        choices: departments,
      },
    ])
    .then(({ title, salary, department }) => {
      query.addRole(title, salary, department, startApplication);
    });
};

// Add a department
const departmentPrompts = (query, startApplication) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the department?",
      },
    ])
    .then(({ name }) => {
      query.addDepartment(name, startApplication);
    });
};

const updateRolePrompts = (query, startApplication) => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "Which employee's role do you want to update?",
        choices: [
          //will need to pull these from the database
          {
            name: "Randy Travis",
            value: 1,
          },
          {
            name: "Regina Philangy",
            value: 2,
          },
          {
            name: "Judy Moody",
            value: 3,
          },
          {
            name: "Bruce Lee",
            value: 4,
          },
        ],
      },
      {
        type: "list",
        name: "role",
        message: "Which role do you want to assign the selected employee?",
        choices: [
          {
            name: "Salesperson",
            value: 1,
          },
          {
            name: "Sales Lead",
            value: 2,
          },
          {
            name: "Software Engineer",
            value: 3,
          },
        ],
      },
    ])
    .then(({ employee, role }) => {
      query.updateEmployeeRole(role, employee, startApplication);
    });
};

const startApplication = () => {
  return inquirer
    .prompt([
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
          "Quit",
        ],
      },
    ])
    .then(({ choice }) => {
      const query = new Query();
      if (choice === "Add Employee") {
        query.viewManagerChoices(employeePrompts);
      } else if (choice === "Update Employee Role") {
        updateRolePrompts(query, startApplication);
      } else if (choice === "View All Roles") {
        query.viewAllRoles(startApplication);
      } else if (choice === "Add Role") {
        query.viewDepartmentChoices(rolePrompts, startApplication);
      } else if (choice === "View All Departments") {
        query.viewDepartments(startApplication);
      } else if (choice === "Add Department") {
        departmentPrompts(query, startApplication);
      } else if (choice === "View All Employees") {
        query.viewAllEmployees(startApplication);
      } else {
        console.log("Have a nice day!");
        return;
      }
    });
};

startApplication();
