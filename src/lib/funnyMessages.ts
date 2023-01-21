export const funnyMessages = [
  'Feed me',
  "I'm a spy",
  'Lorem Ipsum',
  'Sending to the government...',
  'Selling data...',
  'I love secrets',
  'Yes daddy <3',
  "That's .. disappointing",
  'I want cookies',
  'MORE',
  "I'm not getting paid!",
  '(≧◡≦) ♡',
  'UwU',
  'Why am I like this?',
  'Stop .. I`m already fat',
  'That hurts >.<',
  'I can fit way more ;)',
  'I`ll do it .. I guess',
  'Ready to catch!'
];

export const funnyMessage = () =>
  funnyMessages[Math.floor(Math.random() * (funnyMessages.length - 1))];

export default funnyMessage;
