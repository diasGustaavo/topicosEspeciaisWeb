export const isAuthenticated = () => localStorage.getItem("TOKEN_KEY") !== null;
export const signOutUser = () => {
  localStorage.removeItem("TOKEN_KEY");
};
export const getToken = () => localStorage.getItem("TOKEN_KEY");
export const getAuthHeader = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
};
