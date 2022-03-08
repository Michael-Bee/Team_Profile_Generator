const Employee = require('../lib/Employee.js')

test('can create an employee instance', () => {
    const testEmp = new Employee();
    expect(typeof(testEmp)).toBe(object)
}) 

test('can setup a name', () => {
    const testEmp = new Employee(name);
    const name = "Mike"

    expect(testEmp.name).toBe(name)
}) 