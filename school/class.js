var student=require("./student.js");
var teacher=require("./teacher.js");

function add(students,teachers){
	students.forEach(function(item,index){
		student.add(item);
	});
	teacher.add(teachers);
}

exports.add=add;
