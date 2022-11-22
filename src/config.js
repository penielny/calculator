import { Dimensions } from "react-native";

export const APP_CONFIG = {
    MAX_HEIGHT: Dimensions.get("screen").height,
    MAX_WIDTH: Dimensions.get("screen").width,
    GAME: {
        gravity: 9.8,
        floorHeight: 20
    }
}