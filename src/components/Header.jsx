import React from 'react';
import { Shield } from 'lucide-react';

export default function Header({ avatarImage, fileInputRef, onAvatarUpload, onUploadClick }) {
  return (
    <div className="text-center mb-8">
      {avatarImage && (
        <div className="flex justify-center mb-4">
          <div className="w-56 h-56 rounded-full overflow-hidden bg-blue-800 shadow-2xl border-4 border-white">
            <img
              src={avatarImage}
              alt="SubtleTechie"
              className="w-full h-full object-cover scale-90"
              style={{ objectPosition: 'center 55%' }}
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-3 mb-3">
        <Shield className="w-12 h-12 text-white" />
        <h1 className="text-5xl font-bold text-white">SubtleTechie</h1>
      </div>
      <p className="text-blue-100 text-xl mb-1 font-semibold">Your Cloud Security Guy ☁️</p>
      <p className="text-blue-200 text-sm">Cloud Security | AI Security | Cybersecurity | IT Career Advice</p>

      {!avatarImage && (
        <div className="mt-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={onAvatarUpload}
            accept="image/*"
            className="hidden"
          />
          <button
            onClick={onUploadClick}
            className="px-4 py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium shadow-lg"
          >
            Upload Your Avatar
          </button>
        </div>
      )}
    </div>
  );
}
