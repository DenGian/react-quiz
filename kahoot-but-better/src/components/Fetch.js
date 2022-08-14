import React, {useState/*, useEffect*/} from "react";
import "./css/QuestionSquare.css"
import {decode} from 'html-entities';
import AnswerHelper from "./Helper/AnswerHelper";

export default function Fetch() {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [amount, setAmount] = useState(10)
    const [questions, setQuestions] = useState('')
    const answerArray = []

    const url = 'https://opentdb.com/api.php?amount=' + amount + '&type=multiple';

    // useEffect(() => {
    //     fetch(url)
    //         .then(response => {
    //             if (response.ok) {
    //                 // console.log(response);
    //                 return response.json();
    //             }
    //             throw response;
    //         })
    //         .then(data => {
    //             // console.log(data);
    //             setData(data);
    //         })
    //         .catch(error => {
    //             console.error('error fetching data:', error);
    //             setError(error);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         })
    // }, [])

    // if (loading)
    //     return "loading ...";
    // if (error)
    //     return "ERROR!";

    const numberOfQuestions = event => {
        if (isNaN(event.target.value)) {
            alert("Please enter a number")
        } else {
            setAmount(event.target.value)
        }
    }
    const getQuestionsAndAnswers = async e => {
        e.preventDefault()
        const questionsArray = [];
        const wrongAnswersArray = [];
        const res = await fetch(url);
        let data = await res.json();
        console.log(data.results);
        for (const question of data.results) {
            questionsArray.push((decode(question.question)));
            AnswerHelper.setRightAnswer(decode(question.correct_answer));
            wrongAnswersArray.push(decode(question.incorrect_answers));
            AnswerHelper.setWrongAnswers(wrongAnswersArray);
        }
        setQuestions(questionsArray)
        console.log(questionsArray);
        console.log(AnswerHelper.rightAnswer);
        console.log(AnswerHelper.wrongAnswer);
        return whatever();
    }
    console.log(url)
    AnswerHelper.setCombineAnswers(getQuestionsAndAnswers())

    function whatever(){
    if (AnswerHelper.wrongAnswer[0].length > 1){
        for (const answer of AnswerHelper.wrongAnswer[0]){
            answerArray.push(answer)
        }
    }
    else {
        answerArray.push(AnswerHelper.wrongAnswer[0])
    }
    answerArray.push(AnswerHelper.rightAnswer)
    return answerArray
}


    return (
        <div className="fetch">

                <label htmlFor="amount">Number of questions: </label>
                <input type="text" name="amount" id="amount" onChange={numberOfQuestions} required></input>
                <label htmlFor="subject"> Choose a subject: </label>
                <select name="subject" id="subject">
                    <option value=""></option>
                </select>
                <button onClick={getQuestionsAndAnswers}>Let's play!</button>

            <div className="questionSquare">
                <div>
                    {questions[0]}
                </div>
            </div>
        </div>
    )
}
