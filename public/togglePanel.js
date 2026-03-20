const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");
const panel3 = document.getElementById("panel3");

const panel1Media = document.getElementById("panel1Media");
const panel2Media = document.getElementById("panel2Media");
const panel3Media = document.getElementById("panel3Media");
const panel4Media = document.getElementById("panel4Media");

function minimise_panel(panelNo) {
    if (panelNo == 1) {
        if (panel1Media.style.display == 'none') {
            panel1Media.style.display = 'initial';
            panel1.style.paddingBottom = '10em';
        } else {
            panel1Media.style.display = 'none';
            panel1.style.paddingBottom = '0em';
        }
    } else if (panelNo == 2) {
        if (panel2Media.style.display == 'none') {
            panel2Media.style.display = 'initial';
            panel2.style.paddingBottom = '0.5em';
        } else {
            panel2Media.style.display = 'none';
            panel2.style.paddingBottom = '0em';
        }
    } else if (panelNo == 3) {
        if (panel3Media.style.display == 'none') {
            panel3Media.style.display = 'initial';
            panel3.style.paddingBottom = "10em";
        } else {
            panel3Media.style.display = 'none';
            panel3.style.paddingBottom = "0em";
        }
    } else if (panelNo == 4) {
        if (panel4Media.style.display == 'none') {
            panel4Media.style.display = 'flex';
        } else {
            panel4Media.style.display = 'none';
        }
    }
}