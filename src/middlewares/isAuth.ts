async function isAuth({ set, cookie, jwt }: any) {
  try {
      // Check if cookie exists and if it's valid
      const auth = await jwt.verify(cookie.token.value);
      if(!auth) {
          set.status = 401
          return "Unauthorized";
      }
  } catch (error) {
      return {error}
  }
}

export default isAuth;