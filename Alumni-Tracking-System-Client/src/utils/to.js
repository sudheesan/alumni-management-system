const to = async (exec, params) =>
  exec(params)
    .then((data) => [null, data])
    .catch((error) => [error, null]);

export default to;
