// import numberReducer from "./reducer/perfrom-reducer";
// import { applyMiddleware, combineReducers } from "redux";
// const reducer = combineReducers({ numberReducer });
// export default reducer;

const INITIAL_STATE = {
  Questions: [
    {
      questionText: "Correct HTML element for the largest heading:",
      answerOptions: [
        { answerText: "<h6>", isCorrect: false },
        { answerText: "<heading>", isCorrect: false },
        { answerText: "<h1>", isCorrect: true },
        { answerText: "<head>", isCorrect: false },
      ],
    },

    {
      questionText: "What does HTML stand for?",
      answerOptions: [
        { answerText: "Home Tool Markup Language", isCorrect: false },
        { answerText: "Hyper Text Markup Language", isCorrect: true },
        { answerText: "Homelinks And Text Markup Language", isCorrect: false },
      ],
    },
    {
      questionText: "What does CSS stand for..?",
      answerOptions: [
        { answerText: "Color Style Sheet", isCorrect: false },
        { answerText: "Cascading Style Sheet", isCorrect: true },
        { answerText: "Both of Above", isCorrect: false },
      ],
    },
    {
      questionText: "JavaScript is not a programming Language.",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "We Can write JavaScript in HTML.",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
  ],
};

const reducer = (state = INITIAL_STATE) => state;

export default reducer;
