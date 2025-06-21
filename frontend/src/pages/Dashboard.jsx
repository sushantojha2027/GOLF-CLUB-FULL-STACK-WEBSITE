/*import axios from 'axios';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useState, useRef, useEffect } from 'react';

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const printRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(res.data);
      } catch (err) {
        console.error('Failed to fetch user data:', err);
      }
    };
    fetchData();
  }, []);

  const handleEdit = () => {
    alert('Edit Info feature coming soon!');
  };

  const handleEnroll = () => {
    alert('Course enrollment feature coming soon!');
  };

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const printWindow = window.open('', '', 'height=800,width=1000');
    printWindow.document.write('<html><head><title>User Info</title>');
    printWindow.document.write('<style>body{font-family:Arial;padding:20px;}h2{color:#2563eb;}strong{color:#065f46;}p{margin-bottom:6px;}img{margin-top:10px;}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="p-6 bg-gradient-to-br from-green-100 to-blue-100 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-green-900 drop-shadow-lg">Welcome to BLW Golf Club Dashboard</h1>
      {userData ? (
        <div ref={printRef} className="grid gap-8 md:grid-cols-2">
          <Card className="shadow-lg rounded-2xl border border-green-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700 underline">Personal Details</h2>
              <div className="space-y-2 text-gray-800 text-base">
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Mobile:</strong> {userData.mobile}</p>
                <p><strong>PAN:</strong> {userData.pan}</p>
                <p><strong>Aadhar:</strong> {userData.aadhar}</p>
                <p><strong>DOB:</strong> {userData.dob}</p>
                <p><strong>Father's Name:</strong> {userData.fatherName}</p>
                <p><strong>Profession:</strong> {userData.profession}</p>
                <p><strong>Position:</strong> {userData.position}</p>
                <p><strong>Education:</strong> {userData.education}</p>
                <p><strong>Special Qualification:</strong> {userData.specialQualification}</p>
                <p><strong>Bankers:</strong> {userData.bankers}</p>
                <p><strong>Office Phone:</strong> {userData.officePhone}</p>
                <p><strong>Residence Phone:</strong> {userData.residencePhone}</p>
                <p><strong>Spouse Name:</strong> {userData.spouseName}</p>
                <p><strong>Children:</strong> {userData.children}</p>
              </div>
              <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={handleEdit}>Edit Info</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl border border-green-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700 underline">Golf Information</h2>
              <div className="space-y-2 text-gray-800 text-base">
                <p><strong>Golf Experience:</strong> {userData.golfExperience}</p>
                <p><strong>Has Golf Set:</strong> {userData.hasGolfSet ? 'Yes' : 'No'}</p>
                <p><strong>Arrangement Details:</strong> {userData.arrangementDetails}</p>
                <p><strong>Permanent Address:</strong> {userData.addressPermanent}</p>
                <p><strong>Local Address:</strong> {userData.addressLocal}</p>
              </div>
              {userData.photo && (
                <div className="mt-6 text-center">
                  <img src={userData.photo} alt="Profile" className="w-40 h-40 rounded-full object-cover border-4 border-blue-300 mx-auto" />
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="md:col-span-2 shadow-lg rounded-2xl border border-green-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-green-700 underline">Courses at BLW Golf Club</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
                <li>Beginner Golf Training Program</li>
                <li>Intermediate Swing Techniques</li>
                <li>Advanced Putting & Driving</li>
                <li>Weekend Tournaments & Coaching</li>
                <li>Junior Golf Development Series</li>
                <li>Professional Golf Certification Program</li>
              </ul>
              <Button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white" onClick={handleEnroll}>Enroll in Course</Button>
            </CardContent>
          </Card>

          <div className="md:col-span-2 text-center">
            <Button className="mt-10 px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl shadow-md" onClick={handlePrint}>Print My Details</Button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg mt-10">Loading user data...</p>
      )}
    </div>
  );
};

export default UserDashboard;*/
import axios from 'axios';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useState, useRef, useEffect } from 'react';

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({ name: '', email: '', addressLocal: '', addressPermanent: '' });
  const printRef = useRef();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3000/api/users/me', {
        headers: {
          Authorization:` Bearer ${token}`,
        },
      });

      if (res.status === 200 && res.data) {
        setUserData(res.data);
        setEditData({
          name: res.data.name || '',
          email: res.data.email || '',
          addressLocal: res.data.addressLocal || '',
          addressPermanent: res.data.addressPermanent || '',
        });
      } else {
        console.error('Unexpected response:', res);
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put('http://localhost:3000/api/users/update', editData, {
        headers: {
          Authorization:` Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        alert('User details updated successfully');
        fetchData();
        setEditMode(false);
      } else {
        alert('Failed to update user data');
      }
    } catch (err) {
      console.error('Update error response:', err);
      alert(`Update failed: ${err.response?.data?.message || 'Server error'}`);
    }
  };

  const handleEnroll = () => {
    alert('Course enrollment feature coming soon!');
  };

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const printWindow = window.open('', '', 'height=800,width=1000');
    printWindow.document.write('<html><head><title>User Info</title>');
    printWindow.document.write('<style>body{font-family:Arial;padding:20px;}h2{color:#2563eb;}strong{color:#065f46;}p{margin-bottom:6px;}img{margin-top:10px;}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="p-6 bg-gradient-to-br from-green-100 to-blue-100 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-green-900 drop-shadow-lg">Welcome to BLW Golf Club Dashboard</h1>
      {userData ? (
        <div ref={printRef} className="grid gap-8 md:grid-cols-2">
          <Card className="shadow-lg rounded-2xl border border-green-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700 underline">Personal Details</h2>
              <div className="space-y-2 text-gray-800 text-base">
                {editMode ? (
                  <>
                    <input name="name" value={editData.name} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="Name" />
                    <input name="email" value={editData.email} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="Email" />
                    <input name="addressLocal" value={editData.addressLocal} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="Local Address" />
                    <input name="addressPermanent" value={editData.addressPermanent} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="Permanent Address" />
                    <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white" onClick={handleSave}>Save</Button>
                  </>
                ) : (
                  <>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Mobile:</strong> {userData.mobile}</p>
                    <p><strong>PAN:</strong> {userData.pan}</p>
                    <p><strong>Aadhar:</strong> {userData.aadhar}</p>
                    <p><strong>DOB:</strong> {userData.dob}</p>
                    <p><strong>Father's Name:</strong> {userData.fatherName}</p>
                    <p><strong>Profession:</strong> {userData.profession}</p>
                    <p><strong>Position:</strong> {userData.position}</p>
                    <p><strong>Education:</strong> {userData.education}</p>
                    <p><strong>Special Qualification:</strong> {userData.specialQualification}</p>
                    <p><strong>Bankers:</strong> {userData.bankers}</p>
                    <p><strong>Office Phone:</strong> {userData.officePhone}</p>
                    <p><strong>Residence Phone:</strong> {userData.residencePhone}</p>
                    <p><strong>Spouse Name:</strong> {userData.spouseName}</p>
                    <p><strong>Children:</strong> {userData.children}</p>
                    <p><strong>Permanent Address:</strong> {userData.addressPermanent}</p>
                    <p><strong>Local Address:</strong> {userData.addressLocal}</p>
                    <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={handleEdit}>Edit Info</Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl border border-green-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700 underline">Golf Information</h2>
              <div className="space-y-2 text-gray-800 text-base">
                <p><strong>Golf Experience:</strong> {userData.golfExperience}</p>
                <p><strong>Has Golf Set:</strong> {userData.hasGolfSet ? 'Yes' : 'No'}</p>
                <p><strong>Arrangement Details:</strong> {userData.arrangementDetails}</p>
              </div>
              {userData.photo && (
                <div className="mt-6 text-center">
                  <img src={userData.photo} alt="Profile" className="w-40 h-40 rounded-full object-cover border-4 border-blue-300 mx-auto" />
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="md:col-span-2 shadow-lg rounded-2xl border border-green-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-green-700 underline">Courses at BLW Golf Club</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
                <li>Beginner Golf Training Program</li>
                <li>Intermediate Swing Techniques</li>
                <li>Advanced Putting & Driving</li>
                <li>Weekend Tournaments & Coaching</li>
                <li>Junior Golf Development Series</li>
                <li>Professional Golf Certification Program</li>
              </ul>
              <Button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white" onClick={handleEnroll}>Enroll in Course</Button>
            </CardContent>
          </Card>

          <div className="md:col-span-2 text-center">
            <Button className="mt-10 px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl shadow-md" onClick={handlePrint}>Print My Details</Button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg mt-10">Loading user data...</p>
      )}
    </div>
  );
};

export default UserDashboard;