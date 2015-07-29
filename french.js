var Language = function(language){
  var frenchArr = ["Bonjour", "Joyeux Noel", "Au Revoir", "Bonne Annee"];
  
    
  language.translateToFrench = function(){
    var $ouput = $('#content-area');
    var wordsArr = language.getWords();
    var input = language.getUserInput();
    //console.log(language.getUserInput());
    for(var i=0; i<wordsArr.length; i++){
      if(input.toLowerCase() === wordsArr[i].toLowerCase()){
        $ouput.text(frenchArr[i]);
      }
    }
  };
  
  return language;
}(Language)