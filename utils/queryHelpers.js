module.exports = {
  doPagination: (reqQuery) => {
    const { page, size } = reqQuery;
    if (page) {
      const limit = size ? +size : 20;
      const offset = page - 1 ? (page - 1) * limit : 0;

      return { limit, offset };
    }
  },

  /** If the user isn't logged in, redirect them to the login route */
  withAuth: (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect("/login");
    } else {
      next();
    }
  },
};
