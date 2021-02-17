module.exports = {
    notFound: (req, res, next) => {
        const error = new Error("Not Found !");
        error.status = 404;
        next(error);
    },

    handleError: (err, req, res, next) => {
        const status = err.status || 500;
        res.status(status).json({
            message: err.message,
            stack: err.stack || "Not found"
        });
    }
}