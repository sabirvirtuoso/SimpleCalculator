/**
 * Created by sabir.salman on 1/27/15.
 */

var input = document.getElementById("screen");
var operator = ['+','-','x','/'];
var decimalAdded = false;


function processResetButton()
{
    input.value = "0";
    decimalAdded = false;
}

function processEqualsButton()
{
    var equation = input.value;
    var lastChar = equation.substring(equation.length - 1);
    equation = equation.replace(/x/g,'*');

    if(equation.indexOf("%") > -1)
    {
        var res = equation.split('%');
        input.value = (res[0]/100)*res[1];
    }
    else
    {
        if(operator.indexOf(lastChar) > -1)
        {
            equation = equation.substring(0, equation.length - 1);
        }
        if(equation != '')
            input.value = eval(equation);
    }

    if(input.value.indexOf('.') > -1)
        decimalAdded = true;
    else
        decimalAdded = false;

}

function processOperatorButton(btnValue)
{
    var inputVal = input.value;
    var lastChar = inputVal.substring(inputVal.length - 1);
    var btnVal = btnValue;

    if(inputVal!='' && operator.indexOf(lastChar) == -1)
    {
        input.value += btnVal;
    }
    else if(inputVal == '' && btnVal == '-')
    {
        input.value += btnVal;
    }

    if(operator.indexOf(lastChar) > -1 && inputVal.length > 1)
    {
        //input.value.replace(/.$/, btnVal);
        input.value = inputVal.substring(0, inputVal.length - 1) + btnVal;
    }

    decimalAdded = false;

}

function processDecimalButton(btnValue)
{
    var btnVal = btnValue;

    if(!decimalAdded)
    {
        input.value += btnVal;
        decimalAdded = true;
    }
}

function processNumberButton(btnValue)
{
    if(input.value == '0')
        input.value="";

    var btnVal = btnValue;
    input.value += btnVal;
    //decimalAdded = false;

}

function processPercentageButton(btnValue)
{
    var inputVal = input.value;
    var btnVal = btnValue;

    if(inputVal!='' && inputVal.indexOf('-') == -1 && inputVal.indexOf('+') == -1
        && inputVal.indexOf('/') == -1 && inputVal.indexOf('x') == -1 && inputVal.indexOf('%') == -1)
    {
        input.value += btnVal;
    }
}


