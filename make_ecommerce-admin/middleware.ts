import { authMiddleware } from "@clerk/nextjs";

// public route 사용 가능 
export default authMiddleware({
    publicRoutes: ["/api/:path*"],
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
