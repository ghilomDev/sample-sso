import { auth0 } from "./helper";

// import type { NextRequest } from 'next/server';
const handler = auth0.handleAuth();

// For Back-Channel Logout you need to export a GET and a POST handler.
export { handler as GET, handler as POST };


// import { NextRequest, NextResponse } from 'next/server';
// import auth0 from './helper';

// const handler = auth0.handleAuth();
// export { handler as GET, handler as POST };
// export async function POST(req :NextRequest) {
//   try {
//     const body = await req.json();

//     // Verify the back-channel logout request from Auth0
//     const { user_id } = body;
//     if (!user_id) {
//       return NextResponse.json({ message: 'Missing user_id in request' }, { status: 400 });
//     }

//     // Perform actions like logging out the user from the session
//     const session = await auth0.getSession(req, new NextResponse());
//     if (session) {
//       const context = { params: {} }; // create a context object with params
//       await auth0.handleLogout(req, context);
//     } else {
//       return NextResponse.json({ message: 'No active session found' }, { status: 404 });
//     }

//     return NextResponse.json({ message: 'Logout successful' });
//   } catch (error) {
//     console.error('Error during back-channel logout:', error);
//     return NextResponse.json({ message: 'An error occurred', error: "fail to logout" }, { status: 500 });
//   }
// }