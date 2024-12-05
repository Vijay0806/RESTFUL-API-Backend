// import  rateLimit  from 'express-rate-limit';

// exports.apiLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Limit each IP to 100 requests per window
//   message: 'Too many requests from this IP, please try again later.',
// });
// rateLimiter.js

import rateLimit from 'express-rate-limit';

// Create a rate limiter that allows only 100 requests per 15 minutes
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false,  // Disable the `X-RateLimit-*` headers
});

export default apiLimiter;
