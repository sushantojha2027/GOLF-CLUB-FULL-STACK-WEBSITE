import { useState } from 'react';
import axios from 'axios';

const RegisterFormFull = () => {
  const steps = ['Personal Info', 'Family Info', 'Golf Info', 'Final Details'];
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    addressLocal: '',
    addressPermanent: '',
    officePhone: '',
    residencePhone: '',
    mobile: '',
    email: '',
    password: '', 
    dob: '',
    profession: '',
    position: '',
    education: '',
    specialQualification: '',
    spouseName: '',
    children: '',
    bankers: '',
    golfExperience: '',
    hasGolfSet: 'false',
    arrangementDetails: '',
    consent: 'true',
    aadhar: '',
    pan: '',
    proposerName: '',
    proposerSignature: '',
    seconderName: '',
    seconderSignature: '',
    membershipNo: '',
    authorizedSignature: '',
    authorizedDate: '',
    photo: null
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'photo') {
      const file = files[0];
      setFormData({ ...formData, photo: file });
      setPhotoPreview(file ? URL.createObjectURL(file) : null);
    } else if (name === 'hasGolfSet' || name === 'consent') {
      setFormData({ ...formData, [name]: value === 'true' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['name', 'mobile', 'email', 'password', 'aadhar', 'pan'];
    const missingFields = requiredFields.filter((field) => !formData[field]?.trim());

    if (missingFields.length > 0) {
      alert(`Please fill all required fields:\n${missingFields.join(', ')}`);
      return;
    }

    try {
      const data = new FormData();
      for (let key in formData) {
        if (formData[key]) {
          data.append(key, formData[key]);
        }
      }

      const res = await axios.post('http://localhost:3000/api/users/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert(res.data.message || 'Registered successfully!');
    } catch (err) {
      console.error('Axios Error:', err?.response?.data || err.message);
      alert('Registration failed. Check console for details.');
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const renderFields = () => {
    const group = {
      0: ['name', 'fatherName', 'email', 'password', 'mobile', 'dob', 'addressLocal', 'addressPermanent'], // ✅ Added 'password'
      1: ['spouseName', 'children', 'education', 'profession', 'position', 'specialQualification'],
      2: ['bankers', 'golfExperience', 'hasGolfSet', 'arrangementDetails', 'consent'],
      3: ['aadhar', 'pan', 'proposerName', 'proposerSignature', 'seconderName', 'seconderSignature', 'membershipNo', 'authorizedSignature', 'authorizedDate']
    };

    return group[step].map((key) => (
      <div key={key}>
        <label className="block text-sm font-semibold text-gray-700 capitalize">
          {key.replace(/([A-Z])/g, ' $1')}
          {['name', 'mobile', 'email', 'aadhar', 'pan', 'password'].includes(key) && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </label>
        <input
          name={key}
          value={formData[key]}
          onChange={handleChange}
          type={
            key === 'password'
              ? 'password'
              : key.includes('Date') || key === 'dob'
              ? 'date'
              : 'text'
          }
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex justify-center items-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-green-700">{steps[step]}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderFields()}

          {step === 3 && (
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700">Upload Photo (Optional)</label>
              <input
                type="file"
                accept="image/*"
                name="photo"
                onChange={handleChange}
                className="w-full"
              />
              {photoPreview && (
                <img
                  src={photoPreview}
                  alt="Preview"
                  className="mt-2 h-32 w-32 object-cover rounded-lg shadow"
                />
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between pt-4">
          {step > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
            >
              Previous
            </button>
          )}

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterFormFull;

