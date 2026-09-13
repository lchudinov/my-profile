import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Profile {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;

  @Field(of => String, {nullable: true})
  description?: string | null;

  @Field({ nullable: true })
  github?: string;

  @Field({ nullable: true })
  linkedin?: string;
}
