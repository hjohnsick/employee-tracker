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
    addRoles(title, salary, departmentId, startApplication) {
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
    addDepartment(startApplication) {
    startApplication();
    };
    // View All Employees
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

}

module.exports = Query;