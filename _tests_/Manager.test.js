const Manager = require("../lib/Manager");

describe("THIS IS TEST FOR Manager CLASS ", ()=> {
    it("should have a officeNumber property when instantiated with the office parameter", ()=> {
        const name = "Mike";
        const id = 02;
        const email = "Mike@mail.com";
        const office = 101;

        const emp = new Manager(name, id, email, office);
        expect(emp.office).toEqual(office);
    })

    it("Should return the officeNumber property when getOffice method is invoked", ()=> {
        const name = "Mike";
        const id = 02;
        const email = "Mike@mail.com";
        const office = 101;

        const emp = new Manager(name, id, email, office);
        expect(emp.getOffice()).toEqual(office);
    })

    it("Should return 'Manager' when the getRole method is invoked", ()=> {
        const name = "Mike";
        const id = 02;
        const email = "Mike@mail.com";
        const office = 101;

        const emp = new Manager(name, id, email, office);
        expect(emp.getRole()).toEqual("Manager");
    })
})