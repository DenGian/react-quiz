export default class AnswerHelper {
    static rightAnswer = ''
    static wrongAnswer = []
    static combination = []

    static setRightAnswer(answer) {
        this.rightAnswer = answer
    }

    static setWrongAnswers(array) {
        this.wrongAnswer = array
        // console.log(this.wrongAnswer)
    }
    static setCombineAnswers(array) {
        this.combination = array
        console.log(this.combination);
    }
}