const db = require('../db/connection');
const cTable = require('console.table');
const util = require('util');
const query = util.promisify(db.query).bind(db);

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
    updateEmployeeRole(roleId, id, startApplication) {
        const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
        db.query(sql, [roleId, id], (err, rows) => {
            if (err) throw err;
            console.log(`Updated employee #${id}'s role in database`);
            startApplication();
        })
        
    }

    // View All Roles
    viewAllRoles(startApplication) {
        const sql = `SELECT role.id, role.title, role.salary, department.name AS department FROM role INNER JOIN department ON role.department_id=department.id`;
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
    viewAllEmployees(startApplication) {
        const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM employee
        LEFT JOIN employee manager on manager.id = employee.manager_id
        INNER JOIN role ON (role.id = employee.role_id)
        INNER JOIN department ON (department.id = role.department_id)`;
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
    // viewManagers() {
    //     const sql = `SELECT CONCAT(first_name, ' ',  last_name) AS manager FROM employee WHERE manager_id IS NULL`;
    //     db.query(sql, (err, rows) => {
    //         if (err) throw err;
    //         // rows.forEach(function(row) {
    //         //     console.log(row.manager);
    //         // });
    //        const managers = [];
    //        for (let i = 0; i < rows.length; i++) {
    //            managers.push({ name: rows[i].manager, value: i+1 });
    //        }
    //        managers.push({ name: "None", value: null });
    //        return managers;
    //     })
    // }

    viewManagers() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT CONCAT(first_name, ' ',  last_name) AS manager FROM employee WHERE manager_id IS NULL`;
            db.query(sql,
                (error, results) => {
                    if (error) {
                        console.log('error', error);
                        reject(error);
                    }
                    const managers = [];
           for (let i = 0; i < results.length; i++) {
               managers.push({ name: results[i].manager, value: i+1 });
           }
           managers.push({ name: "None", value: null });
                    resolve(managers);
                }
            
            )
        })
        
    }

    // async viewManagers() {
    //     const sql = `SELECT CONCAT(first_name, ' ',  last_name) AS manager FROM employee WHERE manager_id IS NULL`;
    //     try {
    //         const rows = await query(sql);
    //         return rows;
    //     } finally {
    //         // db.end();
    //         console.log('done');
    //     }
        
    // }


}

module.exports = Query;