import React from 'react';
import { Share2 } from 'lucide-react';

export default function ShareMenu({ index, showShareMenu, onToggle, onShare, question, answer }) {
  return (
    <div className="relative">
      <button
        onClick={() => onToggle(showShareMenu === index ? null : index)}
        className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors shadow-lg"
        title="Share answer"
      >
        <Share2 className="w-4 h-4" />
      </button>
      {showShareMenu === index && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border-2 border-blue-200 p-2 z-10 w-32">
          <button
            onClick={() => onShare('twitter', question, answer)}
            className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded text-sm"
          >
            Twitter
          </button>
          <button
            onClick={() => onShare('linkedin', question, answer)}
            className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded text-sm"
          >
            LinkedIn
          </button>
          <button
            onClick={() => onShare('copy', question, answer)}
            className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded text-sm"
          >
            Copy Link
          </button>
        </div>
      )}
    </div>
  );
}
