const request = require('request');
const rp = require('request-promise')
const fs = require('fs');
const db = require('./mongo.js');

let urls = [
    {category:'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'},
    {glass:'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'},
    {ingredient:'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'},
    {alcohol:'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list'}
]

let isJSONResponse = (headers) => {
    return headers['content-type'].includes('json');
}
  
let getJSONFromAPI = () => {
    let drinks = [];
    rp.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=', (err, response, body) => {
        if (err) {
            callback(err, null);
        } else if (!isJSONResponse(response.headers)) {
            callback(new Error('Response did not contain JSON data.'), null);
        } else {
            body = JSON.parse(body)
            let data = body.drinks;
            for (var i = 0; i < data.length; i++) {
                let drink = {
                    '_id' : data[i].idDrink,
                    'drink': data[i].strDrink,
                    'video': data[i].strVideo,
                    'category': data[i].strCategory,
                    'alcoholic': data[i].strAlcoholic,
                    'glass': data[i].strGlass,
                    'instructions': data[i].strInstructions,
                    'thumb': data[i].strDrinkThumb,
                    'ingredients': data[i].strIngredient1,
                    'ingredient2': data[i].strIngredient2,
                    'ingredient3': data[i].strIngredient3,
                    'ingredient4': data[i].strIngredient4,
                    'ingredient5': data[i].strIngredient5,
                    'ingredient6': data[i].strIngredient6,
                    'ingredient7': data[i].strIngredient7,
                    'ingredient8': data[i].strIngredient8,
                    'ingredient9': data[i].strIngredient9,
                    'ingredient10': data[i].strIngredient10,
                    'ingredient11': data[i].strIngredient11,
                    'ingredient12': data[i].strIngredient12,
                    'ingredient13': data[i].strIngredient13,
                    'ingredient14': data[i].strIngredient14,
                    'ingredient15': data[i].strIngredient15,
                    'measure1': data[i].strMeasure1,
                    'measure2': data[i].strMeasure2,
                    'measure3': data[i].strMeasure3,
                    'measure4': data[i].strMeasure4,
                    'measure5': data[i].strMeasure5,
                    'measure6': data[i].strMeasure6,
                    'measure7': data[i].strMeasure7,
                    'measure8': data[i].strMeasure8,
                    'measure9': data[i].strMeasure9,
                    'measure10': data[i].strMeasure10,
                    'measure11': data[i].strMeasure11,
                    'measure12': data[i].strMeasure12,
                    'measure13': data[i].strMeasure13,
                    'measure14': data[i].strMeasure14,
                    'measure15': data[i].strMeasure15,
                }
                drinks.push(drink);
                db.insertOne(drinks);
            }
        };
    });
}

// let writeFile = (type, data) => {
//     let filename = type + '_file'
//     let path = `../${type}.json`
//     filename = fs.createWriteStream(path);

//     let write = () => {
//         let isReady = true;
//         while (isReady) {
//             isReady = filename.write(data);
//         }
//         filename.once('drain', () => {
//             write();
//         });
//     };
//     write();
// }

getJSONFromAPI();