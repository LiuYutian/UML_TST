document.getElementById("commit").addEventListener("click", function(){
    var score = 0;

    if(check()) {
        score += fill("oneFill", "统一建模语言");

        score += fill("twoFill1", "封装性");
        score += fill("twoFill2", "继承性");
        score += fill("twoFill3", "多态性");

        score += aloneSelect("select1", 1);
        score += aloneSelect("select2", 0);

        score += multipleSelect("selects1", "013");
        score += multipleSelect("selects2", "012");

        score += judge("judge1", 1);
        score += judge("judge2", 0);

        score += shortAanswer("shortAanswer", "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达形式。");

        document.getElementById("score").value = score;
    }else {
        alert("班级/学号/姓名 输入有误！");
    }
});

function check() {
    return !(document.getElementById("clas").value === "" ||
    document.getElementById("classNumber").value === "" ||
    document.getElementById("name").value === "");
}

function shortAanswer(name, src){
    return document.getElementsByName(name)[0].value === src ? 1 : 0;
}

function judge(name, answerNumber) {
    if(document.getElementsByName(name)[answerNumber].checked === true &&
        document.getElementsByName(name)[Math.abs(answerNumber-1)].checked === false) {
        return 1;
    }
    return 0;
}

function fill(name, src) {
    var fill = document.getElementsByName(name);
    return fill[0].value === src ? 1 : 0;
}

function aloneSelect(name, answer) {
    var select = document.getElementsByName(name);
    for(var i = 0; i < select.length; i++) {
        if(answer === i && select[i].checked === true) {
            return 1;
        }
    }
    return 0;
}

function multipleSelect(name, answerStr) {
    var select = document.getElementsByName(name);
    var right = false;
    var result = "";
    for(var i = 0; i < select.length; i++) {
        if(select[i].checked === true) {
            result += i;
        }
    }

    return result === answerStr ? 1 : 0;
}
