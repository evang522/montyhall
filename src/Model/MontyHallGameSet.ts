import Choices from './Choices';
import Guesser from './Guesser';
import SetMath from '../Service/SetMath';
import MontyHallGameConfig from './MontyHallGameConfig';
import GameResultPrinterInterface from '../Service/GameResultPrinterInterface';
import GameResultPrinter from '../Service/GameResultPrinter';

/**
 * @description This consists of a series of Monty Hall Guessing sessions
 * in order to calculate an average of how often the player won the Goat.
 */
class MontyHallGameSet {
    public constructor(
        private gameConfig: MontyHallGameConfig,
        private resultPrinter: GameResultPrinterInterface = new GameResultPrinter(),
    )
    {
        this.verifyPassedConfigurations();
    }

    public playAndGetResults(): void
    {
        const setMath = new SetMath<number>((num) => num);
        let count = 0;
        while (count < this.gameConfig.numberOfTimesToPlayTheGame)
        {
            const choices = new Choices(
                this.gameConfig.numberOfDoorsInGame,
                !this.gameConfig.montyClosesAllDoorsExcept2,
            );
            const guesser = new Guesser(choices, this.gameConfig.playerDecidesToSwitch);
            setMath.addDataPoint(guesser.getResults());
            count++;
        }

        this.resultPrinter.printResults(setMath, this.gameConfig);
    }

    private verifyPassedConfigurations(): void
    {
        if (this.gameConfig.numberOfDoorsInGame < 3) 
        {
            throw new GameSetupError('The game doesn\'t work if it has less than 3 doors');
        }
    }   
}

export default MontyHallGameSet;