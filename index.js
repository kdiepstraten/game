// First while loop. Begin game.
while (true) {

    let darkroom = prompt("You wake up in a dark room. After looking around you see a window. It is shut down with planks. Next to it is a door. The door is locked. What do you do?").toLowerCase();

    switch (true) {
        case darkroom.includes("Look for key"):
        case darkroom.includes("key"):
        case darkroom.includes("look"):
        case darkroom.includes("search"):
        case darkroom.includes("find"):
            console.log("You found a key on the floor and you open the door");
            break;
        case darkroom.includes("Try to break window"):
        case darkroom.includes("break window"):
        case darkroom.includes("shatter glass"):
        case darkroom.includes("shatter window"):
        case darkroom.includes("throw in window"):
        case darkroom.includes("window"):
        case darkroom.includes("glass"):
            console.log("The window doesnt give. Try something else");
            break;
        case darkroom.includes("Try to break door"):
        case darkroom.includes("break door down"):
        case darkroom.includes("break door"):
        case darkroom.includes("door"):
        case darkroom.includes("break the door"):
        case darkroom.includes("break open"):
        case darkroom.includes("pry open"):
            console.log("The door doesn't give. Try something else")
            break;
        default:
            console.log("Try something else")
    }
    if (darkroom.includes("key") || darkroom.includes("look") || darkroom.includes("find") || darkroom.includes("search")) {
        break;
    }
}

//Second loop. Woods.
while (true) {

    let woods = prompt("The door opens and you step outside. You smell the fresh air and notice you are outside. You find yourself in a thick forest. The sunlight shines through the trees and the wind blows a soft breeze. In front of you is a path. What will you do?").toLowerCase();

    switch (true) {
        case woods.includes("path"):
        case woods.includes("follow"):
        case woods.includes("down"):
            console.log("You walk down the path and end up in a clearing");
            break;
        case woods.includes("away"):
        case woods.includes("trees"):
        case woods.includes("forest"):
            console.log("You hear a bear growl and run back to the path");
            break;
        case woods.includes("back"):
        case woods.includes("inside"):
        case woods.includes("door"):
        case woods.includes("lock"):
        case woods.includes("key"):
            console.log("The door is locked and you left the key inside the lock on the other side. You decide to walk the path");
            break;
        default:
            console.log("Invalid. Try again.");
    }
    if (woods.includes("path") || woods.includes("lock") || woods.includes("follow")) {
        break;
    }
}

//Third loop. Stag.
while (true) {

    let stag = prompt("In the clearing you see a white door frame with a door. The door is closed. No building or walls just the door. Next to is stands a stag and it looks at you. It does not seemed to be scared at all. It’s just patiently waiting. What will you do?").toLowerCase();

    switch (true) {
        case stag.includes("open"):
        case stag.includes("door"):
        case stag.includes("door frame"):
        case stag.includes("break down"):
        case stag.includes("break"):
            console.log("Are you sure you want to do that? The stag says");
            break;
        case stag.includes("back"):
        case stag.includes("turn"):
            console.log("You hear another GRRRR so you turn around and face the door again.");
            break;
        case stag.includes("attack"):
        case stag.includes("harm"):
        case stag.includes("kill"):
            console.log("The stag raises its antlers and attacks you. One antler pierce your lung and heart and you bleed to death. Game over.");
            break;
        case stag.includes("pet"):
        case stag.includes("stroke"):
        case stag.includes("hug"):
            console.log("Awhh that is nice! The stag says");
            break;
        default:
            console.log("No silly. Try again.")

    }
    if (stag.includes("door") || stag.includes("attack") || stag.includes("kill") || stag.includes("pet") || stag.includes("hug")) {
        break;
    }
}

//Loop four. Conversation Stag
while (true) {

    let talkStag = prompt("Surprised that the stag is talking to you, you jump back. No need to fear me, the stag says. My name is Hjort. I’ve been here for over more then 400 years. In those years I have never met anybody in this forest. What will you do? * maybe greet him").toLowerCase();

    switch (true) {
        case talkStag.includes("lonely"):
            console.log("yes it does but you get used to it after a while. Let me tell you what is behind the door");
            break;
        case talkStag.includes("hello"):
        case talkStag.includes("meet"):
        case talkStag.includes("nice"):
        case talkStag.includes("hjort"):
        case talkStag.includes("ok"):
        case talkStag.includes("talk"):
            console.log("Good to finally meet someone. I guess you have many questions. Lets start with what’s behind this door.")
            break;
        case talkStag.includes("fuck"):
        case talkStag.includes("weird"):
        case talkStag.includes("dumb"):
        case talkStag.includes("hate"):
        case talkStag.includes("die"):
        case talkStag.includes("kill"):
        case talkStag.includes("stupid"):
            console.log("I will not be insulted! Try that again or ill make you regret coming here!");
            break;
        case talkStag.includes("walk"):
        case talkStag.includes("away"):
        case talkStag.includes("run"):
            console.log("you walk into the forest and get attack by a bear. Game over.")
            break;
        default:
            console.log("Nope. Try again.")
    }
    if (talkStag.includes("lonely") || talkStag.includes("hello") || talkStag.includes("ok") || talkStag.includes("meet") || talkStag.includes("walk") || talkStag.includes("away") || talkStag.includes("run")) {
        break;
    }
}

//Loop 5. Worthy
while (true) {

    let worthy = prompt("This door lead you to another world, Hjort said. It’s a world full of wonder and magic. I am from there. My leaders stationed me here to guard the gateway between our worlds. I have orders to let nobody pass who is not worthy. Do you think you are worthy to pass?").toLowerCase();

    switch (true) {
        case worthy.includes("yes"):
        case worthy.includes("maybe"):
            console.log("Let's see. Let me explain how this works.");
            break;
        case worthy.includes("no"):
            console.log("Then let’s hang out here for a while before you need to go home, Hjort said smiling.")
            break;
    }
    if (worthy.includes("yes") || worthy.includes("maybe")) {
        break;
    }
}

// 6. Riddle


let riddle = prompt("I am going to give you a riddle. If you pass you can go to the next round. If you fail then I will attack you. If you choose not to answer ill let you walk away. Here is the riddle:\n" +
    "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?\n").toLowerCase();

switch (true) {
    case riddle.includes("echo"):
        console.log("Very well! Let's move on to the next round");
        break;
    case riddle.includes("not"):
    case riddle.includes("walk"):
    case riddle.includes("away"):
    case riddle.includes("no"):
        console.log("Then have a safe travel home.");
        break;
    default:
        console.log("Hjort attacks. His antler goes right through your eye into your brain. It is a swift death. Game over");
}
// 7. second round
while (true) {
    let secondRound = prompt("What will you do when you pass and ill let you go to the other side?").toLowerCase();

    switch (true) {
        case secondRound.includes("friends"):
        case secondRound.includes("people"):
        case secondRound.includes("family"):
            console.log("How can I not let you go then! You have my blessing. The door opens.");
            break;
        case secondRound.includes("rule"):
        case secondRound.includes("king"):
        case secondRound.includes("queen"):
            console.log("We already have a king so I don’t think this is going to work out. Have a safe trip home.");
            break;
        case secondRound.includes("burn"):
        case secondRound.includes("over"):
        case secondRound.includes("destroy"):
            console.log("Why would you do that?! That’s horrible! Hjort attacks game over.");
            break;
        case secondRound.includes("find"):
        case secondRound.includes("way"):
        case secondRound.includes("home"):
        case secondRound.includes("new home"):
        case secondRound.includes("belong"):
            console.log("well you do not look like you come from earth so I hope you will find your home. The door opens.");
            break;
        default:
            console.log("Try again.")
    }
    if (secondRound.includes("friends") || secondRound.includes("people") || secondRound.includes("family") || secondRound.includes("burn") || secondRound.includes("over") || secondRound.includes("destroy") || secondRound.includes("find") || secondRound.includes("home") || secondRound.includes("belong")) {
        break;
    }
}

