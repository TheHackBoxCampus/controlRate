import rateLimit from "express-rate-limit"

const mdLimits = rateLimit({
    windowMs: 60 * 1000,
    max: 2,
    standardHeaders: true, 
    legacyHeaders: false
})

export {mdLimits};   