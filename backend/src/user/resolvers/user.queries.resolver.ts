import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersPagination, UsersPaginationArgs } from '../dto/users-pagination';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Resolver(User)
export class UserQueriesResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UsersPagination)
  async usersPagination(@Args() args: UsersPaginationArgs) {
    return this.userService.usersPagination(args);
  }
}
