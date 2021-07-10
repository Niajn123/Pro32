const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground;
var ball, ball1, ball2;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(500,390,700,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    var ball1_options ={
        restitution: 1.0
    }

    var ball2_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    ball1 = Bodies.circle(400,100,20, ball1_options);
    World.add(world,ball1);

    ball2 = Bodies.circle(600,100,20, ball1_options);
    World.add(world,ball1);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1000,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    ellipse(ball1.position.x, ball1.position.y, 20, 20);
    ellipse(ball2.position.x, ball1.position.y, 20, 20);

}