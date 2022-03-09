const Intern = require("../lib/Intern");

describe("THIS IS TEST FOR INTERN CLASS ", ()=> {
    it("should have a school property when instantiated with the school parameter", ()=> {
        const name = "Mike";
        const id = 2;
        const email = "Mike@mail.com";
        const school = "University of Denver";

        const emp = new Intern(name, id, email, school);
        expect(emp.school).toEqual(school);
    })

    it("Should return the github property when getGithub method is invoked", ()=> {
        const name = "Mike";
        const id = 2;
        const email = "Mike@mail.com";
        const school = "University of Denver";

        const emp = new Intern(name, id, email, school);
        expect(emp.getSchool()).toEqual(school);
    })

    it("Should return 'Engineer' when the getRole method is invoked", ()=> {
        const name = "Mike";
        const id = 2;
        const email = "Mike@mail.com";
        const school = "University of Denver";

        const emp = new Intern(name, id, email, school);
        expect(emp.getRole()).toEqual("Intern");
    })
})