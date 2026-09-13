import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Profile } from './models';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {
    
  }
  
  async getProfile()  {
    const profile = await this.prisma.profile.findFirstOrThrow();
    return profile;
  } 
}
