<?php

namespace Project;

class SetMath
{
    /**
     * @var int[]
     */
    private $dataSet;

    public function __construct()
    {
        $this->dataSet = [];
    }

    public function addDataPoint(int $point): void
    {
        $this->dataSet[] = $point;
    }

    public function getAverage(): float
    {
        return (array_sum($this->dataSet) / count($this->dataSet));
    }
}
