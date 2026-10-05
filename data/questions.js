/* questions.js — Section 1, the conversation.

   The conversation is about two things and no more: the student's personal
   world, and their interactions with French language and culture as a
   learner. The 2020 report says students arrived well prepared on the first
   and much less so on the second, which is why the francais and culture
   phases carry most of the questions here.

   Where a question comes from a VCAA document or an assessor report, the
   `source` field says which. The ones without a source were written for
   this app and need a French teacher's eye.

   The register rule that governs all of them: the assessor says VOUS.

   `phase` places a question in the conversation - opener, personal,
   francais, culture - and a timed run fills the phases in that order.

   One window. line, then pure JSON. No comments inside the object.      */

window.FR_QUESTIONS = {
  "schema_version": 2,
  "questions": [
    {
      "id": "c-lib-01",
      "section": "conversation",
      "phase": "opener",
      "topic": "temps-libre",
      "question_type": "personal",
      "difficulty": 1,
      "higher_order": false,
      "question_fr": "Qu'est-ce que vous aimez faire pendant votre temps libre ?",
      "question_en": "What do you like doing in your free time?",
      "followups": [
        {
          "fr": "Depuis quand est-ce que vous faites ça ?",
          "en": "How long have you been doing that?"
        },
        {
          "fr": "Avec qui est-ce que vous le faites ?",
          "en": "Who do you do it with?"
        },
        {
          "fr": "Pourquoi est-ce que vous aimez ça ?",
          "en": "Why do you enjoy it?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "J'aime faire du sport.",
          "en": "I like playing sport."
        },
        "developed": {
          "fr": "J'aime faire du sport, surtout le foot. Je joue deux fois par semaine avec mes amis.",
          "en": "I like sport, especially football. I play twice a week with my friends."
        },
        "advanced": {
          "fr": "Quand j'ai du temps libre, je joue au foot. Je fais partie d'une équipe depuis cinq ans et on s'entraîne deux fois par semaine. Ça me permet de me vider la tête après une longue journée au lycée.",
          "en": "When I have free time I play football. I have been in a team for five years and we train twice a week. It clears my head after a long day at school."
        }
      }
    },
    {
      "id": "c-sco-01",
      "section": "conversation",
      "phase": "opener",
      "topic": "etudes",
      "question_type": "opinion",
      "difficulty": 2,
      "higher_order": false,
      "question_fr": "Comment s'est passée votre année scolaire ?",
      "question_en": "How has your school year gone?",
      "followups": [
        {
          "fr": "Quelle matière était la plus difficile ?",
          "en": "Which subject was the hardest?"
        },
        {
          "fr": "Qu'est-ce que vous changeriez l'année prochaine ?",
          "en": "What would you change next year?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Ça s'est bien passé, merci.",
          "en": "It went well, thank you."
        },
        "developed": {
          "fr": "Ça s'est bien passé, mais c'était chargé. J'ai eu beaucoup de devoirs cette année.",
          "en": "It went well, but it was busy. I had a lot of homework this year."
        },
        "advanced": {
          "fr": "Dans l'ensemble, ça s'est bien passé. Le début de l'année était difficile parce que j'avais du mal à m'organiser, mais depuis le mois de juin je travaille de façon plus régulière et je suis assez content de mes résultats.",
          "en": "On the whole it went well. The start of the year was hard because I struggled to organise myself, but since June I have worked more steadily and I am fairly happy with my results."
        }
      }
    },
    {
      "id": "c-job-01",
      "section": "conversation",
      "phase": "opener",
      "topic": "travail",
      "question_type": "factual",
      "difficulty": 2,
      "higher_order": false,
      "question_fr": "Est-ce que vous avez un petit boulot ?",
      "question_en": "Do you have a part-time job?",
      "followups": [
        {
          "fr": "Qu'est-ce que vous faites avec l'argent ?",
          "en": "What do you do with the money?"
        },
        {
          "fr": "Est-ce que c'est difficile avec les études ?",
          "en": "Is it hard alongside your study?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Oui, je travaille dans un supermarché.",
          "en": "Yes, I work in a supermarket."
        },
        "developed": {
          "fr": "Oui, je travaille dans un supermarché le samedi. Je fais environ six heures par semaine.",
          "en": "Yes, I work in a supermarket on Saturdays. I do about six hours a week."
        },
        "advanced": {
          "fr": "Oui, je travaille dans un supermarché près de chez moi, le samedi matin. C'est fatigant parce qu'il faut rester debout, mais j'aime bien parler avec les clients et ça m'aide à payer mes sorties.",
          "en": "Yes, in a supermarket near home, on Saturday mornings. It is tiring because you are on your feet, but I enjoy talking to the customers and it helps me pay for going out."
        }
      }
    },
    {
      "id": "c-fam-01",
      "section": "conversation",
      "phase": "personal",
      "topic": "famille",
      "question_type": "personal",
      "difficulty": 1,
      "higher_order": false,
      "question_fr": "Parlez-moi de votre famille.",
      "question_en": "Tell me about your family.",
      "followups": [
        {
          "fr": "Avec qui est-ce que vous vous entendez le mieux ?",
          "en": "Who do you get on with best?"
        },
        {
          "fr": "Qu'est-ce que vous faites ensemble le week-end ?",
          "en": "What do you do together at the weekend?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "J'ai une sœur et un frère.",
          "en": "I have a sister and a brother."
        },
        "developed": {
          "fr": "Nous sommes quatre à la maison. J'ai une sœur aînée qui est à l'université et un frère plus jeune.",
          "en": "There are four of us at home. I have an older sister at university and a younger brother."
        },
        "advanced": {
          "fr": "Nous sommes cinq : mes parents, ma sœur aînée, mon petit frère et moi. Ma sœur est à l'université à Sydney, donc on ne la voit qu'aux vacances. Je m'entends très bien avec mon frère, même si on se dispute pour des bêtises.",
          "en": "There are five of us: my parents, my older sister, my little brother and me. My sister is at university in Sydney, so we only see her in the holidays. I get on very well with my brother, even if we argue over silly things."
        }
      }
    },
    {
      "id": "c-mat-01",
      "section": "conversation",
      "phase": "personal",
      "topic": "etudes",
      "question_type": "opinion",
      "difficulty": 2,
      "higher_order": false,
      "question_fr": "Quelle matière préférez-vous cette année, et pourquoi ?",
      "question_en": "Which subject do you prefer this year, and why?",
      "followups": [
        {
          "fr": "Et la matière la plus difficile ?",
          "en": "And the hardest subject?"
        },
        {
          "fr": "Est-ce que ça va influencer vos études plus tard ?",
          "en": "Will that shape what you study later?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Je préfère la biologie.",
          "en": "I prefer biology."
        },
        "developed": {
          "fr": "Je préfère la biologie parce que le professeur explique très bien et que les travaux pratiques sont intéressants.",
          "en": "I prefer biology because the teacher explains things well and the practical work is interesting."
        },
        "advanced": {
          "fr": "Ma matière préférée, c'est la biologie. Ce qui me plaît, c'est qu'on ne se contente pas d'apprendre par cœur : on fait des expériences et il faut expliquer ses résultats. Je voudrais étudier quelque chose dans ce domaine à l'université.",
          "en": "My favourite subject is biology. What I like is that you do not just learn by heart: you run experiments and you have to explain your results. I would like to study something in that field at university."
        }
      }
    },
    {
      "id": "c-jou-01",
      "section": "conversation",
      "phase": "personal",
      "topic": "quotidien",
      "question_type": "factual",
      "difficulty": 2,
      "higher_order": false,
      "question_fr": "Décrivez une journée typique pour vous.",
      "question_en": "Describe a typical day for you.",
      "followups": [
        {
          "fr": "À quelle heure est-ce que vous vous couchez ?",
          "en": "What time do you go to bed?"
        },
        {
          "fr": "Quel jour est le plus chargé ?",
          "en": "Which day is busiest?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Je me lève à sept heures et je vais au lycée.",
          "en": "I get up at seven and go to school."
        },
        "developed": {
          "fr": "Je me lève à sept heures, je prends le train, et les cours commencent à neuf heures moins le quart. Le soir, je fais mes devoirs.",
          "en": "I get up at seven, take the train, and classes start at a quarter to nine. In the evening I do my homework."
        },
        "advanced": {
          "fr": "En semaine, je me lève vers sept heures et je prends le train parce que le lycée est à vingt minutes de chez moi. Les cours finissent à trois heures et demie, puis je rentre travailler. Le mardi et le jeudi, j'ai un entraînement, donc ces jours-là je dîne assez tard.",
          "en": "On weekdays I get up around seven and take the train, because school is twenty minutes from home. Classes finish at half past three, then I go home and work. On Tuesdays and Thursdays I have training, so I eat late those days."
        }
      }
    },
    {
      "id": "c-str-01",
      "section": "conversation",
      "phase": "personal",
      "topic": "quotidien",
      "question_type": "opinion",
      "difficulty": 3,
      "higher_order": true,
      "question_fr": "Qu'est-ce que vous faites quand vous êtes stressé ?",
      "question_en": "What do you do when you are stressed?",
      "followups": [
        {
          "fr": "Est-ce que ça marche ?",
          "en": "Does it work?"
        },
        {
          "fr": "Qu'est-ce que vous conseilleriez à un ami stressé ?",
          "en": "What would you advise a stressed friend?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "J'écoute de la musique.",
          "en": "I listen to music."
        },
        "developed": {
          "fr": "Quand je suis stressé, j'écoute de la musique ou je sors marcher un peu.",
          "en": "When I am stressed I listen to music or go for a short walk."
        },
        "advanced": {
          "fr": "Quand je suis stressé, surtout avant les examens, j'essaie de ne pas rester devant mon bureau. Je sors courir une demi-heure, et après je travaille beaucoup mieux. Parler avec mes amis m'aide aussi, parce qu'on est tous dans la même situation.",
          "en": "When I am stressed, especially before exams, I try not to stay at my desk. I go for a half-hour run and afterwards I work much better. Talking to my friends helps too, because we are all in the same boat."
        }
      }
    },
    {
      "id": "c-fra-01",
      "section": "conversation",
      "phase": "francais",
      "topic": "francais",
      "question_type": "factual",
      "difficulty": 1,
      "higher_order": false,
      "question_fr": "Depuis combien de temps est-ce que vous apprenez le français ?",
      "question_en": "How long have you been learning French?",
      "followups": [
        {
          "fr": "Pourquoi est-ce que vous avez continué ?",
          "en": "Why did you keep going?"
        },
        {
          "fr": "Qu'est-ce qui a été le plus difficile au début ?",
          "en": "What was hardest at the start?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "J'apprends le français depuis six ans.",
          "en": "I have been learning French for six years."
        },
        "developed": {
          "fr": "J'apprends le français depuis six ans, depuis la septième année.",
          "en": "I have been learning French for six years, since Year 7."
        },
        "advanced": {
          "fr": "Ça fait six ans que j'apprends le français. J'ai commencé en septième année et j'ai continué parce que j'aimais bien le professeur et que je trouvais la langue belle. Maintenant, c'est la matière où je travaille le plus.",
          "en": "I have been learning French for six years. I started in Year 7 and kept going because I liked the teacher and found the language beautiful. It is now the subject I work hardest at."
        }
      }
    },
    {
      "id": "c-fra-02",
      "section": "conversation",
      "phase": "francais",
      "topic": "francais",
      "question_type": "opinion",
      "difficulty": 2,
      "higher_order": false,
      "question_fr": "Pourquoi est-ce que vous avez choisi le français ?",
      "question_en": "Why did you choose French?",
      "followups": [
        {
          "fr": "Est-ce que vous allez continuer à l'université ?",
          "en": "Will you continue at university?"
        },
        {
          "fr": "Qu'est-ce que ça vous apporte ?",
          "en": "What does it give you?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Parce que j'aime les langues.",
          "en": "Because I like languages."
        },
        "developed": {
          "fr": "J'ai choisi le français parce que j'aime les langues et parce que je voudrais voyager en France un jour.",
          "en": "I chose French because I like languages and I would like to travel to France one day."
        },
        "advanced": {
          "fr": "Au début, je l'ai choisi un peu par hasard, mais j'ai vite accroché. Apprendre une langue, c'est comme résoudre un puzzle, et puis ça ouvre des portes : il y a beaucoup de pays francophones, pas seulement la France.",
          "en": "I chose it half by chance at first, but I was quickly hooked. Learning a language is like solving a puzzle, and it opens doors: there are many French-speaking countries, not only France."
        }
      }
    },
    {
      "id": "c-fra-03",
      "section": "conversation",
      "phase": "francais",
      "topic": "francais",
      "question_type": "evaluative",
      "difficulty": 3,
      "higher_order": true,
      "question_fr": "Qu'est-ce qui est le plus difficile pour vous en français ?",
      "question_en": "What is hardest for you in French?",
      "followups": [
        {
          "fr": "Comment est-ce que vous vous entraînez ?",
          "en": "How do you practise?"
        },
        {
          "fr": "Et qu'est-ce qui est le plus facile ?",
          "en": "And what is easiest?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "La grammaire est difficile.",
          "en": "Grammar is hard."
        },
        "developed": {
          "fr": "Pour moi, le plus difficile, c'est la grammaire, surtout le subjonctif.",
          "en": "For me the hardest thing is grammar, especially the subjunctive."
        },
        "advanced": {
          "fr": "Ce qui me pose le plus de problèmes, c'est de parler sans réfléchir trop longtemps. Je connais la grammaire, mais à l'oral je cherche mes mots. Alors j'essaie de parler français avec un ami tous les midis, même cinq minutes.",
          "en": "What gives me the most trouble is speaking without thinking too long. I know the grammar, but out loud I hunt for words. So I try to speak French with a friend every lunchtime, even for five minutes."
        }
      }
    },
    {
      "id": "c-cul-01",
      "section": "conversation",
      "phase": "culture",
      "topic": "culture",
      "question_type": "personal",
      "difficulty": 1,
      "higher_order": false,
      "question_fr": "Est-ce que vous êtes déjà allé dans un pays francophone ?",
      "question_en": "Have you ever been to a French-speaking country?",
      "followups": [
        {
          "fr": "Où est-ce que vous voudriez aller ?",
          "en": "Where would you like to go?"
        },
        {
          "fr": "Avec qui ?",
          "en": "Who with?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Non, pas encore.",
          "en": "No, not yet."
        },
        "developed": {
          "fr": "Non, pas encore, mais je voudrais aller en France après le lycée.",
          "en": "No, not yet, but I would like to go to France after school."
        },
        "advanced": {
          "fr": "Non, je n'y suis jamais allé, malheureusement. J'espère partir après mes examens, d'abord à Paris, puis dans le sud. Ma tante a vécu à Lyon pendant deux ans et elle m'en parle souvent.",
          "en": "No, I have never been, unfortunately. I hope to go after my exams, first to Paris and then to the south. My aunt lived in Lyon for two years and often talks to me about it."
        }
      }
    },
    {
      "id": "c-cul-02",
      "section": "conversation",
      "phase": "culture",
      "topic": "culture",
      "question_type": "personal",
      "difficulty": 2,
      "higher_order": false,
      "question_fr": "Est-ce qu'il y a un film ou une chanson francophone que vous aimez ?",
      "question_en": "Is there a French-language film or song you like?",
      "followups": [
        {
          "fr": "Comment est-ce que vous l'avez découvert ?",
          "en": "How did you come across it?"
        },
        {
          "fr": "Est-ce que ça vous aide pour le français ?",
          "en": "Does it help your French?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Oui, j'aime la musique française.",
          "en": "Yes, I like French music."
        },
        "developed": {
          "fr": "Oui, j'écoute souvent de la musique française. J'aime surtout les chansons récentes.",
          "en": "Yes, I often listen to French music. I especially like recent songs."
        },
        "advanced": {
          "fr": "J'écoute pas mal de musique francophone, surtout des artistes belges et québécois. Au début je ne comprenais presque rien, mais maintenant je comprends une bonne partie des paroles, et ça m'a beaucoup aidé pour la compréhension orale.",
          "en": "I listen to a fair bit of French-language music, especially Belgian and Quebec artists. At first I understood almost nothing, but now I follow a good deal of it, and it has helped my listening a lot."
        }
      }
    },
    {
      "id": "c-cul-03",
      "section": "conversation",
      "phase": "culture",
      "topic": "culture",
      "question_type": "factual",
      "difficulty": 2,
      "higher_order": false,
      "question_fr": "Où est-ce qu'on peut trouver de la culture française à Melbourne ?",
      "question_en": "Where can you find French culture in Melbourne?",
      "followups": [
        {
          "fr": "Est-ce que vous y êtes allé ?",
          "en": "Have you been?"
        },
        {
          "fr": "Qu'est-ce que vous recommanderiez ?",
          "en": "What would you recommend?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Il y a un festival du film français.",
          "en": "There is a French film festival."
        },
        "developed": {
          "fr": "Il y a un festival du film français chaque année, et il y a aussi des boulangeries françaises en ville.",
          "en": "There is a French film festival every year, and there are French bakeries in the city too."
        },
        "advanced": {
          "fr": "Il y a pas mal de choses, en fait. Le festival du film français a lieu tous les ans, il y a l'Alliance française, et on trouve des boulangeries et des marchés où on entend parler français. Je trouve qu'on n'y pense pas assez quand on apprend la langue.",
          "en": "There is quite a lot, actually. The French film festival runs every year, there is the Alliance française, and there are bakeries and markets where you hear French. I think we forget about it while we are learning the language."
        }
      }
    },
    {
      "id": "c-cul-04",
      "section": "conversation",
      "phase": "culture",
      "topic": "culture",
      "question_type": "comparison",
      "difficulty": 3,
      "higher_order": true,
      "question_fr": "Est-ce que la cuisine française vous intéresse ?",
      "question_en": "Does French cooking interest you?",
      "followups": [
        {
          "fr": "Qu'est-ce que vous savez préparer ?",
          "en": "What can you cook?"
        },
        {
          "fr": "Quelle différence avec l'Australie ?",
          "en": "What is different from Australia?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Oui, j'aime bien la cuisine française.",
          "en": "Yes, I like French food."
        },
        "developed": {
          "fr": "Oui, beaucoup. J'ai essayé de faire des crêpes à la maison.",
          "en": "Yes, a lot. I have tried making crêpes at home."
        },
        "advanced": {
          "fr": "Oui, ça m'intéresse. J'ai appris à faire des crêpes et une quiche avec ma grand-mère, et depuis j'en fais presque tous les mois. Ce qui me frappe, c'est qu'en France on prend plus de temps à table qu'ici.",
          "en": "Yes, it interests me. I learnt to make crêpes and a quiche with my grandmother and I have made them most months since. What strikes me is that in France people spend longer at the table than here."
        }
      }
    },
    {
      "id": "c-wek-01",
      "section": "conversation",
      "phase": "opener",
      "topic": "quotidien",
      "question_type": "personal",
      "difficulty": 1,
      "higher_order": false,
      "question_fr": "Qu'est-ce que vous avez fait le week-end dernier ?",
      "question_en": "What did you do last weekend?",
      "source": "Every report asks for past, present and future in the same answer. This question invites all three.",
      "followups": [
        {
          "fr": "Avec qui est-ce que vous étiez ?",
          "en": "Who were you with?"
        },
        {
          "fr": "Est-ce que vous faites ça souvent ?",
          "en": "Do you do that often?"
        },
        {
          "fr": "Et le week-end prochain, qu'est-ce que vous allez faire ?",
          "en": "And next weekend, what are you going to do?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Je suis allé au cinéma avec mes amis.",
          "en": "I went to the cinema with my friends."
        },
        "developed": {
          "fr": "Samedi, je suis allé au cinéma avec mes amis, et dimanche j'ai travaillé le matin. C'était assez calme.",
          "en": "On Saturday I went to the cinema with friends, and on Sunday I worked in the morning. It was fairly quiet."
        },
        "advanced": {
          "fr": "Samedi, je suis allé au cinéma avec mes amis, ce qu'on fait presque toutes les semaines. Dimanche, j'ai travaillé le matin, puis j'ai révisé mon français l'après-midi, parce que les examens approchent et je préfère ne pas tout faire à la dernière minute.",
          "en": "On Saturday I went to the cinema with friends, which we do nearly every week. On Sunday I worked in the morning, then revised my French in the afternoon, because the exams are coming and I would rather not leave it all to the last minute."
        }
      }
    },
    {
      "id": "c-ami-01",
      "section": "conversation",
      "phase": "personal",
      "topic": "amis",
      "question_type": "personal",
      "difficulty": 1,
      "higher_order": false,
      "question_fr": "Parlez-moi de vos amis.",
      "question_en": "Tell me about your friends.",
      "source": "Relationships is a prescribed topic, and the 2021 report quotes a high-scoring answer using avoir des atomes crochus.",
      "followups": [
        {
          "fr": "Depuis quand est-ce que vous vous connaissez ?",
          "en": "How long have you known each other?"
        },
        {
          "fr": "Qu'est-ce que vous faites ensemble ?",
          "en": "What do you do together?"
        },
        {
          "fr": "Qu'est-ce qui fait un bon ami, à votre avis ?",
          "en": "What makes a good friend, in your view?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "J'ai trois bons amis au lycée.",
          "en": "I have three good friends at school."
        },
        "developed": {
          "fr": "J'ai trois bons amis au lycée. On se connaît depuis la primaire et on joue au basket ensemble le samedi.",
          "en": "I have three good friends at school. We have known each other since primary school and we play basketball together on Saturdays."
        },
        "advanced": {
          "fr": "J'ai trois bons amis au lycée. On se connaît depuis la primaire, donc on a beaucoup d'atomes crochus. Ce que j'apprécie surtout, c'est qu'on peut tout se dire sans se juger. Je dirais que c'est ça, un bon ami : quelqu'un qui vous écoute même quand il n'est pas d'accord.",
          "en": "I have three good friends at school. We have known each other since primary school, so we have a lot in common. What I value most is that we can say anything to each other without being judged. I would say that is what a good friend is: someone who listens even when they disagree."
        }
      }
    },
    {
      "id": "c-apr-01",
      "section": "conversation",
      "phase": "personal",
      "topic": "etudes",
      "question_type": "personal",
      "difficulty": 2,
      "higher_order": false,
      "question_fr": "Qu'est-ce que vous voulez faire après le lycée ?",
      "question_en": "What do you want to do after school?",
      "source": "2024 VCE French oral assessment report. Education and aspirations for VCE and beyond is named as a topic to be ready for.",
      "followups": [
        {
          "fr": "Pourquoi est-ce que ça vous intéresse ?",
          "en": "Why does that interest you?"
        },
        {
          "fr": "Est-ce que vos parents sont d'accord ?",
          "en": "Are your parents happy with that?"
        },
        {
          "fr": "Et si ça ne marche pas, qu'est-ce que vous feriez ?",
          "en": "And if it does not work out, what would you do?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Je voudrais étudier la médecine à l'université.",
          "en": "I would like to study medicine at university."
        },
        "developed": {
          "fr": "Je voudrais étudier la médecine à l'université, parce que j'aime les sciences et je voudrais aider les gens.",
          "en": "I would like to study medicine at university, because I like science and I would like to help people."
        },
        "advanced": {
          "fr": "Je voudrais étudier la médecine, mais je ne suis pas encore certain. Ce qui m'attire, c'est le contact avec les gens plutôt que la science en elle-même. Si je n'ai pas la note qu'il faut, je commencerais par la biologie et je verrais ensuite. Je dois dire que je préfère garder plusieurs portes ouvertes.",
          "en": "I would like to study medicine, but I am not certain yet. What draws me is working with people rather than the science itself. If I do not get the mark I need, I would start with biology and see from there. I must say I would rather keep a few doors open."
        }
      }
    },
    {
      "id": "c-uni-01",
      "section": "conversation",
      "phase": "personal",
      "topic": "etudes",
      "question_type": "opinion",
      "difficulty": 2,
      "higher_order": true,
      "question_fr": "Est-ce que vous aimez porter l'uniforme scolaire ?",
      "question_en": "Do you like wearing school uniform?",
      "source": "2021 VCE French oral assessment report. The advanced answer is the high-scoring sentence the report quotes, with a counter-argument added.",
      "followups": [
        {
          "fr": "Pourquoi est-ce que les écoles en ont un, à votre avis ?",
          "en": "Why do schools have one, in your view?"
        },
        {
          "fr": "Est-ce que ce serait mieux sans ?",
          "en": "Would it be better without?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Non, je n'aime pas beaucoup l'uniforme.",
          "en": "No, I do not much like the uniform."
        },
        "developed": {
          "fr": "Non, je n'aime pas l'uniforme, parce qu'il n'est pas confortable et tout le monde se ressemble.",
          "en": "No, I do not like the uniform, because it is not comfortable and everyone looks the same."
        },
        "advanced": {
          "fr": "J'aimerais ne pas devoir porter l'uniforme ; de cette manière, j'aurais l'opportunité de choisir quoi porter en fonction du temps qu'il fait. Cela dit, je comprends l'argument : sans uniforme, certains élèves pourraient se sentir jugés sur leurs vêtements.",
          "en": "I wish I did not have to wear the uniform; that way I would be able to choose what to wear depending on the weather. That said, I understand the argument: without a uniform some students might feel judged on their clothes."
        }
      }
    },
    {
      "id": "c-fra-04",
      "section": "conversation",
      "phase": "francais",
      "topic": "francais",
      "question_type": "learner",
      "difficulty": 2,
      "higher_order": true,
      "question_fr": "Est-ce qu'il y a un sujet étudié en classe qui vous a marqué ?",
      "question_en": "Is there a subtopic you studied in class that made an impression on you?",
      "source": "VCAA Revised Second Language Oral Examination, video 2, which gives this question as an example.",
      "followups": [
        {
          "fr": "Qu'est-ce qui vous a surpris ?",
          "en": "What surprised you about it?"
        },
        {
          "fr": "Est-ce que ça a changé votre façon de voir la France ?",
          "en": "Did it change how you see France?"
        },
        {
          "fr": "Est-ce que vous en avez parlé en dehors de la classe ?",
          "en": "Have you talked about it outside class?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Oui, on a étudié la cuisine française et j'ai beaucoup aimé ça.",
          "en": "Yes, we studied French food and I really liked it."
        },
        "developed": {
          "fr": "Oui, on a étudié l'immigration en France. Je ne savais pas que la société française était si variée, et ça m'a donné envie d'en savoir plus.",
          "en": "Yes, we studied immigration in France. I did not know French society was so varied, and it made me want to know more."
        },
        "advanced": {
          "fr": "Oui, on a étudié l'immigration en France, et je dois dire que ça m'a marqué. Avant, j'imaginais la France comme un pays assez uniforme. En étudiant ce sujet, j'ai compris que la réalité est beaucoup plus complexe, et surtout que les Français eux-mêmes ne sont pas d'accord entre eux là-dessus.",
          "en": "Yes, we studied immigration in France, and I must say it stayed with me. Before, I imagined France as a fairly uniform country. Studying it, I understood that the reality is far more complex, and above all that the French do not agree among themselves about it."
        }
      }
    },
    {
      "id": "c-fra-05",
      "section": "conversation",
      "phase": "francais",
      "topic": "francais",
      "question_type": "learner",
      "difficulty": 1,
      "higher_order": false,
      "question_fr": "Qu'est-ce que vous trouvez facile en français ?",
      "question_en": "What do you find easy in French?",
      "source": "VCAA Revised Second Language Oral Examination, video 2, which gives this question as an example.",
      "followups": [
        {
          "fr": "Et qu'est-ce qui est difficile ?",
          "en": "And what is difficult?"
        },
        {
          "fr": "Comment est-ce que vous avez progressé cette année ?",
          "en": "How have you improved this year?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Je trouve la lecture assez facile.",
          "en": "I find reading fairly easy."
        },
        "developed": {
          "fr": "Je trouve la lecture assez facile, parce qu'on peut relire une phrase. C'est l'oral qui est difficile, parce qu'il faut répondre tout de suite.",
          "en": "I find reading fairly easy, because you can read a sentence again. Speaking is the hard part, because you have to answer straight away."
        },
        "advanced": {
          "fr": "Je trouve la lecture assez facile, parce qu'on a le temps de relire. En revanche, l'oral reste difficile : il faut comprendre, réfléchir et répondre en même temps. Ce qui m'a le plus aidé cette année, c'est de parler avec mon assistante de français même quand je faisais des fautes.",
          "en": "I find reading fairly easy, because there is time to read again. Speaking, on the other hand, is still hard: you have to understand, think and answer all at once. What has helped me most this year is talking to our French assistant even when I was making mistakes."
        }
      }
    },
    {
      "id": "c-fra-06",
      "section": "conversation",
      "phase": "francais",
      "topic": "francais",
      "question_type": "learner",
      "difficulty": 2,
      "higher_order": false,
      "question_fr": "Qu'est-ce que vous faites en dehors de la classe pour pratiquer votre français ?",
      "question_en": "What do you do outside class to practise your French?",
      "source": "2025 report: students are told to listen to French radio and watch French television and films.",
      "followups": [
        {
          "fr": "Est-ce que ça marche ?",
          "en": "Does it work?"
        },
        {
          "fr": "Qu'est-ce que vous conseilleriez à un élève de Year 10 ?",
          "en": "What would you suggest to a Year 10 student?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "J'écoute de la musique française.",
          "en": "I listen to French music."
        },
        "developed": {
          "fr": "J'écoute de la musique française et je regarde des séries en français avec les sous-titres. Ça m'aide surtout pour la prononciation.",
          "en": "I listen to French music and watch series in French with subtitles. It helps most with pronunciation."
        },
        "advanced": {
          "fr": "J'écoute la radio française le matin, même quand je ne comprends pas tout, et je regarde des séries en français. Au début, je lisais les sous-titres en anglais ; maintenant je les mets en français. Je conseillerais à un élève plus jeune de commencer tôt et de ne pas attendre de tout comprendre.",
          "en": "I listen to French radio in the morning, even when I do not understand everything, and I watch series in French. At first I read the English subtitles; now I put them in French. I would tell a younger student to start early and not to wait until they understand everything."
        }
      }
    },
    {
      "id": "c-cul-05",
      "section": "conversation",
      "phase": "culture",
      "topic": "culture",
      "question_type": "learner",
      "difficulty": 2,
      "higher_order": false,
      "question_fr": "Est-ce que vous avez participé à un événement en français ?",
      "question_en": "Have you taken part in a French-language event?",
      "source": "2023 VCE French oral assessment report. Students talked about AFTV and Alliance Française events.",
      "followups": [
        {
          "fr": "Comment est-ce que vous l'avez trouvé ?",
          "en": "How did you find it?"
        },
        {
          "fr": "Est-ce que vous y retourneriez ?",
          "en": "Would you go again?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Oui, je suis allé à un festival du film français.",
          "en": "Yes, I went to a French film festival."
        },
        "developed": {
          "fr": "Oui, je suis allé au festival du film français à Melbourne avec ma classe. C'était difficile à suivre, mais j'ai compris l'essentiel.",
          "en": "Yes, I went to the French film festival in Melbourne with my class. It was hard to follow, but I got the gist."
        },
        "advanced": {
          "fr": "Oui, je suis allé au festival du film français avec ma classe, et j'ai aussi participé à un concours organisé par l'Alliance française. Franchement, le film était difficile à suivre au début, mais après vingt minutes on s'habitue au rythme. C'est la première fois que j'ai entendu du français qui n'était pas ralenti pour les élèves.",
          "en": "Yes, I went to the French film festival with my class, and I also took part in a competition run by the Alliance Française. Honestly, the film was hard to follow at first, but after twenty minutes you get used to the pace. It was the first time I had heard French that was not slowed down for students."
        }
      }
    },
    {
      "id": "c-cul-06",
      "section": "conversation",
      "phase": "culture",
      "topic": "culture",
      "question_type": "opinion",
      "difficulty": 3,
      "higher_order": true,
      "question_fr": "Qu'est-ce que l'apprentissage du français vous a apporté ?",
      "question_en": "What has learning French given you?",
      "source": "2022 report, which quotes c'est très gratifiant as a structure that lifted the language mark.",
      "followups": [
        {
          "fr": "Est-ce que ça vous servira plus tard ?",
          "en": "Will it be useful to you later?"
        },
        {
          "fr": "Est-ce que ça a changé votre façon de voir votre propre pays ?",
          "en": "Has it changed how you see your own country?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Ça m'a donné une autre langue et c'est utile pour voyager.",
          "en": "It has given me another language and it is useful for travelling."
        },
        "developed": {
          "fr": "Ça m'a donné une autre langue, bien sûr, mais aussi une autre façon de voir les choses. Je comprends mieux ma propre culture en la comparant.",
          "en": "It has given me another language, of course, but also another way of looking at things. I understand my own culture better by comparing it."
        },
        "advanced": {
          "fr": "C'est très gratifiant, parce que ça m'a donné bien plus qu'une langue. En comparant la France et l'Australie, j'ai remarqué des choses chez nous que je n'avais jamais remarquées avant : notre rapport au temps, par exemple, ou à la nourriture. Je dirais que c'est ça, le vrai intérêt d'apprendre une langue.",
          "en": "It is very rewarding, because it has given me far more than a language. Comparing France and Australia, I have noticed things here I had never noticed before: our relationship with time, for example, or with food. I would say that is the real point of learning a language."
        }
      }
    },
    {
      "id": "c-cul-07",
      "section": "conversation",
      "phase": "culture",
      "topic": "culture",
      "question_type": "learner",
      "difficulty": 2,
      "higher_order": false,
      "question_fr": "Est-ce que vous allez continuer le français après le lycée ?",
      "question_en": "Are you going to carry on with French after school?",
      "source": "2020 report: students were less prepared on the parts of the conversation about being a learner of French.",
      "followups": [
        {
          "fr": "Comment est-ce que vous feriez ?",
          "en": "How would you go about it?"
        },
        {
          "fr": "Pourquoi est-ce que tant d'élèves arrêtent, à votre avis ?",
          "en": "Why do so many students stop, in your view?"
        }
      ],
      "model_responses": {
        "basic": {
          "fr": "Oui, j'espère continuer à l'université.",
          "en": "Yes, I hope to carry on at university."
        },
        "developed": {
          "fr": "Oui, j'espère continuer à l'université, ou au moins prendre des cours du soir pour ne pas tout oublier.",
          "en": "Yes, I hope to carry on at university, or at least take evening classes so I do not forget it all."
        },
        "advanced": {
          "fr": "Oui, j'espère continuer, même si ce ne sera peut-être pas à l'université. Ce qui me fait peur, c'est de tout perdre en deux ans : beaucoup d'élèves arrêtent après le lycée et ne parlent plus jamais français. Je préférerais trouver un groupe de conversation, parce qu'une langue qu'on n'utilise pas disparaît.",
          "en": "Yes, I hope to carry on, though perhaps not at university. What worries me is losing it all in two years: a lot of students stop after school and never speak French again. I would rather find a conversation group, because a language you do not use disappears."
        }
      }
    }
  ]
};
