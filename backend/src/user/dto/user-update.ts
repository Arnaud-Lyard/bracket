import { InputType, ObjectType } from '@nestjs/graphql';
import { UserCreateInput, UserCreateOutput } from './user-create';

@InputType()
export class UserUpdateInput extends UserCreateInput {}

@ObjectType()
export class UserUpdateOutput extends UserCreateOutput {}
