const jwt = require('jsonwebtoken')

const getUserID = (request) => {
    const header = request.req.headers.authorization
    if(!header){
        throw new Error("Authorization is required")
    }
    const token = header.replace('Bearer ', '')
    const decoded = jwt.verify(token, 'reddit-secret-code')
    return decoded.userID
}


module.exports = getUserID