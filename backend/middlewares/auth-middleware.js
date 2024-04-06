import JWT from "jsonwebtoken"
export const requireSignIn = (req, res, next) => {
    try {
        const token = req.headers['authorization']
        // const token = userID.split("Bearer ")[1];

        if(typeof token !== "undefined"){
           const decode = JWT.verify(token, process.env.JWT_SECRET);
           req.user = decode;
           next();
        }
        else{
            return res.status(401).send({
                success: false,
                message: "Token not found"
            })
        }
    } catch (error) {
        res.json({
            error,
            success: false,
            message: error.message
        })
    }
}