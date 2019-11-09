interface MontyHallGameConfig {
    numberOfDoorsInGame: number;
    numberOfTimesToPlayTheGame: number;
    playerDecidesToSwitch: boolean;
    montyClosesAllDoorsExcept2: boolean;
}


    /** 
     * @var montyClosesAllDoorsExcept2*
     * Differentiates between two different ways to play the game.
       In one (designated by `true`), once the user has given their first guess, Monty 
       reveals what is behind each door except the initial door the user guessed
       and one other door. In the other, Monty reveals what is behind one other door, 
       but still leaves the user with all of the original doors in the first guess 
       minus one which has been revealed. 
     * */ 




export default MontyHallGameConfig;