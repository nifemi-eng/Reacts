// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <> 
      
//       <div className="card">
//         <button className="bg-green-200 font-800  " onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//      </div>
//     </>
//   )
// }

// export default App

// import  { useState,useEffect } from "react";
// import Button from "./Button";
// // import showTodos from "./showTodos";
// function App () {
//   const[Todos ,setTodos]=useState("")
//   const[arrayTodos ,setArrayTodos]=useState([{}])
//   const[button,setButton]=useState("")

//   const handlebtn=()=>{

// setarrayTodos([...arrayTodos, { Todo: Todos }]);
//   console.log(arrayTodos)

//   }
  
// return(
//   // <div className='flex justify-center mt-[100px]'>
//     <div className='bg-blue-200 p-5 rounded-2xl border-4-blue-490 space-y-5'>
//       <h3 className='text-lg text-center text-bold'>MY TODOS APP</h3>
//      <input value={Todos} onChange={(e)=>setTodos(e.target.value)} placeholder="add your todos"/>
//      <button handlebtn={handlebtn}>add question</button>
//      <div>
//       <showTodos arrayTodos={arrayTodos}/>
//            </div>
//     </div>
//   // </div>
// )
// }
// export default App;
// App.jsx
// import SignUp from './SignUp';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <SignUp />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import  Button  from "./Button";

// function QuestionForm({ onAddQuestion }) {
//   const [question, setQuestion] = useState("");
//   const [option1, setOption1] = useState("");
//   const [option2, setOption2] = useState("");
//   const [option3, setOption3] = useState("");
//   const [correctOption, setCorrectOption] = useState("1");

//   const handleAdd = () => {
//     if (!question || !option1 || !option2 || !option3) return;
//     onAddQuestion({
//       question,
//       options: [option1, option2, option3],
//       correctOption: parseInt(correctOption),
//     });
//     setQuestion("");
//     setOption1("");
//     setOption2("");
//     setOption3("");
//     setCorrectOption("1");
//   };

//   return (
//     <div className="p-4 space-y-4 max-w-xl mx-auto">
//       <input
//         className="w-full p-2 border rounded"
//         placeholder="Enter your question"
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//       />
//       <input
//         className="w-full p-2 border rounded"
//         placeholder="Option 1"
//         value={option1}
//         onChange={(e) => setOption1(e.target.value)}
//       />
//       <input
//         className="w-full p-2 border rounded"
//         placeholder="Option 2"
//         value={option2}
//         onChange={(e) => setOption2(e.target.value)}
//       />
//       <input
//         className="w-full p-2 border rounded"
//         placeholder="Option 3"
//         value={option3}
//         onChange={(e) => setOption3(e.target.value)}
//       />
//       <select
//         className="w-full p-2 border rounded"
//         value={correctOption}
//         onChange={(e) => setCorrectOption(e.target.value)}
//       >
//         <option value="1">Correct Option: 1</option>
//         <option value="2">Correct Option: 2</option>
//         <option value="3">Correct Option: 3</option>
//       </select>
//       <Button onClick={handleAdd}>Add Question</Button>
//     </div>
//   );
// }

// function QuestionList({ questions }) {
//   return (
//     <div className="p-4 space-y-4 max-w-xl mx-auto">
//       {questions.map((q, index) => (
//         <div key={index} className="p-4 border rounded shadow">
//           <h3 className="font-semibold">{q.question}</h3>
//           <ul className="list-disc pl-5">
//             {q.options.map((opt, i) => (
//               <li key={i} className={i + 1 === q.correctOption ? "font-bold text-green-600" : ""}>
//                 {opt}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   const [questions, setQuestions] = useState([]);

//   const addQuestion = (question) => {
//     setQuestions([...questions, question]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-10">
//       <QuestionForm onAddQuestion={addQuestion} />
//       <QuestionList questions={questions} />
//     </div>
//   );
// }
// export default App

import React from 'react'
import{Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
     <Route index element={<Home/>} />
     <Route/>

      </Routes>
    </div>
  )
}

export default App
