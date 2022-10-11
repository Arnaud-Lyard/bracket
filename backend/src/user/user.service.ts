import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SortDirection } from 'src/pagination/dto/pagination.dto';
import { Repository } from 'typeorm';
import { UserCreateInput, UserCreateOutput } from './dto/user-create';
import { UserDeleteOutput } from './dto/user-delete';
import { UserUpdateInput, UserUpdateOutput } from './dto/user-update';
import { UsersPagination, UsersPaginationArgs } from './dto/users-pagination';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async userCreate(input: UserCreateInput): Promise<UserCreateOutput> {
    const newUser = this.userRepository.create(input);
    const user = await this.userRepository.save(newUser);
    return { user };
  }

  async userUpdate(
    userId: User['id'],
    input: UserUpdateInput,
  ): Promise<UserUpdateOutput> {
    const user = await this.userRepository.findOneByOrFail({ id: userId });
    user.username = input.username;
    user.firstname = input.firstname;
    user.lastname = input.lastname;
    await user.save();
    return { user };
  }

  async userDelete(userId: User['id']): Promise<UserDeleteOutput> {
    const user = await this.userRepository.findOneByOrFail({ id: userId });
    await user.remove();
    return { userId };
  }

  async usersPagination(args: UsersPaginationArgs): Promise<UsersPagination> {
    const qb = this.userRepository.createQueryBuilder('user');
    qb.take(args.take);
    qb.skip(args.skip);
    if (args.sortBy) {
      if (args.sortBy.createdAt !== null) {
        qb.addOrderBy(
          'user.createdAt',
          args.sortBy.createdAt === SortDirection.ASC ? 'ASC' : 'DESC',
        );
      }
      if (args.sortBy.username !== null) {
        qb.addOrderBy(
          'user.title',
          args.sortBy.createdAt === SortDirection.ASC ? 'ASC' : 'DESC',
        );
      }
    }
    const [nodes, totalCount] = await qb.getManyAndCount();
    return { nodes, totalCount };
  }
}
