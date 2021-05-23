/********************************* SpeakGoodbye*******************************************/

(function(window){ //IIFE
  var byeSpeaker = {}; // Object
  byeSpeaker.speak = function (name) {
                      console.log(speakWord + " " + name);
                      };
    
  window.byeSpeaker = byeSpeaker; //to be visible in the global scope 

  var speakWord = "Good Bye"; //NOT attached to the 'byeSpeaker' object.
})(window);