const Employee = require("../lib/Engineer")

it('Should setup a github property when instantiated with a github parameter', () => {
    const github = "Mike-Bee"
    const testEmp = new Employee(github);

    expect(testEmp.github).toEqual("Mike-Bee")
}) 