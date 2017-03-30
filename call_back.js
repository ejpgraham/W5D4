// class Clock {
//   constructor() {
//     const currentDate = new Date()
//     this.seconds = currentDate.getSeconds()
//     this.minutes = currentDate.getMinutes()
//     this.hours = currentDate.getHours()
//
//     setInterval(this.printTime.bind(this), 1000)
    // setInterval(this._tick.bind(this), 1000)
//   }
//
//
//
//   printTime() {
//     console.log(`${this.hours}:${this.minutes}:${this.seconds} `)
//   }
//
//   _tick(){
//     this.seconds += 1
//     if(this.seconds === 60) {
//       this.seconds = 0
//       this.minutes += 1
//     }
//     if(this.minutes === 60) {
//       this.minutes = 0
//       this.hours += 1
//     }
//   }
// }


// const readline = require('readline');
//
// reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)
//
//   input: process.stdin,
//   output: process.stdout
// });

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Please enter a number', function (answer) {
      sum += parseInt(answer);
      console.log(`Your sum is ${sum}`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));



function askIfGreaterThan(el1, el2, callBack) {
  reader.question(`Is ${el1} greater than ${el2}?`, function (answer) {
    if (answer === 'yes') {
      callBack(true);
    } else {
      callBack(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i == arr.length - 1){
    outerBubbleSortLoop(madeAnySwaps)
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan){
      if (isGreaterThan) {
        let firstNum = arr[i];
        let secondNum = arr[i + 1];
        arr[i] = secondNum;
        arr[i + 1] = firstNum;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}

function absurdBubbleSort(arr, sortCompleteCallback) {
  let i = 0
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, i, false, outerBubbleSortLoop);
    } else {
      sortCompleteCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });



Function.prototype.myBind = function (context) {
  // debugger
  return () => {
    // debugger
    this.apply(context)
  }
}

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
