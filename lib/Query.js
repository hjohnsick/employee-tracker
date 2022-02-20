const db = require('../db/connection');

class Query {

// Add Employee
addEmployee() {

}
// Update Employee Role
updateEmployeeRole() {

}
// View All Roles
viewAllRoles() {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log("No roles found");
            return;
        }
        console.log(rows);
    });
}
// Add Roles
addRoles() {
    
}
// View All Departments
viewDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log("No departments found");
            return;
        }
        console.log(rows);
    });
}
// Add Department
addDepartment() {

}
// View All Employees
viewAllEmployees() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            console.log("No employees found");
            return;
        }
        console.log(rows);
    });
}

}

module.exports = Query;