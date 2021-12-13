import { UserTokenDto } from "../dto/UserTokenDto";

export interface IUserTokensRepository {
  findByToken(token: string): Promise<UserTokenDto>;
  generate(user_id: string): Promise<UserTokenDto>;
}
