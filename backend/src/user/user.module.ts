import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.model';
import { UserMutationResolver } from './resolvers/user.mutations.resolvers';
import { UserQueriesResolver } from './resolvers/user.queries.resolver';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserQueriesResolver, UserMutationResolver],
})
export class UserModule {}
