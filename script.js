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
    return pegs;
  }
}

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
