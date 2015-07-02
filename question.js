function Question(name, answer, score) {
    this.name = name;
    this.answer = answer;
    this.score = score;
}

Question.prototype.getQuestion = function() {
    return {
        name : this.name,
        value : this.answer,
        score : this.score
    };
}
