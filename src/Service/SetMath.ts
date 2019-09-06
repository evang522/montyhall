class SetMath<DataStructure> {
    private dataSet: DataStructure[] = [];
    constructor(
        private dataAccessSpecification: (dataEntity: DataStructure) =>  number,
    ) {
    }

    public addDataPoint(point: DataStructure)
    {
        this.dataSet.push(point);
    }

    public getAverage(): number
    {
        const total = this.dataSet.reduce(
            (accumulator: number, currentDataPoint) => {
                accumulator += this.dataAccessSpecification(currentDataPoint);
                return accumulator;
        }, 0)

        return Number((total / this.dataSet.length).toFixed(5));
    }
}

export default SetMath;