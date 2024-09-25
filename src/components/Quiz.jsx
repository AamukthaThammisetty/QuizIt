// src/components/Quiz.js
import React from 'react';
import { useParams } from 'react-router-dom';
import questions from '../data/questions';

const Quiz = () => {
  const { courseId } = useParams(); // Get the course ID from the URL
  let courseQuestions = [];

  // Map courseId to course names
  const courseMap = {
    '1': 'cloudComputing',
    '2': 'database',
    '3': 'frontend',
    '4': 'cryptography',
  };

  // Get the questions based on the courseId
  if (courseMap[courseId]) {
    courseQuestions = questions[courseMap[courseId]];
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Quiz for {courseMap[courseId]}</h2>
      <form>
        {courseQuestions.map((q) => (
          <div key={q.id} className="mb-4">
            <p className="font-semibold">{q.question}</p>
            <div className="flex flex-col">
              {q.options.map((option, index) => (
                <label key={index} className="inline-flex items-center">
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
        <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Quiz;
