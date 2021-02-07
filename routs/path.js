const {Router} = require('express')
const Word = require('../models/Words_model')
const User = require('../models/User_model')
const bcrypt = require('bcryptjs')
const {check, validationResult} =require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const mongoose = require('mongoose')

const router = Router()

router.get('/words/:uri/:kind',  async (req, res) => {
    try {
        let numPage = Number(req.query.page)
        let limit = Number(req.query.limit)
        let startIndex = (numPage - 1) * limit
        let endIndex = numPage * limit

        let words = await Word.find().where("len").equals(req.params.uri)
            .where("kind").equals(req.params.kind)
            .sort({'org': 1 })
            .exec()

        let result = {}

        result.resul = words.slice(startIndex, endIndex)
        result.count = words.length

        res.json(result)

    } catch (e) {
        res.status(500).json(e.message)
    }
})

router.get('/get-words/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const result = {}
        const user = await User.findOne().where('_id').equals(userId)
        if (!user) {
            return res.status(400).json({message: 'Problems. One more, please'})
        }
        result.words = user.words
        res.status(200).json(result)
    } catch (e) {
        res.status(500).json(e.message)
    }
})

router.post('/register',
    [
        check('email').isEmail()
    ],
    async (req, res) => {
    try {
        const {login, email, password} = req.body

        if(req.body.login.length < 2) {
            return res.status(400).json({message: 'Введите имя.'})
        }

        const err = validationResult(req)
        if(!err.isEmpty()) {
            return res.status(400).json({message: 'Некорректный email.'})
        }

        const candidate = await User.findOne({email})
        if(candidate) {
            return res.status(400).json({message: 'Такой email уже существует.'})
        }

        if(req.body.password.length < 6) {
            return res.status(400).json({message: 'Пароль должен быть не менее 6 символов.'})
        }

        const hashedPassword = await bcrypt.hash(password,12)
        const user = new User({login, email, password: hashedPassword, words: []})
        await user.save()
        res.status(201).json({message: 'Hello, my friend!'})
    } catch (e) {
        res.status(500).json(e.message)
    }



})

router.post('/login',
    [
        check('email').isEmail()
    ],
    async (req, res) => {
        try {
            const {email, password} = req.body

            const err = validationResult(req)
            if(!err.isEmpty()){
                return res.status(400).json({message: 'Внимательнее'})
            }

            const user = await User.findOne({email})
            if(user) {
                const isMatch = await bcrypt.compare(password, user.password)
                if(!isMatch){
                    return res.status(400).json({message: 'Неверные данные.'})
                }
            }

            const token = jwt.sign(
                {userId: user.id, userName: user.login},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
                )

            res.json({token, userId: user.id, userName: user.login})
        } catch (e) {
            res.status(500).json(e.message)
        }
    })

router.post('/add-word', async (req, res) => {
    const {len, kind, org, rus} = req.body

    if (kind === 'regverbs' || kind === 'irrverbs' || kind === 'nouns' || kind === 'expressions' || kind === 'adverbs' || kind === 'adjectives') {
        const shot = await Word.findOne({org})
        if(shot) {
            return res.status(400).json({message: 'Такое слово уже существует.'})
        }
        
        const newWord = new Word({len, kind, org, rus})
        await newWord.save()
        res.status(201).json({message: 'Ok!'})
    } else {res.status(400).json({message: 'Ops!'})}

})

router.post('/add-words', async (req, res) => {
    try {
        const {len, org, rus, id} = req.body
        const user = await User.findOne({_id: id})
        if (!user) {
            return res.status(400).json({message: 'Ops! Попробуйте ещё раз.'})
        }
        await user.updateOne({words: [...user.words, {len, org, rus}]})
        res.status(201).json({message: 'Слово добавлено!'})
    } catch (e) {
        res.status(400).json(e.message)
    }

})

module.exports = router