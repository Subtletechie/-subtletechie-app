import React from 'react';
import { Youtube, Instagram } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
      <h3 className="text-blue-900 font-bold text-center mb-2">Let's Connect! 👋</h3>
      <p className="text-gray-600 text-center text-sm mb-4">Follow me for more cloud security tips & tricks</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a href="https://www.youtube.com/@subtle-techie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          <Youtube className="w-5 h-5" />
          YouTube
        </a>
        <a href="https://www.instagram.com/subtletechie/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
          <Instagram className="w-5 h-5" />
          Instagram
        </a>
        <a href="https://www.tiktok.com/@thesubtletechie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
          TikTok
        </a>
      </div>
    </div>
  );
}
