document.getElementById("commit").addEventListener("click", function(){
    window.scroll(0,0);
    if(check()) {
        compute();
    }else {
        alert("班级/学号/姓名 输入有误！");
    }
});

document.getElementById("classNumber").addEventListener("keydown", function(evt){
    if(!(evt.keyCode <= 57 && evt.keyCode >= 48 || evt.keyCode === 8 || evt.keyCode === 46)) {
        evt.preventDefault();
    }
});

var check = function() {
    return !(document.getElementById("class").value === "" ||
    document.getElementById("classNumber").value === "" ||
    document.getElementById("name").value === "");
}

var addListenerSelect = function(name) {
    _.forEach(document.getElementsByName(name), function(element) {
        element.addEventListener("click", function() {
            document.getElementById(name).innerHTML = element.value;
        });
    });
}

var addListenerSelects = function(name) {
    _.forEach(document.getElementsByName(name), function(element) {
        element.addEventListener("click", function() {
            var inner = document.getElementById(name).innerHTML;
            var index = inner.indexOf(element.value);
            var result = ""
            if(index === -1){
                result = inner + element.value;
            }else {
                _.forEach(inner, function(n, i) {
                    if(i !== index) {
                        result += n;
                    }
                });
            }
            document.getElementById(name).innerHTML = result;
        });
    });
}

var addListener = function(){
    addListenerSelect("select1");
    addListenerSelect("select2");
    addListenerSelects("selects1");
    addListenerSelects("selects2");
}

var compute = function() {
    var form = document.getElementById("formData");
    var formValueGetter = new FormValueGetter(form);
    var values = formValueGetter.getValues();
    var questionsBank = new QuestionsBank();
    var sumScore = questionsBank.getSumScore(values)

    document.getElementById("score").value = sumScore;
}

addListener();
