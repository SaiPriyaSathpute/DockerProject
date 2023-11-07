import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/adminmoduleDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a Mongoose model for your data
const Schema = mongoose.Schema;
const ContactSchema = new Schema({
    _id:Number,
    name:String,
    email:String,
    message:String
});

export default mongoose.models.tblContactUs || mongoose.model('tblContactUs', ContactSchema);