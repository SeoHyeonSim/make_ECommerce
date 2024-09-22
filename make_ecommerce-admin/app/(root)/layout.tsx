import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { userId } = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const store = await prismadb.store.findFirst({
        where: {
            userId,
        },
    });

    // store가 있을 경우, storeId를 기반으로 해당 store로 전환 
    if (store) {
        redirect(`/${store.id}`);
    }

    return <>{children}</>;
}
