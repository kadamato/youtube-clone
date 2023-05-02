import {mongoose} from "mongoose"




const channelSchema  = mongoose.Schema({
    _userId: {
      require: true,
      type:String
    },
    name : {
        require: true,
        type: String
    },
    avatar : {
        require: true,
        type: String
    },
    url : {
        require: true,
        type: String
    }
})


const Channel = new mongoose.model('channels' , channelSchema);


export default  Channel;
