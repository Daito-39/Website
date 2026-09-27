const white = document.getElementById("White");
const blue = document.getElementById("Blue");
const black = document.getElementById("Black");
const red = document.getElementById("Red");
const green = document.getElementById("Green");
const multi = document.getElementById("Multicolor");

const four = document.getElementsByClassName("four");
const three = document.getElementsByClassName("three");
const two = document.getElementsByClassName("two");
const one = document.getElementsByClassName("one");

function toggle_color(color) {
    switch(color) {
        case 1:
            if (white.style.display == 'none') {
                white.style.display = 'initial';
            } else {
                white.style.display = 'none';
            }
            break;
        case 2:
            if (blue.style.display == 'none') {
                blue.style.display = 'initial';
            } else {
                blue.style.display = 'none';
            }
            break;
        case 3:
            if (black.style.display == 'none') {
                black.style.display = 'initial';
            } else {
                black.style.display = 'none';
            }
            break;
        case 4:
            if (red.style.display == 'none') {
                red.style.display = 'initial';
            } else {
                red.style.display = 'none';
            }
            break;
        case 5:
            if (green.style.display == 'none') {
                green.style.display = 'initial';
            } else {
                green.style.display = 'none';
            }
            break;
    }
}

function toggle_mv(mana) {
    switch(mana) {
        case 1:
            for (const e of one) {
                if (e.style.display == 'none') {
                    e.style.display = 'block';
                } else {
                    e.style.display = 'none';
                }
            }
            break;
        case 2:
            for (const e of two) {
                if (e.style.display == 'none') {
                    e.style.display = 'block';
                } else {
                    e.style.display = 'none';
                }
            }
            break;
        case 3:
            for (const e of three) {
                if (e.style.display == 'none') {
                    e.style.display = 'block';
                } else {
                    e.style.display = 'none';
                }
            }
            break;
        case 4:
            for (const e of four) {
                if (e.style.display == 'none') {
                    e.style.display = 'block';
                } else {
                    e.style.display = 'none';
                }
            }
            break;
    }
}

function toggle(element) {
    element.style.display = 'none';
}
