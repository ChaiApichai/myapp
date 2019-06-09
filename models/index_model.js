var mongoose = require('mongoose');

var indexSchema = mongoose.Schema({
    
});

// indexSchema.set('collection', 'listingsAndReviews');
var index = mongoose.model('shipwrecks', indexSchema);
module.exports = index;