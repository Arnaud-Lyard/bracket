import { Field, ObjectType } from '@nestjs/graphql';
import { Node } from 'src/pagination/models/node.model';
import { User } from 'src/user/models/user.model';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Article extends Node {
  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.articles)
  user: User;
}
