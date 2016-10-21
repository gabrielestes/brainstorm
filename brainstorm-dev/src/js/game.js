$(document).ready(function() {
    var allRaindrops = [];
    var interval = 3000;
    var gameDuration = null;
    //Mute button functionality
    $('.mute-button').on('click', function() {
        $('.music').prop('muted', !$('.music').prop('muted'));
    });
    //Start Game button
    $('.start-game').on('click', function() {
        new Raindrop();
        startGame();
        increaseSpeed();
        $('.start-game').hide();
    });

    function startGame() {
        gameDuration = setInterval(function() {
            new Raindrop();
            console.log(interval);
        }, interval);
    }

    function endGame() {
        setTimeout(function() {
            clearInterval(gameDuration);
        }, 900000);
    }

    function increaseSpeed() {
        setInterval(function() {
          clearInterval(gameDuration);
            interval -= 250;
            startGame();
            return interval;
        }, 15000);
    }

    function Raindrop() {
        this.values = {
            firstNumber: null,
            secondNumber: null,
            operator: null,
            solution: null
        };

        this.init = function() {
            this.generateProblem();
            this.self = this.createRaindrop();
            allRaindrops.push(this);
        };
        this.init();
    }

    Raindrop.prototype = {
        generateOperator: function() {
            var operator = "";
            var operNumber = Math.ceil(Math.random() * 4);
            if (operNumber === 1) {
                operator = "+";
            } else if (operNumber === 2) {
                operator = "-";
            } else if (operNumber === 3) {
                operator = "*";
            } else {
                operator = "/";
            }
            this.values.operator = operator;
            return operator;
        },

        generateNumbers: function(operator) {
            if (operator === "+" || operator === "-") {
                this.genNumAddSub();
            } else if (operator === "*") {
                this.genNumMultiply();
            } else {
                this.genNumDivide();
            }
        },

        genNumAddSub: function() {
            var operand1 = Math.ceil(Math.random() * 20),
                operand2 = Math.ceil(Math.random() * 15);
            this.values.firstNumber = operand1;
            this.values.secondNumber = operand2;
        },

        genNumMultiply: function() {
            var operand = Math.ceil(Math.random() * 15),
                multiplier = Math.ceil(Math.random() * 10);
            this.values.firstNumber = operand;
            this.values.secondNumber = multiplier;
        },

        genNumDivide: function() {
            var divider = Math.ceil(Math.random() * 13);
            var operand = (Math.ceil(Math.random() * 15)) * divider;
            this.values.firstNumber = operand;
            this.values.secondNumber = divider;
        },

        generateProblem: function() {
            this.generateNumbers(this.generateOperator());
            var solution = null,
                operator = this.values.operator,
                firstNumber = this.values.firstNumber,
                secondNumber = this.values.secondNumber;
            switch (operator) {
                case "+":
                    solution = firstNumber + secondNumber;
                    break;
                case "-":
                    solution = firstNumber - secondNumber;
                    break;
                case "*":
                    solution = firstNumber * secondNumber;
                    break;
                default:
                    solution = firstNumber / secondNumber;
            }
            this.values.solution = solution;
        },

        createRaindrop: function() {
            var posLeft = Math.ceil(Math.random() * 70);
            $('.game-container').append(
                $('<div/>').addClass('raindrop').css({
                    'left': posLeft + '%',
                }).text(this.values.firstNumber + this.values.operator + this.values.secondNumber)
            );
            // this.makeItRain();
            return $('.raindrop').first();
        }

        // makeItRain: function() {
        //   setTimeout('new Raindrop()', 3000);
        // }
    };
});
