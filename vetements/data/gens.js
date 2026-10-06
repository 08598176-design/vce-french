/* gens.js — the six people, and the rule shown on each step.

   THE SIX ARE DRAWN FROM THESE FACTS, and so is every answer the page
   marks. One table, read twice. If a figure and its answer key ever
   disagreed the page would be marking something the student cannot see,
   so there is only ever one place to change a fact.

   THEY ARE TOLD APART BY HAIR AND EYES. The first three facts — length,
   hair colour, eye colour — are different for all six, which is what
   makes 'who is it?' answerable rather than a guess. The sanity check
   refuses two people who cannot be told apart.

   THREE GIRLS AND THREE BOYS, because il and elle both have to come up,
   and because elle est grande next to il est grand is the agreement rule
   doing a job rather than being recited.

   THE CLOTHES COVER ALL FOUR COLOUR GROUPS between them: the ones that
   change, the ones already ending in e, marron and orange, and a colour
   made of two words. A class that only ever meets vert and rouge never
   finds out that there is a rule.

   les yeux marron is here on purpose. It is the same invariable rule as
   des chaussures marron, met somewhere a student does not expect it.

   NO STUDENT NAMES and nothing drawn from a real class. The six are
   invented.

   NOTE ON une robe: a dress is the one garment that is the top and the
   bottom at once, so Léa has no separate bottom and the figure draws
   her accordingly. Nothing else may leave the bottom out. */
window.FR_GENS = {
  "schema_version": 1,
  "people": [
    {
      "id": "lea",
      "name": "Léa",
      "sex": "f",
      "facts": {
        "hair": "long",
        "haircolour": "blond",
        "eyes": "bleu",
        "tall": true,
        "glasses": false,
        "clothes": {
          "top": [
            "une robe",
            "vert"
          ],
          "shoes": [
            "des chaussures",
            "blanc"
          ],
          "extra": [
            "une écharpe",
            "rouge"
          ]
        }
      }
    },
    {
      "id": "hugo",
      "name": "Hugo",
      "sex": "m",
      "facts": {
        "hair": "court",
        "haircolour": "brun",
        "eyes": "marron",
        "tall": false,
        "glasses": true,
        "clothes": {
          "top": [
            "un pull",
            "bleu"
          ],
          "bottom": [
            "un jean",
            "noir"
          ],
          "shoes": [
            "des baskets",
            "gris"
          ]
        }
      }
    },
    {
      "id": "chloe",
      "name": "Chloé",
      "sex": "f",
      "facts": {
        "hair": "court",
        "haircolour": "roux",
        "eyes": "vert",
        "tall": false,
        "glasses": false,
        "clothes": {
          "top": [
            "une chemise",
            "blanc"
          ],
          "bottom": [
            "une jupe",
            "rouge"
          ],
          "shoes": [
            "des chaussures",
            "marron"
          ]
        }
      }
    },
    {
      "id": "noe",
      "name": "Noé",
      "sex": "m",
      "facts": {
        "hair": "long",
        "haircolour": "noir",
        "eyes": "bleu",
        "tall": true,
        "glasses": false,
        "clothes": {
          "top": [
            "un tee-shirt",
            "orange"
          ],
          "bottom": [
            "un short",
            "bleu clair"
          ],
          "shoes": [
            "des baskets",
            "blanc"
          ],
          "hat": [
            "une casquette",
            "vert"
          ]
        }
      }
    },
    {
      "id": "ines",
      "name": "Inès",
      "sex": "f",
      "facts": {
        "hair": "long",
        "haircolour": "brun",
        "eyes": "marron",
        "tall": true,
        "glasses": true,
        "clothes": {
          "top": [
            "un manteau",
            "violet"
          ],
          "bottom": [
            "un pantalon",
            "gris"
          ],
          "shoes": [
            "des chaussures",
            "noir"
          ]
        }
      }
    },
    {
      "id": "malik",
      "name": "Malik",
      "sex": "m",
      "facts": {
        "hair": "court",
        "haircolour": "noir",
        "eyes": "marron",
        "tall": false,
        "glasses": false,
        "clothes": {
          "top": [
            "un pull",
            "vert foncé"
          ],
          "bottom": [
            "un pantalon",
            "marron"
          ],
          "shoes": [
            "des chaussures",
            "noir"
          ],
          "hat": [
            "un chapeau",
            "jaune"
          ]
        }
      }
    }
  ],
  "rules": [
    {
      "step": "qui",
      "title_en": "Who is it?",
      "rule": "Read the description and find the person. Every sentence is true of exactly one of the six. porter is the verb for having something on: il porte for a boy, elle porte for a girl, and the colour comes after the garment.",
      "eg": [
        {
          "fr": "Elle porte une robe verte.",
          "en": "She is wearing a green dress."
        },
        {
          "fr": "Il porte des baskets blanches.",
          "en": "He is wearing white trainers."
        }
      ]
    },
    {
      "step": "mots",
      "title_en": "The words",
      "rule": "Press a card to hear the word, then put it on its meaning. The spelling appears once it lands, so listen first and read after.",
      "eg": []
    },
    {
      "step": "genre",
      "title_en": "un or une",
      "rule": "Every French noun is masculine or feminine, and there is no way to work it out from the thing itself: a jumper is masculine and a shirt is feminine. Learn the word with its article, un pull and une chemise, never pull and chemise on their own. Everything on the next three steps depends on getting this right.",
      "eg": [
        {
          "fr": "un pull",
          "en": "a jumper (masculine)"
        },
        {
          "fr": "une chemise",
          "en": "a shirt (feminine)"
        },
        {
          "fr": "des chaussures",
          "en": "shoes (feminine plural)"
        }
      ]
    },
    {
      "step": "apres",
      "title_en": "The colour goes after",
      "rule": "English puts the colour in front of the thing. French puts it after. That is the whole rule, and it is the first thing an English speaker gets wrong.",
      "eg": [
        {
          "fr": "une chemise rouge",
          "en": "a red shirt, word for word: a shirt red"
        },
        {
          "fr": "un pantalon noir",
          "en": "black trousers"
        },
        {
          "fr": "des baskets blanches",
          "en": "white trainers"
        }
      ]
    },
    {
      "step": "accord",
      "title_en": "vert or verte",
      "rule": "The colour has to match the thing it describes. A feminine noun adds e to the colour. A colour that already ends in e does not change: rouge stays rouge. Some feminines are irregular and have to be learnt: blanc becomes blanche.",
      "eg": [
        {
          "fr": "un pull vert",
          "en": "masculine, nothing added"
        },
        {
          "fr": "une veste verte",
          "en": "feminine, e added"
        },
        {
          "fr": "une jupe rouge",
          "en": "already ends in e, so nothing changes"
        },
        {
          "fr": "une chemise blanche",
          "en": "irregular: blanc, blanche"
        }
      ]
    },
    {
      "step": "pluriel",
      "title_en": "More than one",
      "rule": "More than one thing adds s to the colour as well, on top of the e if the noun is feminine. A colour that already ends in s does not add another one: gris stays gris in the masculine plural.",
      "eg": [
        {
          "fr": "des pulls verts",
          "en": "masculine plural: s"
        },
        {
          "fr": "des chaussures vertes",
          "en": "feminine plural: e then s"
        },
        {
          "fr": "des pantalons gris",
          "en": "already ends in s, so nothing is added"
        }
      ]
    },
    {
      "step": "jamais",
      "title_en": "The ones that never change",
      "rule": "marron and orange were a chestnut and a fruit before they were colours, and they still behave like nouns: they never change. A colour made of two words freezes as well, all of it.",
      "eg": [
        {
          "fr": "des chaussures marron",
          "en": "never marronnes"
        },
        {
          "fr": "des yeux marron",
          "en": "the same, even for eyes"
        },
        {
          "fr": "une robe bleu clair",
          "en": "two words, so nothing moves"
        }
      ]
    },
    {
      "step": "ecris",
      "title_en": "Write it",
      "rule": "Three sentences about the person on screen. Nothing is given. Say what they are wearing and what colour it is, and get the colour in the right place and the right form.",
      "eg": []
    }
  ]
};
