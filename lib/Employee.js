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
        <div class="col-sm-4">
            <div class="card shadow" style="width:20rem;">
                <div class="card-header bg-primary p-3">
                    <h4 class="card-title text-white">${this.name}</h5>
                    <h5 class="card-title text-white">${this.role}</h5>
                </div>
                <div class="card-body p-2 bg-light">
                    <p class="card-text m-1 p-1 bg-white border border-secondary">Employee ID: ${this.id}</p>
                    <p class="card-text m-1 p-1 bg-white border border-secondary">Email: <a href="mailto:${this.email}">${this.email}</a></p>
                    ${this.role === "Manager" ? 
                        `<p class="card-text m-1 p-1 bg-white border border-secondary">Office Number: ${extra}</p>` : 
                    this.role === "Engineer" ? 
                        `<p class="card-text m-1 p-1 bg-white border border-secondary">GitHub: <a href="https://github.com/${extra}">https://github.com/${extra}</a></p>` : 
                        `<p class="card-text m-1 p-1 bg-white border border-secondary">School: ${extra}</p>`
                        }
                </div>
            </div>
        </div>
        `
    }
}

module.exports = Employee;