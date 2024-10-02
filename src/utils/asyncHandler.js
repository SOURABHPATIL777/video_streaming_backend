import { Promise } from "mongoose";

const asyncHandler = (requestHandler) => {

    (req,res,next)=>{
        Promise
        .resolve(requestHandler(res,req,next))
        .catch((err)=>next(err));
    }
}

// const asyncHandler = (fun) = (req,res,next) => {

//     try {

//         fun(req,res,next);

//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message,
//         })
//     }
// }


export {asyncHandler};