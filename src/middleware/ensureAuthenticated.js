const jsonwebtoken = require("jsonwebtoken");

const { Verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../config/auth")

function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;

    if (!authConfig) throw new AppError("JWT token não informado", 401)

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret);

        request.user = {
            id: Number(user_id)
        }

        return next();
    } catch (e) {
        throw new AppError("JWT token inválido", 401)
    }
}

module.exports = ensureAuthenticated