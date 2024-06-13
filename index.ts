import inquirer from "inquirer";

class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Person {
  students: Student[] = [];

  addStudent(obj: Student) {
    this.students.push(obj);
  }
}

const persons = new Person();
const programRun = async (persons: Person) => {
  console.log("\nWellcome guest\n");
  do {
    let ask = await inquirer.prompt([
      {
        name: "ask",
        type: "list",
        choices: ["Self", "Student"],
        message: "Whom would you prefer to talk to?",
      },
    ]);

    if (ask.ask == "Self") {
      console.log("\nHi! I am talking to myself.");
      console.log("I am also good!\n");
    }
    if (ask.ask == "Student") {
      let std = await inquirer.prompt([
        {
          name: "ask",
          type: "input",
          message: "Whom does he/she want to talk to among the students?",
        },
      ]);

      const student = persons.students.find((value) => value.name === std.ask);
      if (!student) {
        const name = new Student(std.ask);
        persons.addStudent(name);

        console.log(`\nHi! I am ${name.name}, and I am good.`);
        console.log(persons.students);
        console.log("");
      } else {
        console.log(`\nHi! I am ${student.name} again, and I am feeling good how do you do...`);
        console.log(persons.students);
        console.log("");
      }
    }
  } while (true);
};

programRun(persons);
