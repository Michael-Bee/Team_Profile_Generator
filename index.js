const inquirer = require('inquirer');
const fs = require('fs');


//HTML TEMPLATE
const generateHTML = ({ name, location, github, linkedin }) =>
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
                            <h5 class="card-title text-white">Employee Name</h5>
                            <h5 class="card-title text-white"> Logo / Employee Role</h5>
                        /div>
                        <div class="card-body p-2 bg-light">
                            <p class="card-text m-1 p-1 bg-white border border-secondary">Employee ID: ${employee.id}</p>
                            <p class="card-text m-1 p-1 bg-white border border-secondary">Email: ${employee.email}</p>
                            <p class="card-text m-1 p-1 bg-white border border-secondary">Office/GitHub/School: ${engineer.github}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`;


//USER PROMPTS
inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: `What is your manager's name?`,
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
        type: 'input',
        name: 'office',
        message: 'What is their office number?',
    },
    ])
    .then((answers) => {
    const htmlPageContent = generateHTML(answers);

//WRITES HTML FILE
    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
    });
