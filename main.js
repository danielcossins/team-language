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

var $flag = $('body');

$('button').on("click", function(){
  var $select = $('select').val();
  if($select==="Latin"){
    Language.translateToLatin();
    $flag.css("background", "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/She-wolf_suckles_Romulus_and_Remus.jpg/310px-She-wolf_suckles_Romulus_and_Remus.jpg') no-repeat center center fixed");
  }
  if($select==="German"){
    Language.translateToGerman();
    $flag.css("background", "url('http://www.maxbratwurst.com/images/german_guy.png') no-repeat center center fixed");
  }
  if($select==="French"){
    Language.translateToFrench();
    $flag.css("background", "url('http://images.fineartamerica.com/images-medium-large-5/french-fries-budi-satria-kwan.jpg') no-repeat center center fixed");
  }
  
})