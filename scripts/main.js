/*
only the product sheet is going to be changed
*/



let func_main_button = function () {
    // Retrieve the contact us block element
    const contactUs = document.querySelector('.js-contact-us')

    // Update the contact us block element's class to include the "show" class
    contactUs.classList.add('hide');
    
}

let func_contact_us_button = function () {
    // Retrieve the contact us block element
    const contactUs = document.querySelector('.js-contact-us')

    // Update the contact us block element's class to include the "show" class
    contactUs.classList.remove('hide')
}