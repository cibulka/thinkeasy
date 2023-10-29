import { Auth } from '@/orval/api';

/* 
User is sent with Auth (response of Login endpoint), however it is not present on neither Swagger, nor Orval. It is not sent with Signup endpoint, so it needs to be manually recreated from the provided data.

Also it sends hashed password with it! 😱 
*/
export type User = {
  createdAt: string;
  email: string;
  firstname: string;
  id: string;
  lastname: string;
  password: string;
  updatedAt: string;
};

export type UserAfterSignup = Omit<User, 'id' | 'password'>;

export type AuthWithUser = Auth & { user: User };
