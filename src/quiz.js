class Quiz {
    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion(){
        return this.questions[this.currentQuestionIndex]
    }
    
    moveToNextQuestion(){
        return this.currentQuestionIndex++
    }

     shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.questions[i];
            this.questions[i] = this.questions[j];
            this.questions[j] = temp;
        }
      }

    checkAnswer(answer){
        if ( answer === this.currentQuestionIndex ){
            this.correctAnswers + 1;
        }

    }

    hasEnded(){
       if (this.currentQuestionIndex < this.questions.length){
        return false
       } else {
        return true
       }
    }
    }
