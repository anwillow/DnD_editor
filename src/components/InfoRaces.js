import React, { useState } from 'react';
import './InfoRaces.css';

const races = {
  en: [
    'Aarakocra',
    'Aasimar',
    'Autognome',
    'Astral elf',
    'Bugbear',
    'Vedalken',
    'Verdan',
    'Simic hybrid',
    'Gith',
    'Giff',
    'Gnome',
    'Goblin',
    'Goliath',
    'Grung',
    'Dwarf',
    'Genasi',
    'Dragonborn',
    'Harengon',
    'Kalashtar',
    'Kender',
    'Kenku',
    'Centaur',
    'Kobold',
    'Warforged',
    'Leonin',
    'Locathah',
    'Loxodon',
    'Lizardfolk',
    'Minotaur',
    'Orc',
    'Plasmoid',
    'Half-orc',
    'Halfling',
    'Half-elf',
    'Satyr',
    'Owlin',
    'Tabaxi',
    'Tiefling',
    'Tortle',
    'Thri-kreen',
    'Triton',
    'Firbolg',
    'Fairy',
    'Hadozee',
    'Hobgoblin',
    'Changeling',
    'Human',
    'Shifter',
    'Elf',
    'Yuan-ti Pureblood',
  ],
  ru: [
    'Ааракокра',
    'Аасимар',
    'Автогном',
    'Астральный эльф',
    'Багбир',
    'Ведалкен',
    'Вердан',
    'Симик-гибрид',
    'Гит',
    'Гифф',
    'Гном',
    'Гоблин',
    'Голиаф',
    'Грунг',
    'Дварф',
    'Дженази',
    'Драконорожденный',
    'Зайцегон',
    'Калаштар',
    'Кендер',
    'Кенку',
    'Кентавр',
    'Кобольд',
    'Кованый',
    'Леонин',
    'Локата',
    'Локсодон',
    'Людоящер',
    'Минотавр',
    'Орк',
    'Плазмоид',
    'Полуорк',
    'Полурослик',
    'Полуэльф',
    'Сатир',
    'Совлин',
    'Табакси',
    'Тифлинг',
    'Тортл',
    'Три-крин',
    'Тритон',
    'Фирболг',
    'Фэйри',
    'Хадози',
    'Хобгоблин',
    'Чейнджлинг',
    'Человек',
    'Шифтёр',
    'Эльф',
    'Юань-ти',
  ],
};

// Информация о классах
const racesDetails = {
  en: {

  },
  ru: {

  }
};

// Изображения
const race_images = {
  en: [
    { image: '/images/Aarakocra.png', background: '/images/bg22.png' },
    { image: '/images/Aasimar.png', background: '/images/bg26.png' },
    { image: '/images/Autognome.png', background: '/images/bg23.png' },
    { image: '/images/Astral-elf.png', background: '/images/bg23.png' },
    { image: '/images/Bugbear.png', background: '/images/bg26.png' },
    { image: '/images/Vedalken.png', background: '/images/bg7.png' },
    { image: '/images/Verdan.png', background: '/images/bg1.png' },
    { image: '/images/Simic-hybrid.png', background: '/images/bg7.png' },
    { image: '/images/Gith.png', background: '/images/bg19.png' },
    { image: '/images/Giff.png', background: '/images/bg23.png' },
    { image: '/images/Gnome.png', background: '/images/bg21.png' },
    { image: '/images/Goblin.png', background: '/images/bg26.png' },
    { image: '/images/Goliath.png', background: '/images/bg26.png' },
    { image: '/images/Grung.png', background: '/images/bg20.png' },
    { image: '/images/Dwarf.png', background: '/images/bg21.png' },
    { image: '/images/Genasi.png', background: '/images/bg22.png' },
    { image: '/images/Dragonborn.png', background: '/images/bg21.png' },
    { image: '/images/Harengon.png', background: '/images/bg28.png' },
    { image: '/images/Kalashtar.png', background: '/images/bg17.png' },
    { image: '/images/Kender.png', background: '/images/bg12.png' },
    { image: '/images/Kenku.png', background: '/images/bg26.png' },
    { image: '/images/Centaur.png', background: '/images/bg7.png' },
    { image: '/images/Kobold.png', background: '/images/bg26.png' },
    { image: '/images/Warforged.png', background: '/images/bg17.png' },
    { image: '/images/Leonin.png', background: '/images/bg10.png' },
    { image: '/images/Locathah.png', background: '/images/bg4.png' },
    { image: '/images/Loxodon.png', background: '/images/bg7.png' },
    { image: '/images/Lizardfolk.png', background: '/images/bg26.png' },
    { image: '/images/Minotaur.png', background: '/images/bg7.png' },
    { image: '/images/Orc.png', background: '/images/bg26.png' },
    { image: '/images/Plasmoid.png', background: '/images/bg23.png' },
    { image: '/images/Half-orc.png', background: '/images/bg21.png' },
    { image: '/images/Halfling.png', background: '/images/bg21.png' },
    { image: '/images/Half-elf.png', background: '/images/bg21.png' },
    { image: '/images/Satyr.png', background: '/images/bg10.png' },
    { image: '/images/Owlin.png', background: '/images/bg6.png' },
    { image: '/images/Tabaxi.png', background: '/images/bg26.png' },
    { image: '/images/Tiefling.png', background: '/images/bg21.png' },
    { image: '/images/Tortle.png', background: '/images/bg24.png' },
    { image: '/images/Thri-kreen.png', background: '/images/bg23.png' },
    { image: '/images/Triton.png', background: '/images/bg26.png' },
    { image: '/images/Firbolg.png', background: '/images/bg26.png' },
    { image: '/images/Fairy.png', background: '/images/bg28.png' },
    { image: '/images/Hadozee.png', background: '/images/bg23.png' },
    { image: '/images/Hobgoblin.png', background: '/images/bg26.png' },
    { image: '/images/Changeling.png', background: '/images/bg17.png' },
    { image: '/images/Human.png', background: '/images/bg21.png' },
    { image: '/images/Shifter.png', background: '/images/bg17.png' },
    { image: '/images/Elf.png', background: '/images/bg21.png' },
    { image: '/images/Yuan-ti.png', background: '/images/bg26.png' },
],
ru: [
    '/images/Aarakocra.png',
    '/images/Aasimar.png',
    '/images/Autognome.png',
    '/images/Astral-elf.png',
    '/images/Bugbear.png',
    '/images/Vedalken.png',
    '/images/Verdan.png',
    '/images/Simic-hybrid.png',
    '/images/Gith.png',
    '/images/Giff.png',
    '/images/Gnome.png',
    '/images/Goblin.png',
    '/images/Goliath.png',
    '/images/Grung.png',
    '/images/Dwarf.png',
    '/images/Genasi.png',
    '/images/Dragonborn.png',
    '/images/Harengon.png',
    '/images/Kalashtar.png',
    '/images/Kender.png',
    '/images/Kenku.png',
    '/images/Centaur.png',
    '/images/Kobold.png',
    '/images/Warforged.png',
    '/images/Leonin.png',
    '/images/Locathah.png',
    '/images/Loxodon.png',
    '/images/Lizardfolk.png',
    '/images/Minotaur.png',
    '/images/Orc.png',
    '/images/Plasmoid.png',
    '/images/Half-orc.png',
    '/images/Halfling.png',
    '/images/Half-elf.png',
    '/images/Satyr.png',
    '/images/Owlin.png',
    '/images/Tabaxi.png',
    '/images/Tiefling.png',
    '/images/Tortle.png',
    '/images/Thri-kreen.png',
    '/images/Triton.png',
    '/images/Firbolg.png',
    '/images/Fairy.png',
    '/images/Hadozee.png',
    '/images/Hobgoblin.png',
    '/images/Changeling.png',
    '/images/Human.png',
    '/images/Shifter.png',
    '/images/Elf.png',
    '/images/Yuan-ti.png',
  ],
};

function Info() {
  const [language, setLanguage] = useState('en'); // Язык по умолчанию - английский
  const [modalContent, setModalContent] = useState(null); // Содержимое модального окна
  const [isModalOpen, setIsModalOpen] = useState(false); // Видимость модального окна

  const handleRaceClick = (raceName) => {
    setModalContent(racesDetails[language][raceName] || 'Details not available.');
    setIsModalOpen(true);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ru' : 'en'));
  };

   const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="info-container">
      <div className="language-buttons">
        <button className="lang-button" onClick={toggleLanguage}>
          {language === 'en' ? 'Switch to Русский' : 'Переключить на English'}
        </button>
      </div>
      <div className="inforaces-grid">
        {races[language].map((className, index) => (
          <button
            key={index}
            className="inforace-button"
            onClick={() => handleRaceClick(races[language][index])}
            style={{
              backgroundImage: `url(${race_images[language][index].background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img
              src={race_images[language][index].image}
              alt={races[language][index]}
              className="inforace-image"
            />
            <span className="inforace-text">{races[language][index]}</span>
          </button>        
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
            <div className="modal-content">
            <p>{modalContent}</p>
            <button onClick={closeModal} className="close-modal-button">
                {language === 'en' ? 'Close' : 'Закрыть'}
            </button>
            </div>
        </div>
        )}
    </div>
  );
}

export default Info;
