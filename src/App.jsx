import React, { useState } from 'react';
import { exampleQuestions } from './data/answers';
import { getAnswer } from './utils/getAnswer';
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis';
import { useAvatar } from './hooks/useAvatar';
import { useClipboard } from './hooks/useClipboard';
import Header from './components/Header';
import QuestionInput from './components/QuestionInput';
import ExampleQuestions from './components/ExampleQuestions';
import ConversationHistory from './components/ConversationHistory';
import SocialLinks from './components/SocialLinks';

export default function SubtleTechie() {
  const [question, setQuestion] = useState('');
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(null);

  const { isSpeaking, speak, stopSpeaking } = useSpeechSynthesis();
  const { avatarImage, fileInputRef, handleAvatarUpload, openFilePicker } = useAvatar();
  const { copiedIndex, copyToClipboard } = useClipboard();

  const shareAnswer = (platform, questionText, answer) => {
    const text = `Q: ${questionText}\n\nA: ${answer}\n\n- SubtleTechie`;
    const encodedText = encodeURIComponent(text);

    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(text);
      setShowShareMenu(null);
    } else {
      window.open(urls[platform], '_blank');
      setShowShareMenu(null);
    }
  };

  const clearConversation = () => {
    if (window.confirm('Clear all conversations?')) {
      setConversations([]);
      stopSpeaking();
    }
  };

  const askQuestion = async (questionText) => {
    if (!questionText.trim()) return;

    setLoading(true);
    setError('');

    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const answerText = getAnswer(questionText);

      const newConversation = {
        question: questionText,
        answer: answerText,
        timestamp: new Date().toISOString()
      };

      setConversations(prev => [...prev, newConversation]);
      setQuestion('');
      speak(answerText);
    } catch (err) {
      setError('Oops! Something went wrong. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleExampleClick = (exampleQuestion) => {
    setQuestion(exampleQuestion);
    askQuestion(exampleQuestion);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <Header
          avatarImage={avatarImage}
          fileInputRef={fileInputRef}
          onAvatarUpload={handleAvatarUpload}
          onUploadClick={openFilePicker}
        />

        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
          <QuestionInput
            question={question}
            loading={loading}
            onChange={setQuestion}
            onSubmit={askQuestion}
          />

          {conversations.length === 0 && !loading && (
            <ExampleQuestions
              questions={exampleQuestions}
              onSelect={handleExampleClick}
            />
          )}

          <ConversationHistory
            conversations={conversations}
            isSpeaking={isSpeaking}
            avatarImage={avatarImage}
            copiedIndex={copiedIndex}
            showShareMenu={showShareMenu}
            onSpeak={speak}
            onStopSpeaking={stopSpeaking}
            onCopy={copyToClipboard}
            onToggleShareMenu={setShowShareMenu}
            onShare={shareAnswer}
            onClear={clearConversation}
          />

          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-red-700 mb-4">
              {error}
            </div>
          )}

          {loading && (
            <div className="text-center py-8">
              <div className="inline-block w-12 h-12 border-4 border-blue-200 border-t-blue-900 rounded-full animate-spin mb-3" />
              <p className="text-blue-900 font-medium">SubtleTechie is thinking...</p>
            </div>
          )}
        </div>

        <SocialLinks />

        <div className="text-center text-blue-100 text-sm">
          <p className="mb-2">Made with ☁️ by SubtleTechie - Your friendly cloud security guy!</p>
          <p className="text-xs text-blue-200">Cloud Security | AI Security | Cybersecurity | IT Careers</p>
        </div>
      </div>
    </div>
  );
}
