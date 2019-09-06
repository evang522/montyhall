import Choices from "./Model/Choices";
import Guesser from "./Model/Guesser";
import SetMath from "./Service/SetMath";

// Prevent process from exiting.
process.stdin.resume();



class Main {
    public ITERATIONS = 100000;

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
            const choices = new Choices(3);
            const guesser = new Guesser(choices, false);
            setMath.addDataPoint(guesser.getResults());
            count++;
        }

        console.log(`Ran guessing game ${iterations} times. Got the answer right ${setMath.getAverage() * 100}% of the time when deciding NOT to switch answers.`);
    }

    public runGuessSimulationWithSwitching(iterations: number): void
    {
        const setMath = new SetMath<number>((num) => num);
        let count = 0;
        while (count < iterations)
        {
            const choices = new Choices(3);
            const guesser = new Guesser(choices, true);
            setMath.addDataPoint(guesser.getResults());
            count++;
        }

        console.log(`Ran guessing game ${iterations} times. Got the answer right ${setMath.getAverage() * 100}% of the time when deciding to SWITCH answers.`);
    }
}


Main.execute();