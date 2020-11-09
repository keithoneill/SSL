#Global variable for letter grade
$letterGrade
#Class for grader
class Grader
    def initialize
        puts "Please enter the grade: "
        @grade = gets.to_f
    end
    def getLetterGrade
        if @grade > 90
            $letterGrade = "A"
            return $letterGrade
        elsif @grade > 80
            $letterGrade = "B"
            return $letterGrade
        elsif @grade > 70
            $letterGrade = "C"
            return $letterGrade
        elsif @grade > 60
            $letterGrade = "D"
            return $letterGrade
        elsif @grade < 60
            $letterGrade = "F"
            return $letterGrade
        else
            return $letterGrade
        end
    end
    def getStatement
        if $letterGrade == "A"
            statement = "You did really well on the assignment."
            return statement
        elsif $letterGrade == "B"
            statement = "You did well on the assignment but just missed some of the funcionality."
            return statement
        elsif $letterGrade == "C"
            statement = "You passed the assignment but missed some of the functionality."
            return statement
        elsif $letterGrade == "D"
            statement = "You passed the assignment but there is a lot to work on."
            return statement
        elsif $letterGrade == "F"
            statement = "You did not pass this assignment."
            return statement
        else
            return statement
        end
    end
end
#Gather information from the user
puts "Please enter the student name: "
studentName = gets.chomp
puts "Please enter the assignment name: "
assignmentName = gets.chomp
#New instance of the grader class
assignmentGrade = Grader.new
#display information back to the user
puts "#{studentName}@fullsail.edu"
puts "Here is your grade for " + assignmentName + ": " + assignmentGrade.getLetterGrade()
puts "Grade Details:"
puts assignmentGrade.getStatement()
