import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { UserCreateInput, UserCreateOutput } from '../dto/user-create';
import { UserDeleteOutput } from '../dto/user-delete';
import { UserUpdateOutput, UserUpdateInput } from '../dto/user-update';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Resolver(User)
export class UserMutationResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserCreateOutput)
  async userCreate(@Args('input') input: UserCreateInput) {
    return this.userService.userCreate(input);
  }

  @Mutation(() => UserUpdateOutput)
  async userUpdate(
    @Args({ name: 'todoId', type: () => ID }) userId: User['id'],
    @Args('input') input: UserUpdateInput,
  ) {
    return this.userService.userUpdate(userId, input);
  }

  @Mutation(() => UserDeleteOutput)
  async userDelete(
    @Args({ name: 'userId', type: () => ID }) userId: User['id'],
  ) {
    return this.userService.userDelete(userId);
  }
}
