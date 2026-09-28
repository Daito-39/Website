const white = document.getElementById("White");
const blue = document.getElementById("Blue");
const black = document.getElementById("Black");
const red = document.getElementById("Red");
const green = document.getElementById("Green");
const azo_h = document.getElementsByClassName("azo_h");
const orz_h = document.getElementsByClassName("orz_h");
const bor_h = document.getElementsByClassName("bor_h");
const sel_h = document.getElementsByClassName("sel_h");
const dim_h = document.getElementsByClassName("dim_h");
const izz_h = document.getElementsByClassName("izz_h");
const sim_h = document.getElementsByClassName("sim_h");
const rak_h = document.getElementsByClassName("rak_h");
const gol_h = document.getElementsByClassName("gol_h");
const gru_h = document.getElementsByClassName("gru_h");
const azo_m = document.getElementsByClassName("azo_m");
const orz_m = document.getElementsByClassName("orz_m");
const bor_m = document.getElementsByClassName("bor_m");
const sel_m = document.getElementsByClassName("sel_m");
const dim_m = document.getElementsByClassName("dim_m");
const izz_m = document.getElementsByClassName("izz_m");
const sim_m = document.getElementsByClassName("sim_m");
const rak_m = document.getElementsByClassName("rak_m");
const gol_m = document.getElementsByClassName("gol_m");
const gru_m = document.getElementsByClassName("gru_m");

const four = document.getElementsByClassName("four");
const three = document.getElementsByClassName("three");
const two = document.getElementsByClassName("two");
const one = document.getElementsByClassName("one");

var view_white = true;
var view_blue = true;
var view_black = true;
var view_red = true;
var view_green = true;
var view_4 = true;
var view_3 = true;
var view_2 = true;
var view_1 = true;

function toggle_color(color) {
    switch(color) {
        case 1:
            view_white = !view_white;
            if (view_white) {
                white.style.display = 'initial';
            } else {
                white.style.display = 'none';
            }
            if (view_white || view_blue) {
                for (const e of azo_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of azo_h) {
                    e.style.display = 'none';
                }
            }
            if (view_white || view_black) {
                for (const e of orz_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of orz_h) {
                    e.style.display = 'none';
                }
            }
            if (view_white || view_red) {
                for (const e of bor_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of bor_h) {
                    e.style.display = 'none';
                }
            }
            if (view_white || view_green) {
                for (const e of sel_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of sel_h) {
                    e.style.display = 'none';
                }
            }
            if (view_white && view_blue) {
                for (const e of azo_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of azo_m) {
                    e.style.display = 'none';
                }
            }
            if (view_white && view_black) {
                for (const e of orz_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of orz_m) {
                    e.style.display = 'none';
                }
            }
            if (view_white && view_red) {
                for (const e of bor_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of bor_m) {
                    e.style.display = 'none';
                }
            }
            if (view_white && view_green) {
                for (const e of sel_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of sel_m) {
                    e.style.display = 'none';
                }
            }
            break;
        case 2:
            view_blue = !view_blue;
            if (view_blue) {
                blue.style.display = 'initial';
            } else {
                blue.style.display = 'none';
            }
            if (view_blue || view_white) {
                for (const e of azo_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of azo_h) {
                    e.style.display = 'none';
                }
            }
            if (view_blue || view_black) {
                for (const e of dim_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of dim_h) {
                    e.style.display = 'none';
                }
            }
            if (view_blue || view_red) {
                for (const e of izz_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of izz_h) {
                    e.style.display = 'none';
                }
            }
            if (view_blue || view_green) {
                for (const e of sim_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of sim_h) {
                    e.style.display = 'none';
                }
            }
            if (view_blue && view_white) {
                for (const e of azo_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of azo_m) {
                    e.style.display = 'none';
                }
            }
            if (view_blue && view_black) {
                for (const e of dim_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of dim_m) {
                    e.style.display = 'none';
                }
            }
            if (view_blue && view_red) {
                for (const e of izz_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of izz_m) {
                    e.style.display = 'none';
                }
            }
            if (view_blue && view_green) {
                for (const e of sim_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of sim_m) {
                    e.style.display = 'none';
                }
            }
            break;
        case 3:
            view_black = !view_black;
            if (view_black) {
                black.style.display = 'initial';
            } else {
                black.style.display = 'none';
            }
            if (view_black || view_white) {
                for (const e of orz_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of orz_h) {
                    e.style.display = 'none';
                }
            }
            if (view_black || view_blue) {
                for (const e of dim_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of dim_h) {
                    e.style.display = 'none';
                }
            }
            if (view_black || view_red) {
                for (const e of rak_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of rak_h) {
                    e.style.display = 'none';
                }
            }
            if (view_black || view_green) {
                for (const e of gol_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of gol_h) {
                    e.style.display = 'none';
                }
            }
            if (view_black && view_white) {
                for (const e of orz_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of orz_m) {
                    e.style.display = 'none';
                }
            }
            if (view_black && view_blue) {
                for (const e of dim_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of dim_m) {
                    e.style.display = 'none';
                }
            }
            if (view_black && view_red) {
                for (const e of rak_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of rak_m) {
                    e.style.display = 'none';
                }
            }
            if (view_black && view_green) {
                for (const e of gol_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of gol_m) {
                    e.style.display = 'none';
                }
            }
            break;
        case 4:
            view_red = !view_red;
            if (view_red) {
                red.style.display = 'initial';
            } else {
                red.style.display = 'none';
            }
            if (view_red || view_white) {
                for (const e of bor_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of bor_h) {
                    e.style.display = 'none';
                }
            }
            if (view_red || view_blue) {
                for (const e of izz_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of izz_h) {
                    e.style.display = 'none';
                }
            }
            if (view_red || view_black) {
                for (const e of rak_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of rak_h) {
                    e.style.display = 'none';
                }
            }
            if (view_red || view_green) {
                for (const e of gru_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of gru_h) {
                    e.style.display = 'none';
                }
            }
            if (view_red && view_white) {
                for (const e of bor_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of bor_m) {
                    e.style.display = 'none';
                }
            }
            if (view_red && view_blue) {
                for (const e of izz_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of izz_m) {
                    e.style.display = 'none';
                }
            }
            if (view_red && view_black) {
                for (const e of rak_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of rak_m) {
                    e.style.display = 'none';
                }
            }
            if (view_red && view_green) {
                for (const e of gru_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of gru_m) {
                    e.style.display = 'none';
                }
            }
            break;
        case 5:
            view_green = !view_green;
            if (view_green) {
                green.style.display = 'initial';
            } else {
                green.style.display = 'none';
            }
            if (view_green || view_white) {
                for (const e of sel_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of sel_h) {
                    e.style.display = 'none';
                }
            }
            if (view_green || view_blue) {
                for (const e of sim_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of sim_h) {
                    e.style.display = 'none';
                }
            }
            if (view_green || view_black) {
                for (const e of gol_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of gol_h) {
                    e.style.display = 'none';
                }
            }
            if (view_green || view_red) {
                for (const e of gru_h) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of gru_h) {
                    e.style.display = 'none';
                }
            }
            if (view_green && view_white) {
                for (const e of sel_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of sel_m) {
                    e.style.display = 'none';
                }
            }
            if (view_green && view_blue) {
                for (const e of sim_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of sim_m) {
                    e.style.display = 'none';
                }
            }
            if (view_green && view_black) {
                for (const e of gol_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of gol_m) {
                    e.style.display = 'none';
                }
            }
            if (view_green && view_red) {
                for (const e of gru_m) {
                    e.style.display = 'block';
                }
            } else {
                for (const e of gru_m) {
                    e.style.display = 'none';
                }
            }
            break;
    }
}

function toggle_mv(mana) {
    switch(mana) {
        case 1:
            view_1 = !view_1;
            for (const e of one) {
                if (view_1) {
                    e.style.display = 'block';
                } else {
                    e.style.display = 'none';
                }
            }
            break;
        case 2:
            view_2 = !view_2;
            for (const e of two) {
                if (view_2) {
                    e.style.display = 'block';
                } else {
                    e.style.display = 'none';
                }
            }
            break;
        case 3:
            view_3 = !view_3;
            for (const e of three) {
                if (view_3) {
                    e.style.display = 'block';
                } else {
                    e.style.display = 'none';
                }
            }
            break;
        case 4:
            view_4 = !view_4;
            for (const e of four) {
                if (view_4) {
                    e.style.display = 'block';
                } else {
                    e.style.display = 'none';
                }
            }
            break;
    }
}

function reset() {
    window.location.reload();
}