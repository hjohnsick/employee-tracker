const db = require('../db/connection');
const cTable = require('console.table');
const { title } = require('process');

    class Query {

    // Add Employee
    addEmployee(firstname, lastname, roleId, managerId, startApplication) {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES (?,?,?,?)`;
        db.query(sql, [firstname, lastname, roleId, managerId], (err, rows) => {
            if (err) throw err;
            console.log(`Added ${firstname} ${lastname} to the database!`);
            startApplication();
        });
    };
    // Update Employee Role
    updateEmployeeRole() {

    }
    // View All Roles
    // TODO need to view id, title, department, salary
    viewAllRoles(startApplication) {
        const sql = `SELECT * FROM role`;
        db.query(sql, (err, rows) => {
            if (err) {
                console.log("No roles found");
                return;
            }
            console.log(" ");
            console.table(rows);
            startApplication()
        });
    };
    // Add Roles
    addRole(title, salary, departmentId, startApplication) {
        const sql = `INSERT INTO role (title, salary, department_id)
            VALUES (?, ?, ?)`;
        db.query(sql, [title, salary, departmentId], (err, rows) => {
            if (err) throw err;
            console.log(`Added ${title} role to database!`);
            startApplication();
        });
    };
    // View All Departments
    viewDepartments(startApplication) {
        const sql = `SELECT * FROM department`;
        db.query(sql, (err, rows) => {
            if (err) {
                console.log("No departments found");
                return;
            }
            console.log(" ");
            console.table(rows);
            startApplication();
        });
    };
    // Add Department
    addDepartment(name, startApplication) {
        const sql = `INSERT INTO department (name)
            VALUES (?)`;
        db.query(sql, name, (err, rows) => {
            if (err) throw err;
            console.log(`Added department ${name} to the database!`);
            startApplication();
        });
    };
    // View All Employees
    // TODO need to show id, first_name, last_name, title, department, salary, manager
    viewAllEmployees(startApplication) {
        const sql = `SELECT * FROM employee`;
        db.query(sql, (err, rows) => {
            if (err) {
                console.log("No employees found");
                return;
            }
            console.log(" ");
            console.table(rows);
            startApplication()
        });
    };

    // Get title
    viewTitle() {
        const sql = `SELECT title FROM role`;
        db.query(sql, (err, rows) => {
            if (err) throw err;
            return rows;
        })
    };

    // Get manager 
    viewManager() {
        const sql = `SELECT CONCAT(first_name, ' ',  last_name) AS manager FROM employee WHERE manager_id IS NULL;`;
        db.query(sql, (err, rows) => {
            if (err) throw err;
            return rows;
        })
    }
}

module.exports = Query;