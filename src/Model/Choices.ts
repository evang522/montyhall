class Choices {
    private choiceList: boolean[];
    public indexOfCorrectChoice: number;

    public constructor(
        numberOfChoices: number,
    ) {
        if (numberOfChoices < 2) {
            throw new Error('Must provide more than 1 choice.');
        }

        this.choiceList = [...new Array(numberOfChoices)].map(() => true);
        this.indexOfCorrectChoice = this.generateRandomChoiceIndex();
    }


    public generateRandomChoiceIndex(): number
    {
        return Math.floor(Math.random() * this.choiceList.length);
    }

    public getIncorrectAnswerThatIsNotASpecificIndex(providedIndex: number): number
    {
        let answer = this.indexOfCorrectChoice;
        while (answer === this.indexOfCorrectChoice || answer === providedIndex)
        {
            answer = this.generateRandomChoiceIndex();
        }
        return answer;
    }

    public openAllDoorsExceptCorrectAndGuessed(firstGuessedDoorIndex: number)
    {
        let counter = 0;
        for (let c: number = 0; c < this.choiceList.length; c++)
        {
            if (c === this.indexOfCorrectChoice)
            {
                return;
            }

            if (c === firstGuessedDoorIndex)
            {
                return;
            }

            if (counter <= (this.choiceList.length - 2))
            {
                this.choiceList[c] = false;
                counter++;
            }
        }
    }

}

export default Choices;