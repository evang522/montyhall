<?php

namespace Project;

require_once __DIR__ . '/Choices.php';

class Guesser
{
    /** @var number|null */
    private $initialGuess = null;

    /** @var number|null */
    private $finalAnswer = null;

    /** @var Choices */
    private $choices;

    /** @var bool */
    private $switchAnswers;

    public function __construct(Choices $choices, bool $switchAnswers)
    {
        $this->choices = $choices;
        $this->switchAnswers = $switchAnswers;
    }

    public function makeFirstGuess(): void
    {
        $this->initialGuess = $this->choices->generateRandomDoorIndex();
    }

    public function makeSecondGuess(): void
    {
        if ($this->switchAnswers === false) {
            $this->finalAnswer = $this->initialGuess;
            return;
        }

        $revealIncorrectAnswer = $this->choices->getIncorrectAnswerThatIsNotIndex($this->initialGuess);

        $newAnswer = $this->initialGuess;
        while ($newAnswer === $this->initialGuess || $newAnswer === $revealIncorrectAnswer) {
            $newAnswer = $this->choices->generateRandomDoorIndex();
        }

        $this->finalAnswer = $newAnswer;
    }

    public function getResults(): int
    {
        $this->makeFirstGuess();
        $this->makeSecondGuess();
        
        if ($this->finalAnswer === $this->choices->indexOfCorrectChoice) {
            return 1;
        }

        return 0;
    }
}
