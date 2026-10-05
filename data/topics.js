/* topics.js — subtopics for Section 2, and the nine directions a question
   can take.

   Every subtopic here is one the VCE French assessor reports actually name
   as having been brought into the room, 2021 to 2025. They are not invented
   and they are not a recommendation: they are what other students chose,
   offered so a student can see the shape of a workable subtopic before
   choosing their own.

   Each subtopic carries two questions for each of the nine moves, so a
   student can take the same direction twice and get something new. The
   French in them is a draft and has not been read by a French teacher.

   One window. line, then pure JSON. No comments inside the object.      */

window.FR_TOPICS = {
  "schema_version": 2,
  "moves": [
    "define",
    "facts",
    "how",
    "good",
    "bad",
    "fix",
    "image",
    "compare",
    "final"
  ],
  "topics": [
    {
      "id": "mode-ephemere",
      "name_fr": "La mode éphémère",
      "name_en": "Fast fashion",
      "theme": "The world around us",
      "blurb_en": "Named in the 2023 report as a higher-scoring subtopic and again in 2025. It has the shape the reports ask for: wide enough to argue about, concrete enough to research.",
      "key_vocab": [
        {
          "fr": "la mode éphémère",
          "en": "fast fashion"
        },
        {
          "fr": "un vêtement",
          "en": "an item of clothing"
        },
        {
          "fr": "une usine",
          "en": "a factory"
        },
        {
          "fr": "la main-d'œuvre",
          "en": "the workforce, labour"
        },
        {
          "fr": "le gaspillage",
          "en": "waste"
        },
        {
          "fr": "une décharge",
          "en": "a landfill site"
        },
        {
          "fr": "la surconsommation",
          "en": "overconsumption"
        },
        {
          "fr": "une marque",
          "en": "a brand"
        },
        {
          "fr": "d'occasion",
          "en": "second-hand"
        },
        {
          "fr": "durable",
          "en": "sustainable, long-lasting"
        }
      ],
      "questions": [
        {
          "id": "mode-ephemere-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "« La mode éphémère » : de quoi s'agit-il exactement ?",
          "question_en": "Fast fashion: what exactly is it about?"
        },
        {
          "id": "mode-ephemere-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce que vous définiriez la mode éphémère à quelqu'un qui n'en a jamais entendu parler ?",
          "question_en": "How would you define fast fashion to someone who had never heard of it?"
        },
        {
          "id": "mode-ephemere-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelles sont les grandes marques de la mode éphémère ?",
          "question_en": "Which are the big fast-fashion brands?"
        },
        {
          "id": "mode-ephemere-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Dans quels pays est-ce que ces vêtements sont fabriqués ?",
          "question_en": "Which countries are these clothes made in?"
        },
        {
          "id": "mode-ephemere-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que ces vêtements coûtent si peu cher ?",
          "question_en": "Why are these clothes so cheap?"
        },
        {
          "id": "mode-ephemere-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce que la mode éphémère a changé notre façon d'acheter ?",
          "question_en": "How has fast fashion changed the way we buy?"
        },
        {
          "id": "mode-ephemere-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce qu'il y a des avantages à la mode éphémère ?",
          "question_en": "Are there any advantages to fast fashion?"
        },
        {
          "id": "mode-ephemere-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pour qui est-ce que la mode éphémère est une bonne chose ?",
          "question_en": "Who is fast fashion good for?"
        },
        {
          "id": "mode-ephemere-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quels sont les problèmes posés par la mode éphémère ?",
          "question_en": "What problems does fast fashion cause?"
        },
        {
          "id": "mode-ephemere-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est l'effet sur l'environnement ?",
          "question_en": "What is the effect on the environment?"
        },
        {
          "id": "mode-ephemere-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'on pourrait faire pour changer la situation ?",
          "question_en": "What could be done to change the situation?"
        },
        {
          "id": "mode-ephemere-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "À votre avis, est-ce que c'est au consommateur ou au gouvernement d'agir ?",
          "question_en": "In your view, is it for the consumer or the government to act?"
        },
        {
          "id": "mode-ephemere-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que votre image montre, et pourquoi est-ce que vous l'avez choisie ?",
          "question_en": "What does your image show, and why did you choose it?"
        },
        {
          "id": "mode-ephemere-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Quelle partie de votre image illustre le mieux votre argument principal ?",
          "question_en": "Which part of your image best illustrates your main argument?"
        },
        {
          "id": "mode-ephemere-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que la situation est la même en Australie qu'en France ?",
          "question_en": "Is the situation the same in Australia as in France?"
        },
        {
          "id": "mode-ephemere-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que les jeunes Australiens achètent autant de vêtements que les jeunes Français ?",
          "question_en": "Do young Australians buy as many clothes as young French people?"
        },
        {
          "id": "mode-ephemere-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que vous avez choisi ce sujet ?",
          "question_en": "Why did you choose this subject?"
        },
        {
          "id": "mode-ephemere-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que vos habitudes ont changé depuis que vous avez étudié ce sujet ?",
          "question_en": "Have your own habits changed since you studied this?"
        }
      ]
    },
    {
      "id": "gastronomie",
      "name_fr": "La gastronomie française dans le monde",
      "name_en": "French food around the world",
      "theme": "The French-speaking communities",
      "blurb_en": "Handled well in 2022 and named again in 2023. A subtopic with enough in it to compare, which the criteria reward.",
      "key_vocab": [
        {
          "fr": "la gastronomie",
          "en": "food culture, fine cooking"
        },
        {
          "fr": "un plat",
          "en": "a dish"
        },
        {
          "fr": "une recette",
          "en": "a recipe"
        },
        {
          "fr": "le patrimoine",
          "en": "heritage"
        },
        {
          "fr": "un terroir",
          "en": "a local area and what it produces"
        },
        {
          "fr": "une boulangerie",
          "en": "a bakery"
        },
        {
          "fr": "un chef",
          "en": "a chef"
        },
        {
          "fr": "le savoir-faire",
          "en": "know-how, craft"
        },
        {
          "fr": "un repas",
          "en": "a meal"
        },
        {
          "fr": "mondialisé",
          "en": "globalised"
        }
      ],
      "questions": [
        {
          "id": "gastronomie-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "De quoi est-ce que vous allez nous parler exactement ?",
          "question_en": "What exactly are you going to talk to us about?"
        },
        {
          "id": "gastronomie-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'on entend par « gastronomie française » ?",
          "question_en": "What is meant by French gastronomy?"
        },
        {
          "id": "gastronomie-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quels plats français est-ce qu'on connaît partout dans le monde ?",
          "question_en": "Which French dishes are known all over the world?"
        },
        {
          "id": "gastronomie-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Depuis quand est-ce que le repas gastronomique des Français est au patrimoine de l'UNESCO ?",
          "question_en": "How long has the French gastronomic meal been on the UNESCO heritage list?"
        },
        {
          "id": "gastronomie-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce que la cuisine française est devenue célèbre ?",
          "question_en": "How did French cooking become famous?"
        },
        {
          "id": "gastronomie-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que le repas a une telle importance culturelle en France ?",
          "question_en": "Why does the meal matter so much culturally in France?"
        },
        {
          "id": "gastronomie-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que cette réputation apporte à la France ?",
          "question_en": "What does that reputation bring France?"
        },
        {
          "id": "gastronomie-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que c'est bon pour les régions françaises ?",
          "question_en": "Is it good for the French regions?"
        },
        {
          "id": "gastronomie-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que cette image de la France pose des problèmes ?",
          "question_en": "Does that image of France cause any problems?"
        },
        {
          "id": "gastronomie-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que la cuisine rapide menace cette tradition ?",
          "question_en": "Is fast food a threat to that tradition?"
        },
        {
          "id": "gastronomie-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce qu'on peut protéger ce savoir-faire ?",
          "question_en": "How can that craft be protected?"
        },
        {
          "id": "gastronomie-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'il faut le protéger, à votre avis ?",
          "question_en": "Should it be protected, in your view?"
        },
        {
          "id": "gastronomie-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Expliquez-nous votre image, s'il vous plaît.",
          "question_en": "Tell us about your image, please."
        },
        {
          "id": "gastronomie-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que cette image-là et pas une autre ?",
          "question_en": "Why that image and not another?"
        },
        {
          "id": "gastronomie-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce qu'on mange de la même façon en Australie ?",
          "question_en": "Do people eat the same way in Australia?"
        },
        {
          "id": "gastronomie-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que Melbourne a sa propre culture de la cuisine ?",
          "question_en": "Does Melbourne have a food culture of its own?"
        },
        {
          "id": "gastronomie-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qui vous intéresse le plus dans ce sujet ?",
          "question_en": "What interests you most in this subject?"
        },
        {
          "id": "gastronomie-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que vous aimeriez travailler dans ce domaine un jour ?",
          "question_en": "Would you like to work in this area one day?"
        }
      ]
    },
    {
      "id": "reseaux-sociaux",
      "name_fr": "Les réseaux sociaux et les jeunes",
      "name_en": "Social media and young people",
      "theme": "The world around us",
      "blurb_en": "Named in both the 2021 and 2022 reports. Easy to research and easy to have an opinion about, which is what the reports keep asking for.",
      "key_vocab": [
        {
          "fr": "les réseaux sociaux",
          "en": "social media"
        },
        {
          "fr": "un influenceur",
          "en": "an influencer"
        },
        {
          "fr": "le harcèlement en ligne",
          "en": "online harassment"
        },
        {
          "fr": "la vie privée",
          "en": "privacy"
        },
        {
          "fr": "une application",
          "en": "an app"
        },
        {
          "fr": "l'estime de soi",
          "en": "self-esteem"
        },
        {
          "fr": "le temps d'écran",
          "en": "screen time"
        },
        {
          "fr": "une fausse information",
          "en": "a piece of false information"
        },
        {
          "fr": "dépendant",
          "en": "addicted, dependent"
        },
        {
          "fr": "se déconnecter",
          "en": "to log off, to disconnect"
        }
      ],
      "questions": [
        {
          "id": "reseaux-sociaux-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est le sujet de votre discussion ?",
          "question_en": "What is the subject of your discussion?"
        },
        {
          "id": "reseaux-sociaux-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel aspect des réseaux sociaux est-ce que vous avez choisi d'étudier ?",
          "question_en": "Which aspect of social media did you choose to study?"
        },
        {
          "id": "reseaux-sociaux-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Combien de temps est-ce que les jeunes passent sur les réseaux sociaux ?",
          "question_en": "How much time do young people spend on social media?"
        },
        {
          "id": "reseaux-sociaux-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelles applications est-ce que les jeunes Français utilisent le plus ?",
          "question_en": "Which apps do young French people use most?"
        },
        {
          "id": "reseaux-sociaux-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce que les réseaux sociaux influencent les jeunes ?",
          "question_en": "How do social media influence young people?"
        },
        {
          "id": "reseaux-sociaux-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce qu'il est si difficile de se déconnecter ?",
          "question_en": "Why is it so hard to log off?"
        },
        {
          "id": "reseaux-sociaux-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quels sont les avantages des réseaux sociaux pour les jeunes ?",
          "question_en": "What are the advantages of social media for young people?"
        },
        {
          "id": "reseaux-sociaux-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce qu'ils peuvent aider à apprendre une langue ?",
          "question_en": "Can they help with learning a language?"
        },
        {
          "id": "reseaux-sociaux-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quels sont les dangers ?",
          "question_en": "What are the dangers?"
        },
        {
          "id": "reseaux-sociaux-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que les réseaux sociaux ont un effet sur la santé mentale ?",
          "question_en": "Do social media affect mental health?"
        },
        {
          "id": "reseaux-sociaux-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'il faudrait interdire les réseaux sociaux aux moins de seize ans ?",
          "question_en": "Should social media be banned for under-sixteens?"
        },
        {
          "id": "reseaux-sociaux-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que les écoles pourraient faire ?",
          "question_en": "What could schools do?"
        },
        {
          "id": "reseaux-sociaux-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Décrivez brièvement votre image et dites-nous pourquoi vous l'avez apportée.",
          "question_en": "Describe your image briefly and tell us why you brought it."
        },
        {
          "id": "reseaux-sociaux-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que votre image montre un côté positif ou négatif du sujet ?",
          "question_en": "Does your image show a positive or a negative side of the subject?"
        },
        {
          "id": "reseaux-sociaux-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que les jeunes Français et les jeunes Australiens utilisent les mêmes réseaux ?",
          "question_en": "Do young French and young Australians use the same networks?"
        },
        {
          "id": "reseaux-sociaux-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que la France a des lois différentes sur ce sujet ?",
          "question_en": "Does France have different laws on this?"
        },
        {
          "id": "reseaux-sociaux-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Et vous, qu'est-ce que vous en pensez ?",
          "question_en": "And what do you think yourself?"
        },
        {
          "id": "reseaux-sociaux-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que vous avez changé d'avis pendant vos recherches ?",
          "question_en": "Did you change your mind while researching it?"
        }
      ]
    },
    {
      "id": "manifester",
      "name_fr": "Pourquoi les Français manifestent-ils autant ?",
      "name_en": "Why the French protest",
      "theme": "The French-speaking communities",
      "blurb_en": "In the 2021 and 2022 reports. A subtopic that is an argument from the start, which is exactly what the criteria reward.",
      "key_vocab": [
        {
          "fr": "une manifestation",
          "en": "a demonstration, a protest"
        },
        {
          "fr": "une grève",
          "en": "a strike"
        },
        {
          "fr": "un syndicat",
          "en": "a trade union"
        },
        {
          "fr": "un droit",
          "en": "a right"
        },
        {
          "fr": "le gouvernement",
          "en": "the government"
        },
        {
          "fr": "une réforme",
          "en": "a reform"
        },
        {
          "fr": "la République",
          "en": "the Republic"
        },
        {
          "fr": "revendiquer",
          "en": "to demand, to claim"
        },
        {
          "fr": "descendre dans la rue",
          "en": "to take to the streets"
        },
        {
          "fr": "la liberté d'expression",
          "en": "freedom of expression"
        }
      ],
      "questions": [
        {
          "id": "manifester-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est le sujet que vous avez préparé ?",
          "question_en": "What subject have you prepared?"
        },
        {
          "id": "manifester-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous entendez par « manifester » ?",
          "question_en": "What do you mean by protesting?"
        },
        {
          "id": "manifester-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pouvez-vous nous donner un exemple récent ?",
          "question_en": "Can you give us a recent example?"
        },
        {
          "id": "manifester-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Quel rôle est-ce que les syndicats jouent en France ?",
          "question_en": "What part do the unions play in France?"
        },
        {
          "id": "manifester-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que les Français manifestent plus que d'autres peuples ?",
          "question_en": "Why do the French protest more than other peoples?"
        },
        {
          "id": "manifester-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que cela vient de l'histoire de la France ?",
          "question_en": "Does it come from French history?"
        },
        {
          "id": "manifester-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que les manifestations obtiennent des résultats ?",
          "question_en": "Do demonstrations achieve results?"
        },
        {
          "id": "manifester-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que certains disent que c'est une bonne chose pour la démocratie ?",
          "question_en": "Why do some say it is good for democracy?"
        },
        {
          "id": "manifester-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quels problèmes est-ce que les grèves causent ?",
          "question_en": "What problems do strikes cause?"
        },
        {
          "id": "manifester-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que les manifestations gênent les gens ordinaires ?",
          "question_en": "Do demonstrations get in the way of ordinary people?"
        },
        {
          "id": "manifester-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce qu'il y a d'autres façons de se faire entendre ?",
          "question_en": "Are there other ways of being heard?"
        },
        {
          "id": "manifester-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que le gouvernement devrait faire ?",
          "question_en": "What should the government do?"
        },
        {
          "id": "manifester-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'on voit sur votre image ?",
          "question_en": "What can we see in your image?"
        },
        {
          "id": "manifester-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que votre image est neutre, à votre avis ?",
          "question_en": "Is your image neutral, in your view?"
        },
        {
          "id": "manifester-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce qu'on manifeste beaucoup en Australie ?",
          "question_en": "Do people protest a lot in Australia?"
        },
        {
          "id": "manifester-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que c'est différent ici ?",
          "question_en": "Why is it different here?"
        },
        {
          "id": "manifester-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qui vous a surpris dans vos recherches ?",
          "question_en": "What surprised you in your research?"
        },
        {
          "id": "manifester-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que vous manifesteriez vous-même ?",
          "question_en": "Would you protest yourself?"
        }
      ]
    },
    {
      "id": "haussmann",
      "name_fr": "Le baron Haussmann et la transformation de Paris",
      "name_en": "Haussmann and the rebuilding of Paris",
      "theme": "The French-speaking communities",
      "blurb_en": "Named in the 2025 report. Historical, concrete, and it gives an image that is genuinely worth pointing at.",
      "key_vocab": [
        {
          "fr": "un immeuble",
          "en": "an apartment block"
        },
        {
          "fr": "un boulevard",
          "en": "a boulevard"
        },
        {
          "fr": "un quartier",
          "en": "a district, a neighbourhood"
        },
        {
          "fr": "démolir",
          "en": "to demolish"
        },
        {
          "fr": "les travaux",
          "en": "the building works"
        },
        {
          "fr": "un égout",
          "en": "a sewer"
        },
        {
          "fr": "une façade",
          "en": "a frontage, a façade"
        },
        {
          "fr": "l'urbanisme",
          "en": "town planning"
        },
        {
          "fr": "le XIXe siècle",
          "en": "the nineteenth century"
        },
        {
          "fr": "une ruelle",
          "en": "a narrow lane"
        }
      ],
      "questions": [
        {
          "id": "haussmann-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Parlez-nous de votre sujet.",
          "question_en": "Tell us about your subject."
        },
        {
          "id": "haussmann-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qui était le baron Haussmann ?",
          "question_en": "Who was Baron Haussmann?"
        },
        {
          "id": "haussmann-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quand est-ce que ces travaux ont eu lieu ?",
          "question_en": "When did this building work take place?"
        },
        {
          "id": "haussmann-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qui lui avait donné cette mission ?",
          "question_en": "Who had given him the job?"
        },
        {
          "id": "haussmann-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce que Paris a changé pendant cette période ?",
          "question_en": "How did Paris change in that period?"
        },
        {
          "id": "haussmann-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce qu'on a voulu détruire les vieux quartiers ?",
          "question_en": "Why did they want to destroy the old districts?"
        },
        {
          "id": "haussmann-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que ces travaux ont apporté à la ville ?",
          "question_en": "What did the works bring the city?"
        },
        {
          "id": "haussmann-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que Paris serait aussi célèbre sans Haussmann ?",
          "question_en": "Would Paris be as famous without Haussmann?"
        },
        {
          "id": "haussmann-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qui a souffert de ces changements ?",
          "question_en": "Who suffered from these changes?"
        },
        {
          "id": "haussmann-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'on a perdu quelque chose d'important ?",
          "question_en": "Was something important lost?"
        },
        {
          "id": "haussmann-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'on ferait les choses autrement aujourd'hui ?",
          "question_en": "Would it be done differently today?"
        },
        {
          "id": "haussmann-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'une ville moderne devrait faire à la place ?",
          "question_en": "What should a modern city do instead?"
        },
        {
          "id": "haussmann-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que votre image nous montre de cette époque ?",
          "question_en": "What does your image show us of that period?"
        },
        {
          "id": "haussmann-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Quel détail de l'image est-ce que vous trouvez le plus parlant ?",
          "question_en": "Which detail of the image do you find says the most?"
        },
        {
          "id": "haussmann-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'une ville australienne a connu quelque chose de semblable ?",
          "question_en": "Has an Australian city been through anything similar?"
        },
        {
          "id": "haussmann-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que Melbourne ressemble un peu à Paris ?",
          "question_en": "Is Melbourne at all like Paris?"
        },
        {
          "id": "haussmann-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que ce sujet vous plaît ?",
          "question_en": "Why do you like this subject?"
        },
        {
          "id": "haussmann-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que vous aimeriez visiter ces quartiers ?",
          "question_en": "Would you like to visit those districts?"
        }
      ]
    },
    {
      "id": "piaf",
      "name_fr": "Édith Piaf",
      "name_en": "Édith Piaf",
      "theme": "The French-speaking communities",
      "blurb_en": "Named in the 2025 report. A person rather than an issue, which makes the opinion questions harder and the comparison question more interesting.",
      "key_vocab": [
        {
          "fr": "une chanteuse",
          "en": "a singer (female)"
        },
        {
          "fr": "une chanson",
          "en": "a song"
        },
        {
          "fr": "la voix",
          "en": "the voice"
        },
        {
          "fr": "la pauvreté",
          "en": "poverty"
        },
        {
          "fr": "la guerre",
          "en": "the war"
        },
        {
          "fr": "les paroles",
          "en": "the lyrics"
        },
        {
          "fr": "une époque",
          "en": "an era"
        },
        {
          "fr": "émouvant",
          "en": "moving"
        },
        {
          "fr": "un symbole",
          "en": "a symbol"
        },
        {
          "fr": "la célébrité",
          "en": "fame"
        }
      ],
      "questions": [
        {
          "id": "piaf-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est votre sujet, et pourquoi elle ?",
          "question_en": "What is your subject, and why her?"
        },
        {
          "id": "piaf-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous allez nous dire sur Édith Piaf ?",
          "question_en": "What are you going to tell us about Édith Piaf?"
        },
        {
          "id": "piaf-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quand est-ce qu'elle a vécu ?",
          "question_en": "When did she live?"
        },
        {
          "id": "piaf-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelles sont ses chansons les plus connues ?",
          "question_en": "Which are her best-known songs?"
        },
        {
          "id": "piaf-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce qu'elle est devenue célèbre ?",
          "question_en": "How did she become famous?"
        },
        {
          "id": "piaf-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce qu'elle représente la France pour tant de gens ?",
          "question_en": "Why does she stand for France for so many people?"
        },
        {
          "id": "piaf-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'elle a apporté à la chanson française ?",
          "question_en": "What did she bring to French song?"
        },
        {
          "id": "piaf-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce qu'on l'écoute encore aujourd'hui ?",
          "question_en": "Why do people still listen to her today?"
        },
        {
          "id": "piaf-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que sa vie a été difficile ?",
          "question_en": "Was her life difficult?"
        },
        {
          "id": "piaf-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'on raconte sa vie de façon trop romantique ?",
          "question_en": "Is her life told in too romantic a way?"
        },
        {
          "id": "piaf-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce qu'on garde vivante la mémoire d'une artiste ?",
          "question_en": "How do you keep an artist's memory alive?"
        },
        {
          "id": "piaf-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que les jeunes devraient apprendre ses chansons à l'école ?",
          "question_en": "Should young people learn her songs at school?"
        },
        {
          "id": "piaf-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que vous avez choisi cette image d'elle ?",
          "question_en": "Why did you choose this image of her?"
        },
        {
          "id": "piaf-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que l'image dit de son époque ?",
          "question_en": "What does the image say about her era?"
        },
        {
          "id": "piaf-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'il y a une chanteuse australienne qu'on pourrait comparer à Piaf ?",
          "question_en": "Is there an Australian singer you could compare to Piaf?"
        },
        {
          "id": "piaf-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que la chanson française est connue en Australie ?",
          "question_en": "Is French song well known in Australia?"
        },
        {
          "id": "piaf-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelle chanson est-ce que vous préférez, et pourquoi ?",
          "question_en": "Which song do you prefer, and why?"
        },
        {
          "id": "piaf-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous avez appris sur la France grâce à elle ?",
          "question_en": "What did you learn about France through her?"
        }
      ]
    }
  ]
};
