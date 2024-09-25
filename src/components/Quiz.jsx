// src/components/Quiz.js
import React from 'react';
import { useParams } from 'react-router-dom';
import questions from '../data/questions';

const Quiz = () => {
  const { courseId } = useParams(); // Get the course ID from the URL
  let courseQuestions = [];

  // Map courseId to course names
  const courseMap = {
    '1': 'cloud_Computing',
    '2': 'Database',
    '3': 'Frontend',
    '4': 'Cryptography',
  };

  // Get the questions based on the courseId
  if (courseMap[courseId]) {
    courseQuestions = questions[courseMap[courseId]];
  }
  console.log('Course ID:', courseId);
console.log('Course Questions:', courseQuestions);

if (!courseQuestions || courseQuestions.length === 0) {
  return <p>No questions available for this course.</p>;
}

  return (
    <div className="p-4 text-[#c40094] pt-10  bg-black min-h-screen h-fit">
      <div className='border rounded border-[#c40094] p-4  h-fit'>
      <div className='flex flex-col items-center'>
      <h2 className="text-2xl flex flex-col w-96 text-white justify-center mb-10 px-9 py-2 items-center  font-bold " style={{ background: 'linear-gradient(45deg, transparent, #c40094, transparent)' }}>Quiz for {courseMap[courseId]}</h2>
      </div>
      <form>
        {courseQuestions.map((q) => (
          <div key={q.id} className="mb-4 px-10 mt-6">
            <p className="font-semibold text-white mb-2 text-xl"  >{q.question}</p>
            <div className="flex flex-col">
              {q.options.map((option, index) => (
                <label key={index} className="inline-flex items-center active:text-[#c40094] hover:text-white checked:text-[#c40094] text-gray-400">
                  <input
                    type="radio"
                    name={q.id}
                    value={option}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className='flex flex-col items-center'>
        <button type="submit" className="px-10 font-bold py-2 w-full bg-[#c40094] border-3px border border-[#fff] text-white text-center rounded-md shadow-md block sm:w-auto" >
          Submit
        </button>
        </div>

      </form>

      </div>
      
    </div>
  );
};

export default Quiz;
