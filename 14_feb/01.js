// test.js
const student = {
  Name: "John Doe",
  Age: 20,
  Grade: 85,
  Subjects: ["Math", "Science", "English"],
};

function displayInfo(message = "") {
  console.log(
    `${message}Name: ${this.Name}, Age: ${this.Age}, Grade: ${this.Grade}`
  );
}

const boundDisplayInfo = displayInfo.bind(student);
boundDisplayInfo(); // Using bind

displayInfo.call(student, "Call: "); // Using call
displayInfo.apply(student, ["Apply: "]); // Using apply

const subjectsArray = student.Subjects;

function processSubjects(subjects, callback) {
  subjects.forEach(callback);
}

function subjectCallback(subject) {
  console.log(`Processing subject: ${subject}`);
}

processSubjects(subjectsArray, subjectCallback);

function doubleGrades(studentObj) {
  const doubledGrades = studentObj.Subjects.map((subject) => ({
    subject,
    originalGrade: studentObj.Grade,
    doubledGrade: studentObj.Grade * 2,
  }));

  console.log("Original and Modified Grades:");
  doubledGrades.forEach((entry) => {
    console.log(
      `${entry.subject}: Original - ${entry.originalGrade}, Modified - ${entry.doubledGrade}`
    );
  });
}

function passingSubjects(studentObj, passingGrade) {
  const passedSubjects = studentObj.Subjects.filter(
    (subject) => studentObj.Grade >= passingGrade
  );

  console.log(
    `Subjects with grade >= ${passingGrade}: ${passedSubjects.join(", ")}`
  );
}

doubleGrades(student);
passingSubjects(student, 70);
