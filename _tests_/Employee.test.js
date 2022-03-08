// describe("TEST FOR EMPLOYEE CLASS", ()=> {
//     it("Should return true, this is sa dummy test",() =>{
//         expect(true).toBe(true)
//     })
// })

const Employee = require('../lib/Employee.js')

it('Should create an employee instance', () => {
    const testEmp = new Employee();
    expect(typeof(testEmp)).toBe("object")
}) 

it('Should setup a name property when instantiated with a name parameter', () => {
    const name = "Mike"
    const testEmp = new Employee(name);

    expect(testEmp.name).toEqual("Mike")
}) 

test('can setup a id property when instantiated with a id parameter', () => {
    const id = "10"
    const testEmp = new Employee(id);

    expect(testEmp.id).toEqual("10")
}) 

test('can setup a email property when instantiated with a email parameter', () => {
    const email = "mike@gmail.com"
    const testEmp = new Employee(email);

    expect(testEmp.email).toEqual("mike@gmail.com")
}) 