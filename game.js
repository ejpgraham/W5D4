const readline = require('readline');

reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});



class Game {
  constructor() {
    this.stacks = [[1, 2, 3],[],[]]
  }

  run(completionCallback) {
    const game = this

    if(game.isWon()) {
      completionCallback()
    } else {
      game.promptMove(completionCallback)
    }
  }

  promptMove(completionCallback) {
    const game = this
    game.print()
    reader.question('Pick starting stack', function (startNum) {
      reader.question('Pick stack to move to', function (endNum) {
        let startIdx = parseInt(startNum);
        let endIdx = parseInt(endNum);
        game.makeMove(startIdx, endIdx)
        game.run(completionCallback)
      })
    })
  }

  makeMove(startIdx, endIdx) {
    const game = this
    let startStack = this.stacks[startIdx]
    let endStack = this.stacks[endIdx]

    if (game.isValidMove(startStack, endStack)){
      endStack.unshift(startStack.shift())
      return true
    } else {
      return false
    }
  }

  isValidMove(startStack, endStack) {
    if (startStack.length === 0 || startStack === endStack ){
      return false;
    } else if (startStack[0] > endStack[0])  {
      return false;
    }
    return true;
  }

  print() {
    console.log(JSON.stringify(this.stacks))
  }

  isWon() {
    if(this.stacks[1].length === 3 || this.stacks[2].length === 3) {
      return true
    }
    return false
  }
}

function completionCallBack() {
  console.log('You Won!')
  reader.question('Do you want to play again?', function (answer) {
    if(answer === yes) {
      a = new Game
      a.run(completionCallBack)
    } else {
      reader.close()
    }
  })
}

a = new Game
a.run(completionCallBack)
