function ScoreCalculate() {}

ScoreCalculate.getScore = function(values, questionBank) {
    var score = 0;
    _.forEach(questionBank, function(quesrion) {
        _.forEach(values, function(value) {
            if (quesrion.name === value.name) {
                score += (equals(quesrion.getQuestion(), value));
            }
        });
    });

    return score;
}

var equals = function(quesrions, values) {
    var score = 0;
    if(quesrions.value.length === values.value.length) {
        var publicArray = [];
        _.forEach(quesrions.value, function(quesrion){
            _.forEach(values.value, function(value){
                if(quesrion === value) {
                    publicArray.push(quesrion);
                }
            });
        });
        if(quesrions.value.length === publicArray.length) {
            score = quesrions.score;
        }
    }

    return score;
}
