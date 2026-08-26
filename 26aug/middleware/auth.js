const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
    console.log("Cookies:", req.cookies);
    const token = req.cookies?.session_id;
    if (!token) {
        return res.send("No token found. Please login first.");
    }
    try {
        const decoded = jwt.verify(
            token,
            "ali22132"
        );
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (error) {
        return res.send("Invalid or expired token");
    }
};
module.exports = auth;