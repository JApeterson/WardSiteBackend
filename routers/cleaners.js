const express = require('express')
const router = express.Router()
const Cleaner = require('../models/cleaner')

router.get('/', async (req, res) => {
    try {
        const cleaners = await Cleaner.find()
        res.json(cleaners)
    }
    catch (err) {
        res.send('Error ' + err)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const cleaner = await Cleaner.findById(req.params.id)
        res.json(cleaner)
    }
    catch (err) {
        res.send('Error ' + err)
    }
})
router.post('/', async (req, res) => {
    const cleaner = new Cleaner({
        name: req.body.name,
        notificationType: req.body.notificationType,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    })
    try {
        const saveCleaner = await cleaner.save()
        res.json(saveCleaner)
    }
    catch (err) {
        res.send('Error ' + err)
    }
})
module.exports = router