const surfspots = require('../controllers/surfspots');

module.exports = (app) => {
    app.get('/surfspots', surfspots.findAll);
    app.post('/surfspots/create', surfspots.create);
    app.get('/surfspot/:id', surfspots.findOne);
    app.put('/surfspot/:id', surfspots.update);
    app.delete('/surfspot/:id', surfspots.delete);
}
