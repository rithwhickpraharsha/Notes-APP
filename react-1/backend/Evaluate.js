const zod = require('zod');

const Evaluate = zod.object({
    username:zod.string().min(1),
    email:zod.string().email(),
    password:zod.string().min(1)
});
const note = zod.object({
    title:zod.string().min(1),
    description:zod.string().min(1),
    user_gmail:zod.string().email()

})

module.exports = {Evaluate,note};