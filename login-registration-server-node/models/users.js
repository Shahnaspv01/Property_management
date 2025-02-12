const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['ADMIN', 'CUSTOMER'], default: 'CUSTOMER' }
});

module.exports = mongoose.model('User', userSchema);