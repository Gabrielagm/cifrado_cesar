function cipher(string1){
  //(x - n) % 26
  var newString= string1.toUpperCase();
  var str = string1;
  var n = str.search(string1);

  string1.search()


  var separateWords=newString.split("");
  var newseparateWords = separateWords.join();
  var cipherWord=[];
  var a;
  for(var i=0; i<newseparateWords.length;i++){

    a= newseparateWords.charCodeAt(i);
    resultCesar=(a+33)%26;
    cipherWord.push(String.fromCharCode(resultCesar));
  }
  return a;
}

cipher("ABCDE");

function decipher(){

}
