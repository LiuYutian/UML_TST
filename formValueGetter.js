var SELECTVALUE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
function FormValueGetter(form) {
    this.namesRepeat = [];
    var thi = this;

    [].forEach.call(form, function(n) {
        if(n.name !== ""){
            thi.namesRepeat.push(n.name);
        }
    });
}

FormValueGetter.prototype.getValues = function() {
    var names = getName(this.namesRepeat);
    var value = getValue(names);

    var result = [];

    _.forEach(names, function(n, i) {
        result.push({name : n , value : value[i]});
    });

    return result;
}

var getValue = function(names) {
    var value = [];

    _.forEach(names, function(n) {
        value.push(getNameValue(document.getElementsByName(n)));
    });

    return value;
}

var getNameValue = function(elements) {
    var type = elements[0].type;

    if(type === "text") {
        return getNameText(elements);
    }else if(type === "radio" || type === "checkbox") {
        return getNameSelect(elements);
    }else if(type === "textarea") {
        return getNameTextarea(elements);
    }
}

var getNameText = function(elements) {
    var result = [];
    _.forEach(elements, function(n) {
        result.push(n.value);
    });

    return result;
}

var getNameSelect = function(elements) {
    var result = [];
    _.forEach(elements, function(n, i) {
        if(n.checked === true) {
            result.push(SELECTVALUE[i]);
        }
    })

    return result;
}

var getNameTextarea = function(elements) {
    return elements[0].value;
}

var getName = function(namess) {
    return _.chain(namess).groupBy(function(n) {
      return n;
    }).map(function(value, key) {
        return key;
    }).value();
}
