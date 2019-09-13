<?php

namespace Project;

include './Service/SetMath.php';
include './Model/Choices.php';
include './Model/Guesser.php';

class Main
{
    public const ITERATIONS = 1000000;
    public const NUMBER_OF_CHOICES = 3;

    public static function execute(): void
    {
        $set = new SetMath();
        self::runGuessSimulationWithoutSwitching(self::ITERATIONS);
        self::runGuessSimulationWithSwitching(self::ITERATIONS);
    }


    public function runGuessSimulationWithoutSwitching(int $iterations): void
    {
        $set = new SetMath;
        $count = 0;

        while ($count < $iterations) {
            $choices = new Choices(self::NUMBER_OF_CHOICES);
            $guesser = new Guesser($choices, false);
            $set->addDataPoint($guesser->getResults());
            $count++;
        }
        echo "\r\n";
        echo 'Without Switching: ' . $set->getAverage();
    }


    public function runGuessSimulationWithSwitching(int $iterations): void
    {
        $set = new SetMath;
        $count = 0;

        while ($count < $iterations) {
            $choices = new Choices(self::NUMBER_OF_CHOICES);
            $guesser = new Guesser($choices, true);
            $set->addDataPoint($guesser->getResults());
            $count++;
        }
        echo "\r\n";
        echo 'With Switching: ' . $set->getAverage();
    }
}


Main::execute();
