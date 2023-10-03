export default function taskBlock(trueOrFalse) {
  var task = 1; // change task(2) to true or false
  var task2 = 2;

  if (trueOrFalse) {
    let task = 3;
    const task2 = 4;
  }

  return [task, task2];
}
