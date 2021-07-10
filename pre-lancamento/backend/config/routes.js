
module.exports = app => {
    app.post('/insert', app.api.post.postCard)
    app.get('/', app.api.get.getCard)
    app.get('/:id', app.api.getById.getByCardId)
    app.delete('/delete/:id', app.api.delete.deleteCard)
    app.put('/update/:id', app.api.put.updateCard)
}