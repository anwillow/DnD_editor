import React from 'react';
import './Description.css';

const raceDescriptions = {
  en: {
    Aarakocra: {
      description: 'Aarakocra are bird-like humanoids from the Elemental Plane of Air.',
      image: '/Images/Aarakocra.png',
      background: '/Images/bg22.png',
    },
    Aasimar: {
      description: 'Aasimar are celestial beings with a divine heritage.',
      image:'/Images/Aasimar.png',
      background: '/Images/bg26.png',
    },
    Autognome: {
      description: 'Autognomes are mechanical beings, crafted by gnome artificers.',
      image:'/Images/Autognome.png',
      background: '/Images/bg23.png',
    },
    'Astral elf': {
      description: '-',
      image:'/Images/Astral-elf.png',
      background: '/Images/bg23.png',
    },
    Bugbear: {
      description: '-',
      image:'/Images/Bugbear.png',
      background: '/Images/bg26.png',
    },
    Vedalken: {
      description: '-',
      image:'/Images/Vedalken.png',
      background: '/Images/bg7.png',
    },
    Verdan: {
      description: '-',
      image:'/Images/Verdan.png',
      background: '/Images/bg1.png',
    },
    'Simic hybrid': {
      description: '-',
      image:'/Images/Simic-hybrid.png',
      background: '/Images/bg7.png',
    },
    Gith: {
      description: '-',
      image:'/Images/Gith.png',
      background: '/Images/bg19.png',
    },
    Giff: {
      description: '-',
      image:'/Images/Giff.png',
      background: '/Images/bg23.png',
    },
    Gnome: {
      description: '-',
      image:'/Images/Gnome.png',
      background: '/Images/bg21.png',
    },
    Goblin: {
      description: '-',
      image:'/Images/Goblin.png',
      background: '/Images/bg26.png',
    },
    Goliath: {
      description: '-',
      image:'/Images/Goliath.png',
      background: '/Images/bg26.png',
    },
    Grung: {
      description: '-',
      image:'/Images/Grung.png',
      background: '/Images/bg20.png',
    },
    Dwarf: {
      description: '-',
      image:'/Images/Dwarf.png',
      background: '/Images/bg21.png',
    },
    Genasi: {
      description: '-',
      image:'/Images/Genasi.png',
      background: '/Images/bg22.png',
    },
    Dragonborn: {
      description: '-',
      image:'/Images/Dragonborn.png',
      background: '/Images/bg21.png',
    },
    Harengon: {
      description: '-',
      image:'/Images/Harengon.png',
      background: '/Images/bg28.png',
    },
    Kalashtar: {
      description: '-',
      image:'/Images/Kalashtar.png',
      background: '/Images/bg17.png',
    },
    Kender: {
      description: '-',
      image:'/Images/Kender.png',
      background: '/Images/bg12.png',
    },
    Kenku: {
      description: '-',
      image:'/Images/Kenku.png',
      background: '/Images/bg26.png',
    },
    Centaur: {
      description: '-',
      image:'/Images/Centaur.png',
      background: '/Images/bg7.png',
    },
    Kobold: {
      description: '-',
      image:'/Images/Kobold.png',
      background: '/Images/bg26.png',
    },
    Warforged: {
      description: '-',
      image:'/Images/Warforged.png',
      background: '/Images/bg17.png',
    },
    Leonin: {
      description: '-',
      image:'/Images/Leonin.png',
      background: '/Images/bg10.png',
    },
    Locathah: {
      description: '-',
      image:'/Images/Locathah.png',
      background: '/Images/bg4.png',
    },
    Loxodon: {
      description: '-',
      image:'/Images/Loxodon.png',
      background: '/Images/bg7.png',
    },
    Lizardfolk: {
      description: '-',
      image:'/Images/Lizardfolk.png',
      background: '/Images/bg26.png',
    },
    Minotaur: {
      description: '-',
      image:'/Images/Minotaur.png',
      background: '/Images/bg7.png',
    },
    Orc: {
      description: '-',
      image:'/Images/Orc.png',
      background: '/Images/bg26.png',
    },
    Plasmoid: {
      description: '-',
      image:'/Images/Plasmoid.png',
      background: '/Images/bg23.png',
    },
    'Half-orc': {
      description: '-',
      image:'/Images/Half-orc.png',
      background: '/Images/bg21.png',
    },
    Halfling: {
      description: '-',
      image:'/Images/Halfling.png',
      background: '/Images/bg21.png',
    },
    'Half-elf': {
      description: '-',
      image:'/Images/Half-elf.png',
      background: '/Images/bg21.png',
    },
    Satyr: {
      description: '-',
      image:'/Images/Satyr.png',
      background: '/Images/bg10.png',
    },
    Owlin: {
      description: '-',
      image:'/Images/Owlin.png',
      background: '/Images/bg6.png',
    },
    Tabaxi: {
      description: '-',
      image:'/Images/Tabaxi.png',
      background: '/Images/bg26.png',
    },
    Tiefling: {
      description: '-',
      image:'/Images/Tiefling.png',
      background: '/Images/bg21.png',
    },
    Tortle: {
      description: '-',
      image:'/Images/Tortle.png',
      background: '/Images/bg24.png',
    },
    'Thri-kreen': {
      description: '-',
      image:'/Images/Thri-kreen.png',
      background: '/Images/bg23.png',
    },
    Triton: {
      description: '-',
      image:'/Images/Triton.png',
      background: '/Images/bg26.png',
    },
    Firbolg: {
      description: '-',
      image:'/Images/Firbolg.png',
      background: '/Images/bg26.png',
    },
    Fairy: {
      description: '-',
      image:'/Images/Fairy.png',
      background: '/Images/bg28.png',
    },
    Hadozee: {
      description: '-',
      image:'/Images/Hadozee.png',
      background: '/Images/bg23.png',
    },
    Hobgoblin: {
      description: '-',
      image:'/Images/Hobgoblin.png',
      background: '/Images/bg26.png',
    },
    Changeling: {
      description: '-',
      image:'/Images/Changeling.png',
      background: '/Images/bg17.png',
    },
    Human: {
      description: '-',
      image:'/Images/Human.png',
      background: '/Images/bg21.png',
    },
    Shifter: {
      description: '-',
      image:'/Images/Shifter.png',
      background: '/Images/bg17.png',
    },
    Elf: {
      description: '-',
      image:'/Images/Elf.png',
      background: '/Images/bg21.png',
    },
    'Yuan-ti Pureblood': {
      description: '-',
      image:'/Images/Yuan-ti.png',
      background: '/Images/bg26.png',
    },
  },
  ru: {
    Ааракокра: {
      description: 'Ааракокра — птицеподобные гуманоиды из Элементарного Плана Воздуха.',
      image: '/Images/Aarakocra.png',
      background: '/Images/bg22.png',
    },
    Аасимар: {
      description: 'Аасимары — небесные существа с божественным наследием.',
      image:'/Images/Aasimar.png',
      background: '/Images/bg26.png',
    },
    Автогном: {
      description: 'Автогномы — механические существа, созданные гномьими изобретателями.',
      image:'/Images/Autognome.png',
      background: '/Images/bg23.png',
    },
    'Астральный эльф': {
      description: '-',
      image:'/Images/Astral-elf.png',
      background: '/Images/bg23.png',
    },
    Багбир: {
      description: '-',
      image:'/Images/Bugbear.png',
      background: '/Images/bg26.png',
    },
    Ведалкен: {
      description: '-',
      image:'/Images/Vedalken.png',
      background: '/Images/bg7.png',
    },
    Вердан: {
      description: '-',
      image:'/Images/Verdan.png',
      background: '/Images/bg1.png',
    },
    'Гибрид Симиков': {
      description: '-',
      image:'/Images/Simic-hybrid.png',
      background: '/Images/bg7.png',
    },
    Гит: {
      description: '-',
      image:'/Images/Gith.png',
      background: '/Images/bg19.png',
    },
    Гифф: {
      description: '-',
      image:'/Images/Giff.png',
      background: '/Images/bg23.png',
    },
    Гном: {
      description: '-',
      image:'/Images/Gnome.png',
      background: '/Images/bg21.png',
    },
    Гоблин: {
      description: '-',
      image:'/Images/Goblin.png',
      background: '/Images/bg26.png',
    },
    Голиаф: {
      description: '-',
      image:'/Images/Goliath.png',
      background: '/Images/bg26.png',
    },
    Грунг: {
      description: '-',
      image:'/Images/Grung.png',
      background: '/Images/bg20.png',
    },
    Дварф: {
      description: '-',
      image:'/Images/Dwarf.png',
      background: '/Images/bg21.png',
    },
    Дженази: {
      description: '-',
      image:'/Images/Genasi.png',
      background: '/Images/bg22.png',
    },
    Драконорожденный: {
      description: '-',
      image:'/Images/Dragonborn.png',
      background: '/Images/bg21.png',
    },
    Зайцегон: {
      description: '-',
      image:'/Images/Harengon.png',
      background: '/Images/bg28.png',
    },
    Калаштар: {
      description: '-',
      image:'/Images/Kalashtar.png',
      background: '/Images/bg17.png',
    },
    Кендер: {
      description: '-',
      image:'/Images/Kender.png',
      background: '/Images/bg12.png',
    },
    Кенку: {
      description: '-',
      image:'/Images/Kenku.png',
      background: '/Images/bg26.png',
    },
    Кентавр: {
      description: '-',
      image:'/Images/Centaur.png',
      background: '/Images/bg7.png',
    },
    Кобольд: {
      description: '-',
      image:'/Images/Kobold.png',
      background: '/Images/bg26.png',
    },
    Кованый: {
      description: '-',
      image:'/Images/Warforged.png',
      background: '/Images/bg17.png',
    },
    Леонин: {
      description: '-',
      image:'/Images/Leonin.png',
      background: '/Images/bg10.png',
    },
    Локата: {
      description: '-',
      image:'/Images/Locathah.png',
      background: '/Images/bg4.png',
    },
    Локсодон: {
      description: '-',
      image:'/Images/Loxodon.png',
      background: '/Images/bg7.png',
    },
    Людоящер: {
      description: '-',
      image:'/Images/Lizardfolk.png',
      background: '/Images/bg26.png',
    },
    Минотавр: {
      description: '-',
      image:'/Images/Minotaur.png',
      background: '/Images/bg7.png',
    },
    Орк: {
      description: '-',
      image:'/Images/Orc.png',
      background: '/Images/bg26.png',
    },
    Плазмоид: {
      description: '-',
      image:'/Images/Plasmoid.png',
      background: '/Images/bg23.png',
    },
    Полуорк: {
      description: '-',
      image:'/Images/Half-orc.png',
      background: '/Images/bg21.png',
    },
    Полурослик: {
      description: '-',
      image:'/Images/Halfling.png',
      background: '/Images/bg21.png',
    },
    Полуэльф: {
      description: '-',
      image:'/Images/Half-elf.png',
      background: '/Images/bg21.png',
    },
    Сатир: {
      description: '-',
      image:'/Images/Satyr.png',
      background: '/Images/bg10.png',
    },
    Совлин: {
      description: '-',
      image:'/Images/Owlin.png',
      background: '/Images/bg6.png',
    },
    Табакси: {
      description: '-',
      image:'/Images/Tabaxi.png',
      background: '/Images/bg26.png',
    },
    Тифлинг: {
      description: '-',
      image:'/Images/Tiefling.png',
      background: '/Images/bg21.png',
    },
    Тортл: {
      description: '-',
      image:'/Images/Tortle.png',
      background: '/Images/bg24.png',
    },
    'Три-крин': {
      description: '-',
      image:'/Images/Thri-kreen.png',
      background: '/Images/bg23.png',
    },
    Тритон: {
      description: '-',
      image:'/Images/Triton.png',
      background: '/Images/bg26.png',
    },
    Фирболг: {
      description: '-',
      image:'/Images/Firbolg.png',
      background: '/Images/bg26.png',
    },
    Фэйри: {
      description: '-',
      image:'/Images/Fairy.png',
      background: '/Images/bg28.png',
    },
    Хадози: {
      description: '-',
      image:'/Images/Hadozee.png',
      background: '/Images/bg23.png',
    },
    Хобгоблин: {
      description: '-',
      image:'/Images/Hobgoblin.png',
      background: '/Images/bg26.png',
    },
    Чейнджлинг: {
      description: '-',
      image:'/Images/Changeling.png',
      background: '/Images/bg17.png',
    },
    Человек: {
      description: '-',
      image:'/Images/Human.png',
      background: '/Images/bg21.png',
    },
    Шифтёр: {
      description: '-',
      image:'/Images/Shifter.png',
      background: '/Images/bg17.png',
    },
    Эльф: {
      description: '-',
      image:'/Images/Elf.png',
      background: '/Images/bg21.png',
    },
    'Юань-ти': {
      description: '-',
      image:'/Images/Yuan-ti.png',
      background: '/Images/bg26.png',
    },
  },
};

const Description = ({ selectedRace, language }) => {
  const raceData = raceDescriptions[language]?.[selectedRace];

  if (!selectedRace) {
    return (
      <div className="race-box">
        <p>{language === 'en' ? 'Select a race to see its description.' : 'Выберите расу, чтобы увидеть описание.'}</p>
      </div>
    );
  }

  if (!raceData) {
    return (
      <div className="race-box">
        <p>{language === 'en' ? 'Description not available.' : 'Описание недоступно.'}</p>
      </div>
    );
  }

  return (
    <div className="race-box">
      <div
        className="race-image-container"
        style={{
          backgroundImage: `url(${raceData.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img src={raceData.image} alt={selectedRace} className="race-image" />
      </div>
      <p className="race-description">{raceData.description}</p>
    </div>
  );
};

export default Description;
