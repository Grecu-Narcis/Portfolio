export type Award = {
    year: number,
    position: string,
    contest: string,
    domain: string
}

let awards: Award[] = [
    {
        year: 2023,
        position: "2nd place",
        contest: "Modeling x86 Architecture - IT Marathon National Contest",
        domain: "Computer Science"
    },
    {
        year: 2022,
        position: "3rd place",
        contest: "County Olympiad",
        domain: "Mathematics"
    },
    {
        year: 2020,
        position: "1st place",
        contest: "County Olympiad",
        domain: "Computer Science"
    },
    {
        year: 2019,
        position: "participant",
        contest: "\"Urmașii lui Moisil\" National Contest",
        domain: "Computer Science"
    }
]

export default awards