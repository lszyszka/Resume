const txt = "Łukasz Szyszka";
const txtInner = "Front - End Developer";
const placeToText = document.querySelector('.title h1');
const innerText = document.querySelector('.title h3');


let i = 0;

//function typing title
const typing = setInterval(() => {
    placeToText.textContent += txt[i];
    i++;
    if (i == txt.length) {
        clearInterval(typing);
    }
}, 50)

//function with delay typing subtitle after title
setTimeout(() => {
    let j = 0;

    const typingSecond = setInterval(() => {
        innerText.textContent += txtInner[j];
        j++;
        if (j == txtInner.length) {
            clearInterval(typingSecond);
        }
    }, 50)
}, 1100)