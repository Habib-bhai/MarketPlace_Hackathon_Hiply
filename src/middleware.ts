import { type NextRequest, NextResponse } from "next/server";


export const middleware = (req: NextRequest) => {
    const token = req.cookies.get("token")?.value

    const path = req.nextUrl.pathname

    if (token) {
        if (path == "/login" || path == "/signup") return NextResponse.redirect(new URL("/", req.url),)


    }


    // Create regex patterns
    const checkoutRegex = /^\/checkout(\/.*)?$/;
    const profileRegex = /^\/profile(\/.*)?$/;

    if (!token) {
        if (checkoutRegex.test(path)) {
            return NextResponse.redirect(new URL("/login", req.url));
        }


    }

    if (!token) {
        if (profileRegex.test(path)) {
            return NextResponse.redirect(new URL("/login", req.url));
        }


    }

    return NextResponse.next()

}


export const config = {
    matcher: ["/login", "/signup", "/checkout/:path*", "/profile/:path*"]
}