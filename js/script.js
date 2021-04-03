const verbs = [
  {Kanji:"行く",Hiragana:"いく",English:"go",Alternate:null},
  {Kanji:"話す",Hiragana:"はなす",English:"speak",Alternate:null},
  {Kanji:"取る",Hiragana:"とる",English:"take",Alternate:null},
  {Kanji:"持つ",Hiragana:"もつ",English:"have",Alternate:null},
  {Kanji:"分かる",Hiragana:"わかる",English:"understand",Alternate:null},
  {Kanji:"教える",Hiragana:"おしえる",English:"teach",Alternate:null},
  {Kanji:"出る",Hiragana:"でる",English:"leave",Alternate:null},
  {Kanji:"寝る",Hiragana:"ねる",English:"sleep",Alternate:null},
  {Kanji:"着る",Hiragana:"きる",English:"wear",Alternate:null},
  {Kanji:"遊ぶ",Hiragana:"あそぶ",English:"play",Alternate:null},
  {Kanji:"泳ぐ",Hiragana:"およぐ",English:"swim",Alternate:null},
  {Kanji:"待つ",Hiragana:"まつ",English:"wait",Alternate:null},
  {Kanji:"買う",Hiragana:"かう",English:"buy",Alternate:null},
  {Kanji:"する",Hiragana:"する",English:"do",Alternate:null},
  {Kanji:"来る",Hiragana:"くる",English:"come",Alternate:null},
  {Kanji:"会う",Hiragana:"あう",English:"meet",Alternate:null},
  {Kanji:"言う",Hiragana:"いう",English:"say",Alternate:null},
  {Kanji:"聞く",Hiragana:"きく",English:"hear",Alternate:"ask"},
  {Kanji:"見る",Hiragana:"みる",English:"see",Alternate:null},
  {Kanji:"考える",Hiragana:"かんがえる",English:"think",Alternate:null},
  {Kanji:"思う",Hiragana:"おもう",English:"feel",Alternate:"think"},
  {Kanji:"食べる",Hiragana:"たべる",English:"eat",Alternate:null},
  {Kanji:"飲む",Hiragana:"のむ",English:"drink",Alternate:null},
  {Kanji:"信じる",Hiragana:"しんじる",English:"believe",Alternate:null},
  {Kanji:"喜ぶ",Hiragana:"よろこぶ",English:"joy",Alternate:null},
  {Kanji:"書く",Hiragana:"かく",English:"write",Alternate:null},
  {Kanji:"飛ぶ",Hiragana:"とぶ",English:"fly",Alternate:null},
  {Kanji:"洗う",Hiragana:"あらう",English:"wash",Alternate:null}
  ];

let randomNum = Math.floor(Math.random() * verbs.length);

function eval(){
  event.preventDefault();
  if(document.querySelector("#input").value === verbs[randomNum].Hiragana || document.querySelector("#input").value === verbs[randomNum].Hiragana + " ") {
    document.querySelector("#verb").textContent = "Correct!";
    document.querySelector("#verb").classList.add("correct");
    document.querySelector("#input").textContent = "";
  } else {
    document.querySelector("#verb").textContent = "Incorrect!";
    document.querySelector("#verb").classList.add("incorrect");
    document.querySelector("#input").textContent = "";
  }
  setTimeout(function(){
  randomNum = Math.floor(Math.random() * 7);;
  document.querySelector("#verb").textContent = verbs[randomNum].Kanji;
  document.querySelector("#english").textContent = verbs[randomNum].English;
  document.querySelector("#verb").classList.remove("correct", "incorrect");
  document.querySelector("#input").value = "";
  }, 1000);
}

document.querySelector("#verb").textContent = verbs[randomNum].Kanji;
document.querySelector("#english").textContent = verbs[randomNum].English;
document.querySelector("#button").addEventListener("click", () => eval());
document.addEventListener("submit", () => eval());
