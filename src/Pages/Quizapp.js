import React, { useEffect } from "react";
import { useState } from "react";
import "..//../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

export default function Quizapp() {

  const [Question, setQuestion] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const resetQuiz = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  };

useEffect(() => {
  const data =  useSelector((a)=> a)
 setQuestion(data)
}, [])



  return (
    <>
      {showScore ? (
        <>
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>
              You Scored {score}/{Question.length}
            </h1>

            <button
              style={{
                border: "1px solid skyblue",
                padding: "10px",
                borderRadius: "10px",
                width: "10%",
              }}
              onClick={resetQuiz}
            >
              Reset
            </button>
          </div>
        </>
      ) : (
        <div
          style={{
            margin: "100px",
            background: "skyblue",
            borderRadius: "10px",
            width: "100%",
            height: "500px",
          }}
          className="container"
        >
          <div className="row">
            <div className="col md  6 dt">
              <div className="child">
                <p>
                  {currentQuestion + 1}/{Question.length}
                </p>

                <h1>{Question[currentQuestion].questionText}</h1>
              </div>
            </div>
            <div className="col md  6 ">
              <div className="child">
                {Question[currentQuestion].answerOptions.map(
                  (answerOptions) => (
                    <>
                      <button
                        className="call"
                        onClick={(isCorrect) =>
                          handleButtonClick(answerOptions.isCorrect)
                        }
                      >
                        {answerOptions.answerText}
                      </button>
                      <br />
                    </>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
