import { uuid } from "uuidv4";

class User {
    public readonly id!: string;
    public name!: string;
    public email!: string;
    public password!: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props); //Pega cada uma das propriedades de dentro do props e passa para o this.

        if(!id) {
            this.id = uuid();
        }
    }
}

export { User };