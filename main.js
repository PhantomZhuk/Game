let startGame = false;

let settingsPlayContainerOpen = false;

startGameBtn.onclick = function () {
    if (settingsPlayContainerOpen == false) {
        selectingGameModeContainer.style.display = `flex`;
    }
}

let settingsContainerOpen = false;

settingsBtn.onclick = function () {
    if (settingsContainerOpen == false) {
        settingsContainer.style.display = `flex`;
        settingsContainerOpen = true;
        startPage.style.filter = `blur(5px)`;
        settingsPlayContainer.style.filter = `blur(5px)`;
    } else if (settingsContainerOpen == true) {
        settingsContainer.style.display = `none`;
        settingsContainerOpen = false;
        startPage.style.filter = `blur(0px)`;
        settingsPlayContainer.style.filter = `blur(0px)`;
    }
}

closeSettings.onclick = function () {
    settingsContainer.style.display = `none`;
    settingsContainerOpen = false;
    startPage.style.filter = `blur(0px)`;
    settingsPlayContainer.style.filter = `blur(0px)`;
}

let language = `en`;

arrowLeft.onclick = function () {
    if (language == `en`) {
        uaLanguage.style.display = `flex`;
        enLanguage.style.display = `none`;
        language = `ua`;
        Txtplay.innerText = `Почати`
        TxtHeaderselectingGameModeContainer.innerText = `Виберіть режим гри`;
        TxtPVP.innerText = `PVP - це гра, в якій потрібно першим дістатися до цілі, перемагає той, хто набере 5 очок.`;
        startGame1.innerText = `Почати`;
        TxtPVPTime.innerText = `PVP time - Це гра, де вам потрібно першим досягти цілі пле ціль переміщаєтьмя через декілька секунд, перемагає той, хто набере 5 очок.`;
        startGame2.innerText = `Почати`;
        Player1Name.placeholder = `Ім'я Ігрока1`;
        BtnStartGame1.innerText = `Почати`;
        Player2Name.placeholder = `Ім'я Ігрока2`;
        BtnStartGame2.innerText = `Почати`;
        TxtsettingGameBackgroundContainer.innerText = `Виберіть фон`;
        StartGamebtnsettingGameBackgroundContainer.innerText = `Почати`;
    } else if (language == `ua`) {
        uaLanguage.style.display = `none`;
        enLanguage.style.display = `flex`;
        language = `en`;
        Txtplay.innerText = `Start`
        TxtHeaderselectingGameModeContainer.innerText = `Select the game mode`;
        TxtPVP.innerText = `PVP is a game in which you have to be the first to reach the target, and the winner is the one who scores 5 points.`;
        startGame1.innerText = `Start`;
        TxtPVPTime.innerText = `PVP time - This is a game where you have to be the first to reach the target and the target moves in a few seconds, the winner is the one who scores 5 points.`;
        startGame2.innerText = `Start`;
        Player1Name.placeholder = `Player1 name`;
        BtnStartGame1.innerText = `Start`;
        Player2Name.placeholder = `Player2 name`;
        BtnStartGame2.innerText = `Start`;
        TxtsettingGameBackgroundContainer.innerText = `Choose a background`;
        StartGamebtnsettingGameBackgroundContainer.innerText = `Start`;
    }
}

arrowRight.onclick = function () {
    if (language == `en`) {
        uaLanguage.style.display = `flex`;
        enLanguage.style.display = `none`;
        language = `ua`;
        Txtplay.innerText = `Почати`
        TxtHeaderselectingGameModeContainer.innerText = `Виберіть режим гри`;
        TxtPVP.innerText = `PVP - це гра, в якій потрібно першим дістатися до цілі, перемагає той, хто набере 5 очок.`;
        startGame1.innerText = `Почати`;
        TxtPVPTime.innerText = `PVP time - Це гра, де вам потрібно першим досягти цілі пле ціль переміщаєтьмя через декілька секунд, перемагає той, хто набере 5 очок.`;
        startGame2.innerText = `Почати`;
        Player1Name.placeholder = `Ім'я Ігрока1`;
        BtnStartGame1.innerText = `Почати`;
        Player2Name.placeholder = `Ім'я Ігрока2`;
        BtnStartGame2.innerText = `Почати`;
        TxtsettingGameBackgroundContainer.innerText = `Виберіть фон`;
        StartGamebtnsettingGameBackgroundContainer.innerText = `Почати`;
    } else if (language == `ua`) {
        uaLanguage.style.display = `none`;
        enLanguage.style.display = `flex`;
        language = `en`;
        Txtplay.innerText = `Start`
        TxtHeaderselectingGameModeContainer.innerText = `Select the game mode`;
        TxtPVP.innerText = `PVP is a game in which you have to be the first to reach the target, and the winner is the one who scores 5 points.`;
        startGame1.innerText = `Start`;
        TxtPVPTime.innerText = `PVP time - This is a game where you have to be the first to reach the target and the target moves in a few seconds, the winner is the one who scores 5 points.`;
        startGame2.innerText = `Start`;
        Player1Name.placeholder = `Player1 name`;
        BtnStartGame1.innerText = `Start`;
        Player2Name.placeholder = `Player2 name`;
        BtnStartGame2.innerText = `Start`;
        TxtsettingGameBackgroundContainer.innerText = `Choose a background`;
        StartGamebtnsettingGameBackgroundContainer.innerText = `Start`;
    }
}



let skinBoxOpen1 = false;

arrowPlayer1SkinLeft.onclick = function () {
    if (skinBoxOpen1 == false) {
        skinPlayer1Box2.style.display = `grid`;
        skinPlasyer1Box1.style.display = `none`;
        skinBoxOpen1 = true;
    } else if (skinBoxOpen1 == true) {
        skinPlayer1Box2.style.display = `none`;
        skinPlasyer1Box1.style.display = `grid`;
        skinBoxOpen1 = false;
    }
}

arrowPlayer1SkinRight.onclick = function () {
    if (skinBoxOpen1 == false) {
        skinPlayer1Box2.style.display = `grid`;
        skinPlasyer1Box1.style.display = `none`;
        skinBoxOpen1 = true;
    } else if (skinBoxOpen1 == true) {
        skinPlayer1Box2.style.display = `none`;
        skinPlasyer1Box1.style.display = `grid`;
        skinBoxOpen1 = false;
    }
}

Player1Name.oninput = function () {
    Player1NameSpan.innerText = Player1Name.value;
}

Player2Name.oninput = function () {
    Player2NameSpan.innerText = Player2Name.value;
}



let skinBoxOpen2 = false;

arrowPlayer2SkinLeft.onclick = function () {
    if (skinBoxOpen2 == false) {
        skinPlayer2Box2.style.display = `grid`;
        skinPlasyer2Box1.style.display = `none`;
        skinBoxOpen2 = true;
    } else if (skinBoxOpen2 == true) {
        skinPlayer2Box2.style.display = `none`;
        skinPlasyer2Box1.style.display = `grid`;
        skinBoxOpen2 = false;
    }
}

arrowPlayer2SkinRight.onclick = function () {
    if (skinBoxOpen2 == false) {
        skinPlayer2Box2.style.display = `grid`;
        skinPlasyer2Box1.style.display = `none`;
        skinBoxOpen2 = true;
    } else if (skinBoxOpen2 == true) {
        skinPlayer2Box2.style.display = `none`;
        skinPlasyer2Box1.style.display = `grid`;
        skinBoxOpen2 = false;
    }
}

let modeOpen = `computer`;

phoneMode.onclick = function () {
    if (modeOpen == `computer`) {
        //написати код який буде показувати кнопки для телефона
        phoneMode.style.boxShadow = `0 2px 10px #4f772d`;
        computerMode.style.boxShadow = `none`;
        modeOpen = 'phone';
        mobileBtnContainer1.style.display = `flex`;
        mobileBtnContainer2.style.display = `flex`;
    }
}

computerMode.onclick = function () {
    if (modeOpen == `phone`) {
        //написати код який буде скривати кнопки для телефона
        computerMode.style.boxShadow = `0 2px 10px #4f772d`;
        phoneMode.style.boxShadow = `none`;
        modeOpen = 'computer';
        mobileBtnContainer1.style.display = `none`;
        mobileBtnContainer2.style.display = `none`;
    }
}

startGame1.onclick = function () {
    settingGameBackgroundContainer.style.display = `flex`;
    selectingGameModeContainer.style.display = `none`;
}

startGame2.onclick = function () {
    settingGameBackgroundContainer.style.display = `flex`;
    selectingGameModeContainer.style.display = `none`;

    var seconds = 4;

    // Функція для відліку часу
    function countdown() {
        // Зменшуємо кількість секунд
        seconds--;
        // Якщо таймер дійшов до нуля, можна виконати додаткові дії або обновити таймер
        if (seconds < 0) {
            clearInterval(timerInterval); // Зупиняємо таймер
            resetTimer(); // Обновляємо таймер
            setRandom();
        }
    }

    // Функція для обнулення таймера і початку нового відліку
    function resetTimer() {
        seconds = 4; // Початкова кількість секунд
        timerInterval = setInterval(countdown, 1000); // Запускаємо новий таймер
    }

    // Запускаємо таймер кожну секунду
    var timerInterval = setInterval(countdown, 1000);
    alert('Не працює на телефоні Does not work on the phone');
}

backsettingGameBackgroundContainer.onclick = function () {
    settingGameBackgroundContainer.style.display = `none`;
    selectingGameModeContainer.style.display = `flex`;
}

StartGamebtnsettingGameBackgroundContainer.onclick = function () {
    settingsPlayContainer.style.display = `flex`;
    settingGameBackgroundContainer.style.display = `none`;
}


let modesGame = `PVP Time`;

arrowModesGameLeft.onclick = function () {
    if (modesGame == `PVP Time`) {
        cardModeGamePVP.style.display = `none`;
        cardModeGamePVPTime.style.display = `flex`;
        modesGame = `PVP`
    } else if (modesGame == `PVP`) {
        cardModeGamePVP.style.display = `flex`;
        cardModeGamePVPTime.style.display = `none`;
        modesGame = `PVP Time`
    }
}

arrowModesGameRight.onclick = function () {
    if (modesGame == `PVP Time`) {
        cardModeGamePVP.style.display = `none`;
        cardModeGamePVPTime.style.display = `flex`;
        modesGame = `PVP`
    } else if (modesGame == `PVP`) {
        cardModeGamePVP.style.display = `flex`;
        cardModeGamePVPTime.style.display = `none`;
        modesGame = `PVP Time`
    }
}

let startGame11 = `No`;

BtnStartGame1.onclick = function () {
    if (startGame11 == `No`) {
        BtnStartGame1.style.boxShadow = `0 2px 10px #4f772d`;
        startGame11 = `Yes`;
    } else if (startGame11 == `Yes`) {
        BtnStartGame1.style.boxShadow = `none`;
        startGame11 = `No`;
    }

    if (startGame11 == `Yes` && startGame22 == `Yes`) {
        startPage.style.display = `none`;
        settingsPlayContainer.style.display = `none`;
        selectingGameModeContainer.style.display = `none`;
        startGame = true;
    }
}

let startGame22 = `No`;

BtnStartGame2.onclick = function () {
    if (startGame22 == `No`) {
        BtnStartGame2.style.boxShadow = `0 2px 10px #4f772d`;
        startGame22 = `Yes`;
    } else if (startGame22 == `Yes`) {
        BtnStartGame2.style.boxShadow = `none`;
        startGame22 = `No`;
    }

    if (startGame11 == `Yes` && startGame22 == `Yes`) {
        startPage.style.display = `none`;
        settingsPlayContainer.style.display = `none`;
        selectingGameModeContainer.style.display = `none`;
        startGame = true;
    }
}

backSelectingGameMode.onclick = function () {
    selectingGameModeContainer.style.display = `none`;
}

backSettingsPlay.onclick = function () {
    settingsPlayContainer.style.display = `none`;
    settingGameBackgroundContainer.style.display = `flex`;
}

skinPacmen1.onclick = function () {
    palayer1.style.border = `25px solid transparent`;
    palayer1.style.borderLeftColor = `yellow`;
    palayer1.style.borderTopColor = `yellow`;
    palayer1.style.borderBottomColor = `yellow`;
    palayer1.style.animation = `eat 1.35s infinite`;
    palayer1.style.backgroundColor = `transparent`;
    palayer1.style.opacity = 1;
    skinPacmen1.style.boxShadow = `0 2px 10px #4f772d`;
    skinAhers1.style.boxShadow = `none`;
    skinBatmen1.style.boxShadow = `none`;
    skinCaptainAmerica1.style.boxShadow = `none`;
    skinCocaCola1.style.boxShadow = `none`;
    skinStarBucks1.style.boxShadow = `none`;
    skinKnight1.style.boxShadow = `none`;
    skinRobot1.style.boxShadow = `none`;
    skinCosmonaft1.style.boxShadow = `none`;
    skinMercedes1.style.boxShadow = `none`;
    skinBMW1.style.boxShadow = `none`;
    skinAlfaRomeo1.style.boxShadow = `none`;
}

skinAhers1.oninput = function () {
    palayer1.style.backgroundColor = colorInput1.value;
    skinAhers1.style.boxShadow = `0 2px 10px #4f772d`;
    skinPacmen1.style.boxShadow = `none`;
    skinBatmen1.style.boxShadow = `none`;
    skinCaptainAmerica1.style.boxShadow = `none`;
    skinCocaCola1.style.boxShadow = `none`;
    skinStarBucks1.style.boxShadow = `none`;
    skinKnight1.style.boxShadow = `none`;
    skinRobot1.style.boxShadow = `none`;
    skinCosmonaft1.style.boxShadow = `none`;
    skinMercedes1.style.boxShadow = `none`;
    skinBMW1.style.boxShadow = `none`;
    skinAlfaRomeo1.style.boxShadow = `none`;
    palayer1.style.border = `none`;
    palayer1.style.opacity = 1;
}

skinBatmen1.onclick = function () {
    palayer1.style.backgroundImage = `url(./img/png-transparent-batman-logo-batman-joker-bat-signal-robin-batman-logo.png)`;
    palayer1.style.opacity = 1;
    skinBatmen1.style.boxShadow = `0 2px 10px #4f772d`;
    skinPacmen1.style.boxShadow = `none`;
    skinAhers1.style.boxShadow = `none`;
    skinPacmen1.style.boxShadow = `none`;
    skinCaptainAmerica1.style.boxShadow = `none`;
    skinCocaCola1.style.boxShadow = `none`;
    skinStarBucks1.style.boxShadow = `none`;
    skinKnight1.style.boxShadow = `none`;
    palayer1.style.backgroundColor = `transparent`;
    skinRobot1.style.boxShadow = `none`;
    skinCosmonaft1.style.boxShadow = `none`;
    skinMercedes1.style.boxShadow = `none`;
    skinBMW1.style.boxShadow = `none`;
    skinAlfaRomeo1.style.boxShadow = `none`;
    palayer1.style.border = `none`;
}

skinCaptainAmerica1.onclick = function () {
    palayer1.style.backgroundImage = `url(./img/png-transparent-batman-logo-batman-joker-bat-signal-robin-batman-logo.png)`;
    palayer1.style.opacity = 1;
    skinCaptainAmerica1.style.boxShadow = `0 2px 10px #4f772d`;
    skinPacmen1.style.boxShadow = `none`;
    skinAhers1.style.boxShadow = `none`;
    skinPacmen1.style.boxShadow = `none`;
    skinBatmen1.style.boxShadow = `none`;
    skinCocaCola1.style.boxShadow = `none`;
    skinStarBucks1.style.boxShadow = `none`;
    skinKnight1.style.boxShadow = `none`;
    skinRobot1.style.boxShadow = `none`;
    palayer1.style.backgroundColor = `transparent`;
    skinCosmonaft1.style.boxShadow = `none`;
    skinMercedes1.style.boxShadow = `none`;
    skinBMW1.style.boxShadow = `none`;
    skinAlfaRomeo1.style.boxShadow = `none`;
    palayer1.style.border = `none`;
}

skinCocaCola1.onclick = function () {
    palayer1.style.backgroundImage = `url(./img/png-clipart-coca-cola-logo-coca-cola-zero-soft-drink-coca-cola-logo-logo-cola.png)`;
    palayer1.style.opacity = 1;
    skinCocaCola1.style.boxShadow = `0 2px 10px #4f772d`;
    skinPacmen1.style.boxShadow = `none`;
    skinAhers1.style.boxShadow = `none`;
    palayer1.style.backgroundColor = `transparent`;
    skinPacmen1.style.boxShadow = `none`;
    skinBatmen1.style.boxShadow = `none`;
    skinCaptainAmerica1.style.boxShadow = `none`;
    skinStarBucks1.style.boxShadow = `none`;
    skinKnight1.style.boxShadow = `none`;
    skinRobot1.style.boxShadow = `none`;
    skinCosmonaft1.style.boxShadow = `none`;
    skinMercedes1.style.boxShadow = `none`;
    skinBMW1.style.boxShadow = `none`;
    skinAlfaRomeo1.style.boxShadow = `none`;
    palayer1.style.border = `none`;
}

skinStarBucks1.onclick = function () {
    palayer1.style.backgroundImage = `url(./img/1200px-starbucks_corporation_logo_2011.svg.png)`;
    palayer1.style.opacity = 1;
    skinStarBucks1.style.boxShadow = `0 2px 10px #4f772d`;
    skinPacmen1.style.boxShadow = `none`;
    skinAhers1.style.boxShadow = `none`;
    skinPacmen1.style.boxShadow = `none`;
    skinBatmen1.style.boxShadow = `none`;
    skinCaptainAmerica1.style.boxShadow = `none`;
    skinCocaCola1.style.boxShadow = `none`;
    palayer1.style.backgroundColor = `transparent`;
    skinKnight1.style.boxShadow = `none`;
    skinRobot1.style.boxShadow = `none`;
    skinCosmonaft1.style.boxShadow = `none`;
    skinMercedes1.style.boxShadow = `none`;
    skinBMW1.style.boxShadow = `none`;
    skinAlfaRomeo1.style.boxShadow = `none`;
    palayer1.style.border = `none`;
}

skinKnight1.onclick = function () {
    palayer1.style.backgroundImage = `url(./img/png-transparent-cartoon-knight-knight-comics-shield-cartoon.png)`;
    palayer1.style.opacity = 1;
    skinKnight1.style.boxShadow = `0 2px 10px #4f772d`;
    skinPacmen1.style.boxShadow = `none`;
    skinAhers1.style.boxShadow = `none`;
    skinPacmen1.style.boxShadow = `none`;
    skinBatmen1.style.boxShadow = `none`;
    palayer1.style.backgroundColor = `transparent`;
    skinCaptainAmerica1.style.boxShadow = `none`;
    skinCocaCola1.style.boxShadow = `none`;
    skinStarBucks1.style.boxShadow = `none`;
    skinRobot1.style.boxShadow = `none`;
    skinCosmonaft1.style.boxShadow = `none`;
    skinMercedes1.style.boxShadow = `none`;
    skinBMW1.style.boxShadow = `none`;
    skinAlfaRomeo1.style.boxShadow = `none`;
    palayer1.style.border = `none`;
}

skinRobot1.onclick = function () {
    palayer1.style.backgroundImage = `url(./img/png-transparent-flat-design-tech-robot-logo-copyright-cartoon.png)`;
    palayer1.style.opacity = 1;
    skinRobot1.style.boxShadow = `0 2px 10px #4f772d`;
    skinPacmen1.style.boxShadow = `none`;
    skinAhers1.style.boxShadow = `none`;
    skinPacmen1.style.boxShadow = `none`;
    skinBatmen1.style.boxShadow = `none`;
    palayer1.style.backgroundColor = `transparent`;
    skinCaptainAmerica1.style.boxShadow = `none`;
    skinCocaCola1.style.boxShadow = `none`;
    skinStarBucks1.style.boxShadow = `none`;
    skinKnight1.style.boxShadow = `none`;
    skinCosmonaft1.style.boxShadow = `none`;
    skinMercedes1.style.boxShadow = `none`;
    skinBMW1.style.boxShadow = `none`;
    skinAlfaRomeo1.style.boxShadow = `none`;
    palayer1.style.border = `none`;
}

skinCosmonaft1.onclick = function () {
    palayer1.style.backgroundImage = `url(./img/gratis-png-persona-con-traje-de-astronauta-caricatura-de-astronauta-linda-astronauta.png)`;
    palayer1.style.opacity = 1;
    skinCosmonaft1.style.boxShadow = `0 2px 10px #4f772d`;
    skinPacmen1.style.boxShadow = `none`;
    skinAhers1.style.boxShadow = `none`;
    skinPacmen1.style.boxShadow = `none`;
    skinBatmen1.style.boxShadow = `none`;
    skinCaptainAmerica1.style.boxShadow = `none`;
    skinCocaCola1.style.boxShadow = `none`;
    skinStarBucks1.style.boxShadow = `none`;
    palayer1.style.backgroundColor = `transparent`;
    skinKnight1.style.boxShadow = `none`;
    skinRobot1.style.boxShadow = `none`;
    skinMercedes1.style.boxShadow = `none`;
    skinBMW1.style.boxShadow = `none`;
    skinAlfaRomeo1.style.boxShadow = `none`;
    palayer1.style.border = `none`;
}

skinMercedes1.onclick = function () {
    palayer1.style.backgroundImage = `url(./img/png-transparent-logo-icon-mercedes-icon-symbol-circle-spoke-rim-vehicle-wheel-metal.png)`;
    palayer1.style.opacity = 1;
    skinMercedes1.style.boxShadow = `0 2px 10px #4f772d`;
    skinPacmen1.style.boxShadow = `none`;
    skinAhers1.style.boxShadow = `none`;
    skinPacmen1.style.boxShadow = `none`;
    skinBatmen1.style.boxShadow = `none`;
    skinCaptainAmerica1.style.boxShadow = `none`;
    skinCocaCola1.style.boxShadow = `none`;
    palayer1.style.backgroundColor = `transparent`;
    skinStarBucks1.style.boxShadow = `none`;
    skinKnight1.style.boxShadow = `none`;
    skinRobot1.style.boxShadow = `none`;
    skinCosmonaft1.style.boxShadow = `none`;
    skinBMW1.style.boxShadow = `none`;
    skinAlfaRomeo1.style.boxShadow = `none`;
    palayer1.style.border = `none`;
}

skinBMW1.onclick = function () {
    palayer1.style.backgroundImage = `url(./img/png-transparent-bmw-car-logo-bmw-logo-trademark-logo-car.png)`;
    palayer1.style.opacity = 1;
    skinBMW1.style.boxShadow = `0 2px 10px #4f772d`;
    skinPacmen1.style.boxShadow = `none`;
    skinAhers1.style.boxShadow = `none`;
    skinPacmen1.style.boxShadow = `none`;
    skinBatmen1.style.boxShadow = `none`;
    skinCaptainAmerica1.style.boxShadow = `none`;
    skinCocaCola1.style.boxShadow = `none`;
    skinStarBucks1.style.boxShadow = `none`;
    skinKnight1.style.boxShadow = `none`;
    palayer1.style.backgroundColor = `transparent`;
    skinRobot1.style.boxShadow = `none`;
    skinCosmonaft1.style.boxShadow = `none`;
    skinMercedes1.style.boxShadow = `none`;
    skinAlfaRomeo1.style.boxShadow = `none`;
    palayer1.style.border = `none`;
}

skinAlfaRomeo1.onclick = function () {
    palayer1.style.backgroundImage = `url(./img/Alfa_romeo.svg)`;
    palayer1.style.opacity = 1;
    skinAlfaRomeo1.style.boxShadow = `0 2px 10px #4f772d`;
    skinPacmen1.style.boxShadow = `none`;
    skinAhers1.style.boxShadow = `none`;
    skinPacmen1.style.boxShadow = `none`;
    skinBatmen1.style.boxShadow = `none`;
    skinCaptainAmerica1.style.boxShadow = `none`;
    skinCocaCola1.style.boxShadow = `none`;
    palayer1.style.backgroundColor = `transparent`;
    skinStarBucks1.style.boxShadow = `none`;
    skinKnight1.style.boxShadow = `none`;
    skinRobot1.style.boxShadow = `none`;
    skinCosmonaft1.style.boxShadow = `none`;
    skinMercedes1.style.boxShadow = `none`;
    skinBMW1.style.boxShadow = `none`;
    palayer1.style.border = `none`;
}

skinPacmen2.onclick = function () {
    palayer2.style.border = `25px solid transparent`;
    palayer2.style.borderLeftColor = `yellow`;
    palayer2.style.borderTopColor = `yellow`;
    palayer2.style.borderBottomColor = `yellow`;
    palayer2.style.animation = `eat 1.35s infinite`;
    palayer2.style.backgroundColor = `transparent`;
    palayer2.style.opacity = 1;
    skinPacmen2.style.boxShadow = `0 2px 10px #4f772d`;
    skinAhers2.style.boxShadow = `none`;
    skinBatmen2.style.boxShadow = `none`;
    skinCaptainAmerica2.style.boxShadow = `none`;
    skinCocaCola2.style.boxShadow = `none`;
    skinStarBucks2.style.boxShadow = `none`;
    skinKnight2.style.boxShadow = `none`;
    skinRobot2.style.boxShadow = `none`;
    skinCosmonaft2.style.boxShadow = `none`;
    skinMercedes2.style.boxShadow = `none`;
    skinBMW2.style.boxShadow = `none`;
    skinAlfaRomeo2.style.boxShadow = `none`;
}

skinAhers2.oninput = function () {
    palayer2.style.backgroundColor = colorInput2.value;
    palayer2.style.border = `none`;
    skinPacmen2.style.boxShadow = `none`;
    skinAhers2.style.boxShadow = `0 2px 10px #4f772d`;
    skinBatmen2.style.boxShadow = `none`;
    skinCaptainAmerica2.style.boxShadow = `none`;
    skinCocaCola2.style.boxShadow = `none`;
    skinStarBucks2.style.boxShadow = `none`;
    skinKnight2.style.boxShadow = `none`;
    skinRobot2.style.boxShadow = `none`;
    skinCosmonaft2.style.boxShadow = `none`;
    skinMercedes2.style.boxShadow = `none`;
    skinBMW2.style.boxShadow = `none`;
    skinAlfaRomeo2.style.boxShadow = `none`;
    palayer2.style.opacity = 1;
}

skinBatmen2.onclick = function () {
    palayer2.style.backgroundImage = `url(./img/png-transparent-batman-logo-batman-joker-bat-signal-robin-batman-logo.png)`;
    palayer2.style.opacity = 1;
    skinPacmen2.style.boxShadow = `none`;
    skinAhers2.style.boxShadow = `none`;
    skinBatmen2.style.boxShadow = `0 2px 10px #4f772d`;
    skinCaptainAmerica2.style.boxShadow = `none`;
    skinCocaCola2.style.boxShadow = `none`;
    skinStarBucks2.style.boxShadow = `none`;
    skinKnight2.style.boxShadow = `none`;
    skinRobot2.style.boxShadow = `none`;
    skinCosmonaft2.style.boxShadow = `none`;
    skinMercedes2.style.boxShadow = `none`;
    palayer2.style.backgroundColor = `transparent`;
    skinBMW2.style.boxShadow = `none`;
    palayer2.style.border = `none`;
    skinAlfaRomeo2.style.boxShadow = `none`;
}

skinCaptainAmerica2.onclick = function () {
    palayer2.style.backgroundImage = `url(./img/png-transparent-batman-logo-batman-joker-bat-signal-robin-batman-logo.png)`;
    palayer2.style.opacity = 1;
    skinPacmen2.style.boxShadow = `none`;
    skinAhers2.style.boxShadow = `none`;
    skinBatmen2.style.boxShadow = `none`;
    skinCaptainAmerica2.style.boxShadow = `0 2px 10px #4f772d`;
    skinCocaCola2.style.boxShadow = `none`;
    skinStarBucks2.style.boxShadow = `none`;
    palayer2.style.backgroundColor = `transparent`;
    skinKnight2.style.boxShadow = `none`;
    skinRobot2.style.boxShadow = `none`;
    skinCosmonaft2.style.boxShadow = `none`;
    skinMercedes2.style.boxShadow = `none`;
    skinBMW2.style.boxShadow = `none`;
    skinAlfaRomeo2.style.boxShadow = `none`;
    palayer2.style.border = `none`;
}

skinCocaCola2.onclick = function () {
    palayer2.style.backgroundImage = `url(./img/png-clipart-coca-cola-logo-coca-cola-zero-soft-drink-coca-cola-logo-logo-cola.png)`;
    palayer2.style.opacity = 1;
    skinPacmen2.style.boxShadow = `none`;
    skinAhers2.style.boxShadow = `none`;
    skinBatmen2.style.boxShadow = `none`;
    palayer2.style.backgroundColor = `transparent`;
    skinCaptainAmerica2.style.boxShadow = `none`;
    skinCocaCola2.style.boxShadow = `0 2px 10px #4f772d`;
    skinStarBucks2.style.boxShadow = `none`;
    skinKnight2.style.boxShadow = `none`;
    skinRobot2.style.boxShadow = `none`;
    skinCosmonaft2.style.boxShadow = `none`;
    skinMercedes2.style.boxShadow = `none`;
    skinBMW2.style.boxShadow = `none`;
    skinAlfaRomeo2.style.boxShadow = `none`;
    palayer2.style.border = `none`;
}

skinStarBucks2.onclick = function () {
    palayer2.style.backgroundImage = `url(./img/1200px-starbucks_corporation_logo_2011.svg.png)`;
    palayer2.style.opacity = 1;
    skinPacmen2.style.boxShadow = `none`;
    skinAhers2.style.boxShadow = `none`;
    skinBatmen2.style.boxShadow = `none`;
    skinCaptainAmerica2.style.boxShadow = `none`;
    skinCocaCola2.style.boxShadow = `none`;
    palayer2.style.backgroundColor = `transparent`;
    skinStarBucks2.style.boxShadow = `0 2px 10px #4f772d`;
    skinKnight2.style.boxShadow = `none`;
    skinRobot2.style.boxShadow = `none`;
    skinCosmonaft2.style.boxShadow = `none`;
    skinMercedes2.style.boxShadow = `none`;
    skinBMW2.style.boxShadow = `none`;
    skinAlfaRomeo2.style.boxShadow = `none`;
    palayer2.style.border = `none`;
}

skinKnight2.onclick = function () {
    palayer2.style.backgroundImage = `url(./img/png-transparent-cartoon-knight-knight-comics-shield-cartoon.png)`;
    palayer2.style.opacity = 1;
    skinPacmen2.style.boxShadow = `none`;
    skinAhers2.style.boxShadow = `none`;
    skinBatmen2.style.boxShadow = `none`;
    palayer2.style.backgroundColor = `transparent`;
    skinCaptainAmerica2.style.boxShadow = `none`;
    skinCocaCola2.style.boxShadow = `none`;
    skinStarBucks2.style.boxShadow = `none`;
    skinKnight2.style.boxShadow = `0 2px 10px #4f772d`;
    skinRobot2.style.boxShadow = `none`;
    skinCosmonaft2.style.boxShadow = `none`;
    skinMercedes2.style.boxShadow = `none`;
    skinBMW2.style.boxShadow = `none`;
    skinAlfaRomeo2.style.boxShadow = `none`;
    palayer2.style.border = `none`;
}

skinRobot2.onclick = function () {
    palayer2.style.backgroundImage = `url(./img/png-transparent-flat-design-tech-robot-logo-copyright-cartoon.png)`;
    palayer2.style.opacity = 1;
    skinPacmen2.style.boxShadow = `none`;
    skinAhers2.style.boxShadow = `none`;
    skinBatmen2.style.boxShadow = `none`;
    palayer2.style.backgroundColor = `transparent`;
    skinCaptainAmerica2.style.boxShadow = `none`;
    skinCocaCola2.style.boxShadow = `none`;
    skinStarBucks2.style.boxShadow = `none`;
    skinKnight2.style.boxShadow = `none`;
    skinRobot2.style.boxShadow = `0 2px 10px #4f772d`;
    skinCosmonaft2.style.boxShadow = `none`;
    skinMercedes2.style.boxShadow = `none`;
    skinBMW2.style.boxShadow = `none`;
    skinAlfaRomeo2.style.boxShadow = `none`;
    palayer2.style.border = `none`;
}

skinCosmonaft2.onclick = function () {
    palayer2.style.backgroundImage = `url(./img/gratis-png-persona-con-traje-de-astronauta-caricatura-de-astronauta-linda-astronauta.png)`;
    palayer2.style.opacity = 1;
    skinPacmen2.style.boxShadow = `none`;
    skinAhers2.style.boxShadow = `none`;
    palayer2.style.backgroundColor = `transparent`;
    skinBatmen2.style.boxShadow = `none`;
    skinCaptainAmerica2.style.boxShadow = `none`;
    skinCocaCola2.style.boxShadow = `none`;
    skinStarBucks2.style.boxShadow = `none`;
    skinKnight2.style.boxShadow = `none`;
    skinRobot2.style.boxShadow = `none`;
    skinCosmonaft2.style.boxShadow = `0 2px 10px #4f772d`;
    skinMercedes2.style.boxShadow = `none`;
    skinBMW2.style.boxShadow = `none`;
    skinAlfaRomeo2.style.boxShadow = `none`;
    palayer2.style.border = `none`;
}

skinMercedes2.onclick = function () {
    palayer2.style.backgroundImage = `url(./img/png-transparent-logo-icon-mercedes-icon-symbol-circle-spoke-rim-vehicle-wheel-metal.png)`;
    palayer2.style.opacity = 1;
    skinPacmen2.style.boxShadow = `none`;
    skinAhers2.style.boxShadow = `none`;
    palayer2.style.backgroundColor = `transparent`;
    skinBatmen2.style.boxShadow = `none`;
    skinCaptainAmerica2.style.boxShadow = `none`;
    skinCocaCola2.style.boxShadow = `none`;
    skinStarBucks2.style.boxShadow = `none`;
    skinKnight2.style.boxShadow = `none`;
    skinRobot2.style.boxShadow = `none`;
    skinCosmonaft2.style.boxShadow = `none`;
    skinMercedes2.style.boxShadow = `0 2px 10px #4f772d`;
    skinBMW2.style.boxShadow = `none`;
    skinAlfaRomeo2.style.boxShadow = `none`;
    palayer2.style.border = `none`;
}

skinBMW2.onclick = function () {
    palayer2.style.backgroundImage = `url(./img/png-transparent-bmw-car-logo-bmw-logo-trademark-logo-car.png)`;
    palayer2.style.opacity = 1;
    skinPacmen2.style.boxShadow = `none`;
    skinAhers2.style.boxShadow = `none`;
    palayer2.style.backgroundColor = `transparent`;
    skinBatmen2.style.boxShadow = `none`;
    skinCaptainAmerica2.style.boxShadow = `none`;
    skinCocaCola2.style.boxShadow = `none`;
    skinStarBucks2.style.boxShadow = `none`;
    skinKnight2.style.boxShadow = `none`;
    skinRobot2.style.boxShadow = `none`;
    skinCosmonaft2.style.boxShadow = `none`;
    skinMercedes2.style.boxShadow = `none`;
    skinBMW2.style.boxShadow = `0 2px 10px #4f772d`;
    skinAlfaRomeo2.style.boxShadow = `none`;
    palayer2.style.border = `none`;
}

skinAlfaRomeo2.onclick = function () {
    palayer2.style.backgroundImage = `url(./img/Alfa_romeo.svg)`;
    palayer2.style.opacity = 1;
    skinPacmen2.style.boxShadow = `none`;
    skinAhers2.style.boxShadow = `none`;
    skinBatmen2.style.boxShadow = `none`;
    skinCaptainAmerica2.style.boxShadow = `none`;
    skinCocaCola2.style.boxShadow = `none`;
    skinStarBucks2.style.boxShadow = `none`;
    skinKnight2.style.boxShadow = `none`;
    palayer2.style.backgroundColor = `transparent`;
    skinRobot2.style.boxShadow = `none`;
    skinCosmonaft2.style.boxShadow = `none`;
    skinMercedes2.style.boxShadow = `none`;
    skinBMW2.style.boxShadow = `none`;
    skinAlfaRomeo2.style.boxShadow = `0 2px 10px #4f772d`;
    palayer2.style.border = `none`;
}

backgroundAzersInput.oninput = function () {
    wrap.style.backgroundColor = backgroundAzersInput.value;
    backgroundAzers.style.backgroundColor = backgroundAzersInput.value;
}

let backgroundFon = `backgroundAzers`;

arrowsettingGameBackgroundContainerLeft.onclick = function () {
    if (backgroundFon == `backgroundAzers`) {
        backgroundAzers.style.display = `none`;
        background5.style.display = `flex`;
        wrap.style.backgroundImage = `url(./img/Background5.jpg)`;
        backgroundFon = `background5`;
    } else if (backgroundFon == `background5`) {
        background5.style.display = `none`;
        background4.style.display = `flex`;
        wrap.style.backgroundImage = `url(./img/Background4.jpg)`;
        backgroundFon = `background4`;
    } else if (backgroundFon == `background4`) {
        background4.style.display = `none`;
        background3.style.display = `flex`;
        wrap.style.backgroundImage = `url(./img/Background3.jpg)`;
        backgroundFon = `background3`;
    } else if (backgroundFon == `background3`) {
        background3.style.display = `none`;
        background2.style.display = `flex`;
        wrap.style.backgroundImage = `url(./img/Background2.png)`;
        backgroundFon = `background2`;
    } else if (backgroundFon == `background2`) {
        background2.style.display = `none`;
        background1.style.display = `flex`;
        wrap.style.backgroundImage = `url(./img/Background1.jpg)`;
        backgroundFon = `background1`;
    } else if (backgroundFon == `background1`) {
        background1.style.display = `none`;
        backgroundAzers.style.display = `flex`;
        backgroundFon = `backgroundAzers`;
    }
}

arrowsettingGameBackgroundContainerRight.onclick = function () {
    if (backgroundFon == `backgroundAzers`) {
        backgroundAzers.style.display = `none`;
        background5.style.display = `flex`;
        wrap.style.backgroundImage = `url(./img/Background5.jpg)`;
        backgroundFon = `background5`;
    } else if (backgroundFon == `background5`) {
        background5.style.display = `none`;
        background4.style.display = `flex`;
        wrap.style.backgroundImage = `url(./img/Background4.jpg)`;
        backgroundFon = `background4`;
    } else if (backgroundFon == `background4`) {
        background4.style.display = `none`;
        background3.style.display = `flex`;
        wrap.style.backgroundImage = `url(./img/Background3.jpg)`;
        backgroundFon = `background3`;
    } else if (backgroundFon == `background3`) {
        background3.style.display = `none`;
        background2.style.display = `flex`;
        wrap.style.backgroundImage = `url(./img/Background2.png)`;
        backgroundFon = `background2`;
    } else if (backgroundFon == `background2`) {
        background2.style.display = `none`;
        background1.style.display = `flex`;
        wrap.style.backgroundImage = `url(./img/Background1.jpg)`;
        backgroundFon = `background1`;
    } else if (backgroundFon == `background1`) {
        background1.style.display = `none`;
        backgroundAzers.style.display = `flex`;
        backgroundFon = `backgroundAzers`;
    }
}


let palayer1Y = 50;
let palayer1X = 50;
let palayer2Y = 50;
let palayer2X = 50;

btnTopPlayer1.onclick = function () {
    palayer1Y--;
    palayer1.style.top = palayer1Y + `%`;
    checkWinner();
    checkBoundaryWrap()
}

btnLeftPlayer1.onclick = function () {
    palayer1X--;
    palayer1.style.left = palayer1X + `%`;
    checkWinner();
    checkBoundaryWrap()
}

btnBottomPlayer1.onclick = function () {
    palayer1Y++;
    palayer1.style.top = palayer1Y + `%`;
    checkWinner();
    checkBoundaryWrap()
}

btnRightPlayer1.onclick = function () {
    palayer1X++;
    palayer1.style.left = palayer1X + `%`;
    checkWinner();
    checkBoundaryWrap()
}

btnTopPlayer2.onclick = function () {
    palayer2Y++;
    palayer2.style.top = palayer2Y + `%`;
    checkWinner();
    checkBoundaryWrap()
}


btnLeftPlayer2.onclick = function () {
    palayer2X--;
    palayer2.style.left = palayer2X + `%`;
    checkWinner();
    checkBoundaryWrap()
}

btnBottomPlayer2.onclick = function () {
    palayer2Y--;
    palayer2.style.top = palayer2Y + `%`;
    checkWinner();
    checkBoundaryWrap()
}

btnRightPlayer2.onclick = function () {
    palayer2X++;
    palayer2.style.left = palayer2X + `%`;
    checkWinner();
    checkBoundaryWrap()
}

document.body.onkeydown = function (e) {
    if (startGame == true) {
        if (e.keyCode == 87) {
            palayer1Y--;
            palayer1.style.top = palayer1Y + `%`;
            checkPoint();
            checkBoundaryWrap()
            checkWinner()
        } else if (e.keyCode == 83) {
            palayer1Y++;
            palayer1.style.top = palayer1Y + `%`;
            checkPoint();
            checkBoundaryWrap()
            checkWinner()
        } else if (e.keyCode == 65) {
            palayer1X--;
            palayer1.style.left = palayer1X + `%`;
            checkPoint();
            checkBoundaryWrap()
            checkWinner()
        } else if (e.keyCode == 68) {
            palayer1X++;
            palayer1.style.left = palayer1X + `%`;
            checkPoint();
            checkBoundaryWrap()
            checkWinner()
        } else if (e.keyCode == 38) {
            palayer2Y--;
            palayer2.style.top = palayer2Y + `%`;
            checkPoint();
            checkBoundaryWrap()
            checkWinner()
        } else if (e.keyCode == 40) {
            palayer2Y++;
            palayer2.style.top = palayer2Y + `%`;
            checkPoint();
            checkBoundaryWrap()
            checkWinner()
        } else if (e.keyCode == 37) {
            palayer2X--;
            palayer2.style.left = palayer2X + `%`;
            checkPoint();
            checkBoundaryWrap()
            checkWinner()
        } else if (e.keyCode == 39) {
            palayer2X++;
            palayer2.style.left = palayer2X + `%`;
            checkPoint();
            checkBoundaryWrap()
            checkWinner()
        }
    }
}

let targetY;
let targetX;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function setRandom() {
    targetY = Math.floor(getRandomArbitrary(-10, 85));
    targetX = Math.floor(getRandomArbitrary(3, 100));
    target.style.top = targetY + `%`;
    target.style.left = targetX + `%`;
}

setRandom();

let player1point = 0;
let player2point = 0;

function checkPoint() {
    if (palayer1X == targetX && palayer1Y == targetY) {
        player1point++;
        palayer1Point.innerText = player1point;
        setRandom();
    } else if (palayer2X == targetX && palayer2Y == targetY) {
        player2point++;
        palayer2Point.innerText = player2point;
        setRandom();
    }
}

function checkBoundaryWrap() {
    if (palayer1Y == 91) {
        palayer1Y = -15;
        palayer1.style.top = -15 + `%`;
    } else if (palayer1X == 104) {
        palayer1X = 1;
        palayer1.style.left = 1 + `%`;
    } else if (palayer1Y == -16) {
        palayer1Y = 90;
        palayer1.style.top = 90 + `%`;
    } else if (palayer1X == 0) {
        palayer1X = 103;
        palayer1.style.left = 103 + `%`;
    } else if (palayer2Y == 91) {
        palayer2Y = -15;
        palayer2.style.top = -15 + `%`;
    } else if (palayer2X == 104) {
        palayer2X = 1;
        palayer2.style.left = 1 + `%`;
    } else if (palayer2Y == -16) {
        palayer2Y = 90;
        palayer2.style.top = 90 + `%`;
    } else if (palayer2X == 0) {
        palayer2X = 103;
        palayer2.style.left = 103 + `%`;
    }
}


function checkWinner(){
    if (player1point == 5){
        alert(`player1 winner`);
    }else if (player2point == 5){
        alert(`player2 winner`);
    }
}