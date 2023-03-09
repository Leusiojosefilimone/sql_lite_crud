exports.getAll = (req, res) => {
    db.all("SELECT * FROM employees", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ rows });
    })
}

exports.getOne = (req, res) => {
        var params = [req.params.id]
        db.get("SELECT * FROM employees where employee_id = ?", [req.params.id], (err, row) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.status(200).json(row);
        });
    
}

exports.post = (req, res) => {
    var reqBody = re.body;
    db.run("INSERT INTO employees (last_name, first_name, title, address, country_code) VALUES (?,?,?,?,?)",
        [reqBody.last_name, reqBody.first_name, reqBody.title, reqBody.address, reqBody.country_code],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "employee_id": this.lastID
            })
        })
}
const db = require('../model/employeesModel')

exports.update = (req, res)=>{
    var reqBody = re.body;
    db.run(`UPDATE employees set last_name = ?, first_name = ?, title = ?, address = ?, country_code = ? WHERE employee_id = ?`,
        [reqBody.last_name, reqBody.first_name, reqBody.title, reqBody.address, reqBody.country_code, reqBody.employee_id],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.status(200).json({ updatedID: this.changes });
        })

}
exports.delete = (req, res)=>{
    db.run(`DELETE FROM user WHERE id = ?`,
    req.params.id,
    function (err, result) {
        if (err) {
            res.status(400).json({ "error": res.message })
            return;
        }
        res.status(200).json({ deletedID: this.changes })
    });
}