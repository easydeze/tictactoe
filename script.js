const player = (marking) => {
    return {marking};
}

const gameBoard = (() => {
    let winning = [[1,2,3],[4,5,6],[7,8,9],[2,5,8],[1,4,7],[3,6,9],[1,5,9], [3,5,7]];
    const isFilled = () => {
        if (typeof document.getElementById("one").getElementsByTagName('div')[0] == "undefined" || 
            typeof document.getElementById("two").getElementsByTagName('div')[0] == "undefined" ||
            typeof document.getElementById("three").getElementsByTagName('div')[0] == "undefined" ||
            typeof document.getElementById("four").getElementsByTagName('div')[0] == "undefined" ||
            typeof document.getElementById("five").getElementsByTagName('div')[0] == "undefined" ||
            typeof document.getElementById("six").getElementsByTagName('div')[0] == "undefined" ||
            typeof document.getElementById("seven").getElementsByTagName('div')[0] == "undefined" ||
            typeof document.getElementById("eight").getElementsByTagName('div')[0] == "undefined" ||
            typeof document.getElementById("nine").getElementsByTagName('div')[0] == "undefined") {
                return false;
            }
        return true;
    }

    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    const checkWinner = () => {
        let playerOneLocations = [];
        let playerTwoLocations = [];
        if (typeof document.getElementById("one").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("one").getElementsByTagName('div')[0].innerHTML == "X") {
                playerOneLocations.push(1)
            }
        }
        if (typeof document.getElementById("one").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("one").getElementsByTagName('div')[0].innerHTML == "O") {
                playerTwoLocations.push(1)
            }
        }
        if (typeof document.getElementById("two").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("two").getElementsByTagName('div')[0].innerHTML == "X") {
                playerOneLocations.push(2)
            }
        }
        if (typeof document.getElementById("two").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("two").getElementsByTagName('div')[0].innerHTML == "O") {
                playerTwoLocations.push(2)
            }
        }
        if (typeof document.getElementById("three").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("three").getElementsByTagName('div')[0].innerHTML == "X") {
                playerOneLocations.push(3)
            }
        }
        if (typeof document.getElementById("three").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("three").getElementsByTagName('div')[0].innerHTML == "O") {
                playerTwoLocations.push(3)
            }
        }
        if (typeof document.getElementById("four").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("four").getElementsByTagName('div')[0].innerHTML == "X") {
                playerOneLocations.push(4)
            }
        }
        if (typeof document.getElementById("four").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("four").getElementsByTagName('div')[0].innerHTML == "O") {
                playerTwoLocations.push(4)
            }
        }
        if (typeof document.getElementById("five").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("five").getElementsByTagName('div')[0].innerHTML == "X") {
                playerOneLocations.push(5)
            }
        }
        if (typeof document.getElementById("five").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("five").getElementsByTagName('div')[0].innerHTML == "O") {
                playerTwoLocations.push(5)
            }
        }
        if (typeof document.getElementById("six").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("six").getElementsByTagName('div')[0].innerHTML == "X") {
                playerOneLocations.push(6)
            }
        }
        if (typeof document.getElementById("six").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("six").getElementsByTagName('div')[0].innerHTML == "O") {
                playerTwoLocations.push(6)
            }
        }
        if (typeof document.getElementById("seven").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("seven").getElementsByTagName('div')[0].innerHTML == "X") {
                playerOneLocations.push(7)
            }
        }
        if (typeof document.getElementById("seven").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("seven").getElementsByTagName('div')[0].innerHTML == "O") {
                playerTwoLocations.push(7)
            }
        }
        if (typeof document.getElementById("eight").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("eight").getElementsByTagName('div')[0].innerHTML == "X") {
                playerOneLocations.push(8)
            }
        }
        if (typeof document.getElementById("eight").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("eight").getElementsByTagName('div')[0].innerHTML == "O") {
                playerTwoLocations.push(8)
            }
        }
        if (typeof document.getElementById("nine").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("nine").getElementsByTagName('div')[0].innerHTML == "X") {
                playerOneLocations.push(9)
            }
        }
        if (typeof document.getElementById("nine").getElementsByTagName('div')[0] != "undefined") {
            if (document.getElementById("nine").getElementsByTagName('div')[0].innerHTML == "O") {
                playerTwoLocations.push(9)
            }
        }
        for (let i = 0; i < winning.length; i++) {
            if (equals(playerOneLocations, winning[i])) { return "X";}
            else if (equals(playerTwoLocations, winning[i])) { return "O";}
        }
        return;
    };

    return {
        checkWinner,
        isFilled
    };
})();

const playGame = (() => {
    const playerOne = player("X");
    const playerTwo = player("O");
    const choices = document.querySelectorAll('.box');
    const board = document.querySelector('body');
    var roundNum = 0;

    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            playRound(choice.id, roundNum);
            if (gameBoard.checkWinner() && !gameBoard.isFilled()) {
                let tempWin = document.createElement('p');
                tempWin.innerHTML = `Player ${gameBoard.checkWinner()} has won.`;
                tempWin.classList.add('result');
                board.appendChild(tempWin);
                document.addEventListener("click", handler, true);

                function handler(e) {
                e.stopPropagation();
                e.preventDefault();
                }
            }
            else if (!gameBoard.checkWinner() && gameBoard.isFilled()){
                console.log("DRAW")
                let tempDraw = document.createElement('p');
                tempDraw.innerHTML = "Draw!";
                tempDraw.classList.add('result');
                board.appendChild(tempDraw);
            }
            return;
        })
    });

    const updateCounter = () => {
        roundNum += 1;
    }

    const playRound = (index, roundNum) => {
        if (roundNum < 9) {
            let one = document.querySelector('#one');
            let two = document.querySelector('#two');
            let three = document.querySelector('#three');
            let four = document.querySelector('#four');
            let five = document.querySelector('#five');
            let six = document.querySelector('#six');
            let seven = document.querySelector('#seven');
            let eight = document.querySelector('#eight');
            let nine = document.querySelector('#nine');
            if (index == "one" && !one.hasChildNodes()) {
                if (roundNum % 2 == 0) {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerOne.marking;
                    one.appendChild(tempValue);
                    updateCounter();
                }
                else {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerTwo.marking;
                    one.appendChild(tempValue);
                    updateCounter();
                }
            }
            if (index == "two" && !two.hasChildNodes()) {
                if (roundNum % 2 == 0) {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerOne.marking;
                    two.appendChild(tempValue);
                    updateCounter();
                }
                else {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerTwo.marking;
                    two.appendChild(tempValue);
                    updateCounter();
                }
            }
            if (index == "three" && !three.hasChildNodes()) {
                if (roundNum % 2 == 0) {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerOne.marking;
                    three.appendChild(tempValue);
                    updateCounter();
                }
                else {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerTwo.marking;
                    three.appendChild(tempValue);
                    updateCounter();
                }
            }
            if (index == "four" && !four.hasChildNodes()) {
                if (roundNum % 2 == 0) {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerOne.marking;
                    four.appendChild(tempValue);
                    updateCounter();
                }
                else {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerTwo.marking;
                    four.appendChild(tempValue);
                    updateCounter();
                }
            }
            if (index == "five" && !five.hasChildNodes()) {
                if (roundNum % 2 == 0) {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerOne.marking;
                    five.appendChild(tempValue);
                    updateCounter();
                }
                else {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerTwo.marking;
                    five.appendChild(tempValue);
                    updateCounter();
                }
            }
            if (index == "six" && !six.hasChildNodes()) {
                if (roundNum % 2 == 0) {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerOne.marking;
                    six.appendChild(tempValue);
                    updateCounter();
                }
                else {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerTwo.marking;
                    six.appendChild(tempValue);
                    updateCounter();
                }
            }
            if (index == "seven" && !seven.hasChildNodes()) {
                if (roundNum % 2 == 0) {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerOne.marking;
                    seven.appendChild(tempValue);
                    updateCounter();
                }
                else {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerTwo.marking;
                    seven.appendChild(tempValue);
                    updateCounter();
                }
            }
            if (index == "eight" && !eight.hasChildNodes()) {
                if (roundNum % 2 == 0) {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerOne.marking;
                    eight.appendChild(tempValue);
                    updateCounter();
                }
                else {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerTwo.marking;
                    eight.appendChild(tempValue);
                    updateCounter();
                }
            }
            if (index == "nine" && !nine.hasChildNodes()) {
                if (roundNum % 2 == 0) {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerOne.marking;
                    nine.appendChild(tempValue);
                    updateCounter();
                }
                else {
                    let tempValue = document.createElement('div')
                    tempValue.innerHTML = playerTwo.marking;
                    nine.appendChild(tempValue);
                    updateCounter();
                }
            }
        }
        else {
            return;
        }
    };

})();