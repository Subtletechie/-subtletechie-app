import { useState, useRef, useEffect } from 'react';

const STORAGE_KEY = 'subtletechie_avatar';

export function useAvatar() {
  const [avatarImage, setAvatarImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedAvatar = localStorage.getItem(STORAGE_KEY);
    if (savedAvatar) {
      setAvatarImage(savedAvatar);
    }
  }, []);

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setAvatarImage(base64Image);
        localStorage.setItem(STORAGE_KEY, base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return { avatarImage, fileInputRef, handleAvatarUpload, openFilePicker };
}
