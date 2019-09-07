class Choices {
    private choiceList: boolean[];
    public indexOfCorrectChoice: number;

    public constructor(
        numberOfChoices: number,
    ) {
        if (numberOfChoices < 2) {
            throw new Error('Must provide more than 1 choice.');
        }

        this.choiceList = [...new Array(numberOfChoices)].map(() => false);
        this.indexOfCorrectChoice = this.generateRandomChoiceIndex();
        this.choiceList[this.indexOfCorrectChoice] = true;
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

}

export default Choices;