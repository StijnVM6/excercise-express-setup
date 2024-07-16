import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    console.log("Start authMiddleware");
    const token = req.headers.authorization;
    const secretKey = process.env.AUTH_SECRET_KEY || 'my-secret-key';

    if (!token) {
        return res.status(401).json({ message: "You cannot access this operation without a token!" });
    }

    jwt.verify(token, secretKey, (error, decoded) => {
        if (error) {
            return res.status(403).json({ message: 'Invalid token provided!' });
        }
        req.user = decoded;
        next();
    });
};

export default authMiddleware;