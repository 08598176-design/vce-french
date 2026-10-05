/* flow.js — the fifteen minutes, in order.

   The order of the room, what the assessors do, and the timings come from
   VCAA's Revised Second Language Oral Examination videos 1 to 4, whose
   transcripts are in this repository. The French put in the assessors'
   mouths is a draft: VCAA describes what they do, not the sentences they
   use.

   The entry block also carries a short list of what a French speaker would
   notice on the way in and on the way out, which is the part no VCAA
   document covers because it is different in every language.

   The strategies are the most important thing in this file. Every assessor
   report from 2020 to 2025 lists repair strategies under what students
   should practise, and silence under what costs marks.

   One window. line, then pure JSON. No comments inside the object.      */

window.FR_FLOW = {
  "schema_version": 1,
  "verified": true,
  "assumption": "The order of the room and everything the assessors do comes from VCAA's Revised Second Language Oral Examination videos 1 to 4, whose transcripts are in this repository, and is confirmed by the French assessor reports. What is still a draft is the French wording put in the assessors' mouths: VCAA describes what they do, not the sentences they use, so the French below was written for this app and a French teacher should read it.",
  "entry": {
    "name_fr": "L'entrée",
    "name_en": "Walking in",
    "about": "None of this is assessed and all of it has to happen. An assessor collects you from outside, the recorder starts the moment you walk in, and the first thing you do in French is greet two people you have never met.",
    "steps": [
      {
        "who": "assessor",
        "fr": "Bonjour. Entrez, je vous en prie.",
        "en": "Hello. Come in, please.",
        "note": "An assessor collects you from outside the room. The recorder starts as you walk in."
      },
      {
        "who": "you",
        "fr": "Bonjour, madame. Bonjour, monsieur.",
        "en": "Good morning. Good morning.",
        "note": "Greet both of them, separately. Then wait to be asked to sit."
      },
      {
        "who": "assessor",
        "fr": "Asseyez-vous, s'il vous plaît.",
        "en": "Please sit down."
      },
      {
        "who": "you",
        "fr": "Merci.",
        "en": "Thank you."
      },
      {
        "who": "assessor",
        "fr": "Quel est votre numéro de candidat ?",
        "en": "What is your student number?",
        "note": "Asked in French. This is the one and only question you answer in English."
      },
      {
        "who": "you",
        "fr": "C'est le 74635297 L.",
        "en": "It is 74635297 L.",
        "note": "Eight numbers and a letter, in English. Say the letter too, and slowly. They may ask you to repeat it."
      },
      {
        "who": "assessor",
        "fr": "Et quel est le sujet de votre discussion ?",
        "en": "And what is the subject of your discussion?",
        "note": "Now, before the conversation, so your subtopic stays out of Section 1."
      },
      {
        "who": "you",
        "fr": "Mon sujet, c'est ＿＿＿＿. Et voici mon image.",
        "en": "My subject is ＿＿＿＿. And here is my image.",
        "note": "Say it clearly: every report from 2021 on says assessors need to know exactly what you want to discuss. Hand over the image now."
      },
      {
        "who": "assessor",
        "fr": "Très bien, merci. Alors, commençons la conversation.",
        "en": "Very good, thank you. Right, let us begin the conversation.",
        "note": "An assessor says when Section 1 starts. VCAA's own example is 'let's start the conversation now'."
      }
    ],
    "culture": [
      "Greet each assessor separately: Bonjour madame, bonjour monsieur. A single bonjour to the room is the one thing a French speaker would notice.",
      "Vous, from the first word to the last, in both directions. In French the risk is never being too polite.",
      "Do not put your hand out. A handshake is normal between adults meeting in a professional setting, but you are the one being examined; if an assessor offers, take it.",
      "Wait to be asked to sit, and say merci when you are.",
      "Never leave a French room without saying au revoir. Leaving in silence reads as rudeness, not shyness.",
      "Madame and monsieur on their own are the polite forms here. You will not know their surnames, and you do not need them."
    ]
  },
  "section1": {
    "about": "Approximately seven minutes about your own world and about being a learner of French. The assessors already have your subtopic and will stay off it. They take it in turns, they may interrupt, and they may rephrase. None of that means anything has gone wrong.",
    "phases": [
      {
        "id": "opener",
        "n": 1,
        "name_en": "The opening question",
        "about": "Almost always one of a few: your free time, this year's study, your family, your plans, or a part-time job."
      },
      {
        "id": "personal",
        "n": 3,
        "name_en": "Your own world",
        "about": "They follow whatever you give them, so the first answer largely decides what comes next."
      },
      {
        "id": "francais",
        "n": 2,
        "name_en": "Learning French",
        "about": "How long, why you chose it, what is hard, what you enjoy."
      },
      {
        "id": "culture",
        "n": 2,
        "name_en": "French culture and you",
        "about": "Your contact with it: travel, film, music, food, family."
      }
    ],
    "probes": [
      {
        "fr": "Pouvez-vous expliquer un peu plus ?",
        "en": "Could you explain a little more?"
      },
      {
        "fr": "Pourquoi est-ce que vous dites cela ?",
        "en": "Why do you say that?"
      },
      {
        "fr": "Pouvez-vous me donner un exemple ?",
        "en": "Can you give me an example?"
      },
      {
        "fr": "Et qu'est-ce que vous en pensez ?",
        "en": "And what do you think about it?"
      },
      {
        "fr": "Est-ce que ça a toujours été comme ça ?",
        "en": "Has it always been like that?"
      }
    ]
  },
  "section2": {
    "transition": {
      "fr": "Bien. Passons maintenant à la deuxième partie, à votre sujet.",
      "en": "Right. Let us move now to the second section, to your subject."
    },
    "about": "Approximately eight minutes on your subtopic. There is no one-minute introduction to give: the first question does that job. Both assessors may ask. Refer to your image throughout, not once at the start.",
    "moves": [
      {
        "id": "define",
        "label_en": "What it is",
        "label_fr": "De quoi s'agit-il",
        "about": "The opening question. Say what it is, then name two or three parts of it you have researched."
      },
      {
        "id": "facts",
        "label_en": "Who, where, when",
        "label_fr": "Qui, où, quand",
        "about": "The plain factual questions. Numbers and dates earn marks."
      },
      {
        "id": "how",
        "label_en": "How and why",
        "label_fr": "Comment et pourquoi",
        "about": "Where the marks start: not what happens, but why."
      },
      {
        "id": "good",
        "label_en": "Good points",
        "label_fr": "Les avantages",
        "about": "What is good about it, and for whom."
      },
      {
        "id": "bad",
        "label_en": "Bad points",
        "label_fr": "Les inconvénients",
        "about": "Problems. Most students manage this much."
      },
      {
        "id": "fix",
        "label_en": "Solutions",
        "label_fr": "Les solutions",
        "about": "What could be done. This is what separates a prepared answer from a good one."
      },
      {
        "id": "image",
        "label_en": "Your image",
        "label_fr": "Votre image",
        "about": "Bring the image in when it helps a point, not only at the start."
      },
      {
        "id": "compare",
        "label_en": "Compared with Australia",
        "label_fr": "La comparaison avec l'Australie",
        "about": "Comparison is named in the criteria. Have one ready."
      },
      {
        "id": "final",
        "label_en": "The last questions",
        "label_fr": "Pour finir",
        "about": "Why you chose it, what you think of it, and what happens next."
      }
    ],
    "strategies": [
      {
        "fr": "Excusez-moi, pouvez-vous répéter, s'il vous plaît ?",
        "en": "Sorry, could you repeat that please?",
        "note": "The first thing to reach for. Assessors expect to repeat; the reports list this under what to practise, not under what loses marks."
      },
      {
        "fr": "Excusez-moi, pouvez-vous reformuler la question, s'il vous plaît ?",
        "en": "Sorry, could you put the question another way, please?",
        "note": "Better than a second repetition if it was the wording you did not follow. Named in both the 2024 and 2025 reports."
      },
      {
        "fr": "Pardon, qu'est-ce que ça veut dire, ＿＿ ?",
        "en": "Sorry, what does ＿＿ mean?",
        "note": "Narrow it to the one word. It shows you followed the rest."
      },
      {
        "fr": "Alors, si je comprends bien, vous me demandez ＿＿ ?",
        "en": "So, if I understand correctly, you are asking me ＿＿?",
        "note": "Check before you commit. The 2025 report says it is always better to ask than to answer something you were not asked."
      },
      {
        "fr": "Il faut que je réfléchisse à la question.",
        "en": "I need to think about that question.",
        "note": "Quoted in the 2022 report as a structure that lifted the language mark. It buys a few seconds and sounds like control, not panic."
      },
      {
        "fr": "Excusez-moi, je n'ai pas étudié cela, mais j'ai étudié ＿＿.",
        "en": "Sorry, I have not studied that, but I have studied ＿＿.",
        "note": "Steering, not stalling. Better than silence and better than a rehearsed answer to a different question."
      },
      {
        "fr": "Ce qui me fait penser à ＿＿.",
        "en": "Which makes me think of ＿＿.",
        "note": "The hinge that turns an answer into the next thing you wanted to say. Every report from 2023 on asks students to lead."
      },
      {
        "fr": "Si je peux ajouter quelque chose, ＿＿.",
        "en": "If I may add something, ＿＿.",
        "note": "Adds without being asked, which the 2024 report describes as the shape of a high-scoring answer."
      },
      {
        "fr": "Je dois dire que ＿＿.",
        "en": "I must say that ＿＿.",
        "note": "From the 2022 report. Turns a fact into an opinion, which is the single most repeated instruction across six years."
      }
    ]
  },
  "exit": {
    "name_fr": "La sortie",
    "name_en": "Walking out",
    "steps": [
      {
        "who": "assessor",
        "fr": "Bien, c'est tout pour aujourd'hui. Merci beaucoup.",
        "en": "Right, that is all for today. Thank you very much."
      },
      {
        "who": "you",
        "fr": "Merci beaucoup, madame. Merci, monsieur.",
        "en": "Thank you very much. Thank you."
      },
      {
        "who": "you",
        "fr": "Au revoir, madame. Au revoir, monsieur. Bonne journée.",
        "en": "Goodbye. Goodbye. Have a good day.",
        "note": "Bonne journée is ordinary and warm, and costs nothing. Do not leave in silence."
      }
    ],
    "about": "An assessor tells you when the fifteen minutes are up. Leaving the room properly is not marked and is the last thing two French speakers will remember."
  },
  "ui": {
    "rate": {
      "fr": "Et à cette vitesse, ça va ?",
      "en": "How is this speed?",
      "note": "Spoken when the speed button is pressed."
    }
  }
};
