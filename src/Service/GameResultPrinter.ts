import SetMath from './SetMath';
import GameResultPrinterInterface from './GameResultPrinterInterface';
import colors from 'colors';
import MontyHallGameConfig from '../Model/MontyHallGameConfig';
import { format } from 'path';


class GameResultPrinter implements GameResultPrinterInterface
{
    public printResults(
        results: SetMath<number>,
        gameConfig: MontyHallGameConfig
    ): void {
        console.log('\n');
        console.log(colors.bgYellow.black.bold(`Contestant who did ${gameConfig.playerDecidesToSwitch ? '' : 'not '}Switch Doors: `) + colors.white(` (With ${gameConfig.numberOfDoorsInGame} doors to choose from)`));
        console.log(colors.green(`The contestant played the Monty Hall Game ${results.getDataPointCount()} times and won the car ${colors.bgWhite.black.underline(' ' +(results.getAverage() * 100).toFixed(2) + '% ')} of the time.`))
    }
}


export default GameResultPrinter;