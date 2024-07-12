import { Type } from "../models/TypeModel.js";

const types = [
  { name: "Fibras" },
  { name: "Grasas" },
  { name: "Carbohidratos" },
  { name: "Proteico" },
  { name: "Condimento" },
];

export async function typesSeed() {
  types.forEach(async function (type) {
    await Type.create({
      name: type.name,
    });
  });
}
