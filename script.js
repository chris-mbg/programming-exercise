
const headerCheck = headerArr => {
  if (headerArr[0] <= 0 || headerArr[1] <=0 || headerArr[2] > headerArr[0]-1 || headerArr[3] > headerArr[1]-1) {
    return false
  } else {
    return true
  }
};
const getTableSize = headerArr => [headerArr[0], headerArr[1]];
const getStartPosition = headerArr => [headerArr[2], headerArr[3]];

const moveForward = obj => {
  switch (obj.dir) {
    case 'N':
      obj.posY = obj.posY - 1;
      break
    case 'E':
      obj.posX = obj.posX + 1;
      break
    case 'S':
      obj.posY = obj.posY + 1;
      break
    case 'W':
      obj.posX = obj.posX - 1;
    break
  }
};
const moveBackward = obj => {
  switch(obj.dir) {
    case 'N':
      obj.posY = obj.posY + 1;
      break
    case 'E':
      obj.posX = obj.posX - 1;
      break
    case 'S':
      obj.posY = obj.posY - 1;
      break
    case 'W':
      obj.posX = obj.posX + 1;
      break
  }
};
const turnClockwise = obj => {
  switch(obj.dir) {
    case 'N':
      obj.dir = 'E';
      break;
    case 'E':
      obj.dir = 'S';
      break;
    case 'S':
      obj.dir = 'W';
      break;
    case 'W':
      obj.dir = 'N';
      break;
  }
};
const turnCounterClockwise = obj => {
  switch(obj.dir) {
    case 'N':
      obj.dir = 'W';
      break;
  case 'E':
    obj.dir = 'N';
    break;
  case 'S':
    obj.dir = 'E';
    break;
  case 'W':
    obj.dir = 'S';
    break;
  }
};

const moveTheObject = (table, obj, command) => {

  switch (command) {
    case 1 :
      moveForward(obj);
      break
    case 2 :
      moveBackward(obj);
      break
    case 3 :
      turnClockwise(obj);
      break
    case 4:
      turnCounterClockwise(obj);
      break
  }

  if(obj.posX < 0 || obj.posX > table[0]-1 || obj.posY < 0 || obj.posY > table[1]-1) {
    obj.posX = -1;
    obj.posY = -1
  }
};

const runSimulation = stdin => {
  const input = stdin.split(',').map(int => Number(int));

  if (input < 5) {
    console.error('Invalid start input.');
    return [-1, -1]
  }
  const header = input.splice(0,4);
  const commands = input;

  const headerValid = headerCheck(header);
  if(!headerValid) {
    console.error('Invalid input for header.')
    return [-1,-1]
  }

  const table = getTableSize(header);
  const startPos = getStartPosition(header);

  const objToMove = {
    posX: startPos[0],
    posY: startPos[1],
    dir: 'N'
  }

  // Choosing for-loop to be able to break loop for a 0 command or if object falls of the table.
  for(let i = 0; i < commands.length; i++) {
    if (commands[i] === 0) {
      return [objToMove.posX, objToMove.posY]
    } else if (commands[i] > 0 || commands[i] < 5) {
       moveTheObject(table, objToMove, commands[i]);
       if(objToMove.posX === -1 || objToMove.posY === -1) return [-1,-1]
    } else {
      console.log('Invalid command. Program ended.');
      return [-1,-1]
    }
  }
};