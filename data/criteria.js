/* criteria.js — the French oral examination, as VCAA defines it.

   The descriptors below are the VCAA Second Language oral assessment
   criteria and descriptors, quoted. That document names the studies it
   applies to and French is one of them, so this is not a translation of
   the Japanese version any more: it is the same document both studies are
   marked against.

   The timings, the marks and the room procedure come from VCAA's own
   Revised Second Language Oral Examination videos, whose transcripts are
   in this repository, and are confirmed by the French assessor reports
   2020-2025, also in this repository.

   What is still not checked: the share of the study score, flagged below.

   One window. line, then pure JSON. No comments inside the object.      */

window.FR_CRITERIA = {
  "schema_version": 2,
  "verified": true,
  "sources": [
    {
      "what": "Assessment criteria and descriptors, quoted in full",
      "doc": "VCE Second Language Examinations, Oral examination - End of year: Assessment criteria and descriptors (VCAA). The document names French among the studies it applies to.",
      "version": "SL-Oral-AssessmentCriteriaAndDescriptors, in this repository"
    },
    {
      "what": "Room procedure, timings and marks",
      "doc": "Revised Second Language Oral Examination, VCAA videos 1 to 4",
      "version": "Transcripts in this repository"
    },
    {
      "what": "What assessors keep writing",
      "doc": "VCE French oral external assessment reports",
      "version": "2020, 2021, 2022, 2023, 2024 and 2025, in this repository"
    },
    {
      "what": "Themes and topics",
      "doc": "VCE French Study Design, prescribed themes: The individual, The French-speaking communities, The world around us",
      "version": "2019-2027 accreditation period"
    }
  ],
  "unverified": [
    "The share of the study score. 12.5 per cent is the usual figure for a VCE Languages oral examination and has not been read off the French study design."
  ],
  "examination": {
    "total_minutes_wording": "Approximately 15 minutes",
    "total_marks": 40,
    "contribution_percent": 12.5,
    "assessors": 2,
    "recorded": "The audio is recorded as an MP3. The recorder starts as the student enters the room."
  },
  "entry": {
    "assessed": false,
    "wording": "An assessor collects the student from outside the room and asks them in. The student greets both assessors, sits in the spare chair opposite them, gives their student number in English when asked for it in French, and then states their subtopic and shows the image they have brought for Section 2.",
    "notes": [
      "The student number is the only English used in the whole examination.",
      "It is eight numbers and a letter, and an assessor may ask for it again.",
      "The student advice slip comes out in August and a copy has to be brought to the venue.",
      "Assessors may interrupt, repeat or rephrase a question at any point in either section. That is normal, not a sign anything has gone wrong.",
      "Normal variation in assessor body language is to be expected and means nothing."
    ]
  },
  "sections": [
    {
      "id": "conversation",
      "number": 1,
      "name_en": "Conversation",
      "name_fr": "La conversation",
      "minutes": 7,
      "minutes_wording": "approximately seven minutes",
      "marks": 20,
      "about": "A general conversation between the student and the two assessors about the student's personal world and their interactions with the French language and culture as learners. Students may draw on subtopics studied in class from the prescribed themes The individual and The French-speaking communities.",
      "criteria": [
        {
          "id": "c1-content",
          "number": 1,
          "name": "Content and communication",
          "scope": "Information, ideas and opinions about the student's personal world and their interactions with the language and culture as learners",
          "qualities": [
            "relevance, depth and range of information, ideas and opinions",
            "capacity to elaborate and reflect on information, ideas and opinions",
            "capacity to interact with assessors",
            "effective communication"
          ],
          "max": 10,
          "descriptors": [
            {
              "band": "0-1",
              "text": "Provides hardly any or no evidence of meeting the criterion"
            },
            {
              "band": "2-3",
              "text": "Demonstrates minimal understanding and ability to advance the conversation; is slow to respond, with consistent hesitation and false starts; needs frequent support. Provides a limited range of information, ideas and opinions that are not always relevant. Has difficulty clarifying information, ideas and opinions"
            },
            {
              "band": "4-5",
              "text": "Demonstrates a satisfactory level of understanding; communicates satisfactorily, with hesitation and pauses; needs support. Provides a satisfactory range of information, ideas and opinions that are somewhat relevant. Clarifies some information, ideas and opinions"
            },
            {
              "band": "6-7",
              "text": "Demonstrates a good level of understanding; communicates well, with occasional hesitation and pauses. Provides a good range of information, ideas and opinions that are generally relevant. Clarifies or elaborates on information, ideas and opinions some of the time"
            },
            {
              "band": "8-9",
              "text": "Demonstrates a very high level of understanding; carries the conversation forward with confidence; communicates effectively, needing minimal support. Provides a very good range of relevant information, ideas and opinions. Clarifies, elaborates on or defends information, ideas and opinions most of the time"
            },
            {
              "band": "10",
              "text": "Demonstrates an excellent level of understanding by responding readily and communicating confidently; carries the conversation forward with spontaneity. Provides an excellent range of information, ideas and opinions clearly and logically with highly relevant responses. Clarifies, elaborates on and defends information, ideas and opinions very effectively"
            }
          ]
        },
        {
          "id": "c1-language",
          "number": 2,
          "name": "Language",
          "scope": "Accurate and appropriate language structures and vocabulary related to the student's personal world and their interactions with the language and culture as learners",
          "qualities": [
            "appropriateness of vocabulary, grammar and sentence structures",
            "clarity of expression, including pronunciation, intonation, stress and tempo"
          ],
          "max": 10,
          "descriptors": [
            {
              "band": "0-1",
              "text": "Provides hardly any or no evidence of meeting the criterion"
            },
            {
              "band": "2-3",
              "text": "Uses very simple vocabulary and structures; makes frequent and intrusive errors. Poor pronunciation, intonation, stress and tempo, with significant problems"
            },
            {
              "band": "4-5",
              "text": "Uses simple vocabulary and structures; is able to express meaning despite errors; relies on rote-learned language or literal translation from English. Satisfactory pronunciation, intonation, stress and tempo, with some problems"
            },
            {
              "band": "6-7",
              "text": "Uses good vocabulary and structures; is able to express meaning despite errors; may at times rely on rote-learned language or literal translation from English. Good pronunciation, intonation, stress and tempo, with minor problems"
            },
            {
              "band": "8-9",
              "text": "Uses very good vocabulary and structures accurately and appropriately. Very good pronunciation, intonation, stress and tempo"
            },
            {
              "band": "10",
              "text": "Uses sophisticated vocabulary and structures accurately and appropriately; uses language naturally. Excellent pronunciation, intonation, stress and tempo"
            }
          ]
        }
      ]
    },
    {
      "id": "discussion",
      "number": 2,
      "name_en": "Discussion",
      "name_fr": "La discussion",
      "minutes": 8,
      "minutes_wording": "approximately eight minutes",
      "marks": 20,
      "about": "A discussion of the subtopic the student has researched, supported by one image. The subtopic must come from the prescribed theme The French-speaking communities or the prescribed theme The world around us.",
      "no_introduction": {
        "wording": "No one-minute introduction is required. The discussion starts with the assessors' questions."
      },
      "criteria": [
        {
          "id": "c2-content",
          "number": 1,
          "name": "Content and communication",
          "scope": "Information, ideas and opinions related to the chosen subtopic and supporting visual material from either the prescribed theme The French-speaking communities or the prescribed theme The world around us",
          "qualities": [
            "relevance, depth and range of information, ideas and opinions",
            "capacity to elaborate and reflect on information, ideas and opinions",
            "capacity to interact with assessors",
            "effective communication"
          ],
          "max": 10,
          "descriptors": [
            {
              "band": "0-1",
              "text": "Provides hardly any or no evidence of meeting the criterion"
            },
            {
              "band": "2-3",
              "text": "Provides minimal information, which is not always relevant; has difficulty clarifying or elaborating on information, ideas and opinions. Is slow to respond, with consistent hesitation and false starts; needs frequent support. Provides a very weak connection between the image and the subtopic"
            },
            {
              "band": "4-5",
              "text": "Provides a satisfactory range of information, ideas and opinions that are generally relevant to the subtopic. Communicates in a satisfactory manner, but hesitation and pauses are evident. Describes the image rather than using the image to support the discussion on the subtopic. Requires support to communicate information, ideas and opinions"
            },
            {
              "band": "6-7",
              "text": "Provides a good range of information, ideas and opinions that are relevant to the subtopic. Elaborates on information and defends ideas and opinions. Uses the image appropriately to support the discussion on the subtopic. Communicates information, ideas and opinions well, but with hesitation and pauses"
            },
            {
              "band": "8-9",
              "text": "Provides a very good range and depth of information, ideas and opinions that are highly relevant to the subtopic. Elaborates on information and defends ideas and opinions clearly and effectively. Uses the image effectively to support the discussion on the subtopic. Communicates information, ideas and opinions confidently and carries the discussion forward with ease"
            },
            {
              "band": "10",
              "text": "Provides an excellent range and depth of information, ideas and opinions with an original perspective on the subtopic. Elaborates on complex information and defends ideas and opinions clearly and logically with highly relevant responses. Uses the image skilfully to support the discussion on the subtopic. Communicates information, ideas and opinions very confidently and carries the discussion forward with spontaneity"
            }
          ]
        },
        {
          "id": "c2-language",
          "number": 2,
          "name": "Language",
          "scope": "Accurate and appropriate language structures and vocabulary related to the chosen subtopic and supporting visual material from either the prescribed theme The French-speaking communities or the prescribed theme The world around us",
          "qualities": [
            "appropriateness of vocabulary, grammar and sentence structures",
            "clarity of expression, including pronunciation, intonation, stress and tempo"
          ],
          "max": 10,
          "descriptors": [
            {
              "band": "0-1",
              "text": "Provides hardly any or no evidence of meeting the criterion"
            },
            {
              "band": "2-3",
              "text": "Uses very simple vocabulary and structures; makes frequent and intrusive errors. Poor pronunciation, intonation, stress and tempo, with significant problems"
            },
            {
              "band": "4-5",
              "text": "Uses simple vocabulary and structures; is able to express meaning despite errors; relies on rote-learned language or literal translation from English. Satisfactory pronunciation, intonation, stress and tempo, with some problems"
            },
            {
              "band": "6-7",
              "text": "Uses good vocabulary and structures; is able to express meaning despite errors; may at times rely on rote-learned language or literal translation from English. Good pronunciation, intonation, stress and tempo, with minor problems"
            },
            {
              "band": "8-9",
              "text": "Uses very good vocabulary and structures accurately and appropriately. Very good pronunciation, intonation, stress and tempo"
            },
            {
              "band": "10",
              "text": "Uses sophisticated vocabulary and structures accurately and appropriately; uses language naturally. Excellent pronunciation, intonation, stress and tempo"
            }
          ]
        }
      ]
    }
  ],
  "visual_material": {
    "required": true,
    "count": 1,
    "max_paper": "A3",
    "rules": [
      "One image on a piece of paper no larger than A3.",
      "One image means a picture or a photo: not a collage, a graph, a flowchart or a mind map.",
      "Students are not to write on the image.",
      "If the image already carries writing it must be minimal, such as a heading or a title.",
      "Colour, black and white, hand-drawn or photocopied are all fine.",
      "The quality of the image is not assessed. The quality of the discussion is.",
      "Choose the subtopic first, then find an image that supports it."
    ],
    "note": "From VCAA's Revised Second Language Oral Examination video 4."
  }
};
