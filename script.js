const POSSIBLE_PEGS = { B: 'blue', R: 'red', Y: 'yellow', G: 'green' };
class Code {
  constructor(pegs) {
    if (Code.areValidPegs(pegs)) {
      this.pegs = pegs.map(peg => peg.toUpperCase());
    } else {
      throw new Error('Invalid pegs');
    }
  }

  static areValidPegs(pegs) {
    return pegs.every(peg => {
      return Object.keys(POSSIBLE_PEGS).includes(peg.toUpperCase());
    });
  }

  static random(length) {
    let pegs = [];
    for (let i = 0; i < length; i++) {
      pegs.push(
        Object.keys(POSSIBLE_PEGS)[
          Math.floor(Math.random() * Object.keys(POSSIBLE_PEGS).length)
        ]
      );
    }
    console.log(new Code(pegs));
    return new Code(pegs);
  }

  static fromString(str) {
    return new Code(str.split(''));
  }

  numExactMatches = code => {
    let exactMatches = 0;
    for (let i = 0; i < this.pegs.length; i++) {
      if (code.pegs[i] === this.pegs[i]) exactMatches++;
    }
    return exactMatches;
  };

  numNearMatches = code => {
    let nearMatches = 0;
    for (let i = 0; i < this.pegs.length; i++) {
      const codeColor = code.pegs[i];
      if (codeColor !== this.pegs[i] && this.pegs.includes(codeColor))
        nearMatches++;
    }
    return nearMatches;
  };

  exactMatches = code => {
    return JSON.stringify(code.pegs) === JSON.stringify(this.pegs);
  };
}

class MasterMind {
  constructor(length) {
    console.log(Code.random(length));
    this.secretCode = Code.random(length);
    // this.secretCode.pegs = ['B', 'B', 'B', 'B'];
    console.log('Secret code', { secret: this.secretCode.pegs });
    this.startGame();
  }

  startGame() {
    let gameOver = false;
    while (!gameOver) {
      gameOver = this.askUserForGuess();
    }
    console.log('you win!');
  }

  printMatches(code) {
    // console.log(code);
    // const exactMatches = this.secretCode.numNearMatches(code);
    const exactMatches = code.numExactMatches(this.secretCode);
    const nearMatches = code.numNearMatches(this.secretCode);

    console.log(`Exact matches: ${exactMatches}`);
    console.log(`Near matches: ${nearMatches}`);
  }

  askUserForGuess() {
    const input = prompt('Enter a code');
    console.log(`Your guess is: ${input}`);

    let inputCode = Code.fromString(input);
    this.printMatches(inputCode);
    return inputCode.exactMatches(this.secretCode);
  }
}

/*
let code = new Code(['R', 'G', 'R', 'B']);
console.log(JSON.stringify(code));
// code = new Code(['R', 'G', 'z', 'B']);
console.log(Code.areValidPegs(['B', 'Y', 'G', 'G']));
console.log(Code.areValidPegs(['b', 'y', 'g', 'g']));
console.log(Code.areValidPegs(['B', 'Y', 'Z', 'G']));
let code2 = new Code(['r', 'g', 'r', 'b']);
console.log(JSON.stringify(code2));
console.log(Code.random(5));
console.log(Code.random(5));
console.log(Code.random(5));
console.log(Code.fromString('GBGB'));
*/

/*
let code = new Code(['R', 'G', 'R', 'B']);
console.log(code.numExactMatches(new Code(['R', 'Y', 'Y', 'B'])));
console.log(code.numExactMatches(new Code(['Y', 'Y', 'Y', 'B'])));
console.log(code.numExactMatches(new Code(['Y', 'Y', 'Y', 'Y'])));

console.log(code.numNearMatches(new Code(['B', 'R', 'Y', 'Y'])));
console.log(code.numNearMatches(new Code(['R', 'G', 'R', 'B'])));
console.log(code.numNearMatches(new Code(['R', 'R', 'R', 'R'])));

console.log(code.exactMatches(new Code(['R', 'G', 'R', 'B'])));
console.log(code.exactMatches(new Code(['R', 'G', 'Y', 'Y'])));
console.log(code.exactMatches(new Code(['B', 'R', 'Y', 'Y'])));
console.log(code.exactMatches(new Code(['R', 'G', 'R', 'B', 'B'])));
*/

/*
let masterMind = new MasterMind(4);
console.log(JSON.stringify(masterMind));
masterMind = new MasterMind(5);
console.log(JSON.stringify(masterMind));
*/

let mastermind = new MasterMind(4);
// mastermind.secretCode = ['R', 'G', 'R', 'B'];
// console.log(JSON.stringify(mastermind));
// mastermind.printMatches(new Code(['R', 'Y', 'Y', 'B'])); //2
// mastermind.printMatches(new Code(['Y', 'Y', 'Y', 'G'])); //1
