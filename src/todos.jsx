
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function QuestionForm({ onAddQuestion }) {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [correctOption, setCorrectOption] = useState("1");

  const handleAdd = () => {
    if (!question || !option1 || !option2 || !option3) return;
    onAddQuestion({
      question,
      options: [option1, option2, option3],
      correctOption: parseInt(correctOption),
    });
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setCorrectOption("1");
  };

  return (
    <div className="p-4 space-y-4 max-w-xl mx-auto">
      <input
        className="w-full p-2 border rounded"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Option 1"
        value={option1}
        onChange={(e) => setOption1(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Option 2"
        value={option2}
        onChange={(e) => setOption2(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Option 3"
        value={option3}
        onChange={(e) => setOption3(e.target.value)}
      />
      <select
        className="w-full p-2 border rounded"
        value={correctOption}
        onChange={(e) => setCorrectOption(e.target.value)}
      >
        <option value="1">Correct Option: 1</option>
        <option value="2">Correct Option: 2</option>
        <option value="3">Correct Option: 3</option>
      </select>
      <Button onClick={handleAdd}>Add Question</Button>
    </div>
  );
}

function QuestionList({ questions }) {
  return (
    <div className="p-4 space-y-4 max-w-xl mx-auto">
      {questions.map((q, index) => (
        <div key={index} className="p-4 border rounded shadow">
          <h3 className="font-semibold">{q.question}</h3>
          <ul className="list-disc pl-5">
            {q.options.map((opt, i) => (
              <li key={i} className={i + 1 === q.correctOption ? "font-bold text-green-600" : ""}>
                {opt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <QuestionForm onAddQuestion={addQuestion} />
      <QuestionList questions={questions} />
    </div>
  );
}
export default App