function slide_left(){
    if (slide_1.checked) {
        document.getElementById('slide_5').checked=true;
    } else if (slide_2.checked) {
        document.getElementById('slide_1').checked=true;
    } else if (slide_3.checked) {
        document.getElementById('slide_2').checked=true;
    } else if (slide_4.checked) {
        document.getElementById('slide_3').checked=true;
    } else if (slide_5.checked) {
        document.getElementById('slide_4').checked=true;
    }
}

function slide_right(){
    if (slide_1.checked) {
        document.getElementById('slide_2').checked=true;
    } else if (slide_2.checked) {
        document.getElementById('slide_3').checked=true;
    } else if (slide_3.checked) {
        document.getElementById('slide_4').checked=true;
    } else if (slide_4.checked) {
        document.getElementById('slide_5').checked=true;
    } else if (slide_5.checked) {
        document.getElementById('slide_1').checked=true;
    }
}