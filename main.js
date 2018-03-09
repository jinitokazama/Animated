var AM = new AssetManager();

function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.scale = scale;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame();
    var xindex = 0;
    var yindex = 0;
    xindex = frame % this.sheetWidth;
    yindex = Math.floor(frame / this.sheetWidth);

    ctx.drawImage(this.spriteSheet,
                 xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
                 this.frameWidth, this.frameHeight,
                 x, y,
                 this.frameWidth * this.scale,
                 this.frameHeight * this.scale);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

// no inheritance
function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
};

Background.prototype.update = function () {
};



function UltraliskEast(game, spritesheet) {
    this.animation = new Animation(spritesheet, 98, 105, 7, .1, 7, true, 2);
    this.speed = 200;
    this.ctx = game.ctx;
    Entity.call(this, game, 700, 100);
}

UltraliskEast.prototype = new Entity();
UltraliskEast.prototype.constructor = UltraliskEast;

UltraliskEast.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
    Entity.prototype.update.call(this);
}

UltraliskEast.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

function UltraliskWest(game, spritesheet) {
    this.animation = new Animation(spritesheet, 98, 105, 7, .1, 7, true, 2);
    this.speed = 200;
    this.ctx = game.ctx;
    Entity.call(this, game, 700, 100);
}

UltraliskWest.prototype = new Entity();
UltraliskWest.prototype.constructor = UltraliskWest;

UltraliskWest.prototype.update = function () {
    this.x -= this.game.clockTick * this.speed;
    if (this.x < -230) this.x = 800;
    Entity.prototype.update.call(this);
}

UltraliskWest.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

function UltraliskSouth(game, spritesheet) {
    this.animation = new Animation(spritesheet, 98, 105, 7, .1, 7, true, 2);
    this.speed = 200;
    this.ctx = game.ctx;
    Entity.call(this, game, 0, -50);
}

UltraliskSouth.prototype = new Entity();
UltraliskSouth.prototype.constructor = UltraliskSouth;

UltraliskSouth.prototype.update = function () {
    this.y += this.game.clockTick * this.speed;
    if (this.y > 750) this.y = -150;
    Entity.prototype.update.call(this);
}

UltraliskSouth.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

function UltraliskDeath(game, spritesheet) {
    this.animation = new Animation(spritesheet, 98, 105, 7, .1, 7, true, 2);
    this.ctx = game.ctx;
    Entity.call(this, game, 400, 500);
}

UltraliskDeath.prototype = new Entity();
UltraliskDeath.prototype.constructor = UltraliskDeath;

UltraliskDeath.prototype.update = function () {
    Entity.prototype.update.call(this);
}

UltraliskDeath.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

function UltraliskAttackEast(game, spritesheet) {
    this.animation = new Animation(spritesheet, 98, 105, 6, .1, 6, true, 2);
    this.ctx = game.ctx;
    Entity.call(this, game, 300, 500);
}

UltraliskAttackEast.prototype = new Entity();
UltraliskAttackEast.prototype.constructor = UltraliskAttackEast;

UltraliskAttackEast.prototype.update = function () {
    Entity.prototype.update.call(this);
}

UltraliskAttackEast.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

function UltraliskAttackWest(game, spritesheet) {
    this.animation = new Animation(spritesheet, 98, 105, 6, .1, 6, true, 2);
    this.ctx = game.ctx;
    Entity.call(this, game, 500, 500);
}

UltraliskAttackWest.prototype = new Entity();
UltraliskAttackWest.prototype.constructor = UltraliskAttackWest;

UltraliskAttackWest.prototype.update = function () {
    Entity.prototype.update.call(this);
}

UltraliskAttackWest.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

function GhostShoot(game, spritesheet) {
    this.animation = new Animation(spritesheet, 40, 36, 4, .3, 4, true, 2);
    this.ctx = game.ctx;
    Entity.call(this, game, 350, 300);
}

GhostShoot.prototype = new Entity();
GhostShoot.prototype.constructor = GhostShoot;

GhostShoot.prototype.update = function () {
    Entity.prototype.update.call(this);
}

GhostShoot.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

function GhostMissile(game, spritesheet) {
    this.animation = new Animation(spritesheet, 40, 36, 1, .1, 1, true, 2);
    this.ctx = game.ctx;
    this.speed = 180;
    Entity.call(this, game, 360, 340);
}

GhostMissile.prototype = new Entity();
GhostMissile.prototype.constructor = GhostMissile;

GhostMissile.prototype.update = function () {
    this.y += this.game.clockTick * this.speed;
    if (this.y >= 550) this.y = 340;
    Entity.prototype.update.call(this);
}

GhostMissile.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


AM.queueDownload("./ultralisk/ultraback.jpg");
AM.queueDownload("./ultralisk/ultralisk_east.png");
AM.queueDownload("./ultralisk/ultralisk_west.png");
AM.queueDownload("./ultralisk/ultralisk_south.png");
AM.queueDownload("./ultralisk/ultralisk_death.png");
AM.queueDownload("./ultralisk/ultralisk_attack_east.png");
AM.queueDownload("./ultralisk/ultralisk_attack_west.png");
AM.queueDownload("./ghost/ghost_attack.png");
AM.queueDownload("./ghost/ghost_missile.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./ultralisk/ultraback.jpg")));


    gameEngine.addEntity(new UltraliskEast(gameEngine, AM.getAsset("./ultralisk/ultralisk_east.png")));
    gameEngine.addEntity(new UltraliskWest(gameEngine, AM.getAsset("./ultralisk/ultralisk_west.png")));
    gameEngine.addEntity(new UltraliskSouth(gameEngine, AM.getAsset("./ultralisk/ultralisk_south.png")));
    gameEngine.addEntity(new UltraliskDeath(gameEngine, AM.getAsset("./ultralisk/ultralisk_death.png")));
    gameEngine.addEntity(new UltraliskAttackEast(gameEngine, AM.getAsset("./ultralisk/ultralisk_attack_east.png")));
    gameEngine.addEntity(new UltraliskAttackWest(gameEngine, AM.getAsset("./ultralisk/ultralisk_attack_west.png")));
    gameEngine.addEntity(new GhostShoot(gameEngine, AM.getAsset("./ghost/ghost_attack.png")));
    gameEngine.addEntity(new GhostMissile(gameEngine, AM.getAsset("./ghost/ghost_missile.png")));
    console.log("All Done!");
});

/*
var UltraliskEast = {
    name: "UltraliskEast",
    frameWidth: 98,
    frameHeight: 105,
    sheetWidth: 7, 
    frameDuration: 0.1,
    frames: 7,
    loop: true,
    scale: 2

};

var UltraliskWest = {
    name: "UltraliskWest",
    frameWidth: 98,
    frameHeight: 105,
    sheetWidth: 7, 
    frameDuration: 0.1,
    frames: 7,
    loop: true,
    scale: 2
};

var UltraliskSouth = {
    name: "UltraliskSouth",
    frameWidth: 98,
    frameHeight: 105,
    sheetWidth: 7, 
    frameDuration: 0.1,
    frames: 7,
    loop: true,
    scale: 2
};

var UltraliskDeath = {
    name: "UltraliskDeath",
    frameWidth: 98,
    frameHeight: 105,
    sheetWidth: 9, 
    frameDuration: 0.1,
    frames: 9,
    loop: true,
    scale: 2
};

var UltraliskAttackEast = {
    name: "UltraliskAttackEast",
    frameWidth: 98,
    frameHeight: 105,
    sheetWidth: 6, 
    frameDuration: 0.1,
    frames: 6,
    loop: true,
    scale: 2
};

var UltraliskAttackWest = {
    name: "UltraliskAttackWest",
    frameWidth: 98,
    frameHeight: 105,
    sheetWidth: 6, 
    frameDuration: 0.1,
    frames: 6,
    loop: true,
    scale: 2
};

function Unit(game, spritesheet) {
    switch (unitName) {
        case "UltraliskEast":
            this.unit = UltraliskEast;
            break;
        case "UltraliskWest":
            this.unit = UltraliskWest;
            break;
        case "UltraliskSouth":
            this.unit = South;
            break;
        case "UltraliskDeath":
            this.unit = UltraliskDeath;
            break;
        case "UltraliskAttackEast":
            this.unit = UltraliskAttackEast;
            break;
        case "UltraliskAttackWest":
            this.unit = UltraliskAttackWest;
            break;
        default:
            console.log("Problem creating ground unit");
            break;
    }      
    this.animation = new Animation(spritesheet, 98, 105, 7, .1, 7, true, 2);
    this.speed = 200;
    this.ctx = game.ctx;
    Entity.call(this, game, 0, 0);
}

*/