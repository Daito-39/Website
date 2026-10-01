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
        color: 'G',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/d/a/dad6afc9-8505-4cdd-bf79-e9ba4670f2bb.webp"
    },
    {
        color: 'B',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/8/1/811719ad-b5a3-4d31-8c6f-5dbdfccf7c1f.webp"
    },
    {
        color: 'WU',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/9/8/986f9e98-9d8d-428b-9187-860745cf3269.webp"
    },
    {
        color: 'B',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/e/b/eb4b6ed8-782e-4473-abc9-d50bf2275c6a.webp"
    },
    {
        color: 'U',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/0/8/08ffbd51-2bd3-4262-8809-09576ce2b6f5.webp"
    },
    {
        color: 'B',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/1/0/100c3b67-0c92-4224-b5ed-67789c612df7.webp"
    },
    {
        color: 'R',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/a/d/ad03ba90-2442-4a71-94df-2088b5b63662.webp"
    },
    {
        color: 'G',
        mana: 4,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/b/6/b635389c-e286-4edb-80d1-23dbe4a18857.webp"
    },
    {
        color: 'B',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/4/6/46974d94-e900-43e4-92b5-4fb9b9f7cf46.webp"
    },
    {
        color: 'WR',
        mana: 3,
        hybrid: true,
        image: "https://cards.scryfall.io/display/front/8/7/87b40df5-5c0a-41f5-a09c-a04f17066a91.webp"
    },
    {
        color: 'UR',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/b/6/b61bcef7-5832-45e6-a2bc-26d4f23707fc.webp"
    },
    {
        color: 'U',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/9/6/960c7335-331d-488b-be68-2ad1c1c695dc.webp"
    },
    {
        color: 'R',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/1/9/19acb2b5-3b3e-43f0-bd81-8426ed3d9c55.webp"
    },
    {
        color: 'W',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/1/b/1b5d7d19-b32a-4786-ae9a-00da5e6658ad.webp"
    },
    {
        color: 'U',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/2/8/282588b9-3656-453b-aa25-2419e078ddc1.webp"
    },
    {
        color: 'WB',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/a/8/a803dbe7-153a-4e92-ad4d-c2babebe003d.webp"
    },
    {
        color: 'W',
        mana: 3,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/2/5/25000a17-b701-4d69-b2ef-2c74029199d3.webp"
    },
    {
        color: 'W',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/7/3/730d8c28-1e58-4b8e-89e9-445d154d2e83.webp"
    },
    {
        color: 'R',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/8/4/8414a98c-0c79-4884-bc9b-061a6456b392.webp"
    },
    {
        color: 'G',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/b/d/bd32d736-7a58-46b9-90b4-2cac3c3e80a1.webp"
    },
    {
        color: 'U',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/1/4/145b928d-a7ff-4fe5-ae4d-bbae7b1d955b.webp"
    },
    {
        color: 'R',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/d/2/d2e958de-70de-4156-8f9b-b2c0c1ba704a.webp"
    },
    {
        color: 'WU',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/c/f/cfc54011-647e-4428-bcdb-59400e1da49d.webp"
    },
    {
        color: 'BG',
        mana: 2,
        hybrid: true,
        image: "https://cards.scryfall.io/display/front/a/9/a9793ce9-5a0b-41fe-b9ad-02f6f7da2481.webp"
    },
    {
        color: 'R',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/b/5/b5b55617-684a-4036-be9b-a3b24fc9cd5a.webp"
    },
    {
        color: 'U',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/8/d/8d754b96-5e44-45af-9c7a-b0da59fbe4c3.webp"
    },
    {
        color: 'RG',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/7/d/7d29dfa1-9582-47bc-8f42-62b611bdcc4e.webp"
    },
    {
        color: 'B',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/2/3/2381d123-d8c7-4822-98fe-b1c365beb5ed.webp"
    },
    {
        color: 'B',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/9/0/90d684a4-9639-4792-8760-2011a7a85370.webp"
    },
    {
        color: 'U',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/9/2/9244efad-35ab-45c0-b173-4bc68276cb67.webp"
    },
    {
        color: 'W',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/1/f/1f95399a-9766-4f3d-aa6a-ece55e0530d9.webp"
    },
    {
        color: 'BR',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/8/1/81733ff7-e611-43ee-bf38-6bb700676017.webp"
    },
    {
        color: 'B',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/7/e/7ebd7e38-b27c-4c6e-aaea-e8ee5ba5e5df.webp"
    },
    {
        color: 'W',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/5/f/5f7521d7-9f1f-4f03-b2ea-dd2a1b1e4e5b.webp"
    },
    {
        color: 'U',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/7/1/710302ca-c4be-4069-8ce1-f531414c74e9.webp"
    },
    {
        color: 'UB',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/2/8/2835c9aa-0904-44db-8da2-e8c4e04201aa.webp"
    },
    {
        color: 'WG',
        mana: 2,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/2/b/2b198e10-b507-4314-a29c-a219f06e48b7.webp"
    },
    {
        color: 'G',
        mana: 1,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/f/7/f71958e9-6d6d-4393-8b49-567103b50877.webp"
    },
    {
        color: 'U',
        mana: 1,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/d/0/d0ecae06-bc5a-4886-84df-c2900816f226.webp"
    },
    {
        color: 'G',
        mana: 1,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/3/8/38589a7c-9cfb-4bcc-845e-9dc205095853.webp"
    },
    {
        color: 'U',
        mana: 1,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/d/d/ddad9f16-52d5-49de-82b0-b1a5294a9c44.webp"
    },
    {
        color: 'U',
        mana: 1,
        hybrid: false,
        image: "https://cards.scryfall.io/display/front/4/5/45e81487-8b8c-480b-922a-eaa9edc7201d.webp"
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