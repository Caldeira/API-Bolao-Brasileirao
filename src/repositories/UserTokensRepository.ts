import { EntityRepository, Repository } from "typeorm";
import { IUserTokensRepository } from "../@types/repositories/IUserTokensRepository";
import UserToken from "../models/User_TokenEntity";

@EntityRepository(UserToken)
class UserTokensRepository
  extends Repository<UserToken>
  implements IUserTokensRepository
{
  public async findByToken(token: string): Promise<UserToken> {
    const userToken = await this.findOne({
      where: {
        token,
      },
    });

    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = this.create({
      user_id,
    });

    await this.save(userToken);

    return userToken;
  }
}

export default UserTokensRepository;
