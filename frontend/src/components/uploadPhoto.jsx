
import axios from 'axios';

export const uploadPhoto = async (photoFile) => {
  const formData = new FormData();
  formData.append('photo', photoFile);

  const response = await axios.post('http://localhost:3000/api/users/upload', formData);
  return response.data.photoUrl; // this is what you'll send in register form
};