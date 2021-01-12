const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const studentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    
  },
  gender:{
      type: Boolean,
      
  },
  university: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Student', studentSchema);