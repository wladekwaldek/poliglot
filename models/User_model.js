const {Schema, model} = require('mongoose')

const schema = new Schema({
    login: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    words: {type: []}
})

module.exports = model('User', schema)