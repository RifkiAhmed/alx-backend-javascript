interface MajorCredits {
    credits: number;
    brand: string;
}

interface MinorCredits {
    credits: number;
    brand: string;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits;
}


// Example MajorCredits:
const majorCredits1: MajorCredits = {
    credits: 1500,
    brand: 'A'
}
const majorCredits2: MajorCredits = {
    credits: 1200,
    brand: 'B'
}
console.log(sumMajorCredits(majorCredits1, majorCredits2)); // -> 2700


// Example MinorCredits:
const minorCredits1: MinorCredits = {
    credits: 200,
    brand: 'E'
}
const minorCredits2: MinorCredits = {
    credits: 100,
    brand: 'F'
}
console.log(sumMajorCredits(minorCredits1, minorCredits2)); // -> 300
