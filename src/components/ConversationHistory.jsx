import React from 'react';
import { Trash2 } from 'lucide-react';
import ConversationItem from './ConversationItem';

export default function ConversationHistory({
  conversations,
  isSpeaking,
  avatarImage,
  copiedIndex,
  showShareMenu,
  onSpeak,
  onStopSpeaking,
  onCopy,
  onToggleShareMenu,
  onShare,
  onClear,
}) {
  if (conversations.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-blue-900 font-bold text-lg">Conversation History</h3>
        <button
          onClick={onClear}
          className="flex items-center gap-2 px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Clear All
        </button>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {conversations.map((conv, index) => (
          <ConversationItem
            key={index}
            conv={conv}
            index={index}
            isLast={index === conversations.length - 1}
            isSpeaking={isSpeaking}
            avatarImage={avatarImage}
            copiedIndex={copiedIndex}
            showShareMenu={showShareMenu}
            onSpeak={onSpeak}
            onStopSpeaking={onStopSpeaking}
            onCopy={onCopy}
            onToggleShareMenu={onToggleShareMenu}
            onShare={onShare}
          />
        ))}
      </div>
    </div>
  );
}
