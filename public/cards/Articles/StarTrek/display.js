const white_sel = document.getElementById("white_selection");
const blue_sel = document.getElementById("blue_selection");
const black_sel = document.getElementById("black_selection");
const red_sel = document.getElementById("red_selection");
const green_sel = document.getElementById("green_selection");
const one_sel = document.getElementById("1_selection");
const two_sel = document.getElementById("2_selection");
const thr_sel = document.getElementById("3_selection");
const fou_sel = document.getElementById("4_selection");

const result = document.getElementById("result");

var white = false;
var blue = false;
var black = false;
var red = false;
var green = false;
var one = false;
var two = false;
var thr = false;
var fou = false;

const cards = [
    {
        color: 'W',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/3/7/3783c530-a2da-4dc1-811a-0a9a412c8e78.webp"
    },
    {
        color: 'B',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/5/d/5d041b08-0021-438a-80fd-ca54839ffe5e.webp"
    },
    {
        color: 'R',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/f/0/f0996bab-c2e4-4483-a76e-1355c81f1577.webp"
    },
    {
        color: 'U',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/9/5/956eeb71-fd5f-4a26-aff6-77127c0ad4e7.webp"
    },
    {
        color: 'B',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/2/c/2c309b0d-94b4-405e-be6c-18b407323e51.webp"
    },
    {
        color: 'UB',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/5/2/528f2bfb-c09f-4bb9-a92f-6fcf23525046.webp"
    },
    {
        color: 'C',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/3/e/3e2c6447-e599-4b89-8a34-e46aa306a3f7.webp"
    },
    {
        color: 'U',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/4/e/4e8f75b8-cca7-4ed3-90db-bcac02e74611.webp"
    },
    {
        color: 'U',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/8/6/86b790e6-3c99-4a95-8327-eb90ed9380f2.webp"
    },
    {
        color: 'U',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/7/d/7d90016d-c2cb-457b-9d97-c3b9411c46e3.webp"
    },
    {
        color: 'B',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/c/3/c3ba1e0d-5e3d-4fa7-9b58-5b90944b43c5.webp"
    },
    {
        color: 'B',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/6/c/6c5a87cf-7790-4335-8497-ff793bbdcb05.webp"
    },
    {
        color: 'R',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/9/a/9a49f66c-7017-4ddd-8787-21d68fe1bff5.webp"
    },
    {
        color: 'R',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/3/c/3c786a2f-3de4-4b24-a3a0-15b1f2a07324.webp"
    },
    {
        color: 'G',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/9/4/94e9d400-f2bb-46e7-8d41-6038ebdc6c8b.webp"
    },
    {
        color: 'G',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/d/8/d8593bf7-5248-4f4a-bf8b-9816d2f76c6b.webp"
    },
    {
        color: 'G',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/4/4/445de44d-8af9-4ea3-b165-9e8eb8939820.webp"
    },
    {
        color: 'G',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/b/d/bd342f8b-9072-487d-8a33-b1bb149f1502.webp"
    },
    {
        color: 'W',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/c/7/c779279f-681b-4107-b62c-5202c544d3e8.webp"
    },
    {
        color: 'W',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/0/b/0b60c9af-8ea9-491d-a4a4-226a2143e7f3.webp"
    },
    {
        color: 'U',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/9/5/959318c1-3f7e-4418-91ce-be529af27972.webp"
    },
    {
        color: 'U',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/1/1/11c94c5f-abf4-429e-8703-c5db9abd79bf.webp"
    },
    {
        color: 'U',
        mana: 2,
        hybrid: true,
        image: "https://cards.scryfall.io/display/front/8/9/89e3ec23-e4dc-4d58-aeda-9f73ed4504a5.webp"
    },
    {
        color: 'B',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/0/4/04a479be-8093-4775-a5d9-8b0e1683bf12.webp"
    },
    {
        color: 'R',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/5/b/5b306901-1bba-488b-866e-83aa162dab5a.webp"
    },
    {
        color: 'R',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/0/c/0c340eba-645d-416a-9ed4-f2303aa8c919.webp"
    },
    {
        color: 'R',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/3/d/3df10e9a-efb6-4945-9b1b-29200688702a.webp"
    },
    {
        color: 'R',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/7/e/7e1c0423-bf58-47a1-a838-c15bbf40eaba.webp"
    },
    {
        color: 'WB',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/2/9/296f1127-14a0-42c4-9e4a-c0d929720748.webp"
    },
    {
        color: 'W',
        mana: 1,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/5/4/54dbf416-973d-46c8-b9be-e863283d328b.webp"
    },
    {
        color: 'B',
        mana: 1,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/e/2/e2b350b2-0eda-4c2b-b9d6-b58ab4848545.webp"
    },
    {
        color: 'R',
        mana: 1,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/2/2/22c60c17-74ec-460b-bf7a-e56e42239826.webp"
    },
    {
        color: 'R',
        mana: 1,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/0/f/0f9b10d3-ba76-45ec-a85c-fb7b26da5561.webp"
    },
    {
        color: 'G',
        mana: 1,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/c/0/c07979d4-8a58-4cfb-bffa-74e8bd97c7ff.webp"
    },
    {
        color: 'G',
        mana: 1,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/2/9/291b9b6b-54bf-4e71-98f1-cb9301ea0727.webp"
    },
    {
        color: 'W',
        mana: 0,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/3/6/362e20d5-5e7f-4367-86d0-ac5fc556682d.webp"
    }
]

function toggle_color(color) {
    switch(color) {
        case 'white':
            white = !white;
            if (white) {
                white_sel.innerText = "Yes";
            } else {
                white_sel.innerText = "No";
            }
            break;
        case 'blue':
            blue = !blue;
            if (blue) {
                blue_sel.innerText = "Yes";
            } else {
                blue_sel.innerText = "No";
            }
            break;
        case 'black':
            black = !black;
            if (black) {
                black_sel.innerText = "Yes";
            } else {
                black_sel.innerText = "No";
            }
            break;
        case 'red':
            red = !red;
            if (red) {
                red_sel.innerText = "Yes";
            } else {
                red_sel.innerText = "No";
            }
            break;
        case 'green':
            green = !green;
            if (green) {
                green_sel.innerText = "Yes";
            } else {
                green_sel.innerText = "No";
            }
            break;
    }
}

function toggle_mv(mana) {
    switch(mana) {
        case 1:
            one = !one;
            if (one) {
                one_sel.innerText = "Yes";
            } else {
                one_sel.innerText = "No";
            }
            break;
        case 2:
            two = !two;
            if (two) {
                one = true;
                one_sel.innerText = "Yes";
                two_sel.innerText = "Yes";
            } else {
                two_sel.innerText = "No";
            }
            break;
        case 3:
            thr = !thr;
            if (thr) {
                one = true;
                two = true;
                one_sel.innerText = "Yes";
                two_sel.innerText = "Yes";
                thr_sel.innerText = "Yes";
            } else {
                thr_sel.innerText = "No";
            }
            break;
        case 4:
            fou = !fou;
            if (fou) {
                one = true;
                two = true;
                thr = true;
                one_sel.innerText = "Yes";
                two_sel.innerText = "Yes";
                thr_sel.innerText = "Yes";
                fou_sel.innerText = "Yes";
            } else {
                fou_sel.innerText = "No";
            }
            break;
    }
}

function display() {
    result.innerHTML = '';

    var finalList = [];
    for (var i = 0; i < cards.length; i++) {
        switch(cards[i].color) {
            case 'W':
                if (white && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'U':
                if (blue && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'B':
                if (black && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'R':
                if (red && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'G':
                if (green && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'C':
                if (check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'WU':
                if (cards[i].hybrid && (white || blue) && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                } else if (white && blue && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'WB':
                if (cards[i].hybrid && (white || black) && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                } else if (white && black && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'WR':
                if (cards[i].hybrid && (white || red) && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                } else if (white && red && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'WG':
                if (cards[i].hybrid && (white || green) && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                } else if (white && green && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'UB':
                if (cards[i].hybrid && (blue || black) && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                } else if (blue && black && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'UR':
                if (cards[i].hybrid && (blue || red) && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                } else if (blue && red && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'UG':
                if (cards[i].hybrid && (blue || green) && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                } else if (blue && green && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'BR':
                if (cards[i].hybrid && (black || red) && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                } else if (black && red && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'BG':
                if (cards[i].hybrid && (black || green) && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                } else if (black && green && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
            case 'RG':
                if (cards[i].hybrid && (red || green) && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                } else if (red && green && check_mv(cards[i].mana)) {
                    finalList.push(cards[i]);
                }
                break;
        }
    }
    if (finalList.length > 0) {
        for (var i = 0; i < finalList.length; i++) {
            var img = document.createElement("img");
            img.src = finalList[i].image;
            img.classList.add('magicCard')
            result.appendChild(img);
        }
    } else {
        result.innerText = "Nothing found";
    }
}

function check_mv(mana) {
    switch(mana) {
        case 1:
            if (one) {
                return true;
            }
            break;
        case 2:
            if (two) {
                return true;
            }
            break;
        case 3:
            if (thr) {
                return true;
            }
            break;
        case 4:
            if (fou) {
                return true;
            }
            break;
    }
    return false;
}

function reset() {
    white = false;
    blue = false;
    black = false;
    red = false;
    green = false;
    one = false;
    two = false;
    thr = false;
    fou = false;

    white_sel.innerText = "No"
    blue_sel.innerText = "No"
    black_sel.innerText = "No"
    red_sel.innerText = "No"
    green_sel.innerText = "No"
    one_sel.innerText = "No"
    two_sel.innerText = "No"
    thr_sel.innerText = "No"
    fou_sel.innerText = "No"

    result.innerHTML = '';
}