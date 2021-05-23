/********************************** SpeakHello *********************************************/

(function(window){ //IIFE
  var helloSpeaker = {}; //Object
  helloSpeaker.speak = function (name) { 
                        console.log(speakWord + " " + name);
                        };
    
  window.helloSpeaker = helloSpeaker; //to be visible in the global scope   

  var speakWord = "Hello"; //not attached to the 'helloSpeaker' object.
})(window);