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
  {Kanji:"二十日",Hiragana:"はつか",English:"The 20th"},
  {Kanji:"人",Hiragana:"ひと",English:"people"},
  {Kanji:"イスラエル人",Hiragana:"いすらえるじん",English:"israelites"},
  {Kanji:"一人",Hiragana:"ひとり",English:"one person"},
  {Kanji:"二人",Hiragana:"ふたり",English:"two people"},
  {Kanji:"三人",Hiragana:"さんにん",English:"three people"},
  {Kanji:"百",Hiragana:"ひゃく",English:"hundred"},
  {Kanji:"千",Hiragana:"せん",English:"thousand"},
  {Kanji:"万",Hiragana:"まん",English:"ten thousand"},
  {Kanji:"山",Hiragana:"やま",English:"mountain"},
  {Kanji:"ふじ山",Hiragana:"ふじさん",English:"mt.fuji"},
  {Kanji:"火山",Hiragana:"かざん",English:"Volcano"},
  {Kanji:"川",Hiragana:"かわ",English:"river"},
  {Kanji:"石",Hiragana:"いし",English:"rock"},
  {Kanji:"宝石",Hiragana:"ほうせき",English:"gems"},
  {Kanji:"空",Hiragana:"そら",English:"sky"},
  {Kanji:"空気",Hiragana:"くうき",English:"air"},
  {Kanji:"夕方",Hiragana:"ゆうがた",English:"afternoon"},
  {Kanji:"夕日",Hiragana:"ゆうひ",English:"sunset"}
  ];

let randomNum = Math.floor(Math.random() * 19);

function eval(){
  event.preventDefault();
  if(document.querySelector("#input").value === kanjiList[randomNum].Hiragana || document.querySelector("#input").value === kanjiList[randomNum].Hiragana + " ") {
    document.querySelector("#kanji").textContent = kanjiList[randomNum].Hiragana;
    document.querySelector("#kanji").classList.add("correct");
    document.querySelector("#input").textContent = "";
  } else {
    document.querySelector("#kanji").textContent = kanjiList[randomNum].Hiragana;
    document.querySelector("#kanji").classList.add("incorrect");
    document.querySelector("#input").textContent = "";
  }
  setTimeout(function(){
  if(document.querySelector("#group1").checked === true){
    randomNum = Math.floor(Math.random() * 19);
  } else if(document.querySelector("#group2").checked === true){
    randomNum = Math.floor(Math.random() * 39);
  } else if(document.querySelector("#group3").checked === true){
    if(randomNum == 46){console.log(randomNum)};
  } else if(document.querySelector("#group4").checked === true){
    randomNum = Math.floor(Math.random() * 57);
  }
  document.querySelector("#kanji").textContent = kanjiList[randomNum].Kanji;

  // This janky code capitalizes the first letter of the string if its length is longer than 1 (The length limit is to avoid issues with numbers? I don't know lol)
  if(kanjiList[randomNum].English.length > 1){
    document.querySelector("#english").textContent = kanjiList[randomNum].English;
    document.querySelector("#english").prepend(document.querySelector("#english").textContent[0].toUpperCase());
    document.querySelector("#english").textContent = document.querySelector("#english").textContent.slice(0,1) + document.querySelector("#english").textContent.slice(2);
  } else
  {document.querySelector("#english").textContent = kanjiList[randomNum].English;
  }
  document.querySelector("#kanji").classList.remove("correct", "incorrect");
  document.querySelector("#input").value = "";
  }, 3000);
}

document.querySelector("#kanji").textContent = kanjiList[randomNum].Kanji;
document.querySelector("#english").textContent = kanjiList[randomNum].English;
document.querySelector("#button").addEventListener("click", () => eval());
document.addEventListener("submit", () => eval());
