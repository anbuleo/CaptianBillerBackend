import mongoose from '../common/db.connect.js';

const BillSchema = new mongoose.Schema({ 
    customerName : {
        type : String,
        default:'customer'
    },
    customerId :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        default:'customer'
    },
    customerMobile : {
        type : String,
        default : null
    },
    totalAmount : {
        type : Number,
        required : true
    },
    paidAmount : {
        type : Number,
        default : null
    },
    dueAmount : {
        type : Number,
        default : null
    },
    createBy : {
        type : String,
        required : true
    },
    billDate : {
        type : Date,
        required : true
    },
    products : {
        type : Array,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    billNumber : {
        type : String,
        required : true,
        unique : true
    },
    paymentType : {
        type : String,
        required : true
    },
    paymentDate : {
        type : Date,
        required : true
    },
    paymentStatus : {
        type : String,
        required : true
    },
    paymentAmount : {
        type : Number,
        required : true
    },
   
    paymentNote : {
        type : String,
        default : null
    }
})
const Bill = mongoose.model('bill',BillSchema)   

export default Bill
 
