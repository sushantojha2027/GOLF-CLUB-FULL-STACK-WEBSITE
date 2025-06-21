# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
const Registration = () => {
  const [formData, setFormData] = useState({
    name: '', fatherName: '', addressLocal: '', addressPermanent: '',
    officePhone: '', residencePhone: '', mobile: '', email: '', dob: '',
    profession: '', position: '', education: '', specialQualification: '',
    spouseName: '', children: [{ name: '', dob: '' }],
    bankers: '', golfExperience: '', hasGolfSet: false, arrangementDetails: '',
    consent: false, aadhar: '', pan: '', photo: null,
    proposerName: '', proposerSignature: '', seconderName: '', seconderSignature: '',
    membershipNo: '', authorizedSignature: '', authorizedDate: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      photo: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "children") {
        data.append(key, JSON.stringify(value));
      } else {
        data.append(key, value);
      }
    });
    data.append('photo',formData.photo)

    const res = await axios.post('http://localhost:3000/api/users/register', data)
      if(res.status===200 || res.status===201){
        toast.success("SUCCESSFULLY REGISTERED")
      }
    }
    catch(err){
      toast.error("Registration failed")
      console.error(err)

    }
  };

  const Label = ({ name, required }) => (
    <label className="block mb-1 font-semibold">
      {name}{required && <span className="text-red-500">*</span>}
    </label>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">BLW Golf Club Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Personal Info */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label name="Full Name" required />
              <input name="name" onChange={handleChange} required className="input" />
            </div>
            <div>
              <Label name="Father's Name" required />
              <input name="fatherName" onChange={handleChange} required className="input" />
            </div>
            <div>
              <Label name="Date of Birth" required />
              <input name="dob" type="date" onChange={handleChange} required className="input" />
            </div>
            <div>
              <Label name="Aadhar Number" required />
              <input name="aadhar" onChange={handleChange} required className="input" />
            </div>
            <div>
              <Label name="PAN Number" />
              <input name="pan" onChange={handleChange} className="input" />
            </div>
             <div>
              <Label name="Upload Photo" />
              <input name="photo" type="file" accept="image/*" onChange={handleFileChange} />
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label name="Local Address" required />
              <input name="addressLocal" onChange={handleChange} required className="input" />
            </div>
            <div>
              <Label name="Permanent Address" required />
              <input name="addressPermanent" onChange={handleChange} required className="input" />
            </div>
            <div>
              <Label name="Mobile" required />
              <input name="mobile" onChange={handleChange} required className="input" />
            </div>
            <div>
              <Label name="Email" required />
              <input name="email" type="email" onChange={handleChange} required className="input" />
            </div>
            <div>
              <Label name="Office Phone" />
              <input name="officePhone" onChange={handleChange} className="input" />
            </div>
            <div>
              <Label name="Residence Phone" />
              <input name="residencePhone" onChange={handleChange} className="input" />
            </div>
          </div>
        </section>

        {/* Professional Info */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Professional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label name="Profession" required />
              <input name="profession" onChange={handleChange} required className="input" />
            </div>
            <div>
              <Label name="Position" />
              <input name="position" onChange={handleChange} className="input" />
            </div>
            <div>
              <Label name="Education" />
              <input name="education" onChange={handleChange} className="input" />
            </div>
            <div>
              <Label name="Special Qualification" />
              <input name="specialQualification" onChange={handleChange} className="input" />
            </div>
            <div>
              <Label name="Bankers" />
              <input name="bankers" onChange={handleChange} className="input" />
            </div>
          </div>
        </section>

        {/* Family Info */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Family Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label name="Spouse Name" />
              <input name="spouseName" onChange={handleChange} className="input" />
            </div>
            <div>
              <Label name="Children" />
              <input name="children" onChange={handleChange} className="input" />
            </div>
          </div>
        </section>

        {/* Golf Info */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Golf Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label name="Golf Experience" />
              <input name="golfExperience" onChange={handleChange} className="input" />
            </div>
            <div>
              <Label name="Do you have a Golf Set?" />
              <input name="hasGolfSet" type="checkbox" onChange={handleChange} className="ml-2" />
            </div>
            {!formData.hasGolfSet && (
              <div>
                <Label name="Arrangement Details" />
                <input name="arrangementDetails" onChange={handleChange} className="input" />
              </div>
            )}
            <div>
              <Label name="Consent to Membership" />
              <input name="consent" type="checkbox" onChange={handleChange} className="ml-2" />
            </div>

          </div>
        </section>

        {/* Membership Approval */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Membership Approval</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label name="Proposer Name" />
              <input name="proposerName" onChange={handleChange} className="input" />
            </div>
            <div>
              <Label name="Proposer Signature" />
              <input name="proposerSignature" onChange={handleChange} className="input" />
            </div>
            <div>
              <Label name="Seconder Name" />
              <input name="seconderName" onChange={handleChange} className="input" />
            </div>
            <div>
              <Label name="Seconder Signature" />
              <input name="seconderSignature" onChange={handleChange} className="input" />
            </div>
            <div>
              <Label name="Membership No." />
              <input name="membershipNo" onChange={handleChange} className="input" />
            </div>
            <div>
              <Label name="Authorized Signature" />
              <input name="authorizedSignature" onChange={handleChange} className="input" />
            </div>
            <div>
              <Label name="Authorization Date" />
              <input name="authorizedDate" type="date" onChange={handleChange} className="input" />
            </div>
          </div>
        </section>

        <div className="text-center">
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;*/
 <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />