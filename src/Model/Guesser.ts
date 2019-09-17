import Choices from "./Choices";

class Guesser {
    private initialGuessDoorIndex: number | null = null;
    private finalAnswerDoorIndex: number | null = null;
    
    public constructor (
        public choices: Choices,
        private switchAnswers: boolean,
    ) {}
    
    public makeFirstGuess(): void 
    {
        // Make a random guess amongst the options available.
        this.initialGuessDoorIndex = this.choices.generateRandomDoorIndex();
    }

    public makeSecondGuess(): void
    {
        if (!this.switchAnswers)
        {
            this.finalAnswerDoorIndex = this.initialGuessDoorIndex;
            return;
        }
        
        this.choices.openAllDoorsExceptCorrectAndGuessed(this.initialGuessDoorIndex!);
        
        let newAnswerDoorIndex = 0;
        while (newAnswerDoorIndex === this.initialGuessDoorIndex ||  this.choices.doorList[newAnswerDoorIndex].open === true)
        {
            newAnswerDoorIndex = this.choices.generateRandomDoorIndex();
        }
        
        this.finalAnswerDoorIndex = newAnswerDoorIndex;
    }

    public getResults(): number
    {
        this.makeFirstGuess();
        this.makeSecondGuess();
        if (this.finalAnswerDoorIndex === this.choices.indexOfCorrectChoice)
        {
            return 1;
        }
        return 0;
    }
}

export default Guesser;