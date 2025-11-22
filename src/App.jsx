import React, { useState, useRef, useEffect } from 'react';
import { Shield, Send, Sparkles, Volume2, VolumeX, Copy, Share2, Trash2, Check, Youtube, Instagram } from 'lucide-react';

export default function SubtleTechie() {
  const [question, setQuestion] = useState('');
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(null);
  const speechRef = useRef(null);
  const fileInputRef = useRef(null);

  const exampleQuestions = [
    "What is cloud security and why does it matter?",
    "How do I secure my AWS S3 buckets?",
    "What's the difference between encryption at rest and in transit?",
    "How can AI improve cloud security?",
    "What are the biggest threats in cloud environments?",
    "What is zero-trust security in the cloud?"
  ];

  useEffect(() => {
    const savedAvatar = localStorage.getItem('subtletechie_avatar');
    if (savedAvatar) {
      setAvatarImage(savedAvatar);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setAvatarImage(base64Image);
        localStorage.setItem('subtletechie_avatar', base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const shareAnswer = (platform, question, answer) => {
    const text = `Q: ${question}\n\nA: ${answer}\n\n- SubtleTechie`;
    const encodedText = encodeURIComponent(text);
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
      copy: text
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

    console.log('Question asked:', questionText);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: `You are SubtleTechie, a friendly cloud security expert who helps beginners learn about cybersecurity. Your PRIMARY FOCUS is cloud security, but you're also knowledgeable about AI security, cybersecurity, and infosec in general.

IMPORTANT: Start EVERY response with "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions." Then answer the question.

Give special emphasis to cloud security topics (AWS, Azure, GCP, cloud best practices, cloud threats, cloud compliance, etc.) while still being helpful with general cybersecurity questions.

Answer in a simple, friendly way using everyday language and analogies. Keep it conversational and easy to understand. Avoid heavy jargon, but if you must use technical terms, explain them simply.

Question: ${questionText}`
          }]
        })
      });

      const data = await response.json();
      const answerText = data.content
        .filter(item => item.type === 'text')
        .map(item => item.text)
        .join('\n');

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
          <p className="text-blue-200 text-sm">Making cloud security, cybersecurity & AI security easy to understand!</p>
          
          {!avatarImage && (
            <div className="mt-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleAvatarUpload}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium shadow-lg"
              >
                Upload Your Avatar
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
          <div className="mb-6">
            <label className="block text-blue-900 font-semibold mb-2">
              What cloud security question can I help you with today? 😊
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !loading && question.trim()) {
                    askQuestion(question);
                  }
                }}
                placeholder="e.g., How do I secure my cloud infrastructure?"
                className="flex-1 px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-900 focus:outline-none text-gray-800"
                disabled={loading}
              />
              <button
                onClick={() => askQuestion(question)}
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

          {conversations.length === 0 && !loading && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-blue-900" />
                <p className="text-blue-900 font-semibold">Not sure where to start? Try these:</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {exampleQuestions.map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleClick(q)}
                    className="px-4 py-2 bg-blue-50 text-blue-900 rounded-full hover:bg-blue-100 transition-colors text-sm border border-blue-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {conversations.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-blue-900 font-bold text-lg">Conversation History</h3>
                <button
                  onClick={clearConversation}
                  className="flex items-center gap-2 px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All
                </button>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {conversations.map((conv, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className={`relative ${isSpeaking && index === conversations.length - 1 ? 'animate-bounce' : ''}`}>
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
                          {isSpeaking && index === conversations.length - 1 && (
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
                                onClick={() => isSpeaking ? stopSpeaking() : speak(conv.answer)}
                                className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors shadow-lg"
                                title={isSpeaking ? "Stop" : "Play audio"}
                              >
                                {isSpeaking && index === conversations.length - 1 ? 
                                  <VolumeX className="w-4 h-4" /> : 
                                  <Volume2 className="w-4 h-4" />
                                }
                              </button>
                              <button
                                onClick={() => copyToClipboard(conv.answer, index)}
                                className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors shadow-lg"
                                title="Copy answer"
                              >
                                {copiedIndex === index ? 
                                  <Check className="w-4 h-4" /> : 
                                  <Copy className="w-4 h-4" />
                                }
                              </button>
                              <div className="relative">
                                <button
                                  onClick={() => setShowShareMenu(showShareMenu === index ? null : index)}
                                  className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors shadow-lg"
                                  title="Share answer"
                                >
                                  <Share2 className="w-4 h-4" />
                                </button>
                                {showShareMenu === index && (
                                  <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border-2 border-blue-200 p-2 z-10 w-32">
                                    <button
                                      onClick={() => shareAnswer('twitter', conv.question, conv.answer)}
                                      className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded text-sm"
                                    >
                                      Twitter
                                    </button>
                                    <button
                                      onClick={() => shareAnswer('linkedin', conv.question, conv.answer)}
                                      className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded text-sm"
                                    >
                                      LinkedIn
                                    </button>
                                    <button
                                      onClick={() => shareAnswer('copy', conv.question, conv.answer)}
                                      className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded text-sm"
                                    >
                                      Copy Link
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-800 whitespace-pre-wrap leading-relaxed text-sm md:text-base">{conv.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h3 className="text-blue-900 font-bold text-center mb-2">Let's Connect! 👋</h3>
          <p className="text-gray-600 text-center text-sm mb-4">Follow me for more cloud security tips & tricks</p>
          <div className="flex justify-center gap-4 flex-wrap">
            
          href="https://www.youtube.com/@subtle-techie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Youtube className="w-5 h-5" />
              YouTube
            </a>
            
              href="https://www.instagram.com/subtletechie/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            
              href="https://www.tiktok.com/@thesubtletechie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              TikTok
            </a>

        <div className="text-center text-blue-100 text-sm">
          <p className="mb-2">Made with ☁️ by SubtleTechie - Your friendly cloud security guy!</p>
          <p className="text-xs text-blue-200">Here to make cloud security simple and fun 🛡️</p>
        </div>
      </div>
    </div>
  );
}
