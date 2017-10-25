let userName = 'Joe';

userName ? console.log('Hello') : console.log('Bye');

let userQuestion = 'Will I play football today?';

let randomNumber = Math.floor(Math.random() * 7);

let eightBall = '';

switch(randomNumber) {
  case 1:
    eightBall = 'It is certain';
    break;
    
  case 2:
    eightBall = 'It is decidedly so';
    break;
    
  case 3:
    eightBall = 'Reply hazy try again';
    break;
    
  case 4:
    eightBall = 'Cannot predict now';
    break;
    
  case 5:
    eightBall = 'Dont count on it';
    break;
    
  case 6:
    eightBall = 'My sources say no';
    break;
    
  case 7:
    eightBall = 'Outlook not so good';
    break;
    
  case 8:
    eightBall = 'Signs point to yes';
    break;   
                 }

console.log(userQuestion);

console.log('The eight ball answered: ' + eightBall);
