import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/apiError.js';
import {ApiResponse} from '../utils/apiResponse.js';
import { User } from '../models/user.model.js';
import {uploadOnCloudinary} from '../utils/cloudinary.js';

const registerUser = asyncHandler(async (req,res) => {
    const {fullName, email, userName, password } = req.body;

    if(!userName || !email || !fullName || !password){
        throw new ApiError(200, 'Please fill all mandatory fields');
    }

    const existingUser = User.findOne({
        $or : [{ userName }, { email }]
    });

    if(existingUser){
        throw new ApiError(409, 'User with email or username already exists');
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    if(!avatar){
        throw new ApiError(400, "Reupload Avatar File");
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: '',
        email,
        password,
        userName: userName.toLowerCase()
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user");
    }

    res.status(201).json(
        new ApiResponse(201, createdUser, "User registered Successfully")
    )
});

export { registerUser };