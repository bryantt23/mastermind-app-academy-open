const POSSIBLE_PEGS = { R: 'red', G: 'green', B: 'blue', Y: 'yellow' };
class Code {
  static constructor() {}

  static areValidPegs(pegs) {
    return pegs.every(peg => {
      return Object.keys(POSSIBLE_PEGS).includes(peg.toUpperCase());
    });
  }
}

let code = new Code(['R', 'G', 'R', 'B']);
console.log(JSON.stringify(code));

console.log(Code.areValidPegs(['B', 'Y', 'G', 'G']));
console.log(Code.areValidPegs(['b', 'y', 'g', 'g']));
console.log(Code.areValidPegs(['B', 'Y', 'Z', 'G']));
