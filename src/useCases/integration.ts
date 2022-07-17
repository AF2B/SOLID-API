import { MailtrapProvider } from "../providers/implements/MailtrapProvider";
import { PostgressUserRepository } from "../repositories/implements/PostgressUserRepository";
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

const mailtrapProvider = new MailtrapProvider();
const postgressUserRepository = new PostgressUserRepository();
const createUser = new CreateUser(postgressUserRepository, mailtrapProvider);
const createUserController = new CreateUserController(createUser);

export { createUserController };