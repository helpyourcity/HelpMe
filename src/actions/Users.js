// EXPORTS
export const SIGNIN_USER = 'SIGNIN_USER';

// ACTIONS
export const signIn = (user) => {
  return {
    type: SIGNIN_USER,
    user: user
  };
};