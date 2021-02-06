const {Schema, model} = require('mongoose')

    const schema = new Schema({
        len: {type: String, required: true},
        kind: {type: String, required: true},
        org: {type: String, unique: true, required: true},
        rus: {type: String, required: true}
    })

module.exports = model('Word', schema)