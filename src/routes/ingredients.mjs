import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  if (req.signedCookies.hello && req.signedCookies.hello === "world")
    return res.send([{ id: 123, name: "chicken breast", price: 12.99 }]);

  console.log("sera");
  return res.send("sera");

  return response
    .status(403)
    .send({ msg: "Sorry. You need the correct cookie" });
});

export default router;
