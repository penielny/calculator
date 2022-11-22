import Matter from "matter-js";


const GameLoop = (entities, { touches, time }) => {
    let engine = entities.physics.engine;
    // entities.obstacle.position.x -= 0.3
    Matter.Engine.update(engine, time.delta);

    return entities;
}

export default GameLoop;