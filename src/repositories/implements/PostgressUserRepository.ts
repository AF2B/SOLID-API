import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class PostgressUserRepository implements IUserRepository {
    private users: User[] = [];

    findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email);

        return user;//FIXME
    }
    save(user: User): Promise<void> {
        this.users.push(user);

        return user;//FIXME
    }
 }

 export { PostgressUserRepository };