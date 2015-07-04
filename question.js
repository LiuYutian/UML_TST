function Question(name, answer, score, questionType) {
    this.name = name;
    this.answer = answer;
    this.score = score;
    this.questionType = questionType;
}

Question.prototype.getScore = function(value) {
    if(this.questionType === "select") {
        return equalsSelect(this.answer, value) ? this.score : 0;
    }else if(this.questionType === "text") {
        return (this.score / this.answer.length) * equalsText(this.answer, value);
    }
}

var equalsText = function(answer, values) {
    var obj = {};
    _.forEach(answer, function(answerValue) {
        _.forEach(values, function(value) {
            if(answerValue === value){
                obj[answerValue] = 0;
            }
        });
    });

    var count = 0;

    for(var key in obj) {
        count++;
    }

    return count;
}

var equalsSelect = function(answer, values) {
    if(answer.length === values.length) {
        var count = 0;

        _.forEach(answer, function(answerValue){
            _.forEach(values, function(value){
                if(answerValue === value) {
                    count++;
                }
            });
        });

        if(answer.length === count) {
            return true;
        }
    }

    return false;
}
