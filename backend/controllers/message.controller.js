export const sendMessage = async(req,res)=>{
    try{
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id

    }catch(error){
        console.log("Error in the message",error);
        res.status(500).json({error:"Internal server error"});
    }
}