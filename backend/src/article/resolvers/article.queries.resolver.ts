import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  ArticlesPaginationArgs,
  ArticlesPagination,
} from '../dto/articles-pagination.dto';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';

@Resolver(Article)
export class ArticleQueriesResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Query(() => ArticlesPagination)
  async articlesPagination(@Args() args: ArticlesPaginationArgs) {
    return this.articleService.articlesPagination(args);
  }
}
