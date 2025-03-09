interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;

}

export const questions: Question[] = [
    // A1 Level (1-10)
    {
        id: 1,
        question: "_____ is your name?",
        options: ["What", "Where", "Who", "How"],
        correctAnswer: "A",

    },
    {
        id: 2,
        question: "She _____ from Japan.",
        options: ["is", "are", "am", "be"],
        correctAnswer: "A",

    },
    {
        id: 3,
        question: "_____ there any books on the table?",
        options: ["Is", "Are", "Do", "Have"],
        correctAnswer: "B",

    },
    {
        id: 4,
        question: "I _____ coffee every morning.",
        options: ["drink", "drinks", "drinking", "drank"],
        correctAnswer: "A",

    },
    {
        id: 5,
        question: "How _____ oranges do you want?",
        options: ["much", "many", "lot", "few"],
        correctAnswer: "B",

    },
    {
        id: 6,
        question: "_____ your phone number?",
        options: ["What's", "Where's", "Who's", "How's"],
        correctAnswer: "A",

    },
    {
        id: 7,
        question: "This is _____ car.",
        options: ["my", "me", "I", "mine"],
        correctAnswer: "A",

    },
    {
        id: 8,
        question: "They _____ students.",
        options: ["is", "are", "be", "am"],
        correctAnswer: "B",

    },
    {
        id: 9,
        question: "Do you like _____ movies?",
        options: ["watch", "watching", "watches", "watched"],
        correctAnswer: "B",

    },
    {
        id: 10,
        question: "_____ old are you?",
        options: ["What", "How", "Which", "When"],
        correctAnswer: "B",

    },

    // A2 Level (11-20)
    {
        id: 11,
        question: "I _____ to the cinema last weekend.",
        options: ["go", "went", "going", "gone"],
        correctAnswer: "B",

    },
    {
        id: 12,
        question: "She _____ TV when I called.",
        options: ["watched", "watching", "was watching", "watches"],
        correctAnswer: "C",

    },
    {
        id: 13,
        question: "Have you _____ been to Paris?",
        options: ["never", "ever", "already", "yet"],
        correctAnswer: "B",

    },
    {
        id: 14,
        question: "_____ there any milk in the fridge?",
        options: ["Is", "Are", "Have", "Has"],
        correctAnswer: "A",

    },
    {
        id: 15,
        question: "I'm _____ than my sister.",
        options: ["tall", "taller", "more tall", "tallest"],
        correctAnswer: "B",

    },
    {
        id: 16,
        question: "She _____ her homework yesterday.",
        options: ["do", "did", "done", "doing"],
        correctAnswer: "B",

    },
    {
        id: 17,
        question: "_____ you like to come to my party?",
        options: ["Do", "Would", "Will", "Are"],
        correctAnswer: "B",

    },
    {
        id: 18,
        question: "I _____ play tennis every Sunday.",
        options: ["usually", "use to", "used to", "usual"],
        correctAnswer: "A",

    },
    {
        id: 19,
        question: "This book is _____ interesting _____ that one.",
        options: ["more / than", "more / as", "as / as", "so / than"],
        correctAnswer: "A",

    },
    {
        id: 20,
        question: "_____ you help me, please?",
        options: ["Can", "Should", "Would", "Will"],
        correctAnswer: "A",

    },

    // B1 Level (21-30)
    {
        id: 21,
        question: "If I _____ rich, I would travel around the world.",
        options: ["am", "were", "was", "be"],
        correctAnswer: "B",

    },
    {
        id: 22,
        question: "She has been studying English _____ 2010.",
        options: ["for", "since", "from", "in"],
        correctAnswer: "B",

    },
    {
        id: 23,
        question: "I wish I _____ more time.",
        options: ["have", "had", "having", "has"],
        correctAnswer: "B",

    },
    {
        id: 24,
        question: "By the time I arrived, they _____ left.",
        options: ["have", "had", "were", "are"],
        correctAnswer: "B",

    },
    {
        id: 25,
        question: "She suggested _____ to the cinema.",
        options: ["go", "going", "to go", "went"],
        correctAnswer: "B",

    },
    {
        id: 26,
        question: "_____ I known earlier, I would have told you.",
        options: ["Had", "Have", "If", "Would"],
        correctAnswer: "A",

    },
    {
        id: 27,
        question: "The movie was _____ boring that I fell asleep.",
        options: ["such", "so", "very", "too"],
        correctAnswer: "B",

    },
    {
        id: 28,
        question: "He _____ have missed the bus; he's usually on time.",
        options: ["must", "should", "could", "might"],
        correctAnswer: "A",

    },
    {
        id: 29,
        question: "I'd rather _____ at home than go out.",
        options: ["stay", "staying", "to stay", "stayed"],
        correctAnswer: "A",

    },
    {
        id: 30,
        question: "She _____ be very tired; she's been working all day.",
        options: ["must", "should", "could", "would"],
        correctAnswer: "A",

    },

    // B2 Level (31-40)
    {
        id: 31,
        question: "The report _____ by the deadline tomorrow.",
        options: ["will have been completed", "will be completing", "will complete", "will have completing"],
        correctAnswer: "A",

    },
    {
        id: 32,
        question: "Not only _____ late, but he also forgot the documents.",
        options: ["he was", "was he", "is he", "he is"],
        correctAnswer: "B",

    },
    {
        id: 33,
        question: "_____ having studied hard, she failed the exam.",
        options: ["Despite", "Although", "In spite of", "However"],
        correctAnswer: "A",

    },
    {
        id: 34,
        question: "I'd sooner _____ than take the bus.",
        options: ["walking", "to walk", "walk", "walked"],
        correctAnswer: "C",

    },
    {
        id: 35,
        question: "The manager _____ to have approved the project.",
        options: ["is said", "is supposed", "is believed", "is thought"],
        correctAnswer: "A",

    },
    {
        id: 36,
        question: "_____ we left earlier, we would have caught the train.",
        options: ["If", "Had", "Should", "Were"],
        correctAnswer: "B",

    },
    {
        id: 37,
        question: "She _____ have been at home when I called.",
        options: ["must", "should", "could", "might"],
        correctAnswer: "D",

    },
    {
        id: 38,
        question: "_____ the heavy rain, the match continued.",
        options: ["Despite", "Although", "However", "Nevertheless"],
        correctAnswer: "A",

    },
    {
        id: 39,
        question: "The project _____ by the team next month.",
        options: ["will finish", "will be finished", "will have finished", "will be finishing"],
        correctAnswer: "B",

    },
    {
        id: 40,
        question: "No sooner _____ home than the phone rang.",
        options: ["I had got", "had I got", "I got", "got I"],
        correctAnswer: "B",

    },

    // C1 Level (41-50)
    {
        id: 41,
        question: "Had I known about the meeting earlier, I _____ the necessary preparations.",
        options: ["would make", "would have made", "had made", "made"],
        correctAnswer: "B",
    },
    {
        id: 42,
        question: "Seldom _____ such dedication to work.",
        options: ["I have seen", "have I seen", "I saw", "did I see"],
        correctAnswer: "B",
    },
    {
        id: 43,
        question: "_____ it not been for your help, I wouldn't have succeeded.",
        options: ["Had", "Should", "Were", "Would"],
        correctAnswer: "A",
    },
    {
        id: 44,
        question: "Under no circumstances _____ the password to anyone.",
        options: ["should you give", "you should give", "should give you", "you give should"],
        correctAnswer: "A",
    },
    {
        id: 45,
        question: "Not until the end of the meeting _____ the truth.",
        options: ["I understood", "understood I", "did I understand", "I did understand"],
        correctAnswer: "C",
    },
    {
        id: 46,
        question: "_____ the weather improves, the event will be cancelled.",
        options: ["Unless", "If", "Should", "Were"],
        correctAnswer: "A",
    },
    {
        id: 47,
        question: "Little _____ that the decision would have such consequences.",
        options: ["did he know", "he knew", "knew he", "he did know"],
        correctAnswer: "A",
    },
    {
        id: 48,
        question: "_____ to arrive on time, he would have caught the flight.",
        options: ["Was he", "Had he", "Should he", "Were he"],
        correctAnswer: "B",
    },
    {
        id: 49,
        question: "The more he practiced, _____ he became.",
        options: ["the better", "the best", "the more better", "the most better"],
        correctAnswer: "A",
    },
    {
        id: 50,
        question: "Only when _____ the magnitude of the problem.",
        options: ["I arrived did I realize", "I arrived I realized", "did I arrive did I realize", "I did arrive I realized"],
        correctAnswer: "A",
    }
];