import mongoose from 'mongoose';
import Admin from './Admin.js'

 const courseSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    
 })

 const Cource = mongoose.model('Cource', courseSchema);

 export default Cource;