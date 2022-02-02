export type QuestionType = {
  id: number;
  question: string;
  answer: string;
};

export const questions: QuestionType[] = [
  {
    id: 1,
    question: "What song is playing at the beginning of Iron Man (2008)?",
    answer: '"Back in Black" by AC/DC',
  },
  {
    id: 2,
    question: "What elective class did Thor take on Asgard?",
    answer: "Speaking Groot",
  },
];
