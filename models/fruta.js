const moongose = require('moongose')
const Shema = moongose.Shema

let frutaShema = Shema({
  name: String,
  img: String,
  price: Number
});

module.exports = moongose.model("fruta", frutaShema)
