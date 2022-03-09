const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//HTML TEMPLATE
const generateHTML = ({name, role, id, email, office, github, school,}) =>
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
                <div class="col-sm-4">
                    <div class="card shadow-sm" style="width:20rem;">
                        <div class="card-header bg-primary p-3">
                            <h5 class="card-title text-white">${answers.name}</h5>
                            <h5 class="card-title text-white"> Logo / ${answers.role}</h5>
                        /div>
                        <div class="card-body p-2 bg-light">
                            <p class="card-text m-1 p-1 bg-white border border-secondary">Employee ID: ${answers.id}</p>
                            <p class="card-text m-1 p-1 bg-white border border-secondary">Email: ${answers.email}</p>
                            <p class="card-text m-1 p-1 bg-white border border-secondary">Office/GitHub/School: ${answers.github}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`;


//ARRAY OF USER QUESTIONS
const questions = [
    
    {
        type: 'input',
        name: 'name',
        message: `What is the employee's name?`,
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
    },
    {
        type: 'list',
        choices: ["Engineer", "Intern"],
        name: 'role',
        message: 'What is their team role?',
    },
]

const managerQuestion = [
    {
    type: 'input',
    name: 'office',
    message: `What is their office number?`,
    }
]

const engineerQuestion = [
    {
    type: 'input',
    name: 'github',
    message: `What is their GitHub profile name?`,
    }
]

const internQuestion = [
    {
    type: 'input',
    name: 'github',
    message: `What is their GitHub profile name?`,
    }
]

const employees = []

//PROMPTS USER WITH QUESTIONS
inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const manager = new Manager(data.name, data.id, data.email, data.role);
        console.log(manager);
        employees.push(manager);


    const htmlPageContent = generateHTML(answers);

//WRITES HTML FILE
    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
    });
