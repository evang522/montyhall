import { DoorInterface } from './DoorInterface';
class Choices {
    public doorList: DoorInterface[];
    public indexOfCorrectChoice: number;

    public constructor(
        numberOfChoices: number,
        public onlyOpenOneDoor: boolean,
    ) {
        if (numberOfChoices <= 2) {
            throw new Error('Must provide more than 1 choice.');
        }

        this.doorList = [
            ...new Array(numberOfChoices)
        ].map(() => ({open: false, randomlyVisited: false}));
        
        this.indexOfCorrectChoice = this.generateRandomDoorIndex();
    }


    public generateRandomDoorIndex(): number
    {
        return Math.floor(Math.random() * this.doorList.length);
    }

    public getIncorrectAnswerThatIsNotASpecificIndex(
        providedIndex: number
    ): number
    {
        let answer = this.indexOfCorrectChoice;
        while (answer === this.indexOfCorrectChoice || answer === providedIndex)
        {
            answer = this.generateRandomDoorIndex();
        }
        return answer;
    }

    public openAllDoorsExceptCorrectAndGuessed(
        firstGuessedDoorIndex: number
    )
    {
        let numberOfDoorsOpenedByMonty = 0;
        const limitOfDoorsToOpen = this.onlyOpenOneDoor ? 1 : (this.doorList.length - 2);

        // Loop over every single door.
        for (let c: number = 0; c < this.doorList.length; c++)
        {

            let randomDoorIndex = this.generateRandomDoorIndex();

            while (this.doorList[randomDoorIndex].randomlyVisited)
            {
                randomDoorIndex = this.generateRandomDoorIndex();
            }

            this.doorList[randomDoorIndex].randomlyVisited = true;

            if (randomDoorIndex !== this.indexOfCorrectChoice && randomDoorIndex !== firstGuessedDoorIndex){
                this.doorList[randomDoorIndex].open = true;
                numberOfDoorsOpenedByMonty++;
            } 
            
            if (numberOfDoorsOpenedByMonty >= limitOfDoorsToOpen) {
                break;
            }
        }
    }

}

export default Choices;
