let answerFlag = 0;
let answers = [ 'I’m not sure I understand ! Sorry!\nNot all of this is true, but this is a great sweet tale, but it is also pretty good. \nThere is little direct evidence to support this view. He will not let people go, \nand I am entirely convinced of my connection with him. While questioned about that connection, \nI am sure that any accusation that I do so had political motives. The argument against that connection is not supported by any of the historical documents.\n Specific examples of this may have been the original letter written by the former regent of Moldavia, \nÃtienne de Geoffroy Saint @-@ Hilaire.',
  'I’m not sure I understand why the boy is so close to his father, \nbut he is very close to his father.', 'Some things you can ask me to do, but I don’t want to do it. \nThe answer is, Well, I‘m going to do it.', 'Some things you can ask me to do in the future, but I don’t want to do it anymore. \nThe best way to do it is to do it in the future.',
  'Some things you can ask me to. \nWhy can you do anything they do minimally recognize Jaune and his row praying. \nWant?',
  'I’m not sure I understand why Olga Nikolaevna is so famous, but I know her well', 'I’m not sure I understand this… \nI had certainly heard of Kagera, and everyone around me had spoken me out. \nSo my brain just couldn’t help but giggle.',
  'Hello there is a really fine collection of different blades that we’ve come across. \nTake that for the very first time and remember that one of the blades is a ichthy number. \nWe’re writing about the blades here in Paris, and also about the magic, \nthe particular weaknesses of the hand that allows you to learn the nuances of a high blade.',
  'Hello there is nobody looking for you. \nI just asked for your name. \nI would never consider a client of',
  'Hello there , \nso let me know what I think of the fourth player in the battle of Si-Mo. \nThe other 3 players were just no good players',
  'What can I help you with? Describe some of the problems that you may be facing in your business. Let us make your business any more profitable.',
  'what can I help you with your knowledge of the art of the war, and I care for you. The war is over. The war is over. In my opinion, the war is over. The peace of mind is over. I can‘t believe that the war will end in peace. The peace of mind will end in peace. The peace will be over by the end of the year.',
  'Help you to make it better.',
  'Help you? What are you talking about?',
  'What can I help you with your worries? I can‘t help you with the details. The only way you can do it is to get rid of the fat, which is the most difficult thing to do.',
  'Interesting question. Were you a detective for a long time?',
  'Interesting question been asked in practice some have responded with a typically clear and factual reply. \nThe fact is that the question is not asked for the same reasons that others think it is, and regardless of your perspective on the matter, \nnot all types of questions are presented the same.',
  'I didn’t get that one!','I didn’t get that idea correctly. In the middle of my talk I said, oh my God…did you care who you are..' ];


let ran = null;
let infoParagraph;
let button;
let vrButton;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  infoParagraph = createP("Siri is a virtual assistant that uses voice queries, gesture-based control, focus-tracking, and a natural-language user interface to answer questions and make recommendations. In Siri’s world, they continuously learn new voices and intonations and provide conversational responses to having a better understanding of you. When you interact with Siri, the system adapts and collects users' individual language usages, searches, and preferences and forms a data world that about you.");

  infoParagraph.id('infoParagraph');

  button = createButton('Hey Siri');
  button.position(windowWidth/5, 400);
  button.size(200,100);
  button.style('font-size:40px');
  button.style('background:white');
  button.style('border-color:white');
  button.mousePressed(siriFunction);


  vrButton = createButton('Siri’s World');
  vrButton.position(windowWidth/1.5, 400);
  vrButton.size(200,100);
  vrButton.style('font-size:40px');
  vrButton.style('background:white');
  vrButton.style('border-color:white');
  vrButton.mousePressed(enterVR);
}

function siriFunction(){
  textSize(30);
    ran = int(random(answers.length));
    print(ran)
  let str = answers[ran];
  infoParagraph.html(str);
  // text(str + "",250, 100);
}

function enterVR(){
  window.open("vr.html", "_self");
}
function draw() {


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
