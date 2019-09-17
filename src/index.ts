import Choices from "./Model/Choices";
import Guesser from "./Model/Guesser";
import SetMath from "./Service/SetMath";

// Prevent process from exiting.
process.stdin.resume();



class Main {
    public ITERATIONS = 100000;
    public NUMBER_OF_CHOICES = 3;
    public IS_CLASSIC_SCENARIO = true;
    
    /**
     * @@ START HERE ----------------->
     * 
     * Above are variables you can pass in to tweak the scenario. Iterations is the amount of time the Guessers play the game.
     * Number of choices is how many choices the guessers need to choose between
     * 
     * Classic Scenario: Monty opens up every door without a prize except for two. The guesser must then choose his initial guess, or the other 
     *  remaining door. 
     * 
     * Experimental Scenario: No matter how many choices there are, Monty opens up only one non-prize door. 
     *  The Guesser then needs to randomly choose one of the remaining doors.
     * 
     * Passing IS_CLASSICAL_SCENARIO = false will set the program to Experimental mode.  
     */

    public static execute(): void
    {
        const self = new this();
        self.runGuessSimulationWithoutSwitching(self.ITERATIONS);
        self.runGuessSimulationWithSwitching(self.ITERATIONS);

    }

    public runGuessSimulationWithoutSwitching(iterations: number): void
    {
        const setMath = new SetMath<number>((num) => num);
        let count = 0;
        while (count < iterations)
        {
            const choices = new Choices(this.NUMBER_OF_CHOICES, !this.IS_CLASSIC_SCENARIO);
            const guesser = new Guesser(choices, false);
            setMath.addDataPoint(guesser.getResults());
            count++;
        }

        this.declareResults(iterations, setMath);
    }

    public runGuessSimulationWithSwitching(iterations: number): void
    {
        const setMath = new SetMath<number>((num) => num);
        let count = 0;
        while (count < iterations)
        {
            const choices = new Choices(this.NUMBER_OF_CHOICES, !this.IS_CLASSIC_SCENARIO);
            const guesser = new Guesser(choices, true);
            setMath.addDataPoint(guesser.getResults());
            count++;
        }

        this.declareResults(iterations, setMath);
    }

    private declareResults(iterations: number, setMath: SetMath<any>): void
    {
       console.log(`Ran guessing game ${iterations} times. Got the answer right ${setMath.getAverage() * 100}% of the time when deciding to SWITCH answers. ${this.IS_CLASSIC_SCENARIO ? 'Classic Scenario' : 'Experimental Scenario'}.`);
    }
}


Main.execute();