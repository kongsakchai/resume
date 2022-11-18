export const contact = {
    tel: "0990055404",
    email: "kongs.sakchai@gmail.com",
    github: "https://github.com/kongsakchai"
}

export const education = [
    {
        degree: "Bachelor Degree",
        year: "2019-Now",
        at: "King Mongkut's University of Technology Thonburi",
        description: "Computer engineering",
    },
    {
        degree: "High School",
        year: "2013-2019",
        at: "Satri Angthong School",
        description: "Science - Mathematics programs",
    },
]

export const interest = [
    "Full stack developer",
    "Frontend",
    "Backend",
    "Devops",
]

export const skill = [
    ["React", "React Native", "Next.js", "Expressjs", "SocketIO", "Tailwind", "Material-UI", "TreeJS"],
    ["Unity Engine", "NodeJS", "MySQL", "MongoDB", "Firebase", "Nginx", "Docker"],
    ["Typescript", "Javascript", "C#", "SQL", "JAVA", "C", "C++", "HTML", "CSS", "PHP", "Go"],
    ["Web application", "Mobile application", "Devops", "Game application"]
]

export interface ExperienceProps {
    topic: string,
    description: string[],
    tag: string[]
}

export const exp: ExperienceProps[] = [
    {
        topic: "Kin Rai Ma - Web application (2022)",
        description: [
            "Full stack web developer"
        ],
        tag: ["NextJs", "Firebase", "MUI", "Tailwind"]
    },
    {
        topic: "MMS - Web application (2022)",
        description: [
            "Web application about machine Maintenance system",
            "Full stack web developer"
        ],
        tag: ["NextJs", "MySQL", "MUI"]
    },
    {
        topic: "Step - Web application (2020)",
        description: [
            "Social web application",
            "Full stack web developer"
        ],
        tag: ["NextJs", "MySQL", "MUI"]
    },
    {
        topic: "Play Plern Learn Ground - Game (2017)",
        description: [
            "Multiplayer online game application",
            "Game & Backend developer"
        ],
        tag: ["Unity Engine", "NodeJs", "SocketIO", "ExpressJS", "MySQL"]
    }
]

export interface CompetitionProps {
    topic: string,
    description: string[],
}

export const competition: CompetitionProps[] = [
    {
        topic: "Magic Hack (2022)",
        description: ["The 2nd place winner in hackathon competition"]
    },
    {
        topic: "National Software Contest 24 (2022)",
        description: ["Final round of competition"]
    },
    {
        topic: "Time’s Challenge. Show Your Ability (2021)",
        description: ["Unity Certified User: Programmer", "Final round of competition"]
    },
    {
        topic: "National Software Contest 22 (2020)",
        description: ["Final round of competition"]
    },
    {
        topic: "Tokla 7th (2017)",
        description: ["1 of 14 projects was selected by SCB Foundation"]
    },
    {
        topic: "Tokla 6th (2016)",
        description: ["1 of 14 projects was selected by SCB Foundation"]
    }
]