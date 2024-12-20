import React, { useState } from 'react';
import './Info.css';

// Классы
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

// Информация о классах
const classDetails = {
  en: {
    Artificer: 'Classic Artificer build: Intelligence-based. Intelligence determines the power of inventions and spells, making this build ideal for engineers and technology masters creating devices or golems. Combat Artificer build: Dexterity-based. Focuses on mobility and combat enhancements like crossbows or ranged mechanisms. Rare Artificer build: Strength-based. Suited for creating bulky mechanical armor and melee devices, turning the artificer into a "technological" barbarian or knight.',
    Barbarian: 'Classic Barbarian build: Strength-based. Relies on powerful melee attacks with heavy or two-handed weapons. "Rage" enhances Strength-based damage. Ideal for dealing significant physical damage. Combat Barbarian build: Constitution-based. Focuses on survivability, increasing hit points and damage resistance, making the barbarian a "tank." Rare Barbarian build: Dexterity-based. Agile barbarians use light weapons and armor, emphasizing evasion and mobility instead of brute damage.',
    Bard: 'Classic Bard build: Charisma-based. Bards use magic to support allies, control enemies, and inspire the party. Charisma determines spell power and makes the bard a leader both in battle and in social interactions. Combat Bard build: Dexterity-based. Combines spells with weapons like rapiers or ranged weapons. Perfect for duelists and adventurers. Rare Bard build: Strength-based. A bard using heavy weapons and armor, focusing on physical damage. Ideal for playing a knightly bard or a warrior inspiring others with their strength.',
    Cleric: 'Classic Cleric build: Wisdom-based. Wisdom determines spell power, save DCs, and healing effectiveness. Perfect for clerics focusing on team support and divine magic. Combat Cleric build: Strength-based. Combines heavy weapons and armor with magical abilities, great for frontline clerics. Rare Cleric build: Charisma-based. Focuses on social interactions, using Charisma to inspire allies and manipulate enemies.',
    Druid: 'Classic Druid build: Wisdom-based. Wisdom determines spell power, allowing druids to effectively use nature magic for healing, control, and destruction. Combat Druid build: Strength-based. Focuses on melee combat, using Wild Shape to become a strong and resilient fighter. Rare Druid build: Dexterity-based. Relies on mobility and evasion, transforming into swift beasts or attacking from a distance.',
    Fighter: 'Classic Fighter build: Strength-based. Excels in melee combat with heavy or two-handed weapons. Makes the fighter a powerful frontline warrior. Combat Fighter build: Dexterity-based. Prefers light armor and finesse weapons like rapiers. Focuses on mobility, speed, and precision. Rare Fighter build: Constitution-based. A tanky fighter who absorbs damage and protects allies, perfect for players who want an unbreakable wall.',
    Monk: 'Classic Monk build: Dexterity-based. Enhances unarmed strikes and armor class. This build makes monks agile and deadly in close combat. Combat Monk build: Constitution-based. Increases health and survivability, allowing monks to endure more damage. Rare Monk build: Wisdom-based. Focuses on spiritual abilities, enhancing saves and abilities like "Unarmored Defense."',
    Paladin: 'Classic Paladin build: Strength-based. Enhances melee attacks and allows the use of heavy weapons. Perfect for frontline knights. Combat Paladin build: Charisma-based. Boosts auras and spell power, making the paladin a more effective leader and support caster. Rare Paladin build: Constitution-based. Focuses on survivability, turning the paladin into an unyielding shield.',
    Ranger: 'Classic Ranger build: Dexterity-based. Improves ranged attacks, mobility, and evasion, making the ranger an excellent archer or scout. Combat Ranger build: Strength-based. Focuses on melee combat with powerful weapons. Rare Ranger build: Wisdom-based. Emphasizes nature magic and tracking skills.',
    Rogue: 'Classic Rogue build: Dexterity-based. Enhances stealth, finesse weapon attacks, and armor class, making the rogue an ideal assassin or thief. Combat Rogue build: Intelligence-based. Focuses on analyzing and using mechanical devices, perfect for inventors or spies. Rare Rogue build: Charisma-based. Suited for social manipulators who use deception and intimidation to achieve their goals.',
    Sorcerer: 'Classic Sorcerer build: Charisma-based. Enhances spellcasting power, relying on innate magical strength. Combat Sorcerer build: Constitution-based. Increases health and concentration, allowing the sorcerer to endure damage while casting. Rare Sorcerer build: Dexterity-based. Relies on mobility and ranged weapons combined with magic.',
    Warlock: 'Classic Warlock build: Charisma-based. Strengthens magic from the patron, making the warlock powerful in both combat and social situations. Combat Warlock build: Constitution-based. Improves survivability, allowing the warlock to endure more damage. Rare Warlock build: Intelligence-based. Focuses on analyzing magic and studying their patron.',
    Wizard: 'Classic Wizard build: Intelligence-based. Enhances spellcasting power and save DCs. Combat Wizard build: Constitution-based. Improves survivability, allowing the wizard to stay in battle longer. Rare Wizard build: Wisdom-based. Focuses on interacting with magical beings or forces.',
    Alchemist: 'Classic Alchemist build: Intelligence-based. Determines the ability to create potions, elixirs, and magical items. Combat Alchemist build: Constitution-based. Improves survivability, allowing the use of explosive and poisonous mixtures in close combat. Rare Alchemist build: Dexterity-based. Focuses on throwing bombs and mobility, becoming a master of ranged damage.',
    'Alternate Fighter': 'Classic Alternate Fighter build: Dexterity-based. Focuses on light weapons and mobility, moving away from traditional strength builds. Combat Alternate Fighter build: Constitution-based. Emphasizes tanking and survivability. Rare Alternate Fighter build: Charisma-based. Combines combat prowess with leadership qualities.',
    'Blood Hunter': 'Classic Blood Hunter build: Strength-based. Focuses on melee combat and dealing significant damage through blood magic and sacrificial rituals. Combat Blood Hunter build: Constitution-based. Enhances resilience, allowing the use of blood magic without dying quickly. Rare Blood Hunter build: Wisdom-based. Relies on intuition and tactical decisions, using magic to hunt and destroy enemies.',
    Runekeeper: 'Classic Runekeeper build: Intelligence-based. Rune magic is based on knowledge and analysis. Combat Runekeeper build: Strength-based. Combines physical power with magical effects. Rare Runekeeper build: Constitution-based. Improves survivability, allowing time to activate powerful rune effects.',
    Succubus: 'Classic Succubus build: Charisma-based. Focuses on deception, manipulation, and charming enemies. Combat Succubus build: Dexterity-based. Emphasizes speed, stealth, and precise melee strikes. Rare Succubus build: Constitution-based. Enhances survivability, allowing the succubus to distract enemies or control them for longer.',
  },
  ru: {
    Изобретатель: 'Классическая сборка изобретателя: Игра через Интеллект. Интеллект определяет силу изобретений и заклинаний, если они доступны. Это основной выбор для инженеров и мастеров технологий, создающих устройства или големов. Боевая сборка изобретателя: Игра через Ловкость. Этот билд ориентирован на использование изобретений для повышения мобильности и боевых характеристик, например, стрельбы из арбалетов или других дальнобойных механизмов. Редкая и нестандартная сборка изобретателя: Игра через Силу. Подходит для создания громоздких механических доспехов и устройств ближнего боя, превращая изобретателя в "технологического" варвара или рыцаря с механической поддержкой.',
    Варвар: 'Классическая сборка варвара: Игра через Силу. Варвары полагаются на мощные атаки ближнего боя, используя двуручное или тяжелое оружие, и их "Ярость" усиливает урон от силы. Это идеальная сборка для нанесения значительного физического урона в бою. Боевая сборка на варвара: Игра через Выносливость. Эта сборка делает акцент на живучести, повышая количество очков здоровья и устойчивость к урону. Варвар становится "танком", принимающим удары, пока его союзники наносят урон. Редкая и нестандартная сборка варвара: Игра через Ловкость. Ловкие варвары используют лёгкое оружие и броню, сосредотачиваясь на уклонении и мобильности, вместо традиционного грубого урона. Подходит для племенных воинов или дикарей-охотников.',
    Бард: 'Классическая сборка барда: Игра через Харизму. Барды используют магию для поддержки союзников, контроля врагов и вдохновения команды. Харизма определяет силу заклинаний и делает барда лидером как в бою, так и в социальных взаимодействиях. Подходит для тех, кто хочет быть магическим бардом, фокусирующимся на магии и вдохновении. Боевая сборка на барда: Игра через Ловкость. Ловкие барды комбинируют заклинания с оружием, используя рапиры или дальнобойное оружие. Эта сборка ориентирована на бойцов, которые предпочитают быть мобильными и наносить урон, одновременно усиливая союзников магией. Идеально для дуэлянтов и авантюристов. Редкая и нестандартная сборка барда: Игра через Силу. Такой бард использует тяжелое оружие, доспехи и фокусируется на физическом уроне. Подходит для тех, кто хочет играть барда-рыцаря или воина, вдохновляющего своей мощью и стойкостью на поле боя.',
    Жрец: 'Классическая сборка жреца: Игра через Мудрость. Мудрость определяет силу заклинаний, сложность спасбросков и эффективность лечения. Эта сборка идеально подходит для жрецов, которые сосредоточены на поддержке команды и использовании божественной магии. Боевая сборка на жреца: Игра через Силу. Этот билд фокусируется на ближнем бою, используя тяжелое оружие и доспехи, комбинируя физические атаки с магическими способностями. Отличный выбор для боевых жрецов, которые хотят сражаться на передовой. Редкая и нестандартная сборка жреца: Игра через Харизму. Жрецы, ориентированные на социальное взаимодействие, используют Харизму для вдохновения союзников и манипулирования врагами, делая акцент на божественном влиянии в дипломатических или политических ситуациях.',
    Друид: 'Классическая сборка друида: Игра через Мудрость. Мудрость определяет силу заклинаний и позволяет друиду эффективно использовать магию природы для лечения, контроля и разрушения. Подходит для тех, кто хочет играть друида-мага. Боевая сборка на друида: Игра через Силу. Этот билд делает акцент на ближнем бою, используя способности звероформы, чтобы стать сильным и выносливым бойцом. Подходит для друидов, которые хотят доминировать в бою физической мощью. Редкая и нестандартная сборка друида: Игра через Ловкость. Ловкие друиды полагаются на мобильность и уклонение, превращаясь в быстрых и хитрых зверей или атакуя издалека с помощью луков или магических снарядов.',
    Воин: 'Классическая сборка воина: Игра через Силу. Сила определяет эффективность в ближнем бою с тяжелым или двуручным оружием. Этот билд делает воина мощным бойцом, способным наносить значительный физический урон и выдерживать сильные удары. Боевая сборка на воина: Игра через Ловкость. Ловкие воины предпочитают лёгкую броню и оружие finesse, такие как рапиры или короткие луки. Этот стиль ориентирован на мобильность, скорость и точность в бою. Редкая и нестандартная сборка воина: Игра через Выносливость. Воин-танк, делающий упор на выдерживание урона и защиту союзников. Этот билд отлично подходит для тех, кто хочет быть неубиваемой стеной на поле боя.',
    Монах:'Классическая сборка монаха: Игра через Ловкость. Ловкость определяет точность и урон атак без оружия, а также повышает КД. Эта сборка делает монаха быстрым и смертоносным бойцом ближнего боя. Боевая сборка на монаха: Игра через Выносливость. Увеличивает здоровье и выживаемость, позволяя монаху выдерживать больше урона в бою. Редкая и нестандартная сборка монаха: Игра через Мудрость. Подходит для монаха, который делает упор на духовные аспекты, улучшая спасброски и эффективность способностей, таких как "Защита без доспехов".',
    Паладин: 'Классическая сборка паладина: Игра через Силу. Сила усиливает атаки ближнего боя и позволяет носить тяжелое оружие. Идеально для рыцарей, сражающихся на передовой. Боевая сборка на паладина: Игра через Харизму. Увеличивает силу аур и заклинаний, делая паладина более эффективным лидером и магом поддержки. Редкая и нестандартная сборка паладина: Игра через Выносливость. Фокусируется на выживаемости, превращая паладина в неубиваемую стену.',
    Следопыт:'Классическая сборка следопыта: Игра через Ловкость. Улучшает дальнобойные атаки, мобильность и уклонение, делая следопыта идеальным стрелком или разведчиком. Боевая сборка на следопыта: Игра через Силу. Фокусируется на ближнем бою, используя мощное оружие и физическую силу. Редкая и нестандартная сборка следопыта: Игра через Мудрость. Подходит для следопыта, который делает упор на магию природы и навыки отслеживания.',
    Плут: 'Классическая сборка плута: Игра через Ловкость. Ловкость повышает скрытность, атаки оружием finesse и КД, делая плута идеальным ассасином или воришкой. Боевая сборка на плута: Игра через Интеллект. Улучшает анализ и использование механических устройств, что полезно для плута-изобретателя или шпиона. Редкая и нестандартная сборка плута: Игра через Харизму. Подходит для социального манипулятора, который использует обман и запугивание в своих интересах.',
    Чародей: 'Классическая сборка чародея: Игра через Харизму. Харизма усиливает заклинания чародея, которые зависят от внутренней магической силы. Боевая сборка на чародея: Игра через Выносливость. Увеличивает здоровье и концентрацию, позволяя выдерживать урон и продолжать колдовать. Редкая и нестандартная сборка чародея: Игра через Ловкость. Подходит для чародея, который полагается на мобильность и дальнобойное оружие, комбинируя его с магией.',
    Колдун: 'Классическая сборка колдуна: Игра через Харизму. Харизма определяет силу магии, исходящей от патрона, и делает колдуна сильным в бою и социальных ситуациях. Боевая сборка на колдуна: Игра через Выносливость. Повышает живучесть, позволяя колдуну выдерживать больше урона. Редкая и нестандартная сборка колдуна: Игра через Интеллект. Подходит для колдуна, который сосредотачивается на анализе магии и изучении своего патрона.',
    Волшебник: 'Классическая сборка волшебника: Игра через Интеллект. Интеллект усиливает заклинания волшебника, определяя их силу и сложность спасбросков. Боевая сборка на волшебника: Игра через Выносливость. Увеличивает живучесть и позволяет волшебнику дольше оставаться в бою. Редкая и нестандартная сборка волшебника: Игра через Мудрость. Подходит для волшебника, который полагается на проницательность и взаимодействие с магическими существами или силами.',
    Алхимик: 'Классическая сборка алхимика: Игра через Интеллект. Интеллект определяет способность создавать зелья, эликсиры и магические предметы. Этот билд идеально подходит для учёного и изобретателя, который фокусируется на создании и использовании магии через алхимию. Боевая сборка на алхимика: Игра через Выносливость. Увеличивает живучесть, позволяя алхимику использовать взрывные и ядовитые смеси в ближнем бою, не опасаясь мгновенной гибели. Редкая и нестандартная сборка алхимика: Игра через Ловкость. Подходит для алхимика, который сосредоточен на метании бомб, мобильности и точности, превращая себя в настоящего мастера дистанционного урона.',
    'Альтернативный Воин': 'Классическая сборка альтернативного воина: Игра через Ловкость. Этот стиль делает упор на использование лёгкого оружия и мобильности, отходя от стандартного воина через Силу. Подходит для фехтовальщиков и ловких бойцов. Боевая сборка на альтернативного воина: Игра через Выносливость. Фокусируется на танковании и выживаемости, превращая воина в непобедимую стену, защищающую союзников. Редкая и нестандартная сборка альтернативного воина: Игра через Харизму. Подходит для бойца, который полагается на социальное влияние и вдохновение, комбинируя бой с лидерскими качествами.',
    'Кровавый охотник': 'Классическая сборка кровавого охотника: Игра через Силу. Основной упор на ближний бой и нанесение значительного урона с помощью кровавой магии и жертвенных ритуалов. Боевая сборка на кровавого охотника: Игра через Выносливость. Эта сборка делает акцент на способности выдерживать ранения, связанные с использованием магии крови, и повышает живучесть в бою. Редкая и нестандартная сборка кровавого охотника: Игра через Мудрость. Подходит для охотника, который фокусируется на интуиции, знании и тактических решениях, использующих магию для обнаружения и уничтожения врагов.',
    'Хранитель рун': 'Классическая сборка хранителя рун: Игра через Интеллект. Рунная магия основана на знаниях и анализе, делая Интеллект ключевой характеристикой для создания и активации рун. Боевая сборка на хранителя рун: Игра через Силу. Позволяет комбинировать физическую мощь с магическими эффектами рун, превращая хранителя в боевого мага. Редкая и нестандартная сборка хранителя рун: Игра через Выносливость. Увеличивает способность выдерживать повреждения, давая время для активации мощных рунных эффектов.',
    Суккуб:'Классическая сборка суккуба: Игра через Харизму. Основной упор на обман, манипуляции и очарование врагов. Эта характеристика усиливает заклинания и способности, связанные с влиянием на разум. Боевая сборка на суккуба: Игра через Ловкость. Подходит для суккуба, который фокусируется на скорости, скрытности и нанесении точных ударов в ближнем бою. Редкая и нестандартная сборка суккуба: Игра через Выносливость. Делает суккуба более устойчивым к урону, позволяя ему дольше удерживать врагов под своим контролем или отвлекать их.',
  },
};

// Изображения
const images = {
  en: [
    '/images/artificer.png',
    '/images/barbarian.png',
    '/images/bard.png',
    '/images/cleric.png',
    '/images/druid.png',
    '/images/fighter.png',
    '/images/monk.png',
    '/images/paladin.png',
    '/images/ranger.png',
    '/images/rogue.png',
    '/images/sorcerer.png',
    '/images/warlock.png',
    '/images/wizard.png',
    '/images/alchemist.png',
    '/images/Alternate_Fighter.png',
    '/images/blood_hunter.png',
    '/images/runekeeper.png',
    '/images/succubus.png',
  ],
  ru: [
    '/images/artificer.png',
    '/images/barbarian.png',
    '/images/bard.png',
    '/images/cleric.png',
    '/images/druid.png',
    '/images/fighter.png',
    '/images/monk.png',
    '/images/paladin.png',
    '/images/ranger.png',
    '/images/rogue.png',
    '/images/sorcerer.png',
    '/images/warlock.png',
    '/images/wizard.png',
    '/images/alchemist.png',
    '/images/Alternate_Fighter.png',
    '/images/blood_hunter.png',
    '/images/runekeeper.png',
    '/images/succubus.png',
  ],
};

function Info() {
  const [language, setLanguage] = useState('en'); // Язык по умолчанию - английский
  const [modalContent, setModalContent] = useState(null); // Содержимое модального окна
  const [isModalOpen, setIsModalOpen] = useState(false); // Видимость модального окна

  const handleClassClick = (className) => {
    setModalContent(classDetails[language][className] || 'Details not available.');
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
      <div className="infoclasses-grid">
        {classes[language].map((className, index) => (
          <button
            key={index}
            className="infoclass-button"
            onClick={() => handleClassClick(className)}
            >
            <img
                src={images[language][index]}
                alt={className}
                className="infoclass-image"
            />
            <span className="infoclass-text">{className}</span>
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
