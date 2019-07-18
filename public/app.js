'use strict';
// Create a namespace
 var learnjs = {};

// problemView
 learnjs.problemView = function() {

    return $('<div class="problem-view">').text('Coming soon!');
} 


// Add showView to learnjs namespace
 learnjs.showView = function(hash) {

    // Routes
     var routes = {
        '#problem-1': learnjs.problemView
     }

     var viewFn = routes[hash];
        if(viewFn) { 

            $('.view-container').empty().append(viewFn());

        }
   
 }

 