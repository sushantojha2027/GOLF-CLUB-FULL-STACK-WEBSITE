import mongoose from "mongoose"
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true},
  fatherName: { type:String, default:null},
  addressLocal: {type:String,rdefault:null},
  addressPermanent: {type:String, rdefault:null},
  officePhone: {type:String, default: null},
  residencePhone: {type:String, default:null},
  mobile: {type:String, required:true},
  email: {type:String, required:true},
  dob: {type:String, default:null},
  profession: {type:String, default: null},
  position: {type:String, default:null},
  education: {type:String, default:null},
  specialQualification: {type:String, default:null},
  spouseName: {type:String, default:null},
  children: {
  type: String, default: null
},
   password: {
            type: String,
            required: [true, "Password is required"]
           
        },
  bankers: {type:String, default:null},
  golfExperience: {type:String, redefault:null},
  hasGolfSet: {type:Boolean, redefault:null},
  arrangementDetails: {type:String, redefault:null},
  consent: {type:Boolean, rdefault:null},
  aadhar: { type: String, unique: true, required: true },
  pan: {type:String, unique: true , required: true},
  photo: {type:String, default:null},
  proposerName: {type:String, default:null},
  proposerSignature: {type:String,default:null},
  seconderName: {type:String, default:null},
  seconderSignature: {type:String, default:null},
  membershipNo: {type:String, default:null},
  authorizedSignature: {type:String, default:null},
  authorizedDate:{type: String,default:null}
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password,this.password)
}



export default mongoose.model('User', userSchema);