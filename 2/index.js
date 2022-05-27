function main(){
    let mainButton = document.getElementById("mainButton");
    let danawaButton = document.getElementById("danawaButton");
    let colorverseButton = document.getElementById("colorverseButton");
    let cotieButton = document.getElementById("cotieButton");

    let main = document.getElementById("main");
    let danawa = document.getElementById("danawa");
    let colorverse = document.getElementById("colorverse");
    let cotie = document.getElementById("cotie");

    mainButton.style.color = 'white';
    danawaButton.style.color = 'black';
    colorverseButton.style.color = 'black';
    cotieButton.style.color = 'black';

    mainButton.style.textShadow = '3px 2px black';
    danawaButton.style.textShadow = 'none';
    colorverseButton.style.textShadow = 'none';
    cotieButton.style.textShadow = 'none';
    
    main.style.zIndex = '2'
    danawa.style.zIndex = '0';
    colorverse.style.zIndex = '0';
    cotie.style.zIndex = '0';
}

function danawa(){
    let mainButton = document.getElementById("mainButton");
    let danawaButton = document.getElementById("danawaButton");
    let colorverseButton = document.getElementById("colorverseButton");
    let cotieButton = document.getElementById("cotieButton");

    let main = document.getElementById("main");
    let danawa = document.getElementById("danawa");
    let colorverse = document.getElementById("colorverse");
    let cotie = document.getElementById("cotie");

    mainButton.style.color = 'black';
    danawaButton.style.color = 'white';
    colorverseButton.style.color = 'black';
    cotieButton.style.color = 'black';

    mainButton.style.textShadow = 'none';
    danawaButton.style.textShadow = '3px 2px black';
    colorverseButton.style.textShadow = 'none';
    cotieButton.style.textShadow = 'none';
    
    main.style.zIndex = '0'
    danawa.style.zIndex = '2';
    colorverse.style.zIndex = '0';
    cotie.style.zIndex = '0';
}

function colorverse(){
    let mainButton = document.getElementById("mainButton");
    let danawaButton = document.getElementById("danawaButton");
    let colorverseButton = document.getElementById("colorverseButton");
    let cotieButton = document.getElementById("cotieButton");

    let main = document.getElementById("main");
    let danawa = document.getElementById("danawa");
    let colorverse = document.getElementById("colorverse");
    let cotie = document.getElementById("cotie");

    mainButton.style.color = 'black';
    danawaButton.style.color = 'black';
    colorverseButton.style.color = 'white';
    cotieButton.style.color = 'black';

    mainButton.style.textShadow = 'none';
    danawaButton.style.textShadow = 'none';
    colorverseButton.style.textShadow = '3px 2px black';
    cotieButton.style.textShadow = 'none';

    main.style.zIndex = '0'
    danawa.style.zIndex = '0';
    colorverse.style.zIndex = '2';
    cotie.style.zIndex = '0';
}

function cotie(){
    let mainButton = document.getElementById("mainButton");
    let danawaButton = document.getElementById("danawaButton");
    let colorverseButton = document.getElementById("colorverseButton");
    let cotieButton = document.getElementById("cotieButton");

    let main = document.getElementById("main");
    let danawa = document.getElementById("danawa");
    let colorverse = document.getElementById("colorverse");
    let cotie = document.getElementById("cotie");

    mainButton.style.color = 'black';
    danawaButton.style.color = 'black';
    colorverseButton.style.color = 'black';
    cotieButton.style.color = 'white';

    mainButton.style.textShadow = 'none';
    danawaButton.style.textShadow = 'none';
    colorverseButton.style.textShadow = 'none';
    cotieButton.style.textShadow = '3px 2px black';

    main.style.zIndex = '0'
    danawa.style.zIndex = '0';
    colorverse.style.zIndex = '0';
    cotie.style.zIndex = '2';
}