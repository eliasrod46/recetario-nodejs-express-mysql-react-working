export const userSchema = {
  name: {
    isLength: {
      options: {
        min: 3,
        max: 32,
      },
      errorMessage:
        "name must be at least 3 characters with a max of 32 characters",
    },
    notEmpty: {
      errorMessage: "name cannot be empty",
    },
    isString: {
      errorMessage: "name must be a string!",
    },
  },
  email: {
    isLength: {
      options: {
        min: 12,
        max: 64,
      },
      errorMessage:
        "email must be at least 12 characters with a max of 64 characters",
    },
    notEmpty: {
      errorMessage: "email cannot be empty",
    },
  },
  password: {
    isLength: {
      options: {
        min: 8,
        max: 32,
      },
      errorMessage:
        "password must be at least 8 characters with a max of 32 characters",
    },
    notEmpty: {
      errorMessage: "password cannot be empty",
    },
    isString: {
      errorMessage: "password must be a alphanumeric!",
    },
  },
};
