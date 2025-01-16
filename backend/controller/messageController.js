import { Message } from "../models/messageSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

export const sendMessage = catchAsyncErrors(async(req,res,next)=>{
    const {firstName , lastName , email, phone,message} = req.body;
    if (!firstName || !lastName || !email || !phone || !message){
        return res.status(400).json({
         success : false,
         message : "Please fill the full form",
        });
    }
        await Message.create({firstName , lastName , email, phone,message});
        res.status(200).json({
            success: true,
            message : "Message sent successfully",
        });
    });