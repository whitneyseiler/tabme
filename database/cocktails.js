const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/cocktails');

var CocktailsSchema = mongoose.Schema({
    _id: Number,
    drink: String,
    video: String,
    category: String,
    alcoholic: String,
    glass: String,
    instructions: String,
    thumb: String,
    ingredient1: String,
    ingredient2: String,
    ingredient3: String,
    ingredient4: String,
    ingredient5: String,
    ingredient6: String,
    ingredient7: String,
    ingredient8: String,
    ingredient9: String,
    ingredient10: String,
    ingredient11: String,
    ingredient12: String,
    ingredient13: String,
    ingredient14: String,
    ingredient15: String,
    measure1: String,
    measure2: String,
    measure3: String,
    measure4: String,
    measure5: String,
    measure6: String,
    measure7: String,
    measure8: String,
    measure9: String,
    measure10: String,
    measure11: String,
    measure12: String,
    measure13: String,
    measure14: String,
    measure15: String,
});

const CocktailsModel = mongoose.model('Drinks', CocktailsSchema);

var removeAll = function(callback) {
  CocktailsModel.remove({}, callback);
};

var insertOne = function(data) {
  return CocktailsModel.create(data);
};

var findAll = function() {
  return CocktailsModel.find({});
};

var findOne = function(name) {
  // console.log('find one called on:', roomid);
  return CocktailsModel.findOne({'drink': name})
    .exec();
};

module.exports = {
  CocktailsSchema: CocktailsSchema,
  CocktailsModel: CocktailsModel,
  removeAll: removeAll,
  insertOne: insertOne,
  findAll: findAll,
  findOne: findOne,
};
