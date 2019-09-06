import Choices from "./Choices";

class Guesser {
    private initialGuess: number | null = null;
    private finalAnswer: number | null = null;
    
    public constructor (
        private choices: Choices,
        private switchAnswers: boolean,
    ) {}
    
    public makeFirstGuess(): void 
    {
        // Make a random guess amongst the options available.
        this.initialGuess = this.choices.generateRandomChoiceIndex();
    }

    public makeSecondGuess(): void
    {
        // now that you have made a guess, another of the doors needs to be opened to reveal that it is not the correct answer
        // so for example if you chose index 1, then index 3 would have to be revealed as the next incorrect answer. 
        // Then, if a switch guesser, switch.
        if (!this.switchAnswers)
        {
            this.finalAnswer = this.initialGuess;
            return;
        }
        
        const revealedIncorrectAnswer = this.choices
            .getIncorrectAnswerThatIsNotASpecificIndex(this.initialGuess!);

        let newAnswer = this.initialGuess;
        while (newAnswer === this.initialGuess || newAnswer === revealedIncorrectAnswer)
        {
            newAnswer = this.choices.generateRandomChoiceIndex();
        }
        
        this.finalAnswer = newAnswer;
    }

    public getResults(): number
    {
        this.makeFirstGuess();
        this.makeSecondGuess();
        if (this.finalAnswer === this.choices.indexOfCorrectChoice)
        {
            return 1;
        }
        return 0;
    }
}

export default Guesser;