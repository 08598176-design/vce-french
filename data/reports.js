/* reports.js — what the French assessors have actually written, 2020-2025.

   Six VCE French oral external assessment reports, condensed. The point of
   this file is that nothing in the Exercices tab is invented: every drill
   traces back to a sentence an assessor wrote about real candidates.

   On the error list. Where a report prints both the mistake and the
   correction, the correction here is theirs and "from_report" is true.
   Where a report prints only the mistake, which the 2021 one does, the
   correction here was written for this app and "from_report" is false.
   Those are the ones a French teacher should read first.

   One window. line, then pure JSON. No comments inside the object.      */

window.FR_REPORTS = {
  "schema_version": 1,
  "years": [
    {
      "year": 2020,
      "points": [
        "Questions may come in a different order from the one you expect, and at a range of difficulty.",
        "Assessors may interrupt you to ask a question in either section. That is normal in a discussion, not a sign you are going wrong.",
        "Assessors may repeat or rephrase a question.",
        "Normal variation in assessor body language is to be expected and means nothing.",
        "Students were well prepared on their personal world but less so on being a learner of French.",
        "Some subtopics were too ambitious, too narrow or too vague, and only allowed facts rather than a discussion.",
        "Memorised answers left students unable to look at the subtopic from a new angle."
      ]
    },
    {
      "year": 2021,
      "points": [
        "There are no set questions. A rote-learned script does not survive a question worded differently.",
        "High scorers carried the conversation forward and used complex structures on questions they had not rehearsed.",
        "Weak responses stayed factual and offered almost no opinions.",
        "An image with rich detail gives more to discuss. The image itself is not marked; the discussion is.",
        "Say clearly what your subtopic is, so the assessors know what you want to talk about."
      ]
    },
    {
      "year": 2022,
      "points": [
        "Each section is marked on content and communication, and on language. Ten marks each, forty in total.",
        "High scorers left natural pauses so the assessors could ask a question, which made it a conversation rather than a speech.",
        "Short basic answers were the main thing separating middle from high.",
        "Connectives and set structures lifted the language mark: je dois dire que, c'est très gratifiant, il faut que je réfléchisse à la question.",
        "Students who scored badly in Section 2 had not researched the subtopic properly and could not clarify when asked."
      ]
    },
    {
      "year": 2023,
      "points": [
        "Lead the conversation where you can, rather than waiting to be asked.",
        "Answer the question first, then elaborate. Several students did it the other way round.",
        "Revise the verbs that take être as their auxiliary.",
        "Supply key words about your subtopic so the assessors can use them to start the discussion.",
        "Students talked well about travel to France, New Caledonia, and AFTV or Alliance Française events."
      ]
    },
    {
      "year": 2024,
      "points": [
        "Answer, then add extra relevant detail and an opinion without being prompted. That was the shape of a high-scoring answer.",
        "Work out how your topics connect, so one answer can lead into the next thing you want to say.",
        "Be ready to ask an assessor to rephrase or clarify.",
        "Choose the subtopic first and the image afterwards, so the image fits the ideas you want to express.",
        "Point at a part of the image and explain which idea it stands for. Do not describe it."
      ]
    },
    {
      "year": 2025,
      "points": [
        "Link information and lead the conversation in a new direction rather than waiting for the next question.",
        "A subtopic that is too hard leaves you without the vocabulary; one that is too narrow runs out after two minutes.",
        "Do not list facts without a point of view, and do not pass general knowledge off as research.",
        "Make sure you have understood the question. Asking is always better than answering something else.",
        "Refer to the image throughout, not once at the start."
      ]
    }
  ],
  "themes": [
    {
      "id": "no-script",
      "name": "A script will not survive the room",
      "years": [
        2020,
        2021,
        2022,
        2024,
        2025
      ],
      "what": "Every report but one says it. There are no set questions, the wording will differ from what you practised, and a memorised answer aimed at a question you were not asked reads worse than a simple answer that fits.",
      "do": "Practise the same idea three or four different ways instead of one answer word for word."
    },
    {
      "id": "lead",
      "name": "Carry the conversation forward",
      "years": [
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "what": "The difference between a good mark and a high one is who is doing the work. High scorers answer, add something unasked, and open the next door themselves.",
      "do": "Answer the question first. Then one more sentence of detail, then an opinion. Then leave a pause."
    },
    {
      "id": "repair",
      "name": "Repair strategies are marked, not penalised",
      "years": [
        2020,
        2023,
        2024,
        2025
      ],
      "what": "Asking an assessor to repeat or rephrase is listed under what students should practise. Going quiet, or answering a question you did not understand, is what costs marks.",
      "do": "Have three lines ready and say one of them out loud rather than pausing."
    },
    {
      "id": "grammar",
      "name": "The same four grammar errors, every year",
      "years": [
        2021,
        2023,
        2024,
        2025
      ],
      "what": "Noun gender, the verbs that take être in the passé composé, avoir for age, and stressed pronouns after a preposition. The reports print the actual sentences.",
      "do": "The Exercices tab is built from those sentences."
    },
    {
      "id": "subtopic",
      "name": "The subtopic decides the mark before you walk in",
      "years": [
        2020,
        2021,
        2023,
        2024,
        2025
      ],
      "what": "Too hard and you have no vocabulary for it. Too narrow and you run out. Too vague and there is nothing to argue about. It has to interest you enough that you have a view.",
      "do": "Pick something you can hold an opinion about, then check you can say three different things on it."
    },
    {
      "id": "image",
      "name": "The image is a springboard, not a subject",
      "years": [
        2020,
        2021,
        2022,
        2024,
        2025
      ],
      "what": "The image is not marked. Describing it is explicitly the satisfactory band. Using it to launch an idea, and returning to it, is the top band.",
      "do": "Point at a part of it and say which of your ideas it stands for."
    },
    {
      "id": "opinion",
      "name": "Facts without a view are not research",
      "years": [
        2022,
        2024,
        2025
      ],
      "what": "Three reports use almost the same sentence. Assessors will ask why a fact matters and what you think about it.",
      "do": "Attach an opinion to every fact before you walk in."
    }
  ],
  "errors": [
    {
      "wrong": "le nourriture",
      "right": "la nourriture",
      "en": "the food",
      "kind": "gender",
      "year": 2024,
      "from_report": true,
      "why": "Nourriture is feminine. The reports name gender agreement every single year, and it is the cheapest mark in the examination to lose."
    },
    {
      "wrong": "le musique",
      "right": "la musique",
      "en": "the music",
      "kind": "gender",
      "year": 2024,
      "from_report": true,
      "why": "Musique is feminine. Learn the article with the noun, never the noun on its own."
    },
    {
      "wrong": "le culture",
      "right": "la culture",
      "en": "the culture",
      "kind": "gender",
      "year": 2024,
      "from_report": true,
      "why": "Culture is feminine, and it is a word that comes up in almost every conversation about being a learner of French."
    },
    {
      "wrong": "un grand ville",
      "right": "une grande ville",
      "en": "a big town or city",
      "kind": "gender",
      "year": 2025,
      "from_report": true,
      "why": "Ville is feminine, so the article and the adjective both move: une, and grande."
    },
    {
      "wrong": "un des raisons",
      "right": "une des raisons",
      "en": "one of the reasons",
      "kind": "gender",
      "year": 2025,
      "from_report": true,
      "why": "Raison is feminine. Une des, not un des."
    },
    {
      "wrong": "j'ai resté",
      "right": "je suis resté",
      "en": "I stayed",
      "kind": "auxiliary",
      "year": 2025,
      "from_report": true,
      "why": "Rester takes être in the passé composé."
    },
    {
      "wrong": "j'ai allé",
      "right": "je suis allé",
      "en": "I went",
      "kind": "auxiliary",
      "year": 2025,
      "from_report": true,
      "why": "Aller takes être. This one appears in the 2024 report as well, and the 2023 report asks for the whole être group to be revised."
    },
    {
      "wrong": "Je n'ai jamais allé en France.",
      "right": "Je ne suis jamais allé en France.",
      "en": "I have never been to France.",
      "kind": "auxiliary",
      "year": 2021,
      "from_report": false,
      "why": "Still aller, still être, and the negative goes around the auxiliary: ne suis jamais allé."
    },
    {
      "wrong": "j'ai vouloir",
      "right": "j'ai voulu",
      "en": "I wanted",
      "kind": "verb form",
      "year": 2024,
      "from_report": true,
      "why": "The past participle of vouloir is voulu. An infinitive cannot follow avoir in the passé composé."
    },
    {
      "wrong": "Elle est travaillé tout le temps.",
      "right": "Elle travaille tout le temps.",
      "en": "She works all the time.",
      "kind": "verb form",
      "year": 2021,
      "from_report": false,
      "why": "This is a present-tense idea, so it needs the present tense. Travailler also takes avoir, not être, when it is in the past."
    },
    {
      "wrong": "Sur le weekend, j'adore cuisinaire une gâteau.",
      "right": "Le week-end, j'adore cuisiner un gâteau.",
      "en": "At the weekend I love baking a cake.",
      "kind": "several",
      "year": 2021,
      "from_report": false,
      "why": "Three things at once: sur le weekend is English word for word, cuisinaire is not a verb, and gâteau is masculine."
    },
    {
      "wrong": "elle est 60 ans",
      "right": "elle a 60 ans",
      "en": "she is 60 years of age",
      "kind": "avoir",
      "year": 2025,
      "from_report": true,
      "why": "Age is something you have in French, not something you are."
    },
    {
      "wrong": "Il est 20 et il est à université pour devenir une medecine.",
      "right": "Il a 20 ans et il est à l'université pour devenir médecin.",
      "en": "He is 20 and he is at university to become a doctor.",
      "kind": "several",
      "year": 2021,
      "from_report": false,
      "why": "Age with avoir and the word ans; l'université with the article; and a job after devenir takes no article at all. Médecin is the doctor, la médecine is the subject."
    },
    {
      "wrong": "avec il",
      "right": "avec lui",
      "en": "with him",
      "kind": "pronoun",
      "year": 2024,
      "from_report": true,
      "why": "After a preposition French uses the stressed pronoun: lui, elle, eux, elles."
    },
    {
      "wrong": "avec ils",
      "right": "avec eux",
      "en": "with them",
      "kind": "pronoun",
      "year": 2024,
      "from_report": true,
      "why": "Same rule. Eux after a preposition, never ils."
    },
    {
      "wrong": "Je voudrais un ingénieur.",
      "right": "Je voudrais être ingénieur.",
      "en": "I would like to be an engineer.",
      "kind": "job",
      "year": 2021,
      "from_report": false,
      "why": "A job after être, devenir or travailler comme takes no article in French. And the sentence needs the verb."
    }
  ],
  "subtopics_seen": [
    {
      "fr": "La mode éphémère",
      "en": "Fast fashion",
      "years": [
        2023,
        2025
      ]
    },
    {
      "fr": "L'influence de la gastronomie française",
      "en": "The influence of French gastronomy",
      "years": [
        2022,
        2023
      ]
    },
    {
      "fr": "Les réseaux sociaux et leur impact chez les jeunes",
      "en": "Social media and its impact on young people",
      "years": [
        2021,
        2022
      ]
    },
    {
      "fr": "Coco Chanel et son impact dans le monde de la mode",
      "en": "Coco Chanel and her impact on fashion",
      "years": [
        2022
      ]
    },
    {
      "fr": "La mini-jupe dans les années 60",
      "en": "The miniskirt in the sixties",
      "years": [
        2022
      ]
    },
    {
      "fr": "Pourquoi les Français manifestent-ils autant ?",
      "en": "Why do the French protest so much?",
      "years": [
        2021,
        2022
      ]
    },
    {
      "fr": "Le changement du rôle des femmes à travers les siècles",
      "en": "The changing role of women through the centuries",
      "years": [
        2021
      ]
    },
    {
      "fr": "La collaboration des femmes pendant la Deuxième Guerre mondiale",
      "en": "Women during the Second World War",
      "years": [
        2021
      ]
    },
    {
      "fr": "Comment la valeur de la liberté se manifeste dans la société française",
      "en": "How the value of liberty shows itself in French society",
      "years": [
        2021
      ]
    },
    {
      "fr": "Le baron Haussmann",
      "en": "Baron Haussmann and the rebuilding of Paris",
      "years": [
        2025
      ]
    },
    {
      "fr": "La Belle Époque",
      "en": "La Belle Époque",
      "years": [
        2025
      ]
    },
    {
      "fr": "Édith Piaf",
      "en": "Édith Piaf",
      "years": [
        2025
      ]
    },
    {
      "fr": "Le Panthéon",
      "en": "The Panthéon",
      "years": [
        2025
      ]
    }
  ],
  "high_scoring": [
    {
      "fr": "J'aimerais ne pas devoir porter l'uniforme, de cette manière, j'aurais l'opportunité de choisir quoi porter en fonction du temps qu'il fait.",
      "en": "I wish I did not have to wear a uniform; that way I would be able to choose what to wear depending on the weather.",
      "why": "Conditional twice, and a reason attached without being asked.",
      "year": 2021
    },
    {
      "fr": "Je dirais que j'ai de la chance puisqu'avec ma sœur nous avons beaucoup d'atomes crochus.",
      "en": "I would say I am lucky, since my sister and I have a lot in common.",
      "why": "Je dirais que softens it into an opinion, and avoir des atomes crochus is an idiom rather than a translation.",
      "year": 2021
    },
    {
      "fr": "Je trouve que participer à des activités en équipe est amusant. En effet, ça me permet de développer mon esprit d'équipe. Prenons l'exemple d'un match de foot, on ne peut gagner que si les joueurs sont solidaires et se soutiennent.",
      "en": "I find team activities fun. They let me build team spirit. Take a football match: you only win if the players stick together and support each other.",
      "why": "Opinion, reason, then a worked example. This is the whole shape of a top-band answer in three sentences.",
      "year": 2021
    }
  ],
  "structures": [
    {
      "fr": "je dois dire que",
      "en": "I must say that",
      "year": 2022
    },
    {
      "fr": "après avoir oublié de faire mon travail",
      "en": "after forgetting to do my work",
      "year": 2022
    },
    {
      "fr": "c'est très gratifiant",
      "en": "it is very rewarding",
      "year": 2022
    },
    {
      "fr": "il faut que je réfléchisse à la question",
      "en": "I need to think about that question",
      "year": 2022
    }
  ],
  "not_included": "The 2021 report also prints 'L'ecole provide les etudiants' and 'Especiallement, il est bon idee jouer le sport pour mon sante physicale'. The first is left out because what the student meant cannot be worked out from the sentence; the second is in the list but its correction was written here, not by VCAA."
};
