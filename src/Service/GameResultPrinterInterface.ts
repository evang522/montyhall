import SetMath from "./SetMath";
import MontyHallGameConfig from "../Model/MontyHallGameConfig";

interface GameResultPrinterInterface {
    printResults(
        results: SetMath<number>,
        gameConfig: MontyHallGameConfig,
    ): void;
}

export default GameResultPrinterInterface;
