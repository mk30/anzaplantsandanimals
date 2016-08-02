var fs = require('fs')
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('db.db')
var init = fs.readFileSync('./init.sql', 'utf8')

db.serialize(function() {
  db.run(init)
 
  var stmt = db.prepare("INSERT INTO samples (dateobserved, location) VALUES (?, ?)")
  stmt.run("jan 1", "derreen")
  stmt.finalize()
 
  db.each("SELECT sampleid, dateobserved, location FROM samples", function(err, row) {
      console.log(row.sampleid + ": " + row.dateobserved +
      ": " + row.location)
  })
})
 
db.close()
