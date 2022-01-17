function addingEventListener() {
    const input = document.getElementById('input');

    function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
    // input.addEventListener('click', function () { // anonymus callback function
    //     alert('I was clicked!');
    // });
    //input.addEventListener('click', () => alert('I was clicked!')); //arrow function
}
addingEventListener();

// const divs = document.querySelectorAll('div');
// console.log(divs[divs.length-1].addEventListener('mouseover', () => console.log('just hovered')));
// divs[divs.length-2].remove();
