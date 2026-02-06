import React from 'react';
import { Send } from 'lucide-react';

export default function QuestionInput({ question, loading, onChange, onSubmit }) {
  return (
    <div className="mb-6">
      <label className="block text-blue-900 font-semibold mb-2">
        Ask me anything about cybersecurity, cloud security, AI security, or IT careers! 😊
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={question}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !loading && question.trim()) {
              onSubmit(question);
            }
          }}
          placeholder="e.g., How do I start a career in cloud security?"
          className="flex-1 px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-900 focus:outline-none text-gray-800"
          disabled={loading}
        />
        <button
          onClick={() => onSubmit(question)}
          disabled={loading || !question.trim()}
          className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shadow-lg"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
