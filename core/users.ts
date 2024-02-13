import { currentUser, clerkClient } from "@clerk/nextjs";
import { users } from "@/db/schema/users"
import { db } from "@/db";
import { eq } from "drizzle-orm";

/**
 * tries to get user from clerk
 * if null throws error of "clerk user not found"
 * else check if user is in the db if exists returns the user 
 * else it add it to the db and returns it
 */
export async function getOrAddUser() {
    const clerkUser = await currentUser();


    if (!clerkUser) throw new Error("clerk user not found");

    const fullClerkUser = await clerkClient.users.getUser(clerkUser.id)
    
    console.log(JSON.stringify(fullClerkUser,null,2))

    const user = await db.select().from(users).where(eq(users.userId, clerkUser.id));

    if (user.length == 1) {
        return user[0]
    }

    await db.insert(users).values({
        userId: clerkUser.id,
        name: fullClerkUser.username ?? `${fullClerkUser.firstName} ${fullClerkUser.lastName}`,
        imageUrl: fullClerkUser.imageUrl
    })

    return (await db.select().from(users).where(eq(users.userId, clerkUser.id)))[0];
}