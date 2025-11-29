import React, { useState } from 'react';
import { Translation } from '../types';
import { MessageSquare, MessageCircle, Github } from 'lucide-react';

interface ContactProps {
  t: Translation['contact'];
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [showWeChatQR, setShowWeChatQR] = useState(false);
  const closeModal = () => setShowWeChatQR(false);
  const wechatQrUrl = '/assets/wechat-qrcode.jpg';

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* WeChat */}
          <div
            className="flex flex-col items-center p-8 bg-green-50 dark:bg-green-900/10 rounded-2xl hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300 cursor-pointer"
            onClick={() => setShowWeChatQR(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setShowWeChatQR(true); }}
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center text-green-600 dark:text-green-300 mb-4">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.wechat}</h3>
            <p className="text-gray-600 dark:text-gray-400 font-mono text-lg select-all hover:text-green-600">KawakiPony</p>
            <div className="mt-3">
              <button
                onClick={() => setShowWeChatQR(true)}
                className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-sm"
              >
                查看二维码
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center p-8 bg-blue-50 dark:bg-blue-900/10 rounded-2xl hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors duration-300">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 mb-4">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.email}</h3>
            <p className="text-gray-600 dark:text-gray-400 font-mono text-lg">QQ：1356137040</p>
            <div className="mt-3">
              <a
                href="tencent://message/?uin=1356137040&Site=&Menu=yes"
                className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-sm"
              >
                发起聊天
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center p-8 bg-gray-100 dark:bg-gray-800/30 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-colors duration-300">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 mb-4">
              <Github size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.github}</h3>
            <a href="https://github.com/KawakiPony" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 font-mono text-lg hover:underline hover:text-gray-900 dark:hover:text-white">@KawakiPony</a>
            <div className="mt-3">
              <a
                href="https://github.com/KawakiPony"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-sm"
              >
                访问 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      {showWeChatQR && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4" onClick={closeModal}>
          <div className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">微信二维码</h4>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onClick={closeModal}>✕</button>
            </div>
            <div className="p-4">
              <img 
                src={wechatQrUrl} 
                alt="微信二维码" 
                className="w-full h-auto rounded-lg"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=KawakiPony'; }}
              />
              <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">扫码添加微信：KawakiPony</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
