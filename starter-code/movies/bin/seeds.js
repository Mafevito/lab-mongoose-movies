/*jshint esversion: 6 */

const Celebrity = require("../models/Celebrity");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies')
  .then(() => {
    let celebrities = [
      {
        name: 'Beyonce',
        occupation: 'Cantante',
        catchPhrase: 'Uh lala'
      },

      {
        name: 'Johnny Depp',
        occupation: 'Actor',
        catchPhrase: 'Piratas del caribe'
      },

      {
        name: 'Will Smith',
        occupation: 'Actor',
        catchPhrase: 'Hello'
      }
    ];

    let celebrityObj = celebrities.map(c => new Celebrity(c));

    celebrityObj.forEach(c => c.save( (err, obj) =>{
      if (err) {
        console.log(err);
      }else{
        console.log(`New celebrity created [${obj.name}] with ID:${obj._id}`);
      }
    }));
    // mongoose.connection.close();
  });
