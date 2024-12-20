import React from 'react';
import './Class.css';

const classDescriptions = {
  en: {
    Artificer: {
        description: "Inventors are the greatest at bringing magic to life in ordinary objects. They view magic as a complex system that must be deciphered and applied to spells and inventions. They use various tools to channel their magical power. When casting a spell, the inventor can use an alchemist's supplies to create a powerful elixir, a calligrapher's kit to draw a sign of power on an ally's armor, or a repairman's tools to create a temporary amulet. The magic of inventors lies in their tools and abilities, and few other than them can create the right working tool.",
        image: '/Images/Artificer.png',
      },
    Barbarian: {
      description: 'Despite their diversity, all barbarians have one thing in common - their rage. Unbridled, unquenchable and thoughtless anger. Not just an emotion, their rage is like the ferocity of a cornered predator, like the merciless blow of a hurricane, like the storm surges of the ocean. The rage of some of them stems from communication with ferocious animal spirits. Others draw it from anger at a reality full of pain and suffering. But for every barbarian, rage is the source of not only battle madness, but also incredible reflexes, durability, and unsurpassed strength.',
      image: '/Images/Barbarian.png',
    },
    Bard: {
        description: "It doesn't matter who the bard is: a scientist, a skald or a rogue; he/she weaves magic from words and music, inspiring allies, demoralizing opponents, manipulating minds, creating illusions, and even healing wounds.",
        image: '/Images/Bard.png',
      },
    Cleric: {
      description: 'Clerics are intermediaries between the mortal world and the distant worlds of the gods. As different as the gods they serve, priests embody the work of their deities. Unlike an ordinary preacher, a priest is endowed with divine magic.',
      image: '/Images/Cleric.png',
    },
    Druid: {
        description: "Whether they call upon the elements or imitate animals, Druids embody nature's resilience, adaptability, and wrath. They are by no means masters of nature - instead, druids feel themselves to be part of its irresistible will.",
        image: '/Images/Druid.png',
      },
    Fighter: {
      description: "A seasoned gladiator fights in the arena and knows well how to use his trident and net to overwhelm and outflank his opponent, causing the crowd to cheer and gain a tactical advantage. His opponent's sword flashes blue and emits flashing lightning. All these heroes are warriors. Representatives of perhaps the most diverse class in the D&D world. Knights-errant, conquering warlords, royal champions, elite infantry, armored mercenaries, and bandit kings are warriors who are all masters of weapons, armor, and combat techniques. They are also very familiar with death - they carry it themselves, and often look into its cold eyes.",
      image: '/Images/Fighter.png',
    },
    Monk: {
        description: 'Regardless of the chosen discipline, all monks have one thing in common - the ability to control the energy flowing in their bodies. Whether it manifests itself in extraordinary combat abilities or subtle increases in defense and speed, this energy influences everything a monk does.',
        image: '/Images/Monk.png',
      },
    Paladin: {
        description: "Regardless of origin or mission, paladins are united by their oath to resist the forces of evil. Whether taken before the altar of a god and sworn by a priest, or in a sacred clearing before nature spirits and fairies, or in the despair and grief of death, a paladin's oath is a powerful covenant. It is the source of power that transforms a devout warrior into a blessed hero.",
        image: '/Images/Paladin.png',
      },
    Ranger: {
      description: 'Far from the bustle of cities and towns, behind the fences that protect the most distant farms from the horrors of the wild, among dense trees, pathless forests and on the vast expanses of the vast plains, the rangers carry out their endless watch.',
      image: '/Images/Ranger.png',
    },
    Rogue: {
        description: "Rogues rely on skill, stealth, and their enemies' vulnerabilities to gain the upper hand in any situation. They have the knack for finding a solution to any situation, demonstrating the resourcefulness and flexibility that are the cornerstones of any successful group of adventurers.",
        image: '/Images/Rogue.png',
      },
    Sorcerer: {
        description: 'Sorcerers are carriers of magic bestowed upon them at birth by their exotic bloodline, some otherworldly influence, or the influence of unknown universal forces. No one can learn sorcery, like learning a language, just as no one can teach how to live a legendary life. No one can choose the path of sorcery; the power itself chooses the bearer.',
        image: '/Images/Sorcerer.png',
      },
    Warlock: {
      description: 'Warlocks are seekers of knowledge that lurk in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks discover magical effects, both subtle and impressive. Warlocks fuel their powers with the ancient knowledge of creatures such as fairies, demons, devils, hags and alien entities of the Far Reach.',
      image: '/Images/Warlock.png',
    },
    Wizard: {
        description: 'Wizards are adepts of high magic, united by the type of their spells. Drawing on the subtle weaves of magic that permeate the universe, wizards are able to create spells of explosive fire, sparkling lightning, subtle deception and brutal mind control. Their magic summons monsters from other planes of existence, predicts the future, and turns defeated enemies into zombies. Their most powerful spells can transform one substance into another, call meteorites from the sky, and open portals to other worlds.',
        image: '/Images/Wizard.png',
      },
    Alchemist: {
        description: "It doesn't matter whether alchemists create something explosive, transformative, or healing - they live to change the world around them at will.",
        image: '/Images/Alchemist.png',
      },
    'Alternate Fighter': {
      description: 'A versatile warrior whose combat skills adapt to any situation, mastering unconventional techniques to overcome challenges.',
      image: '/Images/Alternate_Fighter.png',
      }, 
    'Blood Hunter': {
        description: 'Blood Hunters are intelligent warriors driven by an unending determination to destroy evils old and new. Armed with the rites of arcane blood magic and the willingness to sacrifice their own life force and humanity for the sake of their cause, they protect the world from darkness, always being prepared to avoid becoming the same monsters they hunt.',
        image: '/Images/Blood_hunter.png',
      },
    Runekeeper: {
        description: 'Keepers of ancient and unchanging truths, keepers of runes gain their power through contemplation and change of the laws of reality, for runes are not just some kind of alphabet, but sacred and infallible schemes of the Plan of Creation. As the name suggests, Runekeepers are the guardians and torchbearers of this knowledge. They not only keep this wisdom alive, but also protect others from possible threats posed by its power.',
        image: '/Images/Runekeeper.png',
      },
    Succubus: {
        description: 'A seductive and cunning entity that manipulates emotions and desires to achieve its goals, blending charm with dark magic.',
        image: '/Images/Succubus.png',
      },   

  },
  ru: {
    Изобретатель: {
        description: 'Изобретатели — величайшие мастера пробуждать магию в обычных предметах. Они рассматривают магию как сложную систему, которую следует расшифровать и применять в заклинаниях и изобретениях. Для направления своей магической силы они используют различные инструменты. Накладывая заклинание, изобретатель может использовать принадлежности алхимика для создания мощного эликсира, набор каллиграфа, чтобы нарисовать знак силы на доспехах союзника или инструменты ремонтника, чтобы создать временный амулет. Магия изобретателей связана с их инструментами и способностями, и мало кто, кроме них, сможет создать правильный рабочий инструмент.',
        image: '/Images/Artificer.png',
      },
    Варвар: {
      description: 'Несмотря на разнообразие, всех варваров объединяет одно — их ярость. Необузданный, неугасимый и бездумный гнев. Не просто эмоция, их ярость как свирепость загнанного в угол хищника, как безжалостный удар урагана, как штормовые валы океана. Ярость некоторых из них проистекает из общения со свирепыми духами животных. Другие черпают её из злости на полную боли и страдания действительность. Но для каждого варвара ярость — это источник не только боевого безумия, но и невероятных рефлексов, стойкости, а также непревзойдённой силы.',
      image: '/Images/Barbarian.png',
    },
    Бард: {
        description: 'Неважно, кем является бард: учёным, скальдом или проходимцем; он плетёт магию из слов и музыки, вдохновляя союзников, деморализуя противников, манипулируя сознанием, создавая иллюзии, и даже исцеляя раны.',
        image: '/Images/Bard.png',
      },
    Жрец: {
      description: 'Жрецы являются посредниками между миром смертных и далёкими мирами богов. Настолько же разные, насколько боги, которым они служат, жрецы воплощают работу своих божеств. В отличие от обычного проповедника, жрец наделён божественной магией.',
      image: '/Images/Cleric.png',
    },
    Друид: {
        description: 'Призывая стихии или подражая животным, друиды воплощают незыблемость, приспособляемость и гнев природы. Они ни в коем случае не владыки природы — вместо этого друиды ощущают себя частью её неодолимой воли.',
        image: '/Images/Druid.png',
      },
    Воин: {
      description: 'Опытный гладиатор сражается на арене и хорошо знает, как использовать свои трезубец и сеть, чтобы опрокинуть противника и обойти его, вызывая ликование публики и получая тактическое преимущество. Меч его противника вспыхивает голубым светом и испускает сверкающую молнию. Все эти герои — воины. Представители, возможно, самого разнообразного класса в мире D&D. Странствующие рыцари, военачальники-завоеватели, королевские чемпионы, элитная пехота, бронированные наёмники и короли разбоя — будучи воинами, все они мастерски владеют оружием, доспехами, и приёмами ведения боя. А еще они хорошо знакомы со смертью — они несут её сами, и часто смотрят в её холодные глаза.',
      image: '/Images/Fighter.png',
    },
    Монах: {
        description: 'Вне зависимости от выбранной дисциплины, всех монахов объединяет одно — возможность управлять энергией, текущей в их телах. Вне зависимости от того, проявляется ли она выдающимися боевыми способностями, или чуть заметным усилением защиты и скорости, эта энергия влияет на всё, что делает монах.',
        image: '/Images/Monk.png',
      },
    Паладин: {
        description: 'Вне зависимости от происхождения и миссии, паладинов объединяет их клятва противостоять силам зла. Принесённая ли перед алтарём бога и заверенная священником, или же на священной поляне перед духами природы и феями, или в момент отчаяния и горя смерти, присяга паладина — могущественный договор. Это источник силы, который превращает набожного воина в благословенного героя.',
        image: '/Images/Paladin.png',
      },
    Следопыт: {
      description: 'Вдали от суеты городов и посёлков, за изгородями, которые защищают самые далёкие фермы от ужасов дикой природы, среди плотно стоящих деревьев, беспутья лесов и на просторах необъятных равнин следопыты несут свой бесконечный дозор.      ',
      image: '/Images/Ranger.png',
    },
    Плут: {
        description: 'Плуты полагаются на мастерство, скрытность и уязвимые места врагов, чтобы взять верх в любой ситуации. У них достаточно сноровки для нахождения решения в любой ситуации, демонстрируя находчивость и гибкость, которые являются краеугольным камнем любой успешной группы искателей приключений.',
        image: '/Images/Rogue.png',
      },
    Чародей: {
        description: 'Чародеи являются носителями магии, дарованной им при рождении их экзотической родословной, неким потусторонним влиянием или воздействием неизвестных вселенских сил. Никто не может обучиться чародейству, как, например, выучить язык, так же как никто не может обучить, как прожить легендарную жизнь. Никто не может избрать путь чародейства, сила сама выбирает носителя.',
        image: '/Images/Sorcerer.png',
      },
    Колдун: {
      description: 'Колдуны — искатели знаний, что скрываются в ткани мультивселенной. Через договор, заключённый с таинственными существами сверхъестественной силы, колдуны открывают для себя магические эффекты, как едва уловимые, так и впечатляющие воображение. Колдуны подпитывают свои силы древними знаниями таких существ как феи, демоны, дьяволы, карги и чужеродные сущности Дальнего Предела.',
      image: '/Images/Warlock.png',
    },
    Волшебник: {
        description: 'Волшебники — адепты высшей магии, объединяющиеся по типу своих заклинаний. Опираясь на тонкие плетения магии, пронизывающей вселенную, волшебники способны создавать заклинания взрывного огня, искрящихся молний, тонкого обмана и грубого контроля над сознанием. Их магия вызывает чудовищ с других планов бытия, предсказывает будущее и обращает поверженных врагов в зомби. Их самые могущественные заклинания могут превращать одно вещество в другое, вызывать метеориты с небес и открывать порталы в другие миры.',
        image: '/Images/Wizard.png',
      },
    Алхимик: {
        description: 'Неважно, создают ли алхимики что-то взрывоопасное, преобразующее или исцеляющее — они живут для того, чтобы изменять окружающий мир по своему желанию.',
        image: '/Images/Alchemist.png',
      },
    'Альтернативный Воин': {
      description: 'Разносторонний воин, чьи боевые навыки адаптируются к любой ситуации, овладевая нестандартными техниками для преодоления трудностей.',
      image: '/Images/Alternate_Fighter.png',
      },
    'Кровавый охотник': {
        description: 'Кровавые охотники — умные воины, движимые нескончаемой решимостью уничтожить старое и новое зло. Вооружённые обрядами тайной магией крови и готовностью пожертвовать своей собственной жизненной силой и человечностью ради своего дела, они защищают мир от тьмы, всегда будучи наготове, чтобы не стать теми же монстрами, на которых они охотятся.',
        image: '/Images/Blood_hunter.png',
      },
    'Хранитель рун': {
        description: 'Хранители древних и неизменных истин, хранители рун обретают свою силу через созерцание и изменение законов реальности, ибо руны — это не просто какой-то алфавит, а священные и непогрешимые схемы Плана Творения. Как следует из названия, хранители рун являются хранителями и факелоносцами этого знания. Они не только сохраняют эту мудрость живой, но и защищают других от возможных угроз, исходящих от её мощи.',
        image: '/Images/Runekeeper.png',
      },
    Суккуб: {
        description: 'Соблазнительная и хитрая сущность, манипулирующая эмоциями и желаниями для достижения своих целей, сочетая обаяние с тёмной магией.',
        image: '/Images/Succubus.png',
      },
  },
};

const Class = ({ selectedClass, language }) => {
  const classData = classDescriptions[language]?.[selectedClass];

  if (!selectedClass) {
    return (
      <div className="class-box">
        <p>{language === 'en' ? 'Select a race to see its description.' : 'Выберите расу, чтобы увидеть описание.'}</p>
      </div>
    );
  }

  if (!classData) {
    return (
      <div className="class-box">
        <p>{language === 'en' ? 'Description not available.' : 'Описание недоступно.'}</p>
      </div>
    );
  }

  return (
    <div className="class-box">
      <img src={classData.image} alt={selectedClass} className="class-image" />
      <p className="class-description">{classData.description}</p>
    </div>
  );
};

export default Class;
