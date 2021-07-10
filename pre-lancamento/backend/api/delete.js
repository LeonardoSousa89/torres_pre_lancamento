const knex = require('../config/knex')

module.exports = app => {

    const deleteCard = async(req, res) => {

        let card = await knex.where({ id :req.params.id })
                       .delete()
                       .table('card')
                       .then(_=> res.status(204).json())
                       .catch(err => res.status(400).json(err))
    }
    return { deleteCard }
}