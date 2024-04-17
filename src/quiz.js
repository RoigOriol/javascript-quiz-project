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
        let preguntaActual = this.getQuestion()
        if ( answer === preguntaActual.answer ){
            this.correctAnswers++;
        }
    
    }
    
    hasEnded(){
       if (this.currentQuestionIndex < this.questions.length){
        return false
       } else {
        return true
       }
    }
    filterQuestionsByDifficulty(difficulty){
        let questionDifficulty = this.questions;

        console.log (questionDifficulty);

            if (difficulty >=1 && difficulty <=3 ){
                let questionDifficultyArr = questionDifficulty.filter(eachQuestion => {
                    
                    if (eachQuestion.difficulty === difficulty ){
                        return true 
                    } else {
                        return false
                    }
                
                })
                console.log(questionDifficultyArr)
                this.questions = questionDifficultyArr 
            } else {};

            
    }

    averageDifficulty(){
        let averageByDifficulty = this.questions.reduce((acc, pregunta) =>{
            return acc + pregunta.difficulty;
        }, 0)
          return averageByDifficulty / this.questions.length;

       
    }   
    
}
    
  