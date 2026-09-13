import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Profile } from './models';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {

  }

  async getProfile() {
    const profile = await this.prisma.profile.findFirstOrThrow({ include: { skills: { include: { skill: true } } } });
    profile.skills.map(skill => skill.skill.name)
    return {
      id: profile.id,
      name: profile.name,
      email: profile.email,
      description: profile.description,
      skills: profile.skills.map(skill => skill.skill.name),
    };
  }
}
