import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { User } from '../models/user.model';

@ObjectType()
export class UserDeleteOutput {
  @Field(() => ID)
  userId: User['id'];
}
