import MontyHallGameSet from './Model/MontyHallGameSet';


class Main {
    public static execute(): void {
        this.takeCareOfSomeUnimportantPrepWork();

        /**
         * @ Create the Different Monty Hall Game Scenarios.
         */

         /* In this game, the player decides NOT 
            to switch to another door when Monty asks
         */
        const gameSetWithoutSwitching = new MontyHallGameSet({
            playerDecidesToSwitch: false,
            numberOfTimesToPlayTheGame: 10000,
            numberOfDoorsInGame: 3,
            montyClosesAllDoorsExcept2: true,
        });


        // In this game, the player decides TO switch when Monty asks.
        const gameSetWithSwitching = new MontyHallGameSet({
            playerDecidesToSwitch: true,
            numberOfTimesToPlayTheGame: 10000,
            numberOfDoorsInGame: 3,
            montyClosesAllDoorsExcept2: true,
        });

        /**
         * Run the games
         */
        gameSetWithoutSwitching.playAndGetResults();
        gameSetWithSwitching.playAndGetResults();

    }

    public static takeCareOfSomeUnimportantPrepWork(): void
    {
        // Prevent process from exiting.
        process.stdin.resume();

        // Clear the console so debug messages aren't distracting
        console.clear();

        // Provide a timestamp so it's clear the game is being re-run each time.
        console.log('Ran at: ' + new Date().toLocaleString());
    }
}

Main.execute();