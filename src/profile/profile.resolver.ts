import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './models';

@Resolver()
export class ProfileResolver {
  
  @Query(() => Profile)
  profile(): Profile {
    const profile = new Profile();
    profile.id = 1;
    profile.name = 'Leonty';
    profile.description = 'Software Developer';
    return profile;
  }
}
