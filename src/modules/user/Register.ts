import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "Hello World!!!!!";
  }
  @Mutation(() => String)
  async register(
    @Arg('firstName')
  ) {
    return "Hello World!!!!!";
  }
}
