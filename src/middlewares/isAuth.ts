async function isAuth({ set, bearer, jwt }: any) {
  try {
    const auth = await jwt.verify(bearer);
    if (!auth) {
      set.status = 401;
      return "Unauthorized";
    }
  } catch (error) {
    return { error };
  }
}

export default isAuth;
