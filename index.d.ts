// 1. Interfaces
interface factType{
    all: string,
    emoji: string,
    space: string,
    cat: string,
    dog: string,
    covid: string,
    computer: string,
    food: string
}

// 2. Version
export const version: string;

// 3. Fact()
export function fact(): factType;

// 4. Nasa()
export function nasa(): string;
