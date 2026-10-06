/* app.js — les vêtements et les couleurs. Year 7 and 8 French.

   Eight steps, in an order that puts the problem before the method: the
   student meets six people and tries to tell them apart before anybody
   has taught them a word. Everything after that is a rung, and the last
   one has nothing on screen to copy.

   Two data files and no logic of its own about French: every gender,
   every colour form and every fact about the six people is read from
   data/mots.js and data/gens.js. The figures are drawn from the same
   facts the marker reads, so a drawing and an answer key cannot drift
   apart.

   No framework, no build step, nothing fetched at runtime, no accounts,
   no analytics. localStorage holds which steps have been visited and
   whether English is showing, and nothing else. */
(function(){
  "use strict";
  var W = window.FR_MOTS, P = window.FR_GENS;
  var CLIPS = (window.FR_AUDIO || {}).clips || {};
  var $ = function(id){ return document.getElementById(id); };
  function esc(s){
    return String(s === undefined || s === null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function each(scope, sel, fn){
    Array.prototype.forEach.call((scope || document).querySelectorAll(sel), fn);
  }
  function shuffle(a){
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1)), t = a[i];
      a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---- accents ----
     A Year 8 on a school laptop often cannot type é. The marker accepts
     the word without its accents and says so once, rather than calling
     correct French wrong; it never silently pretends the accent was
     there. */
  function bare(s){
    return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function norm(s){
    return bare(s).toLowerCase().replace(/[’']/g, "'")
      .replace(/[^a-z0-9' -]/g, " ").replace(/\s+/g, " ").trim();
  }

  /* ---- sound ----
     Safari will not play an element created outside a gesture, so one
     element is woken by a scrap of silence on the first touch and then
     has its src swapped for the rest of the session. */
  var SILENCE = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAIlYA"
    + "AESsAAACABAAZGF0YQAAAAA=";
  var el0 = null, woken = false;
  function sound(){ if (!el0){ el0 = new Audio(); el0.preload = "auto"; } return el0; }
  function wake(){
    if (woken) return;
    woken = true;
    var a = sound();
    try { a.src = SILENCE; a.play().catch(function(){}); } catch (e){}
  }
  ["pointerdown", "touchstart", "keydown"].forEach(function(ev){
    document.addEventListener(ev, wake, { once: true, passive: true });
  });
  function say(text){
    var f = CLIPS[speakable(text)];
    if (!f) return;
    var a = sound();
    try { a.pause(); a.currentTime = 0; } catch (e){}
    a.src = "audio/" + f;
    a.play().catch(function(){});
  }
  function speakable(t){ return String(t || "").replace(/\s+/g, " ").trim(); }
  /* No recordings on this device means no listen buttons at all, rather
     than buttons that do nothing when a thumb finds them. */
  document.body.classList.toggle("hasvoice", !!Object.keys(CLIPS).length);
  function hasvoice(t){ return !!CLIPS[speakable(t)]; }
  function saybtn(text){
    if (!hasvoice(text)) return "";
    return '<button class="say" data-say="' + esc(text) + '"'
      + ' aria-label="Listen"><svg viewBox="0 0 24 24" aria-hidden="true">'
      + '<path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4z"/>'
      + '<path fill="none" stroke="currentColor" stroke-width="2"'
      + ' stroke-linecap="round" d="M16.5 8.8a4.5 4.5 0 0 1 0 6.4"/>'
      + '</svg></button>';
  }

  /* ---- what the page remembers ---- */
  var KEY = "vetements-v1";
  var S = { en: true, done: {}, wrote: {} };
  try { S = Object.assign(S, JSON.parse(localStorage.getItem(KEY) || "{}")); }
  catch (e){}
  var saveT = null;
  function save(){
    clearTimeout(saveT);
    saveT = setTimeout(function(){
      try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e){}
    }, 250);
  }
  function paintToggles(){
    document.body.classList.toggle("noen", !S.en);
    $("ten").classList.toggle("off", !S.en);
  }
  $("ten").onclick = function(){ S.en = !S.en; save(); paintToggles(); };
  $("treset").onclick = function(){
    if (!confirm("Clear the ticks and anything typed on this device?")) return;
    S = { en: true, done: {}, wrote: {} };
    try { localStorage.removeItem(KEY); } catch (e){}
    draw();
  };

  /* ---- the words, by kind ---- */
  var GARMENTS = W.words.filter(function(x){ return x.kind === "garment"; });
  var COLOURS  = W.words.filter(function(x){ return x.kind === "colour"; });
  var BYFR = {};
  W.words.forEach(function(x){ BYFR[x.fr] = x; });
  function colour(fr){ return BYFR[fr]; }
  function garment(fr){ return BYFR[fr]; }
  /* the colour in the form this noun forces on it */
  function agree(colourFr, gen, num){
    var c = colour(colourFr);
    if (!c) return colourFr;
    return c.forms[(gen === "f" ? "f" : "m") + (num === "p" ? "p" : "s")];
  }
  function phrase(gFr, colourFr){
    var g = garment(gFr);
    return gFr + " " + agree(colourFr, g.g, g.num);
  }
  function swatch(colourFr){
    var hex = (W.colour_hex || {})[colourFr];
    return hex ? '<span class="sw" style="background:' + esc(hex) + '"></span>' : "";
  }
  /* des pulls, des chemises: the plural of a singular garment, for the
     step where more than one is the point */
  function pluralOf(g){
    if (g.num === "p") return { fr: g.fr, base: g.base, g: g.g, num: "p",
                                en: g.en, kind: "garment", zone: g.zone };
    var b = g.base + (/[sxz]$/.test(g.base) ? "" : "s");
    return { fr: "des " + b, base: b, g: g.g, num: "p", en: g.en,
             kind: "garment", zone: g.zone };
  }

  /* ---- the six, drawn from their own facts ---- */
  var SKIN = "#f2d9c0", SKINL = "#d9b89a";
  var HAIRHEX = { brun:"#6b4423", blond:"#d8b471", roux:"#a9502a", noir:"#2b2724" };
  var EYEHEX  = { bleu:"#3a6ea8", vert:"#3f7a4e", marron:"#6b4a2b" };
  function figure(p, h){
    var f = p.facts, hair = HAIRHEX[f.haircolour] || "#6b4423";
    var HEX = W.colour_hex || {}, c = f.clothes || {};
    function col(slot, fallback){
      return (c[slot] && HEX[c[slot][1]]) || fallback;
    }
    var top = col("top", "#9aa9b8"), legs = col("bottom", "#55606e"),
        shoe = col("shoes", "#363d47");
    /* every garment is outlined, or blanc disappears into the card and a
       white shirt cannot be described, let alone marked */
    var E = ' stroke="rgba(20,25,32,.32)" stroke-width="1.2"';
    var dress = !!(c.top && /robe/.test(c.top[0]));
    var skirt = !!(c.bottom && /jupe/.test(c.bottom[0]));
    var cx = 60, foot = 232, g = [];

    if (f.hair === "long"){
      g.push('<path d="M36 44 q-9 60 -4 104 q14 7 18 -2 q-7 -48 -2 -98 z"'
        + ' fill="' + hair + '"/>');
      g.push('<path d="M84 44 q9 60 4 104 q-14 7 -18 -2 q7 -48 2 -98 z"'
        + ' fill="' + hair + '"/>');
    }
    /* legs and feet */
    if (dress || skirt){
      var sk = dress ? top : legs;
      g.push('<path d="M42 136 h36 l12 44 h-60 z" fill="' + sk + '"' + E + '/>');
      g.push('<rect x="48" y="178" width="9" height="46" rx="4.5" fill="' + SKIN + '"/>');
      g.push('<rect x="63" y="178" width="9" height="46" rx="4.5" fill="' + SKIN + '"/>');
    } else {
      g.push('<rect x="45" y="138" width="12" height="86" rx="6" fill="' + legs + '"' + E + '/>');
      g.push('<rect x="63" y="138" width="12" height="86" rx="6" fill="' + legs + '"' + E + '/>');
    }
    g.push('<ellipse cx="49" cy="' + foot + '" rx="11" ry="6" fill="' + shoe + '"' + E + '/>');
    g.push('<ellipse cx="71" cy="' + foot + '" rx="11" ry="6" fill="' + shoe + '"' + E + '/>');
    /* arms outside the body, or all you see is hands */
    g.push('<rect x="24" y="84" width="11" height="60" rx="5.5" fill="' + top + '"' + E + '/>');
    g.push('<rect x="85" y="84" width="11" height="60" rx="5.5" fill="' + top + '"' + E + '/>');
    g.push('<circle cx="29.5" cy="148" r="6" fill="' + SKIN + '" stroke="'
      + SKINL + '" stroke-width="1"/>');
    g.push('<circle cx="90.5" cy="148" r="6" fill="' + SKIN + '" stroke="'
      + SKINL + '" stroke-width="1"/>');
    /* neck and body */
    g.push('<rect x="54" y="63" width="12" height="20" fill="' + SKIN
      + '" stroke="' + SKINL + '" stroke-width="1"/>');
    g.push('<path d="M37 142 q-1 -48 5 -55 q9 -5 18 -5 q9 0 18 5 q6 7 5 55 z"'
      + ' fill="' + top + '"' + E + '/>');
    /* une écharpe sits at the neck, where it can be seen and named */
    if (c.extra && /charpe/.test(bare(c.extra[0]))){
      var sc = col("extra", "#8c2f39");
      g.push('<path d="M44 84 q16 10 32 0 q3 8 -2 12 q-14 7 -28 0 q-5 -4 -2 -12 z"'
        + ' fill="' + sc + '"' + E + '/>');
      g.push('<rect x="64" y="94" width="9" height="34" rx="4" fill="' + sc + '"' + E + '/>');
    }
    /* head */
    g.push('<circle cx="' + cx + '" cy="44" r="25" fill="' + SKIN
      + '" stroke="' + SKINL + '" stroke-width="1.5"/>');
    g.push('<circle cx="35.5" cy="46" r="5" fill="' + SKIN + '" stroke="'
      + SKINL + '" stroke-width="1"/>');
    g.push('<circle cx="84.5" cy="46" r="5" fill="' + SKIN + '" stroke="'
      + SKINL + '" stroke-width="1"/>');
    g.push('<path d="M35 44 a25 25 0 0 1 50 0 q-4 -6 -11 -7 q-14 5 -28 2'
      + ' q-7 1 -11 5 z" fill="' + hair + '"/>');
    if (f.hair === "court")
      g.push('<path d="M35 44 q0 8 2 12 q-5 -9 -2 -16 z M85 44 q0 8 -2 12'
        + ' q5 -9 2 -16 z" fill="' + hair + '"/>');
    /* eyes, in their own colour, because the colour is a clue */
    var eye = EYEHEX[f.eyes] || "#3a6ea8";
    g.push('<circle cx="51" cy="47" r="4.4" fill="' + eye + '"/>');
    g.push('<circle cx="69" cy="47" r="4.4" fill="' + eye + '"/>');
    g.push('<circle cx="51" cy="47" r="1.9" fill="#1a1d22"/>');
    g.push('<circle cx="69" cy="47" r="1.9" fill="#1a1d22"/>');
    g.push('<circle cx="52.4" cy="45.4" r="1.4" fill="#fff"/>');
    g.push('<circle cx="70.4" cy="45.4" r="1.4" fill="#fff"/>');
    g.push('<path d="M58 52 q2 3 4 0" fill="none" stroke="' + SKINL
      + '" stroke-width="1.6" stroke-linecap="round"/>');
    g.push('<path d="M53 58 q7 5 14 0" fill="none" stroke="#a9705c"'
      + ' stroke-width="2" stroke-linecap="round"/>');
    if (f.glasses){
      g.push('<g fill="none" stroke="#2f3b47" stroke-width="2">'
        + '<circle cx="51" cy="47" r="9"/><circle cx="69" cy="47" r="9"/>'
        + '<path d="M60 47h0.5"/><path d="M42 45 l-6 -2"/>'
        + '<path d="M78 45 l6 -2"/></g>');
    }
    if (c.hat){
      var hc = col("hat", "#8a5a2b");
      var cap = /casquette/.test(c.hat[0]);
      if (cap){
        g.push('<path d="M37 32 a23 20 0 0 1 46 0 z" fill="' + hc + '"' + E + '/>'
          + '<path d="M83 31 q14 1 15 6 q-16 2 -15 -6 z" fill="' + hc + '"' + E + '/>');
      } else {
        g.push('<path d="M36 30 a24 24 0 0 1 48 0 z" fill="' + hc + '"' + E + '/>'
          + '<rect x="29" y="28" width="62" height="5" rx="2.5" fill="' + hc + '"'
          + E + '/>');
      }
    }
    /* grand and petit are the same figure at two sizes, pinned at the feet
       so both are standing on the same ground */
    var k = f.tall ? 1 : 0.84;
    return '<svg class="fig" viewBox="0 0 120 240" role="img" aria-label="'
      + esc(p.name) + '"' + (h ? ' style="max-height:' + h + 'px"' : '') + '>'
      + '<g transform="translate(' + cx + ' ' + foot + ') scale(' + k
      + ') translate(' + (-cx) + ' ' + (-foot) + ')">' + g.join("") + '</g>'
      + '</svg>';
  }

  /* ---- the facts, and the sentences that are true of them ----
     One table. The exercises read it and so does the marker, so a figure
     and its answer key cannot disagree. Each entry carries the sentence,
     a test for the right answer, and a test for the wrong one that is
     worth naming rather than just refusing. */
  function factsOf(p){
    var f = p.facts, il = p.sex === "f" ? "Elle" : "Il", out = [];
    var e = p.sex === "f" ? "e" : "";

    function add(o){ out.push(o); }
    add({ id: "hair",
      fr: il + " a les cheveux " + (f.hair === "long" ? "longs" : "courts") + ".",
      look: f.hair === "long" ? "long hair" : "short hair",
      re: f.hair === "long" ? /\ba les cheveux longs?\b/ : /\ba les cheveux courts?\b/,
      wrong: f.hair === "long" ? /\ba les cheveux courts?\b/ : /\ba les cheveux longs?\b/ });
    add({ id: "haircolour",
      fr: il + " a les cheveux " + plAdj(f.haircolour) + ".",
      look: f.haircolour + " hair",
      re: new RegExp("\\ba les cheveux " + bare(plAdj(f.haircolour)) + "\\b") });
    add({ id: "eyes",
      fr: il + " a les yeux " + plAdj(f.eyes) + ".",
      look: f.eyes + " eyes",
      re: new RegExp("\\ba les yeux " + bare(plAdj(f.eyes)) + "\\b") });
    add({ id: "size",
      fr: il + " est " + (f.tall ? "grand" : "petit") + e + ".",
      look: f.tall ? "tall" : "not tall",
      re: f.tall ? /\best grande?\b/ : /\best petite?\b/,
      wrong: f.tall ? /\best petite?\b/ : /\best grande?\b/ });
    if (f.glasses)
      add({ id: "glasses", fr: il + " porte des lunettes.", look: "glasses",
            re: /\bporte des lunettes\b/ });

    ["top", "bottom", "shoes", "hat", "extra"].forEach(function(slot){
      var got = (f.clothes || {})[slot];
      if (!got) return;
      var gFr = got[0], cFr = got[1], g = garment(gFr);
      var right = phrase(gFr, cFr);
      add({ id: slot, fr: il + " porte " + right + ".",
            look: g.en + ", " + colour(cFr).en,
            garment: g, colourFr: cFr, right: right,
            judge: clothesJudge(g, cFr) });
    });
    return out;
  }
  /* the plural masculine of an adjective, which is what cheveux and yeux
     both take; marron does not move, which is the point of putting it on
     a pair of eyes */
  function plAdj(fr){
    var c = colour(fr);
    if (c) return c.forms.mp;
    var w = BYFR[fr];
    if (w && w.forms) return w.forms.mp;
    return fr;
  }

  /* ---- marking one clothing sentence ----
     The three mistakes this page exists to catch are the colour in front
     of the noun, the wrong form of the colour, and a colour that should
     not have moved at all. An all-in-one regular expression with the
     colour made optional waves all three through, so the garment is found
     first and then what sits around it is read. */
  function clothesJudge(g, cFr){
    var c = colour(cFr);
    var want = agree(cFr, g.g, g.num);
    var noun = bare(g.base).toLowerCase();
    var forms = [];
    ["ms", "fs", "mp", "fp"].forEach(function(k){
      var v = bare(c.forms[k]).toLowerCase();
      if (forms.indexOf(v) < 0) forms.push(v);
    });
    return function(ln){
      var i = ln.indexOf(noun);
      if (i < 0) return null;                    /* not about this garment */
      var after = ln.slice(i + noun.length).replace(/^\s+/, "");
      var before = ln.slice(0, i);
      var hit = null;
      forms.forEach(function(v){
        if (after.indexOf(v) === 0) hit = v;
      });
      if (hit) {
        if (hit === bare(want).toLowerCase()) return true;
        return { msg: "The colour is in the right place, but it has to match "
          + g.fr + ". " + (g.g === "f" ? "Feminine" : "Masculine")
          + (g.num === "p" ? " plural" : " singular") + ", so " + want + ".",
          shown: g.fr + " " + hit, want: g.fr + " " + want };
      }
      /* colour in front of the noun: the English order */
      var inFront = null;
      forms.forEach(function(v){
        if (new RegExp("\\b" + v + "\\s+$").test(before)) inFront = v;
      });
      if (inFront)
        return { msg: "In French the colour goes after the thing, not in "
          + "front of it.",
          shown: inFront + " " + g.base, want: g.fr + " " + want };
      return null;
    };
  }

  /* ---- the steps ---- */
  var STEPS = [
    { id:"qui",     fr:"Qui est-ce ?",  en:"Who is it?" },
    { id:"mots",    fr:"Les mots",      en:"The words" },
    { id:"genre",   fr:"un ou une",     en:"un or une" },
    { id:"apres",   fr:"Après le nom",  en:"After the noun" },
    { id:"accord",  fr:"vert / verte",  en:"Matching it" },
    { id:"pluriel", fr:"Le pluriel",    en:"More than one" },
    { id:"jamais",  fr:"marron",        en:"Never changes" },
    { id:"ecris",   fr:"Écris-le",      en:"Write it" }
  ];
  var at = 0, DRAW = {};

  function ruleFor(id){
    var r = null;
    P.rules.forEach(function(x){ if (x.step === id) r = x; });
    if (!r) return "";
    return '<div class="rule"><b>' + esc(r.title_en) + '</b>' + esc(r.rule)
      + r.eg.map(function(x){
          return '<div class="eg"><span class="fr">' + esc(x.fr) + '</span>'
            + '<em>' + esc(x.en) + '</em></div>';
        }).join("") + '</div>';
  }
  function paintSteps(){
    $("steps").innerHTML = STEPS.map(function(s, i){
      return '<button data-i="' + i + '"' + (i === at ? ' aria-current="step"' : '')
        + '><b>' + esc(s.fr) + '</b><i' + (S.done[s.id] ? ' class="done"' : '')
        + '>' + esc(s.en) + (S.done[s.id] ? " ✓" : "") + '</i></button>';
    }).join("");
    each($("steps"), "[data-i]", function(b){
      b.onclick = function(){ at = +b.dataset.i; draw(); };
    });
  }
  function done(id){ S.done[id] = 1; save(); paintSteps(); }
  function wireSay(){
    each($("main"), "[data-say]", function(b){
      b.onclick = function(ev){ ev.stopPropagation(); say(b.dataset.say); };
    });
  }
  function draw(){
    paintToggles(); paintSteps();
    $("main").innerHTML = "";
    DRAW[STEPS[at].id]();
    wireSay();
  }
  $("legend").innerHTML =
    '<s class="k-m">un · masculine</s><s class="k-f">une · feminine</s>'
    + '<s class="k-p">des · plural</s>';

  /* ---- 1. Qui est-ce ? ----
     The problem before the method. Six people, three clues, and no
     vocabulary taught yet. */
  var wIdx = 0;
  DRAW.qui = function(){
    var p = P.people[wIdx % P.people.length];
    var fs = factsOf(p);
    var clues = [fs[0], fs[2], fs.filter(function(x){ return x.garment; })[0]];
    $("main").innerHTML = ruleFor("qui")
      + '<div class="work">'
      + clues.map(function(f){
          return '<p class="fr big">' + esc(f.fr) + ' ' + saybtn(f.fr) + '</p>';
        }).join("")
      + '<div class="grid cards" id="six" style="margin-top:10px"></div></div>'
      + '<div id="fb" class="fbslot"></div>'
      + '<div class="foot"><span class="score">' + ((wIdx % P.people.length) + 1)
      + ' of ' + P.people.length + '</span><span class="sp"></span>'
      + '<button class="btn sm" id="next">Next</button></div>';
    $("six").innerHTML = P.people.map(function(x){
      return '<div class="card" role="button" tabindex="0" data-p="' + esc(x.id)
        + '" style="text-align:center">' + figure(x, 130)
        + '<span class="fr name">' + esc(x.name) + '</span></div>';
    }).join("");
    each($("main"), "[data-p]", function(b){
      function go(){
        var ok = b.dataset.p === p.id;
        b.classList.add(ok ? "yes" : "no");
        $("fb").innerHTML = '<div class="mark ' + (ok ? "yes" : "no") + '">'
          + '<b>' + (ok ? "Oui" : "Not that one") + '</b>'
          + (ok ? esc(p.name) + "." : "Check the " + esc(clues[0].look)
                  + " and the " + esc(clues[1].look) + ".") + '</div>';
        if (ok && (wIdx % P.people.length) === P.people.length - 1) done("qui");
      }
      b.onclick = go;
      b.onkeydown = function(ev){
        if (ev.key === "Enter" || ev.key === " "){ ev.preventDefault(); go(); }
      };
    });
    $("next").onclick = function(){ wIdx++; draw(); };
  };

  /* ---- 2. Les mots ----
     Listening, not reading. The card plays and shows a number, never the
     word: a student has to hear it, decide and put it somewhere, which is
     a different job from finding "green" next to vert. The spelling is
     the reward for getting it right, not the clue. */
  var mRound = 0, mOrder = null;
  var SPK = '<svg viewBox="0 0 24 24" aria-hidden="true">'
    + '<path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4z"/>'
    + '<path fill="none" stroke="currentColor" stroke-width="2"'
    + ' stroke-linecap="round" d="M16.5 8.8a4.5 4.5 0 0 1 0 6.4"/></svg>';
  DRAW.mots = function(){
    var per = 6, rounds = Math.ceil(W.words.length / per);
    mRound = mRound % rounds;
    if (!mOrder) mOrder = shuffle(W.words);
    var set = mOrder.slice(mRound * per, mRound * per + per);
    var silent = !Object.keys(CLIPS).length;
    var chips = shuffle(set), slots = shuffle(set);
    var left = set.length, miss = {}, pick = null;

    $("main").innerHTML = ruleFor("mots")
      + '<div class="work"><div class="wslots" id="slots"></div></div>'
      + '<div class="foot"><span class="score" id="sc"></span>'
      + '<div class="wtray" id="tray"></div><span class="sp"></span>'
      + '<span class="hint">' + (silent
          ? 'Drag a word onto its meaning.'
          : 'Listen, then drag it onto its meaning.') + '</span>'
      + '<button class="btn ghost sm" id="next">Next six</button></div>';
    $("slots").innerHTML = slots.map(function(x){
      return '<div class="wslot" data-m="' + esc(x.fr) + '">'
        + '<span class="mean">' + esc(x.en) + '</span>'
        + '<span class="got"></span></div>';
    }).join("");
    $("tray").innerHTML = chips.map(function(x, i){
      return '<div class="wchip" data-w="' + esc(x.fr) + '" tabindex="0"'
        + ' role="button" aria-label="Word ' + (i + 1) + ', listen">'
        + '<span class="num">' + (i + 1) + '</span>'
        + (silent ? '<span class="fr">' + esc(x.fr) + '</span>' : SPK) + '</div>';
    }).join("");
    function score(){
      $("sc").innerHTML = '<b>' + (set.length - left) + '</b> of ' + set.length
        + ' · set ' + (mRound + 1) + ' of ' + rounds;
    }
    score();
    function wordOf(fr){
      var f = null;
      set.forEach(function(x){ if (x.fr === fr) f = x; });
      return f;
    }
    function land(chip, slot){
      var fr = chip.dataset.w, ok = slot.dataset.m === fr, x = wordOf(fr);
      if (ok){
        slot.classList.add("yes");
        slot.querySelector(".got").innerHTML =
          (x.kind === "colour" ? swatch(x.fr) : "")
          + '<span class="fr">' + esc(x.fr) + '</span> ' + saybtn(x.fr);
        chip.remove();
        left--; score(); wireSay();
        if (!left) done("mots");
      } else {
        slot.classList.add("no");
        setTimeout(function(){ slot.classList.remove("no"); }, 700);
        miss[fr] = (miss[fr] || 0) + 1;
        /* stuck twice on the same word: show the spelling, and the rung
           comes off as soon as it is not needed */
        if (miss[fr] >= 2 && !silent && !chip.dataset.shown){
          chip.dataset.shown = "1";
          chip.innerHTML = '<span class="num">'
            + chip.querySelector(".num").textContent + '</span>'
            + '<span class="fr sm">' + esc(x.fr) + '</span>';
        }
      }
    }
    function clearPick(){
      each($("main"), ".wchip.pick", function(c){ c.classList.remove("pick"); });
      pick = null;
    }
    each($("main"), ".wchip", function(chip){
      var drag = null;
      chip.addEventListener("pointerdown", function(ev){
        say(wordOf(chip.dataset.w).fr);
        var r = chip.getBoundingClientRect();
        drag = { x:ev.clientX, y:ev.clientY, dx:ev.clientX - r.left,
                 dy:ev.clientY - r.top, w:r.width, h:r.height, moved:0 };
        try { chip.setPointerCapture(ev.pointerId); } catch (e){}
      });
      chip.addEventListener("pointermove", function(ev){
        if (!drag) return;
        drag.moved = Math.max(drag.moved,
          Math.abs(ev.clientX - drag.x) + Math.abs(ev.clientY - drag.y));
        if (drag.moved < 7) return;
        ev.preventDefault();
        chip.classList.add("dragging");
        chip.style.width = drag.w + "px";
        chip.style.height = drag.h + "px";
        chip.style.left = (ev.clientX - drag.dx) + "px";
        chip.style.top = (ev.clientY - drag.dy) + "px";
        var over = document.elementFromPoint(ev.clientX, ev.clientY);
        over = over && over.closest ? over.closest(".wslot") : null;
        each($("main"), ".wslot.over", function(sx){ sx.classList.remove("over"); });
        if (over) over.classList.add("over");
      });
      function drop(ev){
        if (!drag) return;
        var moved = drag.moved;
        drag = null;
        each($("main"), ".wslot.over", function(sx){ sx.classList.remove("over"); });
        if (moved < 7){
          var was = chip.classList.contains("pick");
          clearPick();
          if (!was){ chip.classList.add("pick"); pick = chip; }
          return;
        }
        chip.classList.remove("dragging");
        chip.style.cssText = "";
        var el = document.elementFromPoint(ev.clientX, ev.clientY);
        var slot = el && el.closest ? el.closest(".wslot") : null;
        if (slot && !slot.classList.contains("yes")) land(chip, slot);
      }
      chip.addEventListener("pointerup", drop);
      chip.addEventListener("pointercancel", drop);
    });
    each($("main"), ".wslot", function(slot){
      slot.onclick = function(){
        if (!pick || slot.classList.contains("yes")) return;
        var c = pick; clearPick(); land(c, slot);
      };
    });
    $("next").onclick = function(){ mRound++; draw(); };
  };

  /* ---- sorting, used by step 3 and step 7 ----
     Two columns and a pool of chips. A right answer builds the phrase
     the word is for, so the payoff is the grammar rather than a tick. A
     wrong one puts the phrase the student just asked for above the one
     they meant, names the rule, and hands the chip back: nothing is
     refused. When the last chip lands the round says so and offers
     another round or the next step. */
  function deal(list, n, kindOf){
    var by = {}, keys = [];
    list.forEach(function(w){
      var k = kindOf(w);
      if (!by[k]){ by[k] = []; keys.push(k); }
      by[k].push(w);
    });
    keys.forEach(function(k){ by[k] = shuffle(by[k]); });
    var out = [], i = 0;
    while (out.length < n){
      var moved = false;
      for (var j = 0; j < keys.length; j++){
        var pool = by[keys[j]];
        if (i < pool.length && out.length < n){ out.push(pool[i]); moved = true; }
      }
      if (!moved) break;
      i++;
    }
    return shuffle(out);
  }

  function sortGame(cfg){
    var items = cfg.items, left = items.length, pick = null, again = {};
    var nxt = STEPS[at + 1];
    $("main").innerHTML = ruleFor(cfg.id)
      + '<div class="work fit">'
      + '<div class="slot" id="pool" style="margin-bottom:10px"></div>'
      + '<div class="cols" style="height:auto;min-height:76px">'
      + cfg.cols.map(function(c){
          return '<div class="col ' + c.cls + '" data-c="' + c.key + '"'
            + ' role="button" tabindex="0"><h4>' + c.head + '</h4>'
            + '<div class="in"></div></div>';
        }).join("")
      + '</div></div>'
      + '<div id="fb" class="fbslot"></div>'
      + '<div class="foot"><span class="score" id="sc"></span>'
      + '<span class="sp"></span><span id="tip"></span></div>';
    $("pool").innerHTML = items.map(function(w, i){
      return '<button class="chip" data-i="' + i + '">'
        + (cfg.chip ? cfg.chip(w) : esc(w.fr)) + '</button>';
    }).join("");
    function score(){
      $("sc").innerHTML = '<b>' + (items.length - left) + '</b> of ' + items.length;
    }
    function tip(t){ $("tip").textContent = t; }
    score(); tip(cfg.hint);

    each($("main"), ".chip[data-i]", function(c){
      c.onclick = function(){
        each($("main"), ".chip.pick", function(x){ x.classList.remove("pick"); });
        pick = c; c.classList.add("pick"); tip(cfg.then);
      };
    });

    function finish(){
      done(cfg.id);
      var list = Object.keys(again);
      $("fb").innerHTML = '<div class="mark yes"><b>Round finished</b>'
        + 'All ' + items.length + ' sorted.'
        + (list.length ? ' Worth another look: <span class="fr">'
            + list.map(esc).join(", ") + '</span>.' : "")
        + '<p>' + esc(cfg.closing) + '</p>'
        + '<div class="btns">'
        + '<button class="btn sm ghost" id="again">Another round</button>'
        + (nxt ? '<button class="btn sm" id="onwards">Next: ' + esc(nxt.en)
                 + ' →</button>' : "")
        + '</div></div>';
      tip("");
      $("again").onclick = function(){ if (cfg.next) cfg.next(); draw(); };
      if ($("onwards")) $("onwards").onclick = function(){ at++; draw(); };
    }

    function land(key, col){
      if (!pick) return;
      var c = pick, w = items[+c.dataset.i], ok = cfg.kindOf(w) === key;
      pick = null; c.classList.remove("pick");
      if (ok){
        c.classList.add("yes", "gone");
        col.querySelector(".in").appendChild(c);
        left--; score();
        $("fb").innerHTML = '<div class="mark yes"><b>Oui</b>'
          + '<div class="ph">' + cfg.right(w) + '</div></div>';
        wireSay();
        if (!left){ $("pool").style.display = "none"; return finish(); }
        tip(cfg.hint);
      } else {
        c.classList.add("no");
        again[cfg.label ? cfg.label(w) : w.fr] = 1;
        var asked = cfg.wrong(w, key);
        $("fb").innerHTML = '<div class="mark no">'
          + (asked ? '<div class="ph bad"><i>not</i>' + asked + '</div>' : "")
          + '<div class="ph"><i>yes</i>' + cfg.right(w) + '</div>'
          + '<p>' + esc(cfg.why(w)) + '</p></div>';
        wireSay();
        setTimeout(function(){ c.classList.remove("no"); }, 1400);
        tip(cfg.hint);
      }
    }

    each($("main"), "[data-c]", function(col){
      function go(ev){
        if (ev && ev.target.closest(".chip")) return;
        land(col.dataset.c, col);
      }
      col.onclick = go;
      col.onkeydown = function(ev){
        if (ev.key === "Enter" || ev.key === " "){ ev.preventDefault(); go(null); }
      };
    });
  }

  /* ---- 3. un ou une ----
     The chip is the bare noun, because a chip reading "un pull" would be
     handing over the answer. Everything on the next three steps rests on
     this one, so it comes before any of them. */
  DRAW.genre = function(){
    var sing = GARMENTS.filter(function(g){ return g.num === "s"; });
    sortGame({
      id: "genre",
      items: deal(sing, 6, function(g){ return g.g; }),
      hint: "Tap a word, then tap un or une.",
      then: "Now tap un or une.",
      closing: "There is no way to work the gender out from the thing "
        + "itself. Learn it with the article, every time.",
      cols: [{ key:"m", cls:"m", head:"un" }, { key:"f", cls:"f", head:"une" }],
      kindOf: function(g){ return g.g; },
      chip: function(g){ return esc(g.base); },
      label: function(g){ return g.fr; },
      right: function(g){
        return '<b class="add">' + esc(g.det) + '</b> ' + esc(g.base)
          + ' ' + saybtn(g.fr);
      },
      wrong: function(g){
        return esc(g.g === "m" ? "une" : "un") + " " + esc(g.base);
      },
      why: function(g){
        return g.base + " is " + (g.g === "m" ? "masculine" : "feminine")
          + ": " + g.fr + ". That decides the colour too, so "
          + phrase(g.fr, "vert") + ".";
      }
    });
  };

  /* ---- 7. marron ----
     Does this colour ever move? Four of the thirteen never do, and a
     class that only ever meets vert and rouge never finds out there is a
     rule to break. */
  var jIdx = 0;
  DRAW.jamais = function(){
    var wear = GARMENTS.filter(function(g){ return g.num === "p"; });
    var g = wear[jIdx % wear.length];
    sortGame({
      id: "jamais",
      items: deal(COLOURS, 8, function(c){ return c.changes ? "y" : "n"; }),
      hint: "Tap a colour, then say whether it ever changes.",
      then: "Now tap a side.",
      closing: "marron and orange were a chestnut and a fruit first, and "
        + "they still behave like nouns. A colour of two words freezes "
        + "whole.",
      cols: [{ key:"y", cls:"plain", head:"ça change" },
             { key:"n", cls:"plain", head:"ça ne change jamais" }],
      kindOf: function(c){ return c.changes ? "y" : "n"; },
      chip: function(c){ return swatch(c.fr) + esc(c.fr); },
      right: function(c){
        var v = agree(c.fr, g.g, g.num);
        return swatch(c.fr) + esc(g.fr) + " "
          + (c.changes ? '<b class="add">' + esc(v) + '</b>' : esc(v))
          + ' ' + saybtn(g.fr + " " + v);
      },
      wrong: function(c){
        if (c.changes) return esc(g.fr + " " + c.forms.ms);
        return esc(g.fr + " " + c.fr + (/[sx]$/.test(c.fr) ? "" : "s"));
      },
      why: function(c){
        return c.changes
          ? c.fr + " changes: " + [c.forms.ms, c.forms.fs, c.forms.mp,
              c.forms.fp].filter(function(v, i, a){ return a.indexOf(v) === i; })
              .join(", ") + "."
          : c.fr + " never changes, in any gender and any number.";
      }
    });
  };

  /* ---- 4. Après le nom ----
     Three tiles in the wrong order. The colour is already in the right
     form, so the only question on this step is where it goes: putting
     the article, the noun and the colour in the French order and not the
     English one. */
  var aIdx = 0;
  DRAW.apres = function(){
    var g = GARMENTS[aIdx % GARMENTS.length];
    var c = COLOURS[(aIdx * 5 + 3) % COLOURS.length];
    var want = [g.det, g.base, agree(c.fr, g.g, g.num)];
    var tiles = shuffle(want.map(function(t, i){ return { t: t, i: i }; }));
    /* a shuffle that comes out already in order is not a question */
    if (tiles.map(function(x){ return x.i; }).join("") === "012")
      tiles = [tiles[2], tiles[0], tiles[1]];
    var put = [];
    $("main").innerHTML = ruleFor("apres")
      + '<div class="work fit">'
      + '<div class="line" id="line"></div>'
      + '<div class="slot" id="tiles"></div></div>'
      + '<div id="fb" class="fbslot"></div>'
      + '<div class="foot"><span class="score">' + swatch(c.fr)
      + esc(englishFor(g, c)) + '</span><span class="sp"></span>'
      + '<button class="btn sm ghost" id="undo">Undo</button>'
      + '<button class="btn sm" id="next">Next</button></div>';
    function paint(){
      $("line").innerHTML = put.length
        ? put.map(function(x){ return '<span class="tile set">' + esc(x.t)
            + '</span>'; }).join("")
        : '<span class="ghosttile">tap the words in order</span>';
      $("tiles").innerHTML = tiles.map(function(x, n){
        return put.indexOf(x) >= 0 ? ""
          : '<button class="chip" data-n="' + n + '">' + esc(x.t) + '</button>';
      }).join("");
      each($("main"), "[data-n]", function(b){
        b.onclick = function(){ put.push(tiles[+b.dataset.n]); paint(); check(); };
      });
    }
    function check(){
      if (put.length < 3) return;
      var got = put.map(function(x){ return x.t; });
      if (got.join(" ") === want.join(" ")){
        $("fb").innerHTML = '<div class="mark yes"><b>Oui</b>'
          + '<div class="ph">' + swatch(c.fr) + esc(want.join(" ")) + ' '
          + saybtn(want.join(" ")) + '</div></div>';
        wireSay();
        aIdx++;
        if (aIdx % 6 === 0) done("apres");
        return;
      }
      var why = got[1] === want[2]
        ? "That is the English order. In French the colour goes after the "
          + "thing it describes."
        : got[0] !== want[0]
          ? "The article comes first: " + g.det + ", because " + g.base
            + " is " + (g.g === "m" ? "masculine" : "feminine")
            + (g.num === "p" ? " and plural" : "") + "."
          : "Close. The order is article, then the thing, then the colour.";
      $("fb").innerHTML = '<div class="mark no">'
        + '<div class="ph bad"><i>not</i>' + esc(got.join(" ")) + '</div>'
        + '<div class="ph"><i>yes</i>' + esc(want.join(" ")) + '</div>'
        + '<p>' + esc(why) + '</p></div>';
      put = [];
      paint();
    }
    paint();
    $("undo").onclick = function(){ put.pop(); paint(); };
    $("next").onclick = function(){ aIdx++; draw(); };
  };

  /* The English of the phrase being built: "a grey T-shirt", not "grey a
     T-shirt". The gloss carries its own article where it has one. */
  function englishFor(g, c){
    var m = /^(an?\s+)(.*)$/.exec(g.en);
    return m ? m[1] + c.en + " " + m[2] : c.en + " " + g.en;
  }

  /* ---- 5 and 6. vert / verte, and the plural ----
     The same question twice over: the noun is fixed and the colour has
     to be made to match it. Step five keeps everything singular so only
     the gender is moving; step six adds number on top. Both offer every
     form the colour has, so getting it right means choosing and not
     recognising. */
  function accordStep(opts){
    var g = opts.nouns[opts.idx() % opts.nouns.length];
    var pool = COLOURS.filter(opts.colours);
    var c = pool[(opts.idx() * 7 + 2) % pool.length];
    var want = agree(c.fr, g.g, g.num);
    var forms = [];
    ["ms", "fs", "mp", "fp"].forEach(function(k){
      if (forms.indexOf(c.forms[k]) < 0) forms.push(c.forms[k]);
    });
    if (forms.length < 2) forms.push(c.fr + "s");   /* never right, always offered */
    forms = shuffle(forms);
    var nxt = STEPS[at + 1];
    $("main").innerHTML = ruleFor(opts.id)
      + '<div class="work fit">'
      + '<p class="ask">' + esc(g.fr) + ' <span class="plus">+</span> '
      + swatch(c.fr) + '<span class="dict">' + esc(c.fr) + '</span></p>'
      + '<div class="slot" id="opts"></div></div>'
      + '<div id="fb" class="fbslot"></div>'
      + '<div class="foot"><span class="score">'
      + esc(g.g === "f" ? "feminine" : "masculine")
      + esc(g.num === "p" ? ", plural" : ", singular")
      + '</span><span class="sp"></span>'
      + '<button class="btn sm" id="next">Next</button></div>';
    $("opts").innerHTML = forms.map(function(v, i){
      return '<button class="chip big" data-v="' + esc(v) + '">' + esc(v)
        + '</button>';
    }).join("");
    each($("main"), "[data-v]", function(b){
      b.onclick = function(){
        var v = b.dataset.v, ok = v === want;
        b.classList.add(ok ? "yes" : "no");
        if (ok){
          $("fb").innerHTML = '<div class="mark yes"><b>Oui</b>'
            + '<div class="ph">' + swatch(c.fr) + esc(g.fr + " " + want) + ' '
            + saybtn(g.fr + " " + want) + '</div></div>';
          wireSay();
          opts.bump();
          if (opts.idx() % 6 === 0) done(opts.id);
        } else {
          $("fb").innerHTML = '<div class="mark no">'
            + '<div class="ph bad"><i>not</i>' + esc(g.fr + " " + v) + '</div>'
            + '<div class="ph"><i>yes</i>' + esc(g.fr + " " + want) + '</div>'
            + '<p>' + esc(opts.why(g, c, want, v)) + '</p></div>';
          setTimeout(function(){ b.classList.remove("no"); }, 1400);
        }
      };
    });
    $("next").onclick = function(){ opts.bump(); draw(); };
  }

  var cIdx = 0;
  DRAW.accord = function(){
    accordStep({
      id: "accord",
      idx: function(){ return cIdx; },
      bump: function(){ cIdx++; },
      nouns: GARMENTS.filter(function(g){ return g.num === "s"; }),
      colours: function(c){ return c.changes; },
      why: function(g, c, want, got){
        if (g.g === "f" && got === c.forms.ms)
          return g.fr + " is feminine, so the colour takes an e: " + want + ".";
        if (g.g === "m" && got === c.forms.fs)
          return g.fr + " is masculine, so no e is added: " + want + ".";
        if (/s$/.test(got) && g.num === "s")
          return "There is only one of them, so no s: " + want + ".";
        return c.fr + " in the " + (g.g === "f" ? "feminine" : "masculine")
          + " singular is " + want + ".";
      }
    });
  };
  var pIdx = 0;
  DRAW.pluriel = function(){
    accordStep({
      id: "pluriel",
      idx: function(){ return pIdx; },
      bump: function(){ pIdx++; },
      nouns: GARMENTS.map(pluralOf),
      colours: function(c){ return c.changes; },
      why: function(g, c, want, got){
        if (!/s$/.test(got) && /s$/.test(want))
          return "There is more than one, so the colour takes an s too: "
            + want + ".";
        if (g.g === "f" && got === c.forms.mp)
          return g.fr + " is feminine and plural, so e then s: " + want + ".";
        if (g.g === "m" && got === c.forms.fp)
          return g.fr + " is masculine, so no e: " + want + ".";
        if (want === c.forms.ms && /s$/.test(c.forms.ms))
          return c.fr + " already ends in s, so the masculine plural adds "
            + "nothing: " + want + ".";
        return c.fr + " with " + g.fr + " is " + want + ".";
      }
    });
  };

  /* ---- 8. Écris-le ----
     The only screen with no French on it to copy. Everything before this
     can be finished by recognising something; this one cannot.

     The marker is honest about its own reach. It knows the six people and
     the words on this page, so it can tell a true sentence from a false
     one and a misplaced colour from a correct one. It cannot tell whether
     a sentence it does not recognise is good French, and it says so
     rather than marking it wrong. */
  var zIdx = 0;
  DRAW.ecris = function(){
    var p = P.people[zIdx % P.people.length];
    var fs = factsOf(p);
    $("main").innerHTML = ruleFor("ecris")
      + '<div class="work"><div class="who">'
      + '<div class="pic">' + figure(p, 300)
      + '<div style="text-align:center" class="fr name">' + esc(p.name) + '</div></div>'
      + '<div class="q"><textarea id="ta" rows="7" spellcheck="false"'
      + ' aria-label="Write three sentences in French"></textarea>'
      + '<div id="fb"></div></div></div></div>'
      + '<div class="foot"><span class="score" id="sc"></span>'
      + '<span class="sp"></span>'
      + '<button class="btn sm" id="check">Check</button>'
      + '<button class="btn ghost sm" id="next">Another person</button></div>';
    $("ta").value = S.wrote[p.id] || "";
    $("next").onclick = function(){ zIdx++; draw(); };
    $("ta").oninput = function(){ S.wrote[p.id] = $("ta").value; save(); };
    $("check").onclick = function(){
      var raw = $("ta").value;
      S.wrote[p.id] = raw; save();
      var lines = raw.split(/[.\n!?]/).map(function(x){ return x.trim(); })
        .filter(function(x){ return x.length; });
      var out = [], right = 0, wore = 0;
      lines.forEach(function(ln){
        var n = norm(ln);
        var hit = null, nearly = null, bad = null;
        fs.forEach(function(f){
          if (hit) return;
          if (f.judge){
            var v = f.judge(n);
            if (v === true) hit = f;
            else if (v && v.msg && !nearly) nearly = v;
          } else if (f.re && f.re.test(n)) hit = f;
        });
        fs.forEach(function(f){ if (!bad && f.wrong && f.wrong.test(n)) bad = f; });
        if (/\bporte\b/.test(n)) wore++;
        if (hit){
          right++;
          /* accents are not a reason to call correct French wrong, but
             they are worth saying once */
          var missing = hit.fr && bare(hit.fr) !== hit.fr
            && ln.indexOf(hit.fr.replace(/^[A-Z]\w*\s/, "")) < 0
            && bare(ln) === ln && /[éèêëàâîïôûùç]/i.test(hit.fr);
          out.push('<div class="mark yes"><b>Vrai</b>' + esc(ln)
            + (missing ? '<p>The accents are missing: ' + esc(hit.fr)
                + '</p>' : "") + '</div>');
        } else if (nearly){
          out.push('<div class="mark no"><b>Nearly</b>'
            + '<div class="ph bad"><i>not</i>' + esc(nearly.shown) + '</div>'
            + '<div class="ph"><i>yes</i>' + esc(nearly.want) + '</div>'
            + '<p>' + esc(nearly.msg) + '</p></div>');
        } else if (bad){
          out.push('<div class="mark no"><b>Good French, not this person</b>'
            + 'Look at the ' + esc(bad.look) + ' again.</div>');
        } else if (!/[a-zàâçéèêëîïôûùü]/i.test(ln) || !frenchish(n)){
          out.push('<div class="mark no"><b>Not French</b>' + esc(ln) + '</div>');
        } else {
          out.push('<div class="mark hm"><b>Cannot check this one</b>'
            + esc(ln) + '. This page only knows the hair, the eyes, the '
            + 'height, the glasses and the clothes. Whether this is good '
            + 'French is a question for your teacher.</div>');
        }
      });
      if (!lines.length) out.push('<div class="mark no"><b>Nothing yet</b>'
        + 'Three sentences about the person on the left.</div>');
      if (lines.length && !wore)
        out.push('<div class="mark hm"><b>Still to do</b>Say what '
          + esc(p.name) + ' is wearing, with porte.</div>');
      $("fb").innerHTML = out.join("");
      $("sc").innerHTML = '<b>' + right + '</b> true of ' + esc(p.name);
      if (right >= 3 && wore) done("ecris");
    };
  };
  /* Enough French to be worth marking rather than rejecting. A line with
     none of these is English, not a sentence this page got wrong. */
  var FRENCH = /\b(il|elle|a|est|porte|les|des|un|une|le|la|cheveux|yeux)\b/;
  function frenchish(n){ return FRENCH.test(n); }

  paintToggles();
  draw();
})();
