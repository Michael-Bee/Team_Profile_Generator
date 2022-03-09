class Employee {
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole(){
        return this.role
    }
    
    generateHTMLCard(extra){
        return `
        <div class="col-sm-3 mb-5">
            <div class="card shadow" style="width:315px;">
                <div class="card-header bg-primary p-3">
                    <h2 class="card-title text-white"><b>${this.name}</b></h2>
                    <h3 class="card-title text-white">${this.role}</h3>
                </div>
                <div class="card-body my-4 p-2 bg-light">
                    <p class="card-text mb-2 p-1 bg-white border"><b>Employee ID:</b> ${this.id}</p>
                    <p class="card-text mb-2 p-1 bg-white border"><b>Email:</b> <a href="mailto:${this.email}">${this.email}</a></p>
                    ${this.role === "Manager" ? 
                        `<p class="card-text p-1 bg-white border"><b>Office Number:</b> ${extra}</p>` : 
                    this.role === "Engineer" ? 
                        `<p class="card-text p-1 bg-white border"><b>GitHub:</b> <a href="https://github.com/${extra}">https://github.com/${extra}</a></p>` : 
                        `<p class="card-text p-1 bg-white border"><b>School:</b> ${extra}</p>`
                        }
                </div>
            </div>
        </div>
        `
    }
}

module.exports = Employee;