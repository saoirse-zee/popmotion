"use strict";

var Queue = function () {
        this.clear();
    };

Queue.prototype = {
    
    /*
        Add a set of arguments to queue
    */
    add: function () {
        this.queue.push([].slice.call(arguments));
    },
    
    /*
        Get next set of arguments from queue
    */
    next: function (direction) {
        var queue = this.queue,
            returnVal = false,
            index;
            
        direction = (arguments.length) ? direction : 1;
        
        index = this.index += direction;
        
        // If our index is between 0 and the queue length, return that item
        if (index >= 0 && index < queue.length) {
            console.log(index, queue);
            returnVal = queue[index];
        
        // Or clear
        } else {
            this.clear();
        }
        
        return returnVal;
    },

    /*
        Replace queue with empty array
    */
    clear: function () {
        this.queue = [];
        this.index = 0;
    }
};

module.exports = Queue;