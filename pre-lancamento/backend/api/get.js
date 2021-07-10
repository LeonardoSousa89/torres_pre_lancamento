const knex = require('../config/knex')

module.exports = app => {

    const getCard = async(req, res) => {

        let card = await knex.select('*')
                       .table('card')
                       .then(card => res.status(200).json(card))
                       .catch(err => res.status(400).json(err))
    }
    return { getCard }
}