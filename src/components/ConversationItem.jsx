import React from 'react';
import { Shield, Volume2, VolumeX, Copy, Check } from 'lucide-react';
import ShareMenu from './ShareMenu';

export default function ConversationItem({
  conv,
  index,
  isLast,
  isSpeaking,
  avatarImage,
  copiedIndex,
  showShareMenu,
  onSpeak,
  onStopSpeaking,
  onCopy,
  onToggleShareMenu,
  onShare,
}) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-shrink-0">
          <div className={`relative ${isSpeaking && isLast ? 'animate-bounce' : ''}`}>
            {avatarImage ? (
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-blue-800 shadow-lg border-4 border-blue-900">
                <img
                  src={avatarImage}
                  alt="SubtleTechie"
                  className="w-full h-full object-cover scale-90"
                  style={{ objectPosition: 'center 55%' }}
                />
              </div>
            ) : (
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-blue-900 border-4 border-blue-900 shadow-lg flex items-center justify-center">
                <Shield className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </div>
            )}
            {isSpeaking && isLast && (
              <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-green-500 rounded-full border-4 border-white animate-pulse flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-3">
            <p className="text-blue-900 font-semibold text-sm mb-1">You asked:</p>
            <p className="text-gray-700 italic">"{conv.question}"</p>
          </div>

          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-blue-900">SubtleTechie says:</h4>
              <div className="flex gap-2">
                <button
                  onClick={() => isSpeaking ? onStopSpeaking() : onSpeak(conv.answer)}
                  className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors shadow-lg"
                  title={isSpeaking ? "Stop" : "Play audio"}
                >
                  {isSpeaking && isLast ?
                    <VolumeX className="w-4 h-4" /> :
                    <Volume2 className="w-4 h-4" />
                  }
                </button>
                <button
                  onClick={() => onCopy(conv.answer, index)}
                  className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors shadow-lg"
                  title="Copy answer"
                >
                  {copiedIndex === index ?
                    <Check className="w-4 h-4" /> :
                    <Copy className="w-4 h-4" />
                  }
                </button>
                <ShareMenu
                  index={index}
                  showShareMenu={showShareMenu}
                  onToggle={onToggleShareMenu}
                  onShare={onShare}
                  question={conv.question}
                  answer={conv.answer}
                />
              </div>
            </div>
            <p className="text-gray-800 whitespace-pre-wrap leading-relaxed text-sm md:text-base">{conv.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
