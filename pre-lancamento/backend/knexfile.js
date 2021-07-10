
module.exports = {

    client: 'postgresql',
    connection: {
      database: 'torre_pre_lanc',
      user:     'postgres',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    }

};
