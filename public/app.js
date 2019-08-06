'use strict';
// Create a namespace
 var learnjs = {};



// problemView
 learnjs.problemView = function(problemNumber) {

    var title = 'Problem #' + problemNumber + ' Coming soon!'

    return $('<div class="problem-view">').text(title);
} 


// Add showView to learnjs namespace
 learnjs.showView = function(hash) {

    // Routes
     var routes = {
        '#problem': learnjs.problemView
     };

     var hashParts = hash.split('-');
     
     var viewFn = routes[hashParts[0]];
        if(viewFn) { 

            $('.view-container').empty().append(viewFn(hashParts[1]));

        }
   
 }


 learnjs.appOnReady = function() {

   window.onhashchange = function() {

      learnjs.showView(window.location.hash);

   };

    learnjs.showView(window.location.hash);
   
}
 