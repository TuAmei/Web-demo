var student = require('./student')
var teacher = require('./teacher')

teacher.add('wolf')

function add (teacherName,studentName) {
	teacher.add(teacherName)

	student.forEach(function(item,index){
		student.add[item]
	})
}

exports.add = add

// module.exports = add