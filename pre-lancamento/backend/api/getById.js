const knex = require('../config/knex')

module.exports = app => {

    const getByCardId = async(req, res) => {

        let card = await knex.where({ id :req.params.id })
                       .select('*')
                       .table('card')
                       .then(card => res.status(200).json(card))
                       .catch(err => res.status(400).json(err))
    }
    return { getByCardId }
}