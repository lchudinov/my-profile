import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ProfileResolver {
  
  @Query(() => String)
  profile(): string {
    return 'my profile';
  }
}
