const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");
const panel3 = document.getElementById("panel3");
const panel4 = document.getElementById("panel4");

const panel1Media = document.getElementById("panel1Media");
const panel2Media = document.getElementById("panel2Media");
const panel3Media = document.getElementById("panel3Media");
const panel4Media = document.getElementById("panel4Media");

function minimise_panel(panelNo) {
    if (panelNo == 1) {
        panel1Media.style.display = 'none';
        panel1.style.paddingBottom = '0em';
    } else if (panelNo == 2) {
        panel2Media.style.display = 'none';
        panel2.style.paddingBottom = '0em';
    } else if (panelNo == 3) {
        panel3Media.style.display = 'none';
        panel3.style.paddingBottom = "0em";
    } else if (panelNo == 4) {
        panel4Media.style.display = 'none';
    }
}

function return_panel(panelNo) {
    if (panelNo == 1) {
        panel1Media.style.display = 'initial';
        panel1.style.paddingBottom = '0.5em';
    } else if (panelNo == 2) {
        panel2Media.style.display = 'initial';
        panel2.style.paddingBottom = '0.5em';
    } else if (panelNo == 3) {
        panel3Media.style.display = 'inline-flex';
        panel3.style.paddingBottom = "0.5em";
    } else if (panelNo == 4) {
        panel4Media.style.display = 'flex';
    }
}

function eradicate_panel(panelNo) {
    if (panelNo == 1) {
        panel1.style.display = 'none';
    } else if (panelNo == 2) {
        panel2.style.display = 'none';
    } else if (panelNo == 3) {
        panel3.style.display = 'none';
    } else if (panelNo == 4) {
        panel4.style.display = 'none';
    }
}