import Matter from "matter-js";
import { APP_CONFIG } from "../config";

export default Physics = (entities, { touches, time, dispatch }) => {

    let engine = entities.physics.engine;
    const speed = 10;
    const mass = 5;
    let colliding = false;


    if (entities.obstacle.position.x + entities.obstacle.size.width / 2 > 0) {
        entities.obstacle.position.x -= 3
    } else {
        entities.obstacle.position.x = APP_CONFIG.MAX_WIDTH - entities.obstacle.size.width
      
    }

    if (entities.player.position.y + entities.player.size.height / 2 > APP_CONFIG.GAME.floorHeight) {
        entities.player.position.y -= mass
    }


    touches.filter(t => t.type == "press").forEach(t => {
        entities.player.position.y += 100
    });



    Matter.Engine.update(engine, time.delta)


    return entities;
}