import mongoose from 'mongoose';
import Cource from './Cource.js'

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    course : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Cource',
        required : true
    }


})

const Student = mongoose.model('Student', studentSchema);

export default Student;