export namespace UserManagement{
    export namespace Admin{
        export class AdminUser{
            constructor(public name:string, public email:string, private access:'user' | 'admin' | 'superAdmin'){}
            changeAccess(prop:'user' | 'admin' | 'superAdmin'):void{
                this.access = prop
            }
            getAccess(): "user" | "admin" | "superAdmin" {
                return this.access;
            }
        }
    }
}