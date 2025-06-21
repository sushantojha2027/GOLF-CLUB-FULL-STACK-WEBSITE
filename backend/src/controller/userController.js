import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import uploadOnCloudinary from '../config/cloudinary.js';
import bcrypt from "bcrypt"
// register controller
export const registerUser = async (req, res) => {
  try {
    let photourl= null
    const {
      name, fatherName, addressLocal, addressPermanent,
      officePhone, residencePhone, mobile, email, dob,
      profession, position, education, specialQualification,
      spouseName, children, bankers, golfExperience,
      hasGolfSet, arrangementDetails, consent, aadhar, pan,
      proposerName, proposerSignature, seconderName, seconderSignature,
      membershipNo, authorizedSignature, authorizedDate,password
    } = req.body;
      console.log(email)
      console.log(aadhar)
      console.log(name)
      console.log(pan)
      

      // validate the user data
      if(
        [name,mobile,email,aadhar,pan].some((field)=>
        field.trim()=== "") 
      )
      {
        throw res.status(400).json({message: "THESE FIELDS ARE REQUIRED"})
      }
    const existingUser = await User.findOne({ 
      $or: [{aadhar}, {email}]
  });
    if (existingUser) {
      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '10d' });
      return res.status(200).json({ message: 'User already registered', token });
    }
    if(req.file){
    const imageLocalpath= req.file?.path;
    if(imageLocalpath=== ""){
      throw res.status(400).json({message: "image local path is not found"})
    }
        const photo = await uploadOnCloudinary(imageLocalpath);
        if(!photo){
          throw res.status(400).json({message: "photo not found"})
          
        }
        photourl= photo.secure_url
      }
      // hash the password
      const salt = await bcrypt.genSalt(10)
      const hashpassword= await bcrypt.hash(password,salt)

   
        const parsedHasGolfSet = hasGolfSet === 'true' || hasGolfSet === true;
        const parsedConsent = consent === 'true' || consent === true;

    const user = await User.create({
      name,
      fatherName,
      addressLocal,
      addressPermanent,
      officePhone,
      residencePhone,
      mobile,
      email,
      dob,
      profession,
      position,
      education,
      specialQualification,
      spouseName,
      children,
      bankers,
      golfExperience,
      hasGolfSet: parsedHasGolfSet,
      arrangementDetails: hasGolfSet === 'true' ? '' : arrangementDetails,
      consent : parsedConsent,
      aadhar,
      pan,
      password: hashpassword,
      photo : photourl,
      proposerName,
      proposerSignature,
      seconderName,
      seconderSignature,
      membershipNo,
      authorizedSignature,
      authorizedDate
    });

    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '10d' });
    res.status(201).json({ message: 'User registered successfully',name: user.name });
  } catch (err) {
    res.status(400).json({ message: 'Registration failed', error: err.message });
  }
};




//login cpontroller
export const loginUser = async (req, res) => {
  try {
    const { email} = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email and Password are required' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }
  
    const token = jwt.sign({aadhar: user.aadhar }, process.env.JWT_SECRET, {
      expiresIn: '10d',
    });
    const { password: _, ...userData } = user._doc;
    return res.status(200).json({
      message: 'Login successful',
      token,
      aadhar: user.aadhar

    });

  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// getUser controller
export const getUser = async (req, res) => {
  try {
    return res.status(200).json(req.user); // 
  } catch (error) {
    console.error('Get user error:', error.message);
    return res.status(500).json({ message: 'Server error' });
  }
};

//logout controller
export const logoutUser = async (req, res) => {
  try {
    console.log("req.user =>", req.user); 

 
    if (!req.user || !req.user.aadhar) {
      return res.status(400).json({ message: "Invalid user data in request" });
    }
    const updatedUser = await User.findOneAndUpdate(
      { aadhar: req.user.aadhar },
      { $unset: { token: 1 } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    console.error("Logout Error:", err.message);
    res.status(500).json({ message: "Logout failed", error: err.message });
  }
};



export const updateCurrentDetails = async (req, res) => {
  try {
    const { name, email, addressLocal, addressPermanent } = req.body;

    console.log("Body received for update:", req.body);
    console.log("User from token:", req.user);

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const user = await User.findOneAndUpdate(
      { aadhar: req.user.aadhar },
      {
        $set: {
          name,
          email,
          addressLocal,
          addressPermanent,
        },
      },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({message: "User updated successfully"});
  } catch (err) {
    console.error("Server error during update:", err.message);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};