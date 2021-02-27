const moongose = require('moongose')
const Shema = moongose.Shema

let verduraShema = Shema({
  name: String,
  img: String,
  price: Number
});

module.exports = moongose.model("verura", verduraShema)
