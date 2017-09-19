var class = require('./class')

class.add('wolf',['北富美','高富帅'])

exports.add = function(classes) {
	classes.forEach(function(item,index){
		var _class = item
		var teacherName = item.teacherName
		var students = item.students

		class.add(teacherName,students)
	})
}