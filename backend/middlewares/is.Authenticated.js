import jwt from "jsonwebtoken";

const isAuthenticated = async (res, req, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return req.status(401).json({
                message: "User not authentiated",
                success: false,

            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if (!decode) {
            return req.status(401).jason({
                message: "Invalid token",
                success: false
            })
        };
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);

    }
}
export default isAuthenticated;