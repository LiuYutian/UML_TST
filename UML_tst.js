document.getElementById("commit").addEventListener("click", function(){
    window.scroll(0,0);
    if(check()) {
        setScore();
    }else {
        alert("班级/学号/姓名 输入有误！");
    }
});

document.getElementById("classNumber").addEventListener("keydown", function(evt){
    if(!(evt.keyCode <= 57 && evt.keyCode >= 48 || evt.keyCode === 8 || evt.keyCode === 46)) {
        evt.preventDefault();
    }
});

document.getElementById("select1a").addEventListener("click", function() {
    document.getElementById("select1").innerHTML = "A";
});

document.getElementById("select1b").addEventListener("click", function() {
    document.getElementById("select1").innerHTML = "B";
});

document.getElementById("select1c").addEventListener("click", function() {
    document.getElementById("select1").innerHTML = "C";
});

document.getElementById("select1d").addEventListener("click", function() {
    document.getElementById("select1").innerHTML = "D";
});

document.getElementById("select2a").addEventListener("click", function() {
    document.getElementById("select2").innerHTML = "A";
});

document.getElementById("select2b").addEventListener("click", function() {
    document.getElementById("select2").innerHTML = "B";
});

document.getElementById("select2c").addEventListener("click", function() {
    document.getElementById("select2").innerHTML = "C";
});

document.getElementById("select2d").addEventListener("click", function() {
    document.getElementById("select2").innerHTML = "D";
});

document.getElementById("selects1a").addEventListener("click", function() {
    var inner = document.getElementById("selects1").innerHTML;
    var index = inner.indexOf("A");
    var result = ""
    if(index === -1){
        result = inner + "A";
    }else {
        _.forEach(inner, function(n, i) {
            if(i !== index) {
                result += n;
            }
        });
    }
    document.getElementById("selects1").innerHTML = result;
});

document.getElementById("selects1b").addEventListener("click", function() {
    var inner = document.getElementById("selects1").innerHTML;
    var index = inner.indexOf("B");
    var result = ""
    if(index === -1){
        result = inner + "B";
    }else {
        _.forEach(inner, function(n, i) {
            if(i !== index) {
                result += n;
            }
        });
    }
    document.getElementById("selects1").innerHTML = result;
});

document.getElementById("selects1c").addEventListener("click", function() {
    var inner = document.getElementById("selects1").innerHTML;
    var index = inner.indexOf("C");
    var result = ""
    if(index === -1){
        result = inner + "C";
    }else {
        _.forEach(inner, function(n, i) {
            if(i !== index) {
                result += n;
            }
        });
    }
    document.getElementById("selects1").innerHTML = result;
});

document.getElementById("selects1d").addEventListener("click", function() {
    var inner = document.getElementById("selects1").innerHTML;
    var index = inner.indexOf("D");
    var result = ""
    if(index === -1){
        result = inner + "D";
    }else {
        _.forEach(inner, function(n, i) {
            if(i !== index) {
                result += n;
            }
        });
    }
    document.getElementById("selects1").innerHTML = result;
});

document.getElementById("selects2a").addEventListener("click", function() {
    var inner = document.getElementById("selects2").innerHTML;
    var index = inner.indexOf("A");
    var result = ""
    if(index === -1){
        result = inner + "A";
    }else {
        _.forEach(inner, function(n, i) {
            if(i !== index) {
                result += n;
            }
        });
    }
    document.getElementById("selects2").innerHTML = result;
});

document.getElementById("selects2b").addEventListener("click", function() {
    var inner = document.getElementById("selects2").innerHTML;
    var index = inner.indexOf("B");
    var result = ""
    if(index === -1){
        result = inner + "B";
    }else {
        _.forEach(inner, function(n, i) {
            if(i !== index) {
                result += n;
            }
        });
    }
    document.getElementById("selects2").innerHTML = result;
});

document.getElementById("selects2c").addEventListener("click", function() {
    var inner = document.getElementById("selects2").innerHTML;
    var index = inner.indexOf("C");
    var result = ""
    if(index === -1){
        result = inner + "C";
    }else {
        _.forEach(inner, function(n, i) {
            if(i !== index) {
                result += n;
            }
        });
    }
    document.getElementById("selects2").innerHTML = result;
});

document.getElementById("selects2d").addEventListener("click", function() {
    var inner = document.getElementById("selects2").innerHTML;
    var index = inner.indexOf("D");
    var result = ""
    if(index === -1){
        result = inner + "D";
    }else {
        _.forEach(inner, function(n, i) {
            if(i !== index) {
                result += n;
            }
        });
    }
    document.getElementById("selects2").innerHTML = result;
});


var check = function() {
    return !(document.getElementById("class").value === "" ||
    document.getElementById("classNumber").value === "" ||
    document.getElementById("name").value === "");
}

var setScore = function() {
    var form = document.getElementById("formData");
    var formValueGetter = new FormValueGetter(form);
    var values = formValueGetter.getValues();

    var questionsBank = new QuestionsBank();

    questionsBank.addQuestion(new Question("oneFill", ["统一建模语言"], 1));
    questionsBank.addQuestion(new Question("twoFill", ["封装性", "继承性", "多态性"], 3));
    questionsBank.addQuestion(new Question("select1", ["B"], 1));
    questionsBank.addQuestion(new Question("select2", ["A"], 1));
    questionsBank.addQuestion(new Question("selects1", ["A", "B", "D"], 1));
    questionsBank.addQuestion(new Question("selects2", ["A", "B", "C"], 1));
    questionsBank.addQuestion(new Question("judge1", ["B"], 1));
    questionsBank.addQuestion(new Question("judge2", ["A"], 1));
    questionsBank.addQuestion(new Question("shortAanswer", "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达形式。", 1));

    var questionsBankArray = questionsBank.questionsBank;

    var score = ScoreCalculate.getScore(values, questionsBankArray);
    document.getElementById("score").value = score;
}
