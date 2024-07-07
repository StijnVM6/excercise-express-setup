import express from "express";
import usersData from "../data/users.json" assert { type: "json" };
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", (req, res) => {
    const secretKey = process.env.AUTH_SECRET_KEY || 'my-secret-key';
    const { username, password } = req.body;
    const { users } = usersData;
    const user = users.find((user) =>
        user.username === username &&
        user.password === password
    );

    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user.id }, secretKey);
    res.status(200).json({ message: "Login succesful!", token });
});

export default router;