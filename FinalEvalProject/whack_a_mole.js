// ---------------- Model ------------------------

class MoleModel {
  //Easy to change values for the game
  static Board_Size = 12;
  static Max_Moles = 3;
  static Game_Duration = 30;

  constructor() { 
    this.reset();
  }

  reset() {
    this.score = 0;
    this.timeLeft = MoleModel.Game_Duration;
    this.isRunning = false;

    this.cells = Array.from({ length: MoleModel.Board_Size }, (_, i) => ({ //create a new shallow copied array instance
      id: i,
      hasMole: false,
    }));

    this.timerInterval = null;
    this.moleInterval = null;
  }

  startGame() { // whenever we start a new game we reset everything
    this.reset();
    this.isRunning = true;
  }

  stopGame() { // Helper function to stop the game
    this.isRunning = false;
    clearInterval(this.timerInterval); // Important to clear our setInterval
    clearInterval(this.moleInterval);

    this.timerInterval = null;
    this.moleInterval = null;
  }

  getActiveMoleCount() {
    return this.cells.filter((cell) => cell.hasMole).length;
  }

  spawnMole() {
    if (this.getActiveMoleCount() >= MoleModel.Max_Moles) return; // if there are max moles return nothing

    const emptyCells = this.cells.filter((cell) => !cell.hasMole); // if the cell has a mole return noththing or dont spawn
    if (emptyCells.length === 0) return;

    const randomIndex = Math.floor(Math.random() * emptyCells.length); // finally spawn in a random index
    emptyCells[randomIndex].hasMole = true;
  }

  removeMole(cellId) { // helper function to remove mole (on click in view)
    const cell = this.cells[cellId];
    if (cell.hasMole) {
      cell.hasMole = false;
      this.score += 1;
    }
  }

  clearBoard() { // helper function to clear the board
    this.cells.forEach((cell) => { //go through the whole array and set has mole to false
      cell.hasMole = false;
    });
  }
}

// ---------------- View ------------------------

class MoleView {
  constructor() {
    this.board = document.querySelector("#board");
    this.scoreEl = document.querySelector("#score");
    this.timeEl = document.querySelector("#time-left");
    this.startBtn = document.querySelector("#start-btn");

    this.renderBoard();
  }

  renderBoard() { // initial rendering of the game board
    this.board.innerHTML = "";

    for (let i = 0; i < MoleModel.Board_Size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.id = i;
      this.board.appendChild(cell);
    }
  }

  render(model) { // then render the mole inside the board
    this.scoreEl.textContent = model.score;
    this.timeEl.textContent = model.timeLeft;

    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell, index) => {
      cell.innerHTML = "";

      if (model.cells[index].hasMole) {
        const img = document.createElement("img");
        img.src = "./assets/mole-image.jfif";
        img.classList.add("cell_img");
        cell.appendChild(img);
      }
    });
  }
}

// ---------------- Controller ------------------------

class MoleController {
  constructor(model, view) { // we pass model and view inside the controller
    this.model = model;
    this.view = view;

    this.initializeEvents();
  }

  initializeEvents() {
    this.view.startBtn.addEventListener("click", () => {
      this.startGame();
    });

    this.view.board.addEventListener("click", (event) => {
      const cell = event.target.closest(".cell");
      if (!cell || !this.model.isRunning) return;

      const cellId = Number(cell.dataset.id);
      this.model.removeMole(cellId);
      this.view.render(this.model);
    });
  }

  startGame() { // reset and set isRunning to true
    this.model.startGame();
    this.view.render(this.model);

    // Timer
    this.model.timerInterval = setInterval(() => {
      this.model.timeLeft--;

      if (this.model.timeLeft <= 0) { // when the time is over
        this.model.timeLeft = 0;
        this.model.stopGame();
        this.model.clearBoard();
        this.view.render(this.model);
        alert("Time is Over!");
        return;
      }

      this.view.render(this.model);
    }, 1000);

    // To make the moles spawn
    this.model.moleInterval = setInterval(() => {
      this.model.spawnMole();
      this.view.render(this.model);
    }, 1000);
  }
}

const model = new MoleModel();
const view = new MoleView();
const controller = new MoleController(model, view);

view.render(model);
