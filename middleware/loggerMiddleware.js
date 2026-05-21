const loggerMiddleware = (req, res, next) => {

    console.log("Request Method:", req.method);

    next();
};

module.exports = loggerMiddleware;