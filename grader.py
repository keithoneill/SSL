class Grader:
    def __init__(self): 
        self.grade = float(raw_input("Please enter the grade: "))
    def getLetterGrade(self):
        global letterGrade
        if self.grade > 90:
            letterGrade = "A"
            return letterGrade
        elif self.grade > 80:
            letterGrade = "B"
            return letterGrade
        elif self.grade > 70:
            letterGrade = "C"
            return letterGrade
        elif self.grade > 60:
            letterGrade = "D"
            return letterGrade
        elif self.grade < 60:
            letterGrade = "F"
            return letterGrade
        else:
            return letterGrade
    def getStatement(self):
        global statement
        if letterGrade == "A":
            statement = "You did really well on the assignment."
            return statement
        elif letterGrade == "B":
            statement = "You did well on the assignment but just missed some of the funcionality."
            return statement
        elif letterGrade == "C":
            statement = "You passed the assignment but missed some of the functionality."
            return statement
        elif letterGrade == "D":
            statement = "You passed the assignment but there is a lot to work on."
            return statement
        elif letterGrade == "F":
            statement = "You did not pass this assignment."
            return statement
        else:
            return statement


studentName = raw_input("Please enter the student name: ")
assignmentName = raw_input("Please enter the assignment name: ")

assignmentGrade = Grader()

print(studentName + "@fullsail.edu")
print("Here is your grade for " + assignmentName + ": " + assignmentGrade.getLetterGrade())
print "Grade Details:"
print(assignmentGrade.getStatement())