/// boilerplate code for the cylon.js library

// imports Cylon library
var Cylon = require('cylon');
// looks for Cylon library - need to run package.json (right click)
var ws = require('nodejs-websocket');
var bot;

// Initialise the robot(s)
Cylon.robot()
    // create a new connection to the AR drone
    .connection("ardrone", {
        adaptor: 'ardrone',
        // AR drone creates a wifi network, can be found at the given address
        port: '192.168.1.1'
    })
    // create a new device called drone which you can use later to make the device fly
    .device("drone", {
        // driver is called ardrone, part of the cylon.js - talks to the drone
        driver: "ardrone",
        // driver uses previously declared ardrone connection to talk to it
        connection: "ardrone"
    })

    /// adding another drone device
    .device("nav", {
        // uses ardrone-nav module
        driver: "ardrone-nav",
        // both devices use same connection "connection" as they communicate with drone
        connection: "ardone"
    })
    // ready to fly
    .on("ready", fly);
    
// Fly the bot
function fly(robot) {

}

// declares new global  variable "bot" - placeholder for properties of the drone device
var bot;

/// Fly the bot

// Robot is the drone we control
function fly(robot) {
    // initialise global variable "bot" to argument "robot" of function fly()
    bot = robot;
    // disable emergency before starting
    robot.drone.disableEmergency();
    // tell drone it is lying flat on ground
    robot.drone.ftrim;
    // take off
    robot.drone.takeoff();
    //2 seconds after .takeoff
    after(2*1000, function(){
        //argument takes a number from 0 to 1 to indicate power
        bot.drone.up(0.1)

    })
    //2 seconds after 1st instance of after
    after(2*1000, function(){
        bot.drone.land();
    });
    after()
    //// land after 10 seconds
    //after(10*1000, function() {
    //    robot.drone.land();
    //});
    //after(15*1000, function() {
    //    robot.drone.stop();
    });
}



/// receive drone navigation
bot.nav.on("navdata", function(data){
    console.log(data);
});

// Starts Cylon, to communicate with the drone
Cylon.start();





