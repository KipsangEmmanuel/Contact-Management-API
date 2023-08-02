const { constants } = require('../constants')
const erroHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:        
            res.json({
                title: "Validation error",
                message: err.message, 
                stackTrace: err.stack
            });
        break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not found", 
                message: err.message, 
                stackTrace: err.stack
            });
        break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorised", 
                message: err.message, 
                stackTrace: err.stack
            });
        break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden", 
                message: err.message, 
                stackTrace: err.stack
            });
        break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server error", 
                message: err.message, 
                stackTrace: err.stack
            });
        default:
            console.log('No Error, All good ')
            break;    
    }

}

module.exports = erroHandler;