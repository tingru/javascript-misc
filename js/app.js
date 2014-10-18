/*
 app.js
 application script for the JavaScript and Forms Demo
 */

"use strict";

/* onReady()
 * The addEventListener() call just below this function will tell the browser to
 * call this function when the DOM is loaded and ready for manipulation.
 * This is where we should get a reference to the form and add an event listener for the form's
 * submit event, passing our onSubmit function as the event handler function
 * */
function onReady() {
    //get a reference to the form

    //add an event listener for the 'submit' event passing onSubmit as the event handler function

    //add an event listener for the 'click' event on the exit button
    //for this one we will use an inline anonymous function so that you can get used to those

} //onReady()

//call onReady() when the DOMContentLoaded event is raised
document.addEventListener('DOMContentLoaded', onReady);

/* onSubmit()
 * Called when the user attempts to submit the form
 * This happens either when the user clicks a <button type="submit"> or when the user hits the Enter key
 * while in a form field.
 * We want to override the browser's default behavior so that it doesn't try to submit the form
 * and we want to calculate and display the user's age based on the value in the birthdate field
 *
 * parameters:
 *   eventObject - [object] information and capabilities related to the event, passed in by the browser
 * */
function onSubmit(eventObject) {
    //remember that 'this' refers to the object that raised the event (i.e., the form)

    //get the name and the date-of-birth value

    //calculate the age

    //display the name and age


    //if the event object has a method called preventDefault,
    //call it to stop the browser from submitting the form
    //this method is now part of the standard, but it's new, so older browsers
    //will not expose this method on the event object
    if (eventObject.preventDefault) {
        eventObject.preventDefault();
    }

    //some older browsers will look at the returnValue property of the event object
    //while other older browsers will pay attention to the value returned from
    //the event handler function itself
    //to catch both cases, we will set the returnValue property to false and return false from the function
    eventObject.returnValue = false;
    return false;
} //onSubmit()

/* calculateAge()
 * This function returns the age in years given a date of birth (dob)
 *
 * parameters:
 *   dob - [Date or String] the date of birth
 *
 * returns:
 *   age in years [number]
 */
function calculateAge(dob) {

} //calculateAge()

/* displayAge()
 * Displays the user's name and age in the #age-message element
 *
 * parameters:
 *   name - [string] name of person
 *   age - [number or string] age of person
 * */
function displayAge(name, age) {

} //displayAge()

/* displayAge()
 * Displays an error in the #age-message element
 *
 * parameters:
 *   error - [object or string] error to display
 * */
function displayError(error) {

} //displayError()

