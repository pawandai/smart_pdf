import { authMiddleware } from '@kinde-oss/kinde-auth-nextjs/server';

export const config = {
  // Protected routes goes here
  matcher: ['/dashboard/:path', '/auth-callback'],
};

export default authMiddleware;
