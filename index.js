// Add an event when the page is loaded
document.addEventListener("DOMContentLoaded", function(evt) {
    // Initialise data when the page is loaded
    initData();
})


/**
 * Get remote data
 * with GET method at https://4v9r83qfo4.execute-api.eu-central-1.amazonaws.com/dev
 */
var initData = function() {

    var data = new XMLHttpRequest();
    data.responseType = 'json';

    data.open( "GET", "https://4v9r83qfo4.execute-api.eu-central-1.amazonaws.com/dev" );
    data.send( null );

    // Event when the state of the request changes
    data.onreadystatechange = function() {

        // Check that the request is finished
        if (data.readyState == XMLHttpRequest.DONE) {
            //console.log(data.response);
            initHeader(data.response);
            getSomdeData(data.response);
        }
    }
}   

/**
 * Get the title of the course
 */
var initHeader = function(object) {
    
    // Creat an <h1> html node
    let title = document.createElement('h1');

    // Insert the receive title into the element
    title.innerHTML = object.courseName;

    // Get the div with the ID course1
    let course1 = document.getElementById('course1');

    // Insert the previous element into the div
    course1.append(title);

    /** 
    *   Differents methods to get the elements from DOM
    *  
    *   document.getElementById -> <div id="fgh"
    *   document.getElementsByClassName -> <div class=".."
    *   document.getElementsByTagName('div') -> récupère toutes les divs
    */
}

/**
 * Get the someData array
 */
var getSomdeData = function(object) {
    // Display the second row of someData
    console.log(object.someData[2][1]);

    // Loop someData
    object.someData.forEach(element => {
        console.log(element);
    });

    for(let i=0; i<object.someData.length; i++) {
        console.log(object.someData[i]);
    }

    // Add element in an array
    let reduce = object.someData[0].reduce((previous, current) => {
        return previous + current;
    });

    console.log(reduce);
}
