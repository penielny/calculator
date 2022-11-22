import { View, Text } from 'react-native'
import React from 'react'
import { GameEngine } from 'react-native-game-engine'
import Player, { PlayerTest } from './customes/Player'
import tw from 'twrnc'
import GameLoop from '../functions/gameLoop'
import Physics from '../functions/physics'
import Obstacle, { ObstacleTest } from './customes/Obstacle'
import { APP_CONFIG } from '../config'
import Matter from 'matter-js'
import { Floor } from './customes/Floor'

export default function GameScreen({ ref,setScore,started,start }) {


    function setupEntities() {
        let matterEngine = Matter.Engine.create({ enableSleeping: false, gravity: { y: 0.4, x: 0 } });
        const matterWorld = matterEngine.world;

        let player = Matter.Bodies.rectangle(0, 0, 20, 20);
        let obstacle = Matter.Bodies.rectangle(0, 0, 20, 20)
        let ground = Matter.Bodies.rectangle(0, 0, APP_CONFIG.MAX_WIDTH, 10, { isStatic: true })

        Matter.World.add(matterWorld, [player, obstacle, ground])

        // create runner
        let runner = Matter.Runner.create();

        // // detecting collisions 
        // let collisionsDetector =  Matter.Detector.create();

        // if (Matter.Collision.collides(player, obstacle).collided !== null) {
        //     console.log("colliding");
        // }
    
    
        // run the engine
        Matter.Runner.run(runner, matterEngine);

        return {
            physics: { engine: matterEngine, world: matterWorld ,setScore:setScore },
            floor: { body: ground, position: { x: 0, y: 0 }, size: { width: APP_CONFIG.MAX_WIDTH, height: APP_CONFIG.GAME.floorHeight }, color: 'blue', renderer: <Floor /> },
            player: { body: player, position: { x: 30, y: 100 }, size: { width: 20, height: 20 }, color: 'blue', renderer: <PlayerTest /> },
            obstacle: { body: obstacle, position: { x: APP_CONFIG.MAX_WIDTH - 5, y: 10 }, size: { width: 20, height: 20 }, color: 'blue', renderer: <ObstacleTest /> },

        }
    }

    return (
        <View style={tw`flex-1 relative bg-black`}>
            <GameEngine
                ref={ref}
                entities={setupEntities()}
                running={started}
                // entities={{
                //     player: { position: { x: 0, y: 0 }, renderer: <Player /> },
                //     obstacle: { position: { x: 5, y: 0 }, renderer: <Obstacle /> }
                // }}
                systems={[Physics]}
                style={tw`flex-1 bg-black relative`}>
                {/* <View style={tw`h-10 w-4 bg-green-400 absolute bottom-0 left-4`}>

                        </View> */}
            </GameEngine>
        </View>
    )
}