const mongoose =require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/backend_assignment`);

const userModel = mongoose.Schema({
  name: String,
  img:String,
  summary:String
})


module.exports = mongoose.model('user',userModel);

