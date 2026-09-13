import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './models';
import { ProfileService } from './profile.service';

@Resolver()
export class ProfileResolver {
  
  constructor(private readonly profileService: ProfileService) {
    
  }
  
  @Query(() => Profile)
  
  async profile(): Promise<Profile> {
    return this.profileService.getProfile();
  }
}
