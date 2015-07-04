function QuestionsBank() {
    this.questionsBank = [];
    initQuestion(this);
}

QuestionsBank.prototype.addQuestion = function(question) {
    this.questionsBank.push(question);
}

var initQuestion = function(questionsBank) {
    questionsBank.addQuestion(new Question("oneFill", ["统一建模语言"], 1, "text"));
    questionsBank.addQuestion(new Question("twoFill", ["封装性", "继承性", "多态性"], 3, "text"));
    questionsBank.addQuestion(new Question("select1", ["B"], 1, "select"));
    questionsBank.addQuestion(new Question("select2", ["A"], 1, "select"));
    questionsBank.addQuestion(new Question("selects1", ["A", "B", "D"], 1, "select"));
    questionsBank.addQuestion(new Question("selects2", ["A", "B", "C"], 1, "select"));
    questionsBank.addQuestion(new Question("judge1", ["×"], 1, "select"));
    questionsBank.addQuestion(new Question("judge2", ["√"], 1, "select"));
    questionsBank.addQuestion(new Question("shortAanswer", ["模型"], 1, "text"));

    // "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达形式。"
}

QuestionsBank.prototype.getSumScore = function(values) {
    var sumScore = 0;

    _.forEach(this.questionsBank, function(question) {
        _.forEach(values, function(value) {
            if(question.name === value.name) {
                sumScore += question.getScore(value.value);
            }
        });
    });

    return sumScore;
}
