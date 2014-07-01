var test = require('tape').test
var glue = require('../index.js')

test('Test correct usage', function(t) {
  t.ok(typeof glue.getUserMedia === 'function')
  t.end()
})
