import React, { useState } from 'react';
import Description from './Description';
import Class from './Class';
import './CharacterEditor.css';

const customClasses = {
  en: ['Alchemist', 'Alternate Fighter', 'Blood Hunter', 'Runekeeper', 'Succubus'],
  ru: ['Алхимик', 'Альтернативный Воин', 'Кровавый охотник', 'Хранитель рун', 'Суккуб'],
};

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

const backgrounds = {
  en: [
    'Acolyte',
    'Charlatan',
    'Criminal',
    'Entertainer',
    'Folk Hero',
    'Gladiator',
    'Guild Artisan',
    'Hermit',
    'Knight',
    'Noble',
    'Outlander',
    'Pirate',
    'Sage',
    'Sailor',
    'Soldier',
    'Urchin',
  ],
  ru: [
    'Послушник',
    'Шарлатан',
    'Преступник',
    'Артист',
    'Народный герой',
    'Гладиатор',
    'Ремесленник гильдии',
    'Отшельник',
    'Рыцарь',
    'Благородный',
    'Чужеземец',
    'Пират',
    'Мудрец',
    'Моряк',
    'Солдат',
    'Беспризорник',
  ],
};

const classes = {
    en: [
      'Artificer',
      'Barbarian',
      'Bard',
      'Cleric',
      'Druid',
      'Fighter',
      'Monk',
      'Paladin',
      'Ranger',
      'Rogue',
      'Sorcerer',
      'Warlock',
      'Wizard',
      'Alchemist',
      'Alternate Fighter',
      'Blood Hunter',
      'Runekeeper',
      'Succubus',
    ],
    ru: [
      'Изобретатель',
      'Варвар',
      'Бард',
      'Жрец',
      'Друид',
      'Воин',
      'Монах',
      'Паладин',
      'Следопыт',
      'Плут',
      'Чародей',
      'Колдун',
      'Волшебник',
      'Алхимик',
      'Альтернативный Воин',
      'Кровавый охотник',
      'Хранитель рун',
      'Суккуб',
    ],
  };


const CharacterEditor = () => {
  const [characterName, setCharacterName] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [selectedBackground, setSelectedBackground] = useState('');
  const [language, setLanguage] = useState('en'); // Default language is English

  const handleNameChange = (event) => {
    setCharacterName(event.target.value);
  };

  const [showModal, setShowModal] = useState(false);

  const handleClassChange = (event) => {
    const selected = event.target.value;
    setSelectedClass(selected);
    if (customClasses[language].includes(selected)) { // Проверка с учетом текущего языка
      setShowModal(true); // Показываем окно, если выбран кастомный класс
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRaceChange = (event) => {
    setSelectedRace(event.target.value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleBackgroundChange = (event) => {
    setSelectedBackground(event.target.value);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };
  

  return (
    <div className="container">
        <div>
            {/* Description Component */}
            <Description selectedRace={selectedRace} language={language} />
        </div>
        <div className="editor">
          <button onClick={toggleLanguage} className="language-toggle-button">
            {language === 'en' ? 'Switch to Русский' : 'Переключить на English'}
          </button>

          <h1>{language === 'en' ? 'D&D Character Editor' : 'Редактор персонажа D&D'}</h1>

          {/* Name Input */}
          <label htmlFor="name">
            {language === 'en' ? 'Enter character name:' : 'Введите имя персонажа:'}
          </label>
          <input
            type="text"
            id="name"
            value={characterName}
            onChange={handleNameChange}
            placeholder={
              language === 'en'
                ? "Enter your character's name"
                : 'Введите имя вашего персонажа'
            }
          />

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>
                {language === 'en'
                  ? 'This class is a player-created concept. This material is not an official product. Consult with your Dungeon Master if you wish to use this class.'
                  : 'Данный класс является выдуманным игроками. Этот материал не является официальным продуктом. Если вы хотите использовать этот класс, вам следует посоветоваться с вашим Мастером.'}
              </p>
              <button onClick={closeModal}>
                {language === 'en' ? 'Close' : 'Закрыть'}
              </button>
            </div>
          </div>
        )}
         {/* Class Selection */}
         <label htmlFor="class">
          {language === 'en' ? 'Choose a class:' : 'Выберите класс:'}
        </label>
        <select id="class" value={selectedClass} onChange={handleClassChange}>
          <option value="">
            {language === 'en' ? '--Select a class--' : '--Выберите класс--'}
          </option>
          {classes[language].map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>

        {/* Race Selection */}
        <label htmlFor="race">
          {language === 'en' ? 'Choose a race:' : 'Выберите расу:'}
        </label>
        <select id="race" value={selectedRace} onChange={handleRaceChange}>
          <option value="">
            {language === 'en' ? '--Select a race--' : '--Выберите расу--'}
          </option>
          {races[language].map((race) => (
            <option key={race} value={race}>
              {race}
            </option>
          ))}
        </select>

        {/* Level Selection */}
        <label htmlFor="level">
          {language === 'en' ? 'Choose a level:' : 'Выберите уровень:'}
        </label>
        <select id="level" value={selectedLevel} onChange={handleLevelChange}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>

        {/* Background Selection */}
        <label htmlFor="background">
          {language === 'en' ? 'Choose a background:' : 'Выберите предысторию:'}
        </label>
        <select
          id="background"
          value={selectedBackground}
          onChange={handleBackgroundChange}
        >
          <option value="">
            {language === 'en'
              ? '--Select a background--'
              : '--Выберите предысторию--'}
          </option>
          {backgrounds[language].map((background) => (
            <option key={background} value={background}>
              {background}
            </option>
          ))}
        </select>

        {/* Combined Output */}
        <div className="output">
          {characterName &&
            selectedClass &&
            selectedRace &&
            selectedLevel &&
            selectedBackground && (
                <p>
                {language === 'en'
                  ? `You have created ${characterName}, a level ${selectedLevel} ${selectedRace} ${selectedClass} with the background of ${selectedBackground}.`
                  : `Вы создали ${characterName}, ${selectedLevel}-го уровня, расы ${selectedRace}, класса ${selectedClass}, с предысторией ${selectedBackground}.`}
              </p>
            )}
        </div>
      </div>
      <div>
            {/* Class Component */}
            <Class selectedClass={selectedClass} language={language} />
        </div>
    </div>
  );
};

export default CharacterEditor;
