import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Profile {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field({ nullable: true })
  github?: string;

  @Field({ nullable: true })
  linkedin?: string;
}
