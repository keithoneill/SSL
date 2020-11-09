//Requiring readline
const readline = require("readline");
//Create readline variable to interact with user
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
//Create grader class
class Grader{
    letterGrade = function(grade){
        if (grade > 90){
            this.letterGrade = "A"
            return this.letterGrade
        }
        else if (grade > 80){
            this.letterGrade = "B"
            return this.letterGrade
        }
        else if (grade > 70){
            this.letterGrade = "C"
            return this.letterGrade
        }
        else if (grade > 60){
            this.letterGrade = "D"
            return this.letterGrade
        }
        else if (grade < 60){
            this.letterGrade = "F"
            return this.letterGrade
        }
        else
            return this.letterGrade
    }
    statement = function(letterGrade){
        if (letterGrade === "A"){
            this.statement = "You did really well on the assignment."
            return this.statement
        }
        else if (letterGrade === "B"){
            this.statement = "You did well on the assignment but just missed some of the funcionality."
            return this.statement
        }
        else if (letterGrade === "C"){
            this.statement = "You passed the assignment but missed some of the functionality."
            return this.statement
        }
        else if (letterGrade === "D"){
            this.statement = "You passed the assignment but there is a lot to work on."
            return this.statement
        }
        else if (letterGrade === "F"){
            this.statement = "You did not pass this assignment."
            return this.statement
        }
        else
            return this.statement
    }
}
module.exports = Grader;
//Create new instance of grader
assignmentGrade = new Grader();
//Gather user information and pass to the class methods
rl.question("Please enter the student name: ", (name)=>{
    rl.question("Please enter the assignment name: ", (assignmentName)=>{
        rl.question("Please enter the grade: ", (grade)=>{
            var letterGrade = assignmentGrade.letterGrade(grade);
            var statement = assignmentGrade.statement(letterGrade);
            //Display information back to the user
            console.log(`${name}@fullsail.edu`);
            console.log(`Here is your grade for ${assignmentName}: ${letterGrade}`)
            console.log("Grade Details:");
            console.log(statement);
            rl.close();
        })
    })
});