export const validateId = (request, response, next) => {
  const {
    params: { id },
  } = request;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return response.sendStatus(400);
  request.parsedId = parsedId;
  next();
};

export const authMiddleware = (request, response, next) => {
  return request.user ? next() : response.sendStatus(403);
};
