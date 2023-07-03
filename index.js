let darkroom = "";
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
    if (darkroom.includes("key")) {
        break;
    }
}

let woods = "";
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
    if (woods.includes("path")) {
        break;
    }
}