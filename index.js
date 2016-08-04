var fs = require('fs')
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./db.db')
var init = fs.readFileSync('./init.sql', 'utf8')

exports.init = function () {
  db.run(init)
}
exports.add = function () {
  db.serialize(function() {
    var stmt = db.prepare("INSERT INTO samples (dateobserved, location) VALUES (?, ?)")
    stmt.run("jan 1", "derreen")
    stmt.finalize()
    db.close()
  })
}
exports.show = function (){
  db.serialize(function() {
    db.each("SELECT sampleid, dateobserved, location FROM samples", function(err, row) {
      console.log(row.sampleid + ": " + row.dateobserved +
      ": " + row.location)
    })
  })
  db.close()
}
