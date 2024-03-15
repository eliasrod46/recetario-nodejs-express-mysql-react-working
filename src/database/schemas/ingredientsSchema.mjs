export const ingredientSchema = {
  name: {
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage:
        "name must be at least 5 characters with a max of 32 characters",
    },
    notEmpty: {
      errorMessage: "name cannot be empty",
    },
    isString: {
      errorMessage: "name must be a string!",
    },
  },
  type: {
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage:
        "type must be at least 5 characters with a max of 32 characters",
    },
    notEmpty: {
      errorMessage: "type cannot be empty",
    },
    isString: {
      errorMessage: "type must be a string!",
    },
  },
};
