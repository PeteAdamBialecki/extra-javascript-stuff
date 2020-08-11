// 1) 	Write the code for function addNewTeachers() found on line 25. This function should receive parameter newTeachers, defined on line 52, and add the new teachers to the treehouseTeachers variable. 

// 2)	Find function printTreehouseSummary(). There is something you need to fix in this function so the console.log() on the final line of the function outputs the correct number of JavaScript courses and teachers.

// 3)	At this point, attempt to run your code by typing node let_const.js in your workspace console and hitting enter. You should receive an error message when you do this. Use the clues in this error message to fix the program so it runs.

let teachers = [
	{
		name: 'Ashley',
		topicArea: 'Javascript'
	}
];

let newTeachers = [
	{
		name: 'James',
		topicArea: 'Javascript'
	},
	{
		name: 'Treasure',
		topicArea: 'Javascript'
	}
];

let courses = ['Introducing JavaScript',
				'JavaScript Basics',
				'JavaScript Loops, Arrays and Objects',
				'Getting Started with ES2015',
				'JavaScript and the DOM',
				'DOM Scripting By Example'];


var i = courses.length;

function addNewTeachers(newTeachers) {
        teachers.push(...newTeachers);
}

function printTreehouseSummary() {
    for (let i = 0; i < teachers.length; i += 1) {
        console.log(`${teachers[i].name} teaches ${teachers[i].topicArea}`);
	}
    console.log(`Treehouse has ${courses.length} JavaScript courses, and ${teachers.length} Javascript teachers`);
}

addNewTeachers(newTeachers);
printTreehouseSummary();
