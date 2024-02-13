import { getOrAddUser } from "@/core/users";
import { UserButton } from "@clerk/nextjs";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const user = await getOrAddUser();

  if (user.active) {
    return (
      <>   <UserButton />{children}</>
    );
  } else {
    return <>אתה לא מנהל 🤷‍♀️</>
  }

}