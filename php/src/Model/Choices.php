<?php

declare(strict_types=1);

namespace Project;

class Choices
{
    /** @var bool[] */
    private $choiceList;
    
    /** @var int */
    public $indexOfCorrectChoice;

    public function __construct(int $numberOfChoices)
    {
        $this->choiceList = array_fill(0, $numberOfChoices, false);
        $this->indexOfCorrectChoice = $this->generateRandomDoorIndex();
    }

    public function generateRandomDoorIndex(): int
    {
        return rand(0, (count($this->choiceList) - 1));
    }
    
    public function getIncorrectAnswerThatIsNotIndex(int $providedIndex): int
    {
        $answer = $this->indexOfCorrectChoice;
        while ($answer == $this->indexOfCorrectChoice || $answer == $providedIndex) {
            $answer = $this->generateRandomDoorIndex();
        }
        return $answer;
    }
}
