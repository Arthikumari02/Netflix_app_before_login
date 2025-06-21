import React, { useState } from 'react';

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  const languages = ['English', 'हिन्दी'];

  const toggleDropdown = () => setOpen(!open);

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block mb-6">
      <button
        onClick={toggleDropdown}
        className="border px-4 py-1 rounded text-white flex items-center gap-2"
      >
        <span>🌐</span> {language} ▼
      </button>

      {open && (
        <ul className="absolute left-0 mt-2 w-32 bg-gray-800 text-white border rounded shadow-lg z-10">
          {languages.map((lang, idx) => (
            <li
              key={idx}
              onClick={() => selectLanguage(lang)}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
