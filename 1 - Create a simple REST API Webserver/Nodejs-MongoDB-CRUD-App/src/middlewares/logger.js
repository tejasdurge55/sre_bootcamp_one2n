const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log' }),
    ],
});

exports.logger = (req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
};
