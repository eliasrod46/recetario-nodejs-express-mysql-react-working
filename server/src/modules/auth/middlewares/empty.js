// import { teacherDao } from "../daos/shiftsDaos.js";

// export const checkUniqueDni = async (req, res, next) => {
//   const response = await teacherDao.getTeacherByDni(req.body.dni);

//   if (!response) {
//     next();
//   } else {
//     res.status(403).json({
//       errors: [
//         {
//           location: "body",
//           msg: "dni already exist",
//           path: "dni",
//         },
//       ],
//     });
//   }
// };
