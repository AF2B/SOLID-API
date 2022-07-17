import { User } from "../entities/User";
import { IMailProvider } from "../providers/IMailProvider";
import { IUserRepository } from "../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

class CreateUser {
    constructor(private userRepository: IUserRepository, private mailProvider: IMailProvider) {

    }

    async execute(data: ICreateUserRequestDTO) {
        const userEmailAlreadyExists = await this.userRepository.findByEmail(data.email);

        if(userEmailAlreadyExists) {
            throw new Error('Usuário já existente!');
        }

        const user = new User(data);

        await this.userRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Typescript é demais!',
                email: 'typescript@showdebola.com'
            },
            subject: 'Seja bem vindo ao Typescript World!',
            body: 'Você já esta autenticado para efetuar o seu login em nossa plataforma!'
        });
    }
}

export { CreateUser };