import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";

class CreateUserController {
    constructor(private createUser: CreateUser) {

    }

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        try {
            await this.createUser.execute({
                name,
                email,
                password
            });
            return res.status(201).send();
        } catch (error) {
            return res.status(400).json({msg: 'Ocorreu um erro!'});
        }
    }
}

export { CreateUserController };