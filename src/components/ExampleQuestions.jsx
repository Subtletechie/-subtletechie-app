import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ExampleQuestions({ questions, onSelect }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-5 h-5 text-blue-900" />
        <p className="text-blue-900 font-semibold">Not sure where to start? Try these:</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {questions.map((q, index) => (
          <button
            key={index}
            onClick={() => onSelect(q)}
            className="px-4 py-2 bg-blue-50 text-blue-900 rounded-full hover:bg-blue-100 transition-colors text-sm border border-blue-200"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
