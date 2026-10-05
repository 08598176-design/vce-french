/* topics.js — subtopics for Section 2, and the nine directions a question
   can take.

   Twenty-one subtopics in four groups. Eight of them carry an "in_reports"
   list: those are ones the VCE French assessor reports actually name as
   having been brought into the examination room between 2021 and 2025, with
   the years. The rest were chosen as subtopics a Victorian cohort could
   realistically research.

   None of this is a recommendation. The reports are blunt about choosing:
   too hard and a student has no vocabulary for it, too narrow and they run
   out after two minutes, too vague and there is nothing to argue about. The
   list is here so a student can see the shape of a workable subtopic before
   picking their own.

   Every subtopic must come from the prescribed theme "The French-speaking
   communities" or the prescribed theme "The world around us", and each one
   records which. Each carries two questions for every one of the nine
   moves, so taking the same direction twice gives you something new.

   The French is a draft and has not been read by a French teacher.

   One window. line, then pure JSON. No comments inside the object.      */

window.FR_TOPICS = {
  "schema_version": 3,
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
      "id": "occupation",
      "name_fr": "L'Occupation et la Résistance",
      "name_en": "Occupation and Resistance",
      "theme": "The French-speaking communities",
      "blurb_en": "Often reached through a film such as Au revoir les enfants. A subtopic with real moral weight, which gives the opinion questions somewhere to go, and plenty of concrete detail to research.",
      "key_vocab": [
        {
          "fr": "l'Occupation",
          "en": "the Occupation"
        },
        {
          "fr": "la Résistance",
          "en": "the Resistance"
        },
        {
          "fr": "un résistant",
          "en": "a member of the Resistance"
        },
        {
          "fr": "la collaboration",
          "en": "collaboration"
        },
        {
          "fr": "cacher",
          "en": "to hide someone"
        },
        {
          "fr": "la rafle",
          "en": "the round-up"
        },
        {
          "fr": "la Libération",
          "en": "the Liberation"
        },
        {
          "fr": "le courage",
          "en": "courage"
        },
        {
          "fr": "dénoncer",
          "en": "to denounce, to inform on"
        },
        {
          "fr": "le devoir de mémoire",
          "en": "the duty to remember"
        }
      ],
      "questions": [
        {
          "id": "occupation-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est le sujet que vous avez préparé ?",
          "question_en": "What subject have you prepared?"
        },
        {
          "id": "occupation-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "De quelle période est-ce que vous parlez exactement ?",
          "question_en": "Which period exactly are you talking about?"
        },
        {
          "id": "occupation-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quand est-ce que la France a été occupée ?",
          "question_en": "When was France occupied?"
        },
        {
          "id": "occupation-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qui était le général de Gaulle ?",
          "question_en": "Who was General de Gaulle?"
        },
        {
          "id": "occupation-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce que les gens résistaient au quotidien ?",
          "question_en": "How did people resist day to day?"
        },
        {
          "id": "occupation-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que certains ont collaboré, à votre avis ?",
          "question_en": "Why did some people collaborate, in your view?"
        },
        {
          "id": "occupation-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que cette période nous apprend aujourd'hui ?",
          "question_en": "What does that period teach us today?"
        },
        {
          "id": "occupation-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce qu'on parle encore de la Résistance en France ?",
          "question_en": "Why is the Resistance still talked about in France?"
        },
        {
          "id": "occupation-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que la France a eu du mal à regarder cette période en face ?",
          "question_en": "Has France found it hard to face that period?"
        },
        {
          "id": "occupation-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Quels sont les dangers d'une mémoire trop simple ?",
          "question_en": "What are the dangers of remembering it too simply?"
        },
        {
          "id": "occupation-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce qu'on devrait enseigner cette histoire à l'école ?",
          "question_en": "How should that history be taught at school?"
        },
        {
          "id": "occupation-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'un film est un bon moyen de comprendre cette époque ?",
          "question_en": "Is a film a good way of understanding that time?"
        },
        {
          "id": "occupation-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que votre image montre ?",
          "question_en": "What does your image show?"
        },
        {
          "id": "occupation-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que cette image-là vous a marqué ?",
          "question_en": "Why did that image stay with you?"
        },
        {
          "id": "occupation-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que l'Australie a une mémoire de guerre comparable ?",
          "question_en": "Does Australia have a comparable memory of war?"
        },
        {
          "id": "occupation-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce qu'on apprend cette période de la même façon ici ?",
          "question_en": "Is that period taught the same way here?"
        },
        {
          "id": "occupation-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que vous avez choisi ce sujet ?",
          "question_en": "Why did you choose this subject?"
        },
        {
          "id": "occupation-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous auriez fait à leur place ?",
          "question_en": "What would you have done in their place?"
        }
      ],
      "group": "histoire"
    },
    {
      "id": "algerie",
      "name_fr": "La guerre d'Algérie et la décolonisation",
      "name_en": "The Algerian War and decolonisation",
      "theme": "The French-speaking communities",
      "blurb_en": "Difficult, which the reports say is fine as long as you have the vocabulary for it. Be ready to say why you chose something this serious, and to speak carefully about people who are still alive.",
      "key_vocab": [
        {
          "fr": "la colonisation",
          "en": "colonisation"
        },
        {
          "fr": "l'indépendance",
          "en": "independence"
        },
        {
          "fr": "une colonie",
          "en": "a colony"
        },
        {
          "fr": "un pied-noir",
          "en": "a French settler born in Algeria"
        },
        {
          "fr": "un harki",
          "en": "an Algerian who fought on the French side"
        },
        {
          "fr": "la torture",
          "en": "torture"
        },
        {
          "fr": "un accord de paix",
          "en": "a peace agreement"
        },
        {
          "fr": "le silence",
          "en": "the silence"
        },
        {
          "fr": "reconnaître",
          "en": "to acknowledge, to recognise"
        },
        {
          "fr": "une blessure",
          "en": "a wound"
        }
      ],
      "questions": [
        {
          "id": "algerie-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est le sujet de votre discussion ?",
          "question_en": "What is the subject of your discussion?"
        },
        {
          "id": "algerie-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "De quoi est-ce qu'on parle quand on parle de décolonisation ?",
          "question_en": "What do we mean when we talk about decolonisation?"
        },
        {
          "id": "algerie-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quand est-ce que l'Algérie est devenue indépendante ?",
          "question_en": "When did Algeria become independent?"
        },
        {
          "id": "algerie-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Combien de temps est-ce que la guerre a duré ?",
          "question_en": "How long did the war last?"
        },
        {
          "id": "algerie-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que la France ne voulait pas quitter l'Algérie ?",
          "question_en": "Why did France not want to leave Algeria?"
        },
        {
          "id": "algerie-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce que cette guerre a divisé les Français ?",
          "question_en": "How did the war divide the French?"
        },
        {
          "id": "algerie-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que la France a fini par reconnaître ce qui s'est passé ?",
          "question_en": "Has France come to acknowledge what happened?"
        },
        {
          "id": "algerie-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que c'est important d'en parler ?",
          "question_en": "Why does it matter to talk about it?"
        },
        {
          "id": "algerie-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que ce sujet reste difficile en France ?",
          "question_en": "Why is this subject still difficult in France?"
        },
        {
          "id": "algerie-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'on a longtemps passé sous silence ?",
          "question_en": "What was passed over in silence for a long time?"
        },
        {
          "id": "algerie-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'un pays doit faire avec un passé pareil ?",
          "question_en": "What should a country do with a past like that?"
        },
        {
          "id": "algerie-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que des excuses officielles changent quelque chose ?",
          "question_en": "Does an official apology change anything?"
        },
        {
          "id": "algerie-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Expliquez-nous votre image, s'il vous plaît.",
          "question_en": "Tell us about your image, please."
        },
        {
          "id": "algerie-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce qu'une image est difficile à choisir pour ce sujet ?",
          "question_en": "Why is an image hard to choose for this subject?"
        },
        {
          "id": "algerie-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que l'Australie a un passé colonial à regarder en face ?",
          "question_en": "Does Australia have a colonial past to face?"
        },
        {
          "id": "algerie-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'on en parle de la même façon dans les deux pays ?",
          "question_en": "Is it talked about the same way in both countries?"
        },
        {
          "id": "algerie-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que vous avez choisi un sujet aussi sérieux ?",
          "question_en": "Why did you choose such a serious subject?"
        },
        {
          "id": "algerie-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous avez appris sur la France en l'étudiant ?",
          "question_en": "What did you learn about France by studying it?"
        }
      ],
      "group": "histoire"
    },
    {
      "id": "laicite",
      "name_fr": "La laïcité à l'école",
      "name_en": "Secularism in French schools",
      "theme": "The French-speaking communities",
      "blurb_en": "A debate the French have with themselves constantly, and one where a thoughtful student can set out two positions rather than one. Be careful and precise: it is about real people.",
      "key_vocab": [
        {
          "fr": "la laïcité",
          "en": "secularism, the separation of religion and state"
        },
        {
          "fr": "une loi",
          "en": "a law"
        },
        {
          "fr": "le foulard",
          "en": "the headscarf"
        },
        {
          "fr": "la liberté de conscience",
          "en": "freedom of conscience"
        },
        {
          "fr": "la neutralité",
          "en": "neutrality"
        },
        {
          "fr": "un signe religieux",
          "en": "a religious symbol"
        },
        {
          "fr": "la République",
          "en": "the Republic"
        },
        {
          "fr": "l'égalité",
          "en": "equality"
        },
        {
          "fr": "interdire",
          "en": "to ban"
        },
        {
          "fr": "le vivre-ensemble",
          "en": "living together"
        }
      ],
      "questions": [
        {
          "id": "laicite-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que la laïcité, exactement ?",
          "question_en": "What is laïcité, exactly?"
        },
        {
          "id": "laicite-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel aspect est-ce que vous avez choisi d'étudier ?",
          "question_en": "Which aspect did you choose to study?"
        },
        {
          "id": "laicite-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "De quand date la loi sur la laïcité en France ?",
          "question_en": "When does the law on secularism date from?"
        },
        {
          "id": "laicite-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que la loi de 2004 a changé dans les écoles ?",
          "question_en": "What did the 2004 law change in schools?"
        },
        {
          "id": "laicite-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que ce principe est si important pour les Français ?",
          "question_en": "Why does this principle matter so much to French people?"
        },
        {
          "id": "laicite-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce que la laïcité se vit dans une école, concrètement ?",
          "question_en": "What does secularism actually look like in a school?"
        },
        {
          "id": "laicite-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quels sont les arguments en faveur de ce principe ?",
          "question_en": "What are the arguments for it?"
        },
        {
          "id": "laicite-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que la laïcité protège les élèves ?",
          "question_en": "Does secularism protect students?"
        },
        {
          "id": "laicite-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelles critiques est-ce qu'on entend ?",
          "question_en": "What criticisms do you hear?"
        },
        {
          "id": "laicite-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que certains élèves se sentent visés ?",
          "question_en": "Do some students feel singled out?"
        },
        {
          "id": "laicite-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'il y a un équilibre possible ?",
          "question_en": "Is a balance possible?"
        },
        {
          "id": "laicite-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'une école devrait faire, à votre avis ?",
          "question_en": "What should a school do, in your view?"
        },
        {
          "id": "laicite-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous avez choisi comme image, et pourquoi ?",
          "question_en": "What did you choose as your image, and why?"
        },
        {
          "id": "laicite-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que votre image prend parti ?",
          "question_en": "Does your image take a side?"
        },
        {
          "id": "laicite-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que les écoles australiennes fonctionnent de la même façon ?",
          "question_en": "Do Australian schools work the same way?"
        },
        {
          "id": "laicite-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que la question se pose moins ici ?",
          "question_en": "Why does the question come up less here?"
        },
        {
          "id": "laicite-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que votre avis a changé pendant vos recherches ?",
          "question_en": "Did your view change while you were researching?"
        },
        {
          "id": "laicite-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qui vous a semblé le plus difficile à comprendre ?",
          "question_en": "What did you find hardest to understand?"
        }
      ],
      "group": "histoire"
    },
    {
      "id": "mai-68",
      "name_fr": "Mai 68 et son héritage",
      "name_en": "May 68 and what it left behind",
      "theme": "The French-speaking communities",
      "blurb_en": "Three weeks that are still argued about sixty years later, which is exactly the kind of subtopic the reports want: you cannot discuss it without taking a position.",
      "key_vocab": [
        {
          "fr": "une grève générale",
          "en": "a general strike"
        },
        {
          "fr": "une barricade",
          "en": "a barricade"
        },
        {
          "fr": "un slogan",
          "en": "a slogan"
        },
        {
          "fr": "l'autorité",
          "en": "authority"
        },
        {
          "fr": "la contestation",
          "en": "protest, challenging authority"
        },
        {
          "fr": "une génération",
          "en": "a generation"
        },
        {
          "fr": "les mœurs",
          "en": "social attitudes, mores"
        },
        {
          "fr": "le pavé",
          "en": "the cobblestone"
        },
        {
          "fr": "revendiquer",
          "en": "to demand"
        },
        {
          "fr": "l'héritage",
          "en": "the legacy"
        }
      ],
      "questions": [
        {
          "id": "mai-68-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Parlez-nous de votre sujet.",
          "question_en": "Tell us about your subject."
        },
        {
          "id": "mai-68-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que c'était, Mai 68 ?",
          "question_en": "What was May 68?"
        },
        {
          "id": "mai-68-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qui a participé à ces événements ?",
          "question_en": "Who took part in those events?"
        },
        {
          "id": "mai-68-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Combien de temps est-ce que la grève a duré ?",
          "question_en": "How long did the strike last?"
        },
        {
          "id": "mai-68-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que les étudiants se sont révoltés ?",
          "question_en": "Why did the students rise up?"
        },
        {
          "id": "mai-68-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce qu'un mouvement étudiant est devenu une grève générale ?",
          "question_en": "How did a student movement become a general strike?"
        },
        {
          "id": "mai-68-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que Mai 68 a changé dans la société française ?",
          "question_en": "What did May 68 change in French society?"
        },
        {
          "id": "mai-68-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que la France serait différente sans Mai 68 ?",
          "question_en": "Would France be different without May 68?"
        },
        {
          "id": "mai-68-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que le mouvement a échoué sur certains points ?",
          "question_en": "Did the movement fail in some respects?"
        },
        {
          "id": "mai-68-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que certains Français critiquent cet héritage ?",
          "question_en": "Why do some French people criticise that legacy?"
        },
        {
          "id": "mai-68-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'un mouvement comme celui-là serait possible aujourd'hui ?",
          "question_en": "Would a movement like that be possible today?"
        },
        {
          "id": "mai-68-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce que les jeunes font entendre leur voix maintenant ?",
          "question_en": "How do young people make themselves heard now?"
        },
        {
          "id": "mai-68-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Décrivez votre image et dites-nous ce qu'elle représente pour vous.",
          "question_en": "Describe your image and tell us what it stands for to you."
        },
        {
          "id": "mai-68-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que les slogans de l'époque vous parlent encore ?",
          "question_en": "Do the slogans of the time still speak to you?"
        },
        {
          "id": "mai-68-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'il y a eu un moment comparable en Australie ?",
          "question_en": "Has there been a comparable moment in Australia?"
        },
        {
          "id": "mai-68-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que les jeunes Australiens sont aussi politisés ?",
          "question_en": "Are young Australians as political?"
        },
        {
          "id": "mai-68-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qui vous a le plus surpris en étudiant ce sujet ?",
          "question_en": "What surprised you most studying this?"
        },
        {
          "id": "mai-68-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que vous auriez participé ?",
          "question_en": "Would you have joined in?"
        }
      ],
      "group": "histoire"
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
      ],
      "group": "histoire",
      "in_reports": [
        2021,
        2022
      ]
    },
    {
      "id": "banlieues",
      "name_fr": "L'immigration et les banlieues",
      "name_en": "Immigration and the banlieues",
      "theme": "The French-speaking communities",
      "blurb_en": "Often reached through La Haine, Intouchables or Entre les murs. Three very different films about the same country, which makes the comparison questions easy and the opinion questions interesting.",
      "key_vocab": [
        {
          "fr": "la banlieue",
          "en": "the outer suburbs of a city"
        },
        {
          "fr": "une cité",
          "en": "a housing estate"
        },
        {
          "fr": "l'immigration",
          "en": "immigration"
        },
        {
          "fr": "l'intégration",
          "en": "integration"
        },
        {
          "fr": "la discrimination",
          "en": "discrimination"
        },
        {
          "fr": "le chômage",
          "en": "unemployment"
        },
        {
          "fr": "la diversité",
          "en": "diversity"
        },
        {
          "fr": "une émeute",
          "en": "a riot"
        },
        {
          "fr": "un préjugé",
          "en": "a prejudice"
        },
        {
          "fr": "l'ascenseur social",
          "en": "social mobility"
        }
      ],
      "questions": [
        {
          "id": "banlieues-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est le sujet que vous allez discuter ?",
          "question_en": "What subject are you going to discuss?"
        },
        {
          "id": "banlieues-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'on entend par « banlieue » en France ?",
          "question_en": "What is meant by banlieue in France?"
        },
        {
          "id": "banlieues-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "D'où viennent les grandes vagues d'immigration en France ?",
          "question_en": "Where did the big waves of immigration to France come from?"
        },
        {
          "id": "banlieues-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel film est-ce que vous avez étudié ?",
          "question_en": "Which film did you study?"
        },
        {
          "id": "banlieues-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce que ce film montre la vie dans une cité ?",
          "question_en": "How does that film show life on an estate?"
        },
        {
          "id": "banlieues-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que ces quartiers ont cette réputation ?",
          "question_en": "Why do those areas have the reputation they do?"
        },
        {
          "id": "banlieues-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que l'immigration a apporté à la France ?",
          "question_en": "What has immigration brought France?"
        },
        {
          "id": "banlieues-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que la France est un pays divers aujourd'hui ?",
          "question_en": "Is France a diverse country today?"
        },
        {
          "id": "banlieues-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quels problèmes est-ce que les habitants rencontrent ?",
          "question_en": "What problems do people living there face?"
        },
        {
          "id": "banlieues-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que l'école y joue bien son rôle ?",
          "question_en": "Is school doing its job there?"
        },
        {
          "id": "banlieues-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'on pourrait faire pour changer les choses ?",
          "question_en": "What could be done to change things?"
        },
        {
          "id": "banlieues-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'un film peut changer les mentalités ?",
          "question_en": "Can a film change the way people think?"
        },
        {
          "id": "banlieues-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que votre image nous montre ?",
          "question_en": "What does your image show us?"
        },
        {
          "id": "banlieues-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que votre image risque de renforcer un préjugé ?",
          "question_en": "Could your image reinforce a prejudice?"
        },
        {
          "id": "banlieues-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que Melbourne a des quartiers comparables ?",
          "question_en": "Does Melbourne have comparable areas?"
        },
        {
          "id": "banlieues-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que l'Australie parle d'intégration de la même façon ?",
          "question_en": "Does Australia talk about integration the same way?"
        },
        {
          "id": "banlieues-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que ce sujet vous intéresse ?",
          "question_en": "Why does this subject interest you?"
        },
        {
          "id": "banlieues-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que le film vous a fait changer d'avis sur quelque chose ?",
          "question_en": "Did the film change your mind about anything?"
        }
      ],
      "group": "societe"
    },
    {
      "id": "nucleaire",
      "name_fr": "L'énergie nucléaire en France",
      "name_en": "Nuclear power in France",
      "theme": "The world around us",
      "blurb_en": "France gets most of its electricity from nuclear power, which almost no other country does. A subtopic with numbers in it, and an argument Australians have from the opposite direction.",
      "key_vocab": [
        {
          "fr": "une centrale nucléaire",
          "en": "a nuclear power station"
        },
        {
          "fr": "l'électricité",
          "en": "electricity"
        },
        {
          "fr": "les déchets",
          "en": "waste"
        },
        {
          "fr": "une énergie renouvelable",
          "en": "a renewable energy source"
        },
        {
          "fr": "le réchauffement climatique",
          "en": "global warming"
        },
        {
          "fr": "un réacteur",
          "en": "a reactor"
        },
        {
          "fr": "la sécurité",
          "en": "safety"
        },
        {
          "fr": "dépendre de",
          "en": "to depend on"
        },
        {
          "fr": "les émissions de carbone",
          "en": "carbon emissions"
        },
        {
          "fr": "un accident",
          "en": "an accident"
        }
      ],
      "questions": [
        {
          "id": "nucleaire-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est le sujet de votre discussion ?",
          "question_en": "What is the subject of your discussion?"
        },
        {
          "id": "nucleaire-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Quelle question précise est-ce que vous voulez poser ?",
          "question_en": "What exact question do you want to ask?"
        },
        {
          "id": "nucleaire-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelle part de l'électricité française vient du nucléaire ?",
          "question_en": "What share of French electricity comes from nuclear power?"
        },
        {
          "id": "nucleaire-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Depuis quand est-ce que la France a fait ce choix ?",
          "question_en": "How long ago did France make that choice?"
        },
        {
          "id": "nucleaire-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que la France a choisi cette voie ?",
          "question_en": "Why did France take that road?"
        },
        {
          "id": "nucleaire-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce que ce choix a changé l'économie française ?",
          "question_en": "How has that choice changed the French economy?"
        },
        {
          "id": "nucleaire-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quels sont les avantages de cette énergie ?",
          "question_en": "What are the advantages of that energy?"
        },
        {
          "id": "nucleaire-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que le nucléaire aide contre le réchauffement climatique ?",
          "question_en": "Does nuclear power help against global warming?"
        },
        {
          "id": "nucleaire-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quels sont les risques ?",
          "question_en": "What are the risks?"
        },
        {
          "id": "nucleaire-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Que fait-on des déchets ?",
          "question_en": "What is done with the waste?"
        },
        {
          "id": "nucleaire-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que la France devrait changer de stratégie ?",
          "question_en": "Should France change its strategy?"
        },
        {
          "id": "nucleaire-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelle place pour les énergies renouvelables ?",
          "question_en": "What room is there for renewables?"
        },
        {
          "id": "nucleaire-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'on voit sur votre image ?",
          "question_en": "What can we see in your image?"
        },
        {
          "id": "nucleaire-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que votre image rend le nucléaire rassurant ou inquiétant ?",
          "question_en": "Does your image make nuclear power look reassuring or worrying?"
        },
        {
          "id": "nucleaire-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que l'Australie n'a pas fait le même choix ?",
          "question_en": "Why has Australia not made the same choice?"
        },
        {
          "id": "nucleaire-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que l'Australie devrait y réfléchir ?",
          "question_en": "Should Australia think about it?"
        },
        {
          "id": "nucleaire-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que vous êtes pour ou contre, finalement ?",
          "question_en": "Are you for or against it, in the end?"
        },
        {
          "id": "nucleaire-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qui vous a fait choisir ce sujet ?",
          "question_en": "What made you choose this subject?"
        }
      ],
      "group": "societe"
    },
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
      ],
      "group": "societe",
      "in_reports": [
        2023,
        2025
      ]
    },
    {
      "id": "femmes",
      "name_fr": "Le rôle des femmes à travers les siècles",
      "name_en": "The changing role of women",
      "theme": "The French-speaking communities",
      "blurb_en": "Named in the 2021 report as a well-chosen subtopic. Simone de Beauvoir, Simone Veil and the parity laws give you three concrete anchors across three different centuries.",
      "key_vocab": [
        {
          "fr": "l'égalité",
          "en": "equality"
        },
        {
          "fr": "le droit de vote",
          "en": "the right to vote"
        },
        {
          "fr": "la parité",
          "en": "equal representation of women and men"
        },
        {
          "fr": "une loi",
          "en": "a law"
        },
        {
          "fr": "le féminisme",
          "en": "feminism"
        },
        {
          "fr": "une avancée",
          "en": "a step forward"
        },
        {
          "fr": "la vie professionnelle",
          "en": "working life"
        },
        {
          "fr": "un stéréotype",
          "en": "a stereotype"
        },
        {
          "fr": "se battre pour",
          "en": "to fight for"
        },
        {
          "fr": "l'avortement",
          "en": "abortion"
        }
      ],
      "questions": [
        {
          "id": "femmes-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est votre sujet ?",
          "question_en": "What is your subject?"
        },
        {
          "id": "femmes-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Sur quelle période est-ce que vous vous concentrez ?",
          "question_en": "Which period are you focusing on?"
        },
        {
          "id": "femmes-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Depuis quand est-ce que les Françaises votent ?",
          "question_en": "Since when have French women been able to vote?"
        },
        {
          "id": "femmes-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qui était Simone Veil ?",
          "question_en": "Who was Simone Veil?"
        },
        {
          "id": "femmes-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce que la situation a changé depuis un siècle ?",
          "question_en": "How has the situation changed over a century?"
        },
        {
          "id": "femmes-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que certains changements ont mis si longtemps ?",
          "question_en": "Why did some changes take so long?"
        },
        {
          "id": "femmes-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelles avancées est-ce que vous trouvez les plus importantes ?",
          "question_en": "Which steps forward do you find most important?"
        },
        {
          "id": "femmes-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que Simone de Beauvoir a apporté à ce débat ?",
          "question_en": "What did Simone de Beauvoir bring to this debate?"
        },
        {
          "id": "femmes-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qui n'a pas encore changé ?",
          "question_en": "What has not changed yet?"
        },
        {
          "id": "femmes-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que l'égalité au travail est une réalité ?",
          "question_en": "Is equality at work a reality?"
        },
        {
          "id": "femmes-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que les lois suffisent ?",
          "question_en": "Are laws enough?"
        },
        {
          "id": "femmes-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que l'école pourrait faire ?",
          "question_en": "What could schools do?"
        },
        {
          "id": "femmes-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que vous avez choisi cette image ?",
          "question_en": "Why did you choose this image?"
        },
        {
          "id": "femmes-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que votre image dit de son époque ?",
          "question_en": "What does your image say about its time?"
        },
        {
          "id": "femmes-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que la situation est la même en Australie ?",
          "question_en": "Is the situation the same in Australia?"
        },
        {
          "id": "femmes-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Quel pays est le plus avancé, à votre avis ?",
          "question_en": "Which country is further ahead, in your view?"
        },
        {
          "id": "femmes-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qui vous a le plus frappé dans vos recherches ?",
          "question_en": "What struck you most in your research?"
        },
        {
          "id": "femmes-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que vous êtes optimiste pour l'avenir ?",
          "question_en": "Are you optimistic about the future?"
        }
      ],
      "group": "societe",
      "in_reports": [
        2021
      ]
    },
    {
      "id": "ecole",
      "name_fr": "Le système scolaire français et les jeunes",
      "name_en": "French schools and young people",
      "theme": "The French-speaking communities",
      "blurb_en": "The one subtopic where you already have the comparison in your pocket, because you are sitting inside the other half of it. Entre les murs is a useful way in.",
      "key_vocab": [
        {
          "fr": "le lycée",
          "en": "senior secondary school"
        },
        {
          "fr": "le bac",
          "en": "the baccalauréat"
        },
        {
          "fr": "un redoublement",
          "en": "repeating a year"
        },
        {
          "fr": "la pression",
          "en": "pressure"
        },
        {
          "fr": "une filière",
          "en": "a stream or pathway"
        },
        {
          "fr": "l'orientation",
          "en": "choosing a pathway"
        },
        {
          "fr": "un professeur principal",
          "en": "a form teacher"
        },
        {
          "fr": "le harcèlement scolaire",
          "en": "bullying at school"
        },
        {
          "fr": "exigeant",
          "en": "demanding"
        },
        {
          "fr": "la réussite",
          "en": "success"
        }
      ],
      "questions": [
        {
          "id": "ecole-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "De quoi allez-vous nous parler ?",
          "question_en": "What are you going to talk to us about?"
        },
        {
          "id": "ecole-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel aspect du système scolaire est-ce que vous avez étudié ?",
          "question_en": "Which aspect of the school system did you study?"
        },
        {
          "id": "ecole-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce que le lycée français est organisé ?",
          "question_en": "How is the French lycée organised?"
        },
        {
          "id": "ecole-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que le bac, exactement ?",
          "question_en": "What exactly is the bac?"
        },
        {
          "id": "ecole-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que le système français est si exigeant ?",
          "question_en": "Why is the French system so demanding?"
        },
        {
          "id": "ecole-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce que les élèves vivent cette pression ?",
          "question_en": "How do students experience that pressure?"
        },
        {
          "id": "ecole-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous trouvez bien dans ce système ?",
          "question_en": "What do you find good about that system?"
        },
        {
          "id": "ecole-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que la philosophie au lycée est une bonne idée ?",
          "question_en": "Is philosophy at lycée a good idea?"
        },
        {
          "id": "ecole-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quels sont les problèmes les plus souvent cités ?",
          "question_en": "Which problems are most often raised?"
        },
        {
          "id": "ecole-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que le système est juste pour tout le monde ?",
          "question_en": "Is the system fair to everyone?"
        },
        {
          "id": "ecole-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous changeriez ?",
          "question_en": "What would you change?"
        },
        {
          "id": "ecole-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'il faudrait moins d'examens ?",
          "question_en": "Should there be fewer examinations?"
        },
        {
          "id": "ecole-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Décrivez votre image, s'il vous plaît.",
          "question_en": "Describe your image, please."
        },
        {
          "id": "ecole-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que votre image montre qu'on ne verrait pas ici ?",
          "question_en": "What does your image show that you would not see here?"
        },
        {
          "id": "ecole-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelles différences est-ce que vous voyez avec votre lycée ?",
          "question_en": "What differences do you see with your own school?"
        },
        {
          "id": "ecole-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Dans quel système est-ce que vous préféreriez étudier ?",
          "question_en": "Which system would you rather study in?"
        },
        {
          "id": "ecole-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que ce sujet vous intéresse ?",
          "question_en": "Why does this subject interest you?"
        },
        {
          "id": "ecole-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que vous aimeriez faire un échange en France ?",
          "question_en": "Would you like to go on exchange to France?"
        }
      ],
      "group": "societe"
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
      ],
      "group": "societe",
      "in_reports": [
        2021,
        2022
      ]
    },
    {
      "id": "impressionnisme",
      "name_fr": "L'impressionnisme",
      "name_en": "Impressionism",
      "theme": "The French-speaking communities",
      "blurb_en": "The movement that got its name from an insult. Rich in detail, easy to find an image for, and it lets you talk about how the public reacts to something new.",
      "key_vocab": [
        {
          "fr": "un tableau",
          "en": "a painting"
        },
        {
          "fr": "un peintre",
          "en": "a painter"
        },
        {
          "fr": "la lumière",
          "en": "light"
        },
        {
          "fr": "une touche",
          "en": "a brushstroke"
        },
        {
          "fr": "un paysage",
          "en": "a landscape"
        },
        {
          "fr": "en plein air",
          "en": "outdoors, in the open air"
        },
        {
          "fr": "une exposition",
          "en": "an exhibition"
        },
        {
          "fr": "refuser",
          "en": "to reject"
        },
        {
          "fr": "une toile",
          "en": "a canvas"
        },
        {
          "fr": "une couleur",
          "en": "a colour"
        }
      ],
      "questions": [
        {
          "id": "impressionnisme-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Parlez-nous de votre sujet.",
          "question_en": "Tell us about your subject."
        },
        {
          "id": "impressionnisme-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qui caractérise un tableau impressionniste ?",
          "question_en": "What makes a painting Impressionist?"
        },
        {
          "id": "impressionnisme-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quels peintres est-ce que vous avez étudiés ?",
          "question_en": "Which painters did you study?"
        },
        {
          "id": "impressionnisme-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "D'où vient le nom du mouvement ?",
          "question_en": "Where does the movement's name come from?"
        },
        {
          "id": "impressionnisme-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que ces peintres sortaient de l'atelier ?",
          "question_en": "Why did those painters leave the studio?"
        },
        {
          "id": "impressionnisme-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce qu'ils ont changé la façon de peindre la lumière ?",
          "question_en": "How did they change the way light was painted?"
        },
        {
          "id": "impressionnisme-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que ces tableaux plaisent encore autant ?",
          "question_en": "Why are those paintings still so popular?"
        },
        {
          "id": "impressionnisme-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que ce mouvement a ouvert comme possibilités ?",
          "question_en": "What possibilities did the movement open up?"
        },
        {
          "id": "impressionnisme-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que le public les a rejetés au début ?",
          "question_en": "Why did the public reject them at first?"
        },
        {
          "id": "impressionnisme-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que l'impressionnisme est devenu trop populaire ?",
          "question_en": "Has Impressionism become too popular?"
        },
        {
          "id": "impressionnisme-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce qu'un musée devrait présenter ces tableaux ?",
          "question_en": "How should a museum show those paintings?"
        },
        {
          "id": "impressionnisme-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'il faut voir un tableau en vrai pour le comprendre ?",
          "question_en": "Do you have to see a painting in person to understand it?"
        },
        {
          "id": "impressionnisme-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Décrivez le tableau que vous avez apporté.",
          "question_en": "Describe the painting you brought with you."
        },
        {
          "id": "impressionnisme-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous ressentez devant cette image ?",
          "question_en": "What do you feel looking at this image?"
        },
        {
          "id": "impressionnisme-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'il y a des peintres australiens comparables ?",
          "question_en": "Are there comparable Australian painters?"
        },
        {
          "id": "impressionnisme-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que la lumière australienne change la peinture ?",
          "question_en": "Does Australian light change painting?"
        },
        {
          "id": "impressionnisme-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est votre tableau préféré, et pourquoi ?",
          "question_en": "Which is your favourite painting, and why?"
        },
        {
          "id": "impressionnisme-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que vous avez vu ces tableaux dans un musée ?",
          "question_en": "Have you seen these paintings in a museum?"
        }
      ],
      "group": "culture"
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
      ],
      "group": "culture",
      "in_reports": [
        2022,
        2023
      ]
    },
    {
      "id": "couture",
      "name_fr": "La haute couture et la mode française",
      "name_en": "Haute couture and French fashion",
      "theme": "The French-speaking communities",
      "blurb_en": "Chanel, the ateliers, and an industry France protects by law. It pairs well against fast fashion if you want a subtopic with two sides to it.",
      "key_vocab": [
        {
          "fr": "la haute couture",
          "en": "haute couture"
        },
        {
          "fr": "un couturier",
          "en": "a couturier, a designer"
        },
        {
          "fr": "un défilé",
          "en": "a fashion show"
        },
        {
          "fr": "un atelier",
          "en": "a workshop"
        },
        {
          "fr": "le savoir-faire",
          "en": "craft, know-how"
        },
        {
          "fr": "une maison de couture",
          "en": "a fashion house"
        },
        {
          "fr": "sur mesure",
          "en": "made to measure"
        },
        {
          "fr": "le luxe",
          "en": "luxury"
        },
        {
          "fr": "une collection",
          "en": "a collection"
        },
        {
          "fr": "libérer",
          "en": "to free, to liberate"
        }
      ],
      "questions": [
        {
          "id": "couture-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est votre sujet ?",
          "question_en": "What is your subject?"
        },
        {
          "id": "couture-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Quelle est la différence entre la mode et la haute couture ?",
          "question_en": "What is the difference between fashion and haute couture?"
        },
        {
          "id": "couture-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qui était Coco Chanel ?",
          "question_en": "Who was Coco Chanel?"
        },
        {
          "id": "couture-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Combien de maisons ont encore le droit à ce titre ?",
          "question_en": "How many houses still have the right to that title?"
        },
        {
          "id": "couture-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce que Chanel a changé la façon de s'habiller des femmes ?",
          "question_en": "How did Chanel change the way women dressed?"
        },
        {
          "id": "couture-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que la France protège ce secteur ?",
          "question_en": "Why does France protect that sector?"
        },
        {
          "id": "couture-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que la haute couture apporte à la France ?",
          "question_en": "What does haute couture bring France?"
        },
        {
          "id": "couture-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que c'est une forme d'art ?",
          "question_en": "Is it a form of art?"
        },
        {
          "id": "couture-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que ce monde est trop fermé ?",
          "question_en": "Is that world too closed?"
        },
        {
          "id": "couture-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelles critiques est-ce qu'on fait à l'industrie de la mode ?",
          "question_en": "What criticisms are made of the fashion industry?"
        },
        {
          "id": "couture-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que la mode peut devenir plus durable ?",
          "question_en": "Can fashion become more sustainable?"
        },
        {
          "id": "couture-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que les jeunes créateurs changent ?",
          "question_en": "What are young designers changing?"
        },
        {
          "id": "couture-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que vous avez choisi cette image ?",
          "question_en": "Why did you choose this image?"
        },
        {
          "id": "couture-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que cette tenue dit de son époque ?",
          "question_en": "What does that outfit say about its time?"
        },
        {
          "id": "couture-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que les Australiens s'habillent différemment ?",
          "question_en": "Do Australians dress differently?"
        },
        {
          "id": "couture-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que Melbourne a un style à elle ?",
          "question_en": "Does Melbourne have a style of its own?"
        },
        {
          "id": "couture-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que la mode vous intéresse personnellement ?",
          "question_en": "Does fashion interest you personally?"
        },
        {
          "id": "couture-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous avez appris que vous ne saviez pas ?",
          "question_en": "What did you learn that you did not know?"
        }
      ],
      "group": "culture",
      "in_reports": [
        2022
      ]
    },
    {
      "id": "notre-dame",
      "name_fr": "La restauration de Notre-Dame",
      "name_en": "Restoring Notre-Dame",
      "theme": "The French-speaking communities",
      "blurb_en": "A fire, a global response, and a long argument about whether to rebuild exactly what was there. Patrimoine with a deadline, and the image chooses itself.",
      "key_vocab": [
        {
          "fr": "le patrimoine",
          "en": "heritage"
        },
        {
          "fr": "un incendie",
          "en": "a fire"
        },
        {
          "fr": "la flèche",
          "en": "the spire"
        },
        {
          "fr": "une cathédrale",
          "en": "a cathedral"
        },
        {
          "fr": "la charpente",
          "en": "the roof timbers"
        },
        {
          "fr": "restaurer",
          "en": "to restore"
        },
        {
          "fr": "un artisan",
          "en": "a craftsperson"
        },
        {
          "fr": "un chantier",
          "en": "a building site"
        },
        {
          "fr": "un don",
          "en": "a donation"
        },
        {
          "fr": "à l'identique",
          "en": "exactly as it was"
        }
      ],
      "questions": [
        {
          "id": "notre-dame-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "De quoi allez-vous nous parler ?",
          "question_en": "What are you going to talk to us about?"
        },
        {
          "id": "notre-dame-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous entendez par patrimoine ?",
          "question_en": "What do you mean by heritage?"
        },
        {
          "id": "notre-dame-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quand est-ce que l'incendie a eu lieu ?",
          "question_en": "When did the fire happen?"
        },
        {
          "id": "notre-dame-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Combien de temps est-ce que les travaux ont pris ?",
          "question_en": "How long did the work take?"
        },
        {
          "id": "notre-dame-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce qu'on restaure un bâtiment aussi ancien ?",
          "question_en": "How do you restore a building that old?"
        },
        {
          "id": "notre-dame-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que le monde entier a réagi ?",
          "question_en": "Why did the whole world react?"
        },
        {
          "id": "notre-dame-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que ce chantier a permis de redécouvrir ?",
          "question_en": "What did the work allow people to rediscover?"
        },
        {
          "id": "notre-dame-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce qu'un bâtiment compte autant pour un pays ?",
          "question_en": "Why does a building matter so much to a country?"
        },
        {
          "id": "notre-dame-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce qu'il y a eu des désaccords sur la restauration ?",
          "question_en": "Were there disagreements about the restoration?"
        },
        {
          "id": "notre-dame-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que tant d'argent était bien utilisé ?",
          "question_en": "Was that much money well spent?"
        },
        {
          "id": "notre-dame-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Fallait-il reconstruire à l'identique ou moderniser ?",
          "question_en": "Should it have been rebuilt exactly, or modernised?"
        },
        {
          "id": "notre-dame-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce qu'on protège le patrimoine à l'avenir ?",
          "question_en": "How do you protect heritage in future?"
        },
        {
          "id": "notre-dame-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que votre image montre ?",
          "question_en": "What does your image show?"
        },
        {
          "id": "notre-dame-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Avant ou après l'incendie ? Pourquoi ce choix ?",
          "question_en": "Before or after the fire? Why that choice?"
        },
        {
          "id": "notre-dame-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que l'Australie a un bâtiment aussi important ?",
          "question_en": "Does Australia have a building that matters as much?"
        },
        {
          "id": "notre-dame-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'on protège comme patrimoine ici ?",
          "question_en": "What is protected as heritage here?"
        },
        {
          "id": "notre-dame-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que vous aimeriez la visiter ?",
          "question_en": "Would you like to visit it?"
        },
        {
          "id": "notre-dame-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que ce sujet vous a attiré ?",
          "question_en": "What drew you to this subject?"
        }
      ],
      "group": "culture"
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
      ],
      "group": "culture",
      "in_reports": [
        2025
      ]
    },
    {
      "id": "nouvelle-vague",
      "name_fr": "Le cinéma français et la Nouvelle Vague",
      "name_en": "French cinema and the New Wave",
      "theme": "The French-speaking communities",
      "blurb_en": "A handful of young critics picked up cameras in 1959 and changed what a film could look like. Concrete, visual, and you can watch the evidence.",
      "key_vocab": [
        {
          "fr": "un réalisateur",
          "en": "a director"
        },
        {
          "fr": "un tournage",
          "en": "a shoot"
        },
        {
          "fr": "un plan",
          "en": "a shot"
        },
        {
          "fr": "le montage",
          "en": "the editing"
        },
        {
          "fr": "en extérieur",
          "en": "on location"
        },
        {
          "fr": "un budget",
          "en": "a budget"
        },
        {
          "fr": "la liberté",
          "en": "freedom"
        },
        {
          "fr": "une rupture",
          "en": "a break with what came before"
        },
        {
          "fr": "influencer",
          "en": "to influence"
        },
        {
          "fr": "un chef-d'œuvre",
          "en": "a masterpiece"
        }
      ],
      "questions": [
        {
          "id": "nouvelle-vague-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est le sujet de votre discussion ?",
          "question_en": "What is the subject of your discussion?"
        },
        {
          "id": "nouvelle-vague-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que c'était, la Nouvelle Vague ?",
          "question_en": "What was the New Wave?"
        },
        {
          "id": "nouvelle-vague-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quels réalisateurs est-ce qu'on associe à ce mouvement ?",
          "question_en": "Which directors do we associate with that movement?"
        },
        {
          "id": "nouvelle-vague-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel film est-ce que vous avez regardé ?",
          "question_en": "Which film did you watch?"
        },
        {
          "id": "nouvelle-vague-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce qui rend ces films différents des autres ?",
          "question_en": "What makes those films different from others?"
        },
        {
          "id": "nouvelle-vague-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que ces jeunes cinéastes voulaient tout changer ?",
          "question_en": "Why did those young film-makers want to change everything?"
        },
        {
          "id": "nouvelle-vague-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelle influence est-ce que ce mouvement a eue ?",
          "question_en": "What influence did that movement have?"
        },
        {
          "id": "nouvelle-vague-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'on voit encore cette influence aujourd'hui ?",
          "question_en": "Can you still see that influence today?"
        },
        {
          "id": "nouvelle-vague-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que ces films sont difficiles à regarder aujourd'hui ?",
          "question_en": "Are those films hard to watch today?"
        },
        {
          "id": "nouvelle-vague-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'on les trouve parfois un peu prétentieux ?",
          "question_en": "Are they sometimes thought a bit pretentious?"
        },
        {
          "id": "nouvelle-vague-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce qu'on fait découvrir ces films aux jeunes ?",
          "question_en": "How do you get young people to discover those films?"
        },
        {
          "id": "nouvelle-vague-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que le cinéma français doit se protéger de Hollywood ?",
          "question_en": "Should French cinema protect itself from Hollywood?"
        },
        {
          "id": "nouvelle-vague-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que votre image montre, et pourquoi celle-là ?",
          "question_en": "What does your image show, and why that one?"
        },
        {
          "id": "nouvelle-vague-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que cette image dit du style de l'époque ?",
          "question_en": "What does that image say about the style of the time?"
        },
        {
          "id": "nouvelle-vague-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que le cinéma australien a eu un moment comparable ?",
          "question_en": "Has Australian cinema had a comparable moment?"
        },
        {
          "id": "nouvelle-vague-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce qu'on regarde des films français en Australie ?",
          "question_en": "Do people watch French films in Australia?"
        },
        {
          "id": "nouvelle-vague-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel film est-ce que vous recommanderiez, et pourquoi ?",
          "question_en": "Which film would you recommend, and why?"
        },
        {
          "id": "nouvelle-vague-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que ce sujet vous a donné envie de faire du cinéma ?",
          "question_en": "Has this subject made you want to make films?"
        }
      ],
      "group": "culture"
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
      ],
      "group": "culture",
      "in_reports": [
        2025
      ]
    },
    {
      "id": "nouvelle-caledonie",
      "name_fr": "La Nouvelle-Calédonie et l'indépendance",
      "name_en": "New Caledonia and independence",
      "theme": "The French-speaking communities",
      "blurb_en": "The closest French-speaking place to Melbourne, with a question about its future that has been put to a vote three times. The 2023 report notes students who had been there.",
      "key_vocab": [
        {
          "fr": "la Nouvelle-Calédonie",
          "en": "New Caledonia"
        },
        {
          "fr": "les Kanak",
          "en": "the Kanak people"
        },
        {
          "fr": "l'indépendance",
          "en": "independence"
        },
        {
          "fr": "un référendum",
          "en": "a referendum"
        },
        {
          "fr": "le nickel",
          "en": "nickel"
        },
        {
          "fr": "un territoire",
          "en": "a territory"
        },
        {
          "fr": "la coutume",
          "en": "customary law and practice"
        },
        {
          "fr": "un accord",
          "en": "an agreement"
        },
        {
          "fr": "le lagon",
          "en": "the lagoon"
        },
        {
          "fr": "l'avenir",
          "en": "the future"
        }
      ],
      "questions": [
        {
          "id": "nouvelle-caledonie-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est votre sujet ?",
          "question_en": "What is your subject?"
        },
        {
          "id": "nouvelle-caledonie-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Où se trouve la Nouvelle-Calédonie, exactement ?",
          "question_en": "Where exactly is New Caledonia?"
        },
        {
          "id": "nouvelle-caledonie-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Depuis quand est-ce que c'est un territoire français ?",
          "question_en": "How long has it been a French territory?"
        },
        {
          "id": "nouvelle-caledonie-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Combien de référendums est-ce qu'il y a eu ?",
          "question_en": "How many referendums have there been?"
        },
        {
          "id": "nouvelle-caledonie-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que la question de l'indépendance se pose ?",
          "question_en": "Why does the question of independence arise?"
        },
        {
          "id": "nouvelle-caledonie-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce que les Kanak voient cette question ?",
          "question_en": "How do the Kanak see that question?"
        },
        {
          "id": "nouvelle-caledonie-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que le lien avec la France apporte ?",
          "question_en": "What does the link with France bring?"
        },
        {
          "id": "nouvelle-caledonie-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que le nickel change la donne ?",
          "question_en": "Does nickel change the picture?"
        },
        {
          "id": "nouvelle-caledonie-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelles tensions est-ce qu'on observe ?",
          "question_en": "What tensions are there?"
        },
        {
          "id": "nouvelle-caledonie-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que les résultats des votes sont contestés ?",
          "question_en": "Why are the results of the votes disputed?"
        },
        {
          "id": "nouvelle-caledonie-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce qu'on sort d'une situation pareille ?",
          "question_en": "How do you find a way out of a situation like that?"
        },
        {
          "id": "nouvelle-caledonie-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous proposeriez ?",
          "question_en": "What would you suggest?"
        },
        {
          "id": "nouvelle-caledonie-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Décrivez votre image, s'il vous plaît.",
          "question_en": "Describe your image, please."
        },
        {
          "id": "nouvelle-caledonie-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que votre image montre le côté touristique ou politique ?",
          "question_en": "Does your image show the tourist side or the political one?"
        },
        {
          "id": "nouvelle-caledonie-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que ce sujet concerne l'Australie ?",
          "question_en": "Why does this subject concern Australia?"
        },
        {
          "id": "nouvelle-caledonie-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'il y a des parallèles avec notre histoire ?",
          "question_en": "Are there parallels with our own history?"
        },
        {
          "id": "nouvelle-caledonie-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que vous y êtes déjà allé ?",
          "question_en": "Have you been there?"
        },
        {
          "id": "nouvelle-caledonie-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que vous en pensez, vous ?",
          "question_en": "And what do you think about it yourself?"
        }
      ],
      "group": "franco"
    },
    {
      "id": "quebec",
      "name_fr": "Le Québec et sa langue",
      "name_en": "Québec and its language",
      "theme": "The French-speaking communities",
      "blurb_en": "A French-speaking place that is not France, with laws to keep it that way. The language questions in Section 1 and this subtopic feed each other.",
      "key_vocab": [
        {
          "fr": "le Québec",
          "en": "Québec"
        },
        {
          "fr": "la langue maternelle",
          "en": "the mother tongue"
        },
        {
          "fr": "une loi linguistique",
          "en": "a language law"
        },
        {
          "fr": "l'identité",
          "en": "identity"
        },
        {
          "fr": "un accent",
          "en": "an accent"
        },
        {
          "fr": "une minorité",
          "en": "a minority"
        },
        {
          "fr": "la souveraineté",
          "en": "sovereignty"
        },
        {
          "fr": "un référendum",
          "en": "a referendum"
        },
        {
          "fr": "anglophone",
          "en": "English-speaking"
        },
        {
          "fr": "une expression",
          "en": "a turn of phrase"
        }
      ],
      "questions": [
        {
          "id": "quebec-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est le sujet de votre discussion ?",
          "question_en": "What is the subject of your discussion?"
        },
        {
          "id": "quebec-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce qu'on parle français au Québec ?",
          "question_en": "Why is French spoken in Québec?"
        },
        {
          "id": "quebec-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Combien de personnes parlent français au Québec ?",
          "question_en": "How many people speak French in Québec?"
        },
        {
          "id": "quebec-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que la loi 101 ?",
          "question_en": "What is Bill 101?"
        },
        {
          "id": "quebec-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce que le Québec protège sa langue ?",
          "question_en": "How does Québec protect its language?"
        },
        {
          "id": "quebec-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que cette question est si sensible là-bas ?",
          "question_en": "Why is this question so sensitive there?"
        },
        {
          "id": "quebec-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que ces lois ont réussi ?",
          "question_en": "Have those laws worked?"
        },
        {
          "id": "quebec-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que le français québécois apporte à la langue ?",
          "question_en": "What does Québec French bring to the language?"
        },
        {
          "id": "quebec-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que ces lois posent des problèmes aux anglophones ?",
          "question_en": "Do those laws cause problems for English speakers?"
        },
        {
          "id": "quebec-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce qu'une langue peut vraiment se protéger par la loi ?",
          "question_en": "Can a language really be protected by law?"
        },
        {
          "id": "quebec-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'il faudrait faire pour l'avenir ?",
          "question_en": "What should be done for the future?"
        },
        {
          "id": "quebec-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Comment est-ce qu'on garde une langue vivante ?",
          "question_en": "How do you keep a language alive?"
        },
        {
          "id": "quebec-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'on voit sur votre image ?",
          "question_en": "What can we see in your image?"
        },
        {
          "id": "quebec-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que votre image pourrait être prise en France ?",
          "question_en": "Could your image have been taken in France?"
        },
        {
          "id": "quebec-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que l'Australie protège ses langues autochtones ?",
          "question_en": "Does Australia protect its Aboriginal languages?"
        },
        {
          "id": "quebec-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que le français du Québec est difficile à comprendre ?",
          "question_en": "Is Québec French hard to understand?"
        },
        {
          "id": "quebec-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Est-ce que vous aimeriez y aller ?",
          "question_en": "Would you like to go there?"
        },
        {
          "id": "quebec-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce qui vous a surpris dans ce sujet ?",
          "question_en": "What surprised you in this subject?"
        }
      ],
      "group": "franco"
    },
    {
      "id": "senegal",
      "name_fr": "Le Sénégal et l'Afrique francophone",
      "name_en": "Senegal and French-speaking Africa",
      "theme": "The French-speaking communities",
      "blurb_en": "More people speak French in Africa than anywhere else, and that gap between where the language came from and where it lives now is the discussion.",
      "key_vocab": [
        {
          "fr": "le Sénégal",
          "en": "Senegal"
        },
        {
          "fr": "Dakar",
          "en": "Dakar"
        },
        {
          "fr": "la francophonie",
          "en": "the French-speaking world"
        },
        {
          "fr": "une langue officielle",
          "en": "an official language"
        },
        {
          "fr": "le wolof",
          "en": "Wolof"
        },
        {
          "fr": "la colonisation",
          "en": "colonisation"
        },
        {
          "fr": "la jeunesse",
          "en": "young people"
        },
        {
          "fr": "le développement",
          "en": "development"
        },
        {
          "fr": "une ancienne colonie",
          "en": "a former colony"
        },
        {
          "fr": "la musique",
          "en": "music"
        }
      ],
      "questions": [
        {
          "id": "senegal-define-1",
          "move": "define",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quel est le sujet de votre discussion ?",
          "question_en": "What is the subject of your discussion?"
        },
        {
          "id": "senegal-define-2",
          "move": "define",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que la francophonie ?",
          "question_en": "What is the francophonie?"
        },
        {
          "id": "senegal-facts-1",
          "move": "facts",
          "width": "narrow",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Combien de pays africains ont le français comme langue officielle ?",
          "question_en": "How many African countries have French as an official language?"
        },
        {
          "id": "senegal-facts-2",
          "move": "facts",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Quelles langues est-ce qu'on parle au Sénégal ?",
          "question_en": "Which languages are spoken in Senegal?"
        },
        {
          "id": "senegal-how-1",
          "move": "how",
          "width": "open",
          "difficulty": 2,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce qu'on parle français au Sénégal ?",
          "question_en": "Why is French spoken in Senegal?"
        },
        {
          "id": "senegal-how-2",
          "move": "how",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce que le français cohabite avec le wolof ?",
          "question_en": "How does French live alongside Wolof?"
        },
        {
          "id": "senegal-good-1",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce qu'une langue commune apporte à un pays ?",
          "question_en": "What does a shared language bring a country?"
        },
        {
          "id": "senegal-good-2",
          "move": "good",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que l'Afrique apporte à la langue française ?",
          "question_en": "What does Africa bring the French language?"
        },
        {
          "id": "senegal-bad-1",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que le français reste une langue coloniale ?",
          "question_en": "Is French still a colonial language?"
        },
        {
          "id": "senegal-bad-2",
          "move": "bad",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que les langues locales sont menacées ?",
          "question_en": "Are the local languages under threat?"
        },
        {
          "id": "senegal-fix-1",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Comment est-ce que la relation devrait évoluer ?",
          "question_en": "How should the relationship change?"
        },
        {
          "id": "senegal-fix-2",
          "move": "fix",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Qu'est-ce que la France devrait faire différemment ?",
          "question_en": "What should France do differently?"
        },
        {
          "id": "senegal-image-1",
          "move": "image",
          "width": "narrow",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Qu'est-ce que votre image nous montre ?",
          "question_en": "What does your image show us?"
        },
        {
          "id": "senegal-image-2",
          "move": "image",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que votre image correspond à l'idée qu'on se fait de l'Afrique ?",
          "question_en": "Does your image match the idea people have of Africa?"
        },
        {
          "id": "senegal-compare-1",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que l'anglais joue le même rôle ailleurs ?",
          "question_en": "Does English play the same role elsewhere?"
        },
        {
          "id": "senegal-compare-2",
          "move": "compare",
          "width": "narrow",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que l'Australie a une situation comparable ?",
          "question_en": "Does Australia have a comparable situation?"
        },
        {
          "id": "senegal-final-1",
          "move": "final",
          "width": "open",
          "difficulty": 1,
          "higher_order": false,
          "from_topic": true,
          "question_fr": "Pourquoi est-ce que vous avez choisi ce sujet ?",
          "question_en": "Why did you choose this subject?"
        },
        {
          "id": "senegal-final-2",
          "move": "final",
          "width": "open",
          "difficulty": 3,
          "higher_order": true,
          "from_topic": true,
          "question_fr": "Est-ce que ça a changé votre idée du français ?",
          "question_en": "Has it changed your idea of French?"
        }
      ],
      "group": "franco"
    }
  ],
  "groups": [
    {
      "id": "histoire",
      "name_fr": "Histoire et politique",
      "name_en": "History and politics"
    },
    {
      "id": "societe",
      "name_fr": "La société",
      "name_en": "Society"
    },
    {
      "id": "culture",
      "name_fr": "Culture et arts",
      "name_en": "Culture and the arts"
    },
    {
      "id": "franco",
      "name_fr": "La francophonie",
      "name_en": "The French-speaking world"
    }
  ]
};
