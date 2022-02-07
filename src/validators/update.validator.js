import Joi from "joi";

export const updateValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇт]{2,20}$')).required().messages({
        'string.empty': '"Model" cannot be empty',
        'string.pattern.base': 'May content only letters (from 2 to 20 characters)'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required(),
    price: Joi.number().min(1).max(1000000).required(),
    id: Joi.number().min(1).required()
})