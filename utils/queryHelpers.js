module.exports = {
  doPagination: (reqQuery) => {
    const { page, size } = reqQuery;
    if (page) {
      const limit = size ? +size : 20;
      const offset = page - 1 ? (page - 1) * limit : 0;

      return { limit, offset };
    }
  },
};
