var Language = function(){
  var words = ["hello", "Merry Christmas", "goodbye", "happy new year"]
  var userInput;
  
  return {
    getWords: function(){
     return words;
    },
    getUserInput: function(){
      userInput = $('input').val();
      return userInput;
    }
  };
}();

$('button').on("click", function(){
  var $select = $('select').val();
  if($select==="Latin"){
    Language.translateToLatin();
  }
  if($select==="German"){
   Language.translateToGerman(); 
  }
  if($select==="French"){
   Language.translateToFrench();
  }
})