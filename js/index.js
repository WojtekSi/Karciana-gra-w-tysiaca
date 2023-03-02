class Game {
  constructor() {
    this.StageOftheGame = 0; //0 - preparing to game, 1 - negotiation, 2 - sharing cards, 3- Game, 4 - check, who won
    this.tablePlayer1 = document.getElementById("tablePlayer1");
    this.tablePlayer2 = document.getElementById("tablePlayer2");
    this.tablePlayer3 = document.getElementById("tablePlayer3");
    this.tablePlayer4 = document.getElementById("tablePlayer4");


    //0 - preparing to game
    this.currentSetOfCards = null;
    this.SetsPlayer1 = null;
    this.SetsPlayer2 = null;
    this.SetsPlayer3 = null;
    this.SetsPlayer4 = null;
    this.SetsFromMiddle = null;

    // 1 - negotiation
    this.whoStartNegotiation = 1;
    this.whoNegotiates = 1;

    this.valueNegotiationPlayer1 = 0;
    this.valueNegotiationPlayer2 = 0;
    this.valueNegotiationPlayer3 = 0;
    this.valueNegotiationPlayer4 = 0;

    this.player1StillNegotiation = true;
    this.player2StillNegotiation = true;
    this.player3StillNegotiation = true;
    this.player4StillNegotiation = true;
    this.howManyPlayersStillplayerStillNegotiation = 4;

    this.whoWonNegotiation = null;
    this.currentPool - null;

    this.player1InputValue = tablePlayer1.children[1].children[1];
    this.player2InputValue = tablePlayer2.children[1].children[1];
    this.player3InputValue = tablePlayer3.children[1].children[1];
    this.player4InputValue = tablePlayer4.children[1].children[1];

    this.player1BtnNegotiation = tablePlayer1.children[1].children[2];
    this.player2BtnNegotiation = tablePlayer2.children[1].children[2];
    this.player3BtnNegotiation = tablePlayer3.children[1].children[2];
    this.player4BtnNegotiation = tablePlayer4.children[1].children[2];

    this.player1BtnEnd = tablePlayer1.children[1].children[3]
    this.player2BtnEnd = tablePlayer2.children[1].children[3]
    this.player3BtnEnd = tablePlayer3.children[1].children[3]
    this.player4BtnEnd = tablePlayer4.children[1].children[3]


    //2 - sharing cards

    //3 - Game

    this.whoHasInitiative = null;
    this.cardsOnTheTable = null;

    this.cardsWhoWonPlayer1 = null;
    this.cardsWhoWonPlayer2 = null;
    this.cardsWhoWonPlayer3 = null;
    this.cardsWhoWonPlayer4 = null;

    //4 - check, who won

    this.pointsTeamPlayer1and3 = null;
    this.pointsTeamPlayer2and4 = null;

    this.whoWon = null;
  }

  initialGame() {
    this.initialStage0();

  }

  showNewInfo(info){
    document.querySelector("footer").children[0].innerHTML = 
    `${document.querySelector("footer").children[0].innerHTML} </br>
    ${info}`;
  }

  initialStage0() {

    this.showNewInfo("start Stage 0");

    //utwórz zestaw kart - chwilowo wprowadzę je z z palca a docelowo zaimportuję
    const cards = [
      {
        id: 1,
        color: "C",
        figure: "9",
        img: "../src/img/Card/9C.jpg",
        point: 0,
        power: 1,
        name: "9C",
      },
      {
        id: 2,
        color: "C",
        figure: "J",
        img: "../src/img/Card/JC.jpg",
        point: 2,
        power: 2,
        name: "JC",
      },
      {
        id: 3,
        color: "C",
        figure: "D",
        img: "../src/img/Card/DC.jpg",
        point: 3,
        power: 3,
        name: "DC",
      },
      {
        id: 4,
        color: "C",
        figure: "K",
        img: "../src/img/Card/KC.jpg",
        point: 4,
        power: 4,
        name: "KC",
      },
      {
        id: 5,
        color: "C",
        figure: "10",
        img: "../src/img/Card/10C.jpg",
        point: 10,
        power: 5,
        name: "10C",
      },
      {
        id: 6,
        color: "C",
        figure: "A",
        img: "../src/img/Card/AC.jpg",
        point: 11,
        power: 6,
        name: "AC",
      },

      {
        id: 7,
        color: "D",
        figure: "9",
        img: "../src/img/Card/9D.jpg",
        point: 0,
        power: 1,
        name: "9D",
      },
      {
        id: 8,
        color: "D",
        figure: "J",
        img: "../src/img/Card/JD.jpg",
        point: 2,
        power: 2,
        name: "JD",
      },
      {
        id: 9,
        color: "D",
        figure: "D",
        img: "../src/img/Card/DD.jpg",
        point: 3,
        power: 3,
        name: "DD",
      },
      {
        id: 10,
        color: "D",
        figure: "K",
        img: "../src/img/Card/KD.jpg",
        point: 4,
        power: 4,
        name: "KD",
      },
      {
        id: 11,
        color: "D",
        figure: "10",
        img: "../src/img/Card/10D.jpg",
        point: 10,
        power: 5,
        name: "10D",
      },
      {
        id: 12,
        color: "D",
        figure: "A",
        img: "../src/img/Card/AD.jpg",
        point: 11,
        power: 6,
        name: "AD",
      },

      {
        id: 13,
        color: "K",
        figure: "9",
        img: "../src/img/Card/9K.jpg",
        point: 0,
        power: 1,
        name: "9K",
      },
      {
        id: 14,
        color: "K",
        figure: "J",
        img: "../src/img/Card/JK.jpg",
        point: 2,
        power: 2,
        name: "JK",
      },
      {
        id: 15,
        color: "K",
        figure: "D",
        img: "../src/img/Card/DK.jpg",
        point: 3,
        power: 3,
        name: "DK",
      },
      {
        id: 16,
        color: "K",
        figure: "K",
        img: "../src/img/Card/KK.jpg",
        point: 4,
        power: 4,
        name: "KK",
      },
      {
        id: 17,
        color: "K",
        figure: "10",
        img: "../src/img/Card/10K.jpg",
        point: 10,
        power: 5,
        name: "10K",
      },
      {
        id: 18,
        color: "K",
        figure: "A",
        img: "../src/img/Card/AK.jpg",
        point: 11,
        power: 6,
        name: "AK",
      },

      {
        id: 19,
        color: "W",
        figure: "9",
        img: "../src/img/Card/9W.jpg",
        point: 0,
        power: 1,
        name: "9W",
      },
      {
        id: 20,
        color: "W",
        figure: "J",
        img: "../src/img/Card/JW.jpg",
        point: 2,
        power: 2,
        name: "JW",
      },
      {
        id: 21,
        color: "W",
        figure: "D",
        img: "../src/img/Card/DW.jpg",
        point: 3,
        power: 3,
        name: "DW",
      },
      {
        id: 22,
        color: "W",
        figure: "K",
        img: "../src/img/Card/KW.jpg",
        point: 4,
        power: 4,
        name: "KW",
      },
      {
        id: 23,
        color: "W",
        figure: "10",
        img: "../src/img/Card/10W.jpg",
        point: 10,
        power: 5,
        name: "10W",
      },
      {
        id: 24,
        color: "W",
        figure: "A",
        img: "../src/img/Card/AW.jpg",
        point: 11,
        power: 6,
        name: "AW",
      },
    ];

    //potasuj - też chwilow wkleję funkcję do tasowania ale docelowo będę ją importować
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }


    this.currentSetOfCards = shuffle(cards);
    
    this.SetsPlayer1=this.currentSetOfCards.slice(0, 5);
    this.SetsPlayer2=this.currentSetOfCards.slice(5, 10);
    this.SetsPlayer3=this.currentSetOfCards.slice(10, 15);
    this.SetsPlayer4=this.currentSetOfCards.slice(15, 20);

    this.SetsFromMiddle=this.currentSetOfCards.slice(20, 24);

    function addNewImg(where, className, content){
        const renderingNewElement = document.createElement("img");
        renderingNewElement.setAttribute("class", className);
        renderingNewElement.setAttribute("src", content);
        where.appendChild(renderingNewElement);
    }

    this.SetsPlayer1.map(value => {
        addNewImg(this.tablePlayer1.children[0], "cardInHand", value.img)
    })

    this.SetsPlayer2.map(value => {
        addNewImg(this.tablePlayer2.children[0], "cardInHand", value.img)
    })

    this.SetsPlayer3.map(value => {
        addNewImg(this.tablePlayer3.children[0], "cardInHand", value.img)
    })

    this.SetsPlayer4.map(value => {
        addNewImg(this.tablePlayer4.children[0], "cardInHand", value.img)
    })

    //tutaj można dać efekt oczekiwania

    this.showNewInfo("koniec Stage 0");
    this.StageOftheGame = 1;
    this.initialStage1();
  }

  nextPersonWhoStillNegotiation(index){
    let helpArray = [
        this.player1StillNegotiation, // 0 , true
        this.player2StillNegotiation, // 1, false
        this.player3StillNegotiation, // 2, false
        this.player4StillNegotiation // 3, true
    ];
    for (let i=0; i < 4; i++){
        console.log((index + i) % 4);
        if (helpArray[(index + i) % 4]) {
            if(index < 4){
                return index + 1;
            }else{
                return 1;
            }

        }
    if(this.howManyPlayersStillplayerStillNegotiation > 1){
            console.log("nextPersonWhoStillNegotiation - ten komunikat ma się pojawić tlyko, gyu koniec negocjacji - inaczej jest to bug");
            return "error";
        }
    }
  }

  initialStage1() {

    this.showNewInfo("start Stage 1");
    this.whoNegotiates = this.whoStartNegotiation;
    this.whoWonNegotiation = this.whoStartNegotiation;
    this.currentPool = 100;
    this.showNewInfo(`Negocjacje zaczyna gracz ${this.whoNegotiates} od 100`)
    this.whoNegotiates = this.whoNegotiates < 4 ? (this.whoNegotiates + 1) : 1 ;

    this.player1BtnNegotiation.addEventListener("click" , () => {
        if(this.whoNegotiates === 1 && this.player1StillNegotiation && this.player1InputValue.value > this.currentPool && !(this.player1InputValue.value % 10)){
            console.log(`gracz 1 podbił pule do: ${this.player1InputValue.value}`);
          this.showNewInfo(`gracz 1 podbił pule do: ${this.player1InputValue.value}`);
          this.valueNegotiationPlayer1 =  this.player1InputValue.value;
          this.currentPool = this.player1InputValue.value;
          this.whoWonNegotiation = 1;

          this.whoNegotiates = this.nextPersonWhoStillNegotiation(1);
        }
      }); 

      this.player2BtnNegotiation.addEventListener("click" , () => {
        if(this.whoNegotiates === 2 && this.player1StillNegotiation && this.player2InputValue.value > this.currentPool && !(this.player2InputValue.value % 10)){
            console.log(`gracz 2 podbił pule do: ${this.player2InputValue.value}`);
          this.showNewInfo(`gracz 2 podbił pule do: ${this.player2InputValue.value}`);
          this.valueNegotiationPlayer2 =  this.player1InputValue.value;
          this.currentPool = this.player2InputValue.value;
          this.whoWonNegotiation = 2;

          this.whoNegotiates = this.nextPersonWhoStillNegotiation(2);
        }
      }); 

      this.player3BtnNegotiation.addEventListener("click" , () => {
        if(this.whoNegotiates === 3 && this.player1StillNegotiation && this.player3InputValue.value > this.currentPool && !(this.player3InputValue.value % 10)){
            console.log(`gracz 3 podbił pule do: ${this.player3InputValue.value}`);
          this.showNewInfo(`gracz 3 podbił pule do: ${this.player3InputValue.value}`);
          this.valueNegotiationPlayer3 =  this.player1InputValue.value;
          this.currentPool = this.player3InputValue.value;
          this.whoWonNegotiation = 3;

          this.whoNegotiates = this.nextPersonWhoStillNegotiation(3);
        }
      }); 

      this.player4BtnNegotiation.addEventListener("click" , () => {
        if(this.whoNegotiates === 4 && this.player4StillNegotiation && this.player4InputValue.value > this.currentPool && !(this.player4InputValue.value % 10)){
            console.log(`gracz 4 podbił pule do: ${this.player4InputValue.value}`);
          this.showNewInfo(`gracz 4 podbił pule do: ${this.player4InputValue.value}`);
          this.valueNegotiationPlayer4 =  this.player4InputValue.value;
          this.currentPool = this.player4InputValue.value;
          this.whoWonNegotiation = 4;

          this.whoNegotiates = this.nextPersonWhoStillNegotiation(4);
        }
      }); 



    
      
      this.player1BtnEnd.addEventListener("click" , () => {
          if(this.whoNegotiates === 1 && this.player1StillNegotiation){
            this.showNewInfo(`gracz 1 spasował`);
            this.player1StillNegotiation = false;
            this.whoNegotiates = this.nextPersonWhoStillNegotiation(1);
            this.howManyPlayersStillplayerStillNegotiation --;

            if(this.howManyPlayersStillplayerStillNegotiation === 1){
                this.endStage1();
          }
        }
      }); 

      this.player2BtnEnd.addEventListener("click" , () => {
        if(this.whoNegotiates === 2 && this.player2StillNegotiation){
          this.showNewInfo(`gracz 2 spasował`);
          this.player2StillNegotiation = false;
          this.whoNegotiates = this.nextPersonWhoStillNegotiation(2);
          this.howManyPlayersStillplayerStillNegotiation --;

          if(this.howManyPlayersStillplayerStillNegotiation === 1){
              this.endStage1();
        }
      }
    }); 

    this.player3BtnEnd.addEventListener("click" , () => {
        if(this.whoNegotiates === 3 && this.player3StillNegotiation){
          this.showNewInfo(`gracz 3 spasował`);
          this.player3StillNegotiation = false;
          this.whoNegotiates = this.nextPersonWhoStillNegotiation(3);
          this.howManyPlayersStillplayerStillNegotiation --;

          if(this.howManyPlayersStillplayerStillNegotiation === 1){
              this.endStage1();
        }
      }
    }); 

    this.player4BtnEnd.addEventListener("click" , () => {
        if(this.whoNegotiates === 4 && this.player4StillNegotiation){
          this.showNewInfo(`gracz 4 spasował`);
          this.player4StillNegotiation = false;
          this.whoNegotiates = this.nextPersonWhoStillNegotiation(4);
          this.howManyPlayersStillplayerStillNegotiation --;

          if(this.howManyPlayersStillplayerStillNegotiation === 1){
              this.endStage1();
        }
      }
    }); 
      

  }

  endStage1(){
    this.showNewInfo(`negocjacja skończona, wygrał gracz ${this.whoWonNegotiation} i to on bierze karty z środka, następnie rozda każdmu z graczy po jednej z nich i zacznie się gra`);
    this.showNewInfo("stop Stage 1");
    this.whoStartNegotiation = ((this.whoStartNegotiation + 1) % 4);
    this.initialStage2();
  }

  initialStage2() {}

  initialStage3() {}

  initialStage4() {}
}
