import examDatabase from "../data/exam-db.json";

export type Exam = {
  id: string;
  timestamp: string;
  "students'_name": string;
  year: string;
  term: string;
  date_of_exam: string;
  subject: string;
  evaluation: string;
  strength: string;
  "areas_of_challenges/improvements": string;
  conclusion: string;
  portfolio: string;
  email_address: string;
};

export const exams = examDatabase[0].data as unknown as Exam[];
