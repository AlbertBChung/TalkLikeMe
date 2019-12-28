var posTagger = require( 'wink-pos-tagger' );
var tagger = posTagger();

//https://github.com/dwyl/english-words
var wordslist = require('./words_dictionary.json');

export const getKeyWordsFromMessageHistory = (msgContentStr) => {
  parseFBMessageHistory(msgContentStr);
};

var decodeUnicodes = (str) => {
  console.log(str)
  let arr = str.split('');
  arr = arr.map(c => c.charCodeAt(0));
  return Buffer.from(arr).toString("utf8");
}


var parseFBMessageHistory = (msgContentStr) => {
  var obj = JSON.parse(msgContentStr);
  var lines = [];
  obj.messages.forEach(msg => {
    if(msg.content){
      lines.push(decodeUnicodes(msg.content));
    }
  });
  tagWords(lines);
};

var tagWords = (lines) => {
  var words = {
    noun: {},
    verb: {},
    adj: {}
  }
  lines.forEach(line => {
    var tags = tagger.tagSentence(line);
    tags.forEach(word => {
      if(word.tag == "word"){
        var category = null;
        if(word.pos[0] == 'N'){
          category = words.noun;
        } else if (word.pos[0] == 'V') {
          category = words.verb;
        } else if (word.pos[0] == 'J') {
          category = words.adj;
        }
        var keyword = ""
        if(word.lemma){
          keyword = word.lemma;
        } else {
          keyword = word.value;
        }
        if(category && wordslist[keyword]){
          category[keyword] = true;
        }
      }
    })
  });

  console.log("finished", words);
}

export const justAnAlert = () => {
   alert('hello');
};
