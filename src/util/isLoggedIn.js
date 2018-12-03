const isLoggedIn = () => {
  if (localStorage.getItem('token') !== null) {
    return true;
  }
  return false;
};

export default isLoggedIn;
