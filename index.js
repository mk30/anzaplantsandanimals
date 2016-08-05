var fs = require('fs')
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./db.db')
var init = fs.readFileSync('./init.sql', 'utf8')

exports.init = function () {
  db.run(init)
}
exports.add = function (cb) {
  db.serialize(function() {
    var stmt = db.prepare("INSERT INTO samples (dateobserved, location) VALUES (?, ?)")
    stmt.run("jan 1", "derreen")
    stmt.finalize(cb)
  })
}
exports.showall = function (cb){
  db.serialize(function() {
    db.all("SELECT sampleid, dateobserved, location FROM samples", cb)
  })
  db.close()
}
