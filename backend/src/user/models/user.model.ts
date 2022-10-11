import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Article } from 'src/article/models/article.model';
import { Column, Entity, OneToMany } from 'typeorm';
import { Node } from 'src/pagination/models/node.model';

@Entity()
@ObjectType()
export class User extends Node {
  @Field(() => String)
  @Column()
  username: string;

  @Field(() => String)
  @Column()
  firstname: string;

  @Field(() => String)
  @Column()
  lastname: string;

  @OneToMany(() => Article, (article) => article.user)
  articles: Article[];
}
