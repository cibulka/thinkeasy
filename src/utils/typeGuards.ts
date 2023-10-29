import { User, UserAfterSignup } from '@/types/api';

export function isUserWithId(user: null | User | UserAfterSignup): user is User {
  return Boolean(user && (user as User).id);
}
