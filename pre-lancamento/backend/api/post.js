const knex = require('../config/knex')

module.exports = app => {

    const postCard = async(req, res) => {
        let cardData = {

            img :req.body.img,
            descri :req.body.descri,
            checkout :req.body.checkout

        }

        let card = await knex.insert(cardData)
                       .table('card')
                       .then(_=> res.status(201).json())
                       .catch(err => res.status(400).json(err))
    }
    return { postCard }
}