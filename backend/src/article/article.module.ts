import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './models/article.model';
import { ArticleMutationsResolver } from './resolvers/article.mutations.resolvers';
import { ArticleQueriesResolver } from './resolvers/article.queries.resolver';
import { ArticleService } from './article.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleService, ArticleMutationsResolver, ArticleQueriesResolver],
})
export class ArticleModule {}
