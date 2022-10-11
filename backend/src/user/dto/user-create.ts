import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from '../models/user.model';

@InputType()
export class UserCreateInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  firstname: string;

  @Field(() => String)
  lastname: string;
}

@ObjectType()
export class UserCreateOutput {
  @Field(() => User)
  user: User;
}
