/* ============================================================================
   readings.js — the words the voice says wrongly, and nothing else.
   ----------------------------------------------------------------------------
   The recordings are made by a French neural voice and it is right nearly all
   of the time. Where it is wrong it is wrong in one of two ways.

   It reads a run of digits as one number. A candidate number is read out digit
   by digit in the examination room, and the voice was saying "soixante-quatorze
   millions six cent trente-cinq mille deux cent quatre-vingt-dix-sept", which
   is not what a candidate says and not what a student should practise hearing.

   And it has to guess at anything that is not ordinary French orthography: a
   Roman numeral with an ending on it, an abbreviation, an English word inside a
   French sentence.

   The fix is NOT to respell French phonetically. A French voice is built to
   read French, and that is where its liaison and its rhythm come from. So the
   app speaks the ordinary written form and swaps in a spelling only for the
   handful below.

   To add one: hear something read wrongly, add a line here, nothing else.
   `fr` is the text exactly as it appears in the data, `say` is what the voice
   should be handed instead, and `why` is for the next person reading this file
   and is never spoken. Longest entries are applied first.

   KNOWN AND NOT FIXED: "plus" is /ply/ in "ne... plus" and "plus tard", and
   /plys/ in "un peu plus" and "le plus de". The voice judges this from the
   sentence and is usually right, and there is no way to check 35 sentences
   without listening to them. Same for "tous". If one sounds wrong, it belongs
   here with the whole phrase as the `fr`.

   The object below is pure JSON. The single `window.` line is the only
   JavaScript in the file.
   ========================================================================== */

window.FR_READINGS = {
  "schema_version": 1,
  "overrides": [
    {
      "fr": "74635297",
      "say": "7 4 6 3 5 2 9 7",
      "why": "A candidate number is read digit by digit in the room. As one number the voice said seventy-four million and the rest of it, which is not the exercise."
    },
    {
      "fr": "XIXe",
      "say": "dix-neuvième",
      "why": "A Roman numeral with an ending is a guess for a voice, and the one thing it must not do here is spell it out letter by letter."
    }
  ]
};
