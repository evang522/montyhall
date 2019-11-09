class GameSetupError extends Error {
    public constructor(errorExplanation: string)
    {
        super(`Game Configuration Error: ${errorExplanation}`);
    }
};
