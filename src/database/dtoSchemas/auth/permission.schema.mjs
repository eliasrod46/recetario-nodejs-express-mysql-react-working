export const permissionSchema = {
  permission_name: {
    isLength: {
      options: {
        min: 3,
        max: 32,
      },
      errorMessage:
        "permission_name must be at least 3 characters with a max of 32 characters",
    },
    notEmpty: {
      errorMessage: "permission_name cannot be empty",
    },
    isString: {
      errorMessage: "permission_name must be a string!",
    },
  },
  is_default: {
    notEmpty: {
      errorMessage: "is_default cannot be empty",
    },
  },
};
