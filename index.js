const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


//ARRAY OF USER QUESTIONS
const managerPrompt = [
    {
        message: "What is the manager's name?",
        name: "name",
        type: "input"
    }, 
    {
        message: "What is the manager's id number?",
        name: "id",
        type: "input"
    },
    {
        message: "What is the manager's email?",
        name: "email",
        type: "input"
    },
    {
        message: "What is the manager's office number?",
        name: "office",
        type: "input"
    }
];

const employeePrompt = [
    {
        message: "What is the role of the employee you want to add?",
        name: "role",
        type: "list",
        choices: ["Engineer", "Intern"]
    }, 
    {
        message: (answers)=> `What is the name of the ${answers.role}?`,
        name: "name",
    }, {
        message: (answers)=> `What is the id of the ${answers.role}?`,
        name: "id",
    },
    {
        message: (answers)=> `What is the email of the ${answers.role}?`,
        name: "email",
    }, 
    {
        message: (answers)=> {
            if(answers.role === 'Engineer') return 'What is the github name of the engineer?'
            return 'What is the school this intern graduated from?'
        },
        name: "extra",
    }
];
//Empty array to put employee profiles as they're generated
const employees = []


//PROMPTS USER WITH QUESTIONS
function addEmployee(){
    prompt({
        message: "What do you want to do?",
        type: "list",
        name: "choice",
        choices: ["Add an employee", "Create roster"]
    }).then(data => {
        console.log("YOUR CHOICE --- ", data.choice);
        if(data.choice === "Add an employee"){
            prompt(employeePrompt)
            .then(data => {
                console.log("answers for employee --- ", data);
                if(data.role === "Engineer"){
                    const emp = new Engineer(data.name, data.id, data.email, data.extra);
                    employees.push(emp)
                }else{
                    const emp = new Intern(data.name, data.id, data.email, data.extra);
                    employees.push(emp)
                }

                console.log(`${data.role} added to team!`);
                setTimeout(addEmployee, 1500);
            })
        }else{
            createHTML()
        }
    })
}

function createHTML(){
    console.log("CREATING HTML!");
    console.log("ALL YOUR EMPLOYEES ---- ", employees);

    const html = 
    `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
            <title>Team Profile Generator</title>
        </head>
        <body>
            <div class="container mw-100  bg-danger">
                <h1 class="p-5 text-white">My Team</h1> 
            </div>
            <div class="container">
                <div class="row">
                    ${employees.map(employee => employee.generateHTMLCard(employee.officeNumber || employee.github || employee.school)).join("\n")}
                </div>
            </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>`;

//WRITES HTML FILE
fs.writeFileSync("./dist/output.html", html);
console.log("ALL DONE, check the dist directory for the html created!")
}

function main(){
    //Start with manager
    prompt(managerPrompt).then(data => {
        console.log(data);
        const manager = new Manager(data.name, data.id, data.email, data.office);
        employees.push(manager);

    //Follow with other employees
        addEmployee();
    })
}

main();