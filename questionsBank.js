function QuestionsBank() {
    this.questionsBank = [];
}

QuestionsBank.prototype.addQuestion = function(question) {
    this.questionsBank.push(question);
}
