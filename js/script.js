const kanjiList = [
  {Kanji:"一",Hiragana:"いち",English:"1"},
  {Kanji:"一つ",Hiragana:"ひとつ",English:"1"},
  {Kanji:"一こ",Hiragana:"いっこ",English:"1"},
  {Kanji:"二",Hiragana:"に",English:"2"},
  {Kanji:"二つ",Hiragana:"ふたつ",English:"2"},
  {Kanji:"三",Hiragana:"さん",English:"3"},
  {Kanji:"三つ",Hiragana:"みっつ",English:"3"},
  {Kanji:"四",Hiragana:"よん",English:"4"},
  {Kanji:"四つ",Hiragana:"よっつ",English:"4"},
  {Kanji:"五",Hiragana:"ご",English:"5"},
  {Kanji:"五つ",Hiragana:"いつつ",English:"5"},
  {Kanji:"六",Hiragana:"ろく",English:"6"},
  {Kanji:"六つ",Hiragana:"むっつ",English:"6"},
  {Kanji:"七",Hiragana:"なな",English:"7"},
  {Kanji:"七つ",Hiragana:"ななつ",English:"7"},
  {Kanji:"八",Hiragana:"はち",English:"8"},
  {Kanji:"八つ",Hiragana:"やっつ",English:"8"},
  {Kanji:"九",Hiragana:"きゅう",English:"9"},
  {Kanji:"九つ",Hiragana:"ここのつ",English:"9"},
  {Kanji:"十",Hiragana:"じゅう",English:"10"},
  {Kanji:"十七",Hiragana:"じゅうなな",English:"17"},
  {Kanji:"月",Hiragana:"つき",English:"moon"},
  {Kanji:"二月",Hiragana:"にがつ",English:"february"},
  {Kanji:"月曜日",Hiragana:"げつようび",English:"monday"},
  {Kanji:"火",Hiragana:"ひ",English:"fire"},
  {Kanji:"火曜日",Hiragana:"かようび",English:"tuesday"},
  {Kanji:"水",Hiragana:"みず",English:"water"},
  {Kanji:"水曜日",Hiragana:"すいようび",English:"wednesday"},
  {Kanji:"木",Hiragana:"き",English:"wood"},
  {Kanji:"木曜日",Hiragana:"もくようび",English:"thursday"},
  {Kanji:"金",Hiragana:"きん",English:"gold"},
  {Kanji:"お金",Hiragana:"おかね",English:"money"},
  {Kanji:"金曜日",Hiragana:"きんようび",English:"friday"},
  {Kanji:"土",Hiragana:"つち",English:"dirt"},
  {Kanji:"土曜日",Hiragana:"どようび",English:"saturday"},
  {Kanji:"日",Hiragana:"ひ",English:"day"},
  {Kanji:"日曜日",Hiragana:"にちようび",English:"Sunday"},
  {Kanji:"二日",Hiragana:"ふつか",English:"The 2nd"},
  {Kanji:"二十日",Hiragana:"はつか",English:"The 20th"}
  ];

let randomNum = Math.floor(Math.random() * 20);

function eval(){
  event.preventDefault();
  if(document.querySelector("#input").value === kanjiList[randomNum].Hiragana || document.querySelector("#input").value === kanjiList[randomNum].Hiragana + " ") {
    document.querySelector("#kanji").textContent = "Correct!";
    document.querySelector("#kanji").classList.add("correct");
    document.querySelector("#input").textContent = "";
  } else {
    document.querySelector("#kanji").textContent = "Incorrect!";
    document.querySelector("#kanji").classList.add("incorrect");
    document.querySelector("#input").textContent = "";
  }
  setTimeout(function(){
  if(document.querySelector("#group1").checked === true){
    randomNum = Math.floor(Math.random() * 20);
  } else if(document.querySelector("#group2").checked === true){
    randomNum = Math.floor(Math.random() * 39);
  }
  document.querySelector("#kanji").textContent = kanjiList[randomNum].Kanji;
  document.querySelector("#english").textContent = kanjiList[randomNum].English;
  document.querySelector("#kanji").classList.remove("correct", "incorrect");
  document.querySelector("#input").value = "";
  }, 1000);
}

document.querySelector("#kanji").textContent = kanjiList[randomNum].Kanji;
document.querySelector("#english").textContent = kanjiList[randomNum].English;
document.querySelector("#button").addEventListener("click", () => eval());
document.addEventListener("submit", () => eval());
