const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://PreetAnam:gofood123@cluster0.sw1kcp5.mongodb.net/gofoodmern?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
const mongo = async() => {
    await mongoose.connect(mongoURI , {useNewUrlParser: true}, async(err,result) => {
        if(err) console.log("---",err)
        else{
        console.log("Connected Successfully")
        const fdata =  mongoose.connection.db.collection("fooditems")
        fdata.find({}).toArray(
            function(err,result){
                if(err){console.log("---",err)}
                else{
                    console.log(fdata)

                }
            }
        )
        }
    });

}
module.exports =mongo;


