/*----- constants -----*/

const numbersAndOperators = {
    '1':1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '0':0,
    'clr': null,
    '/': '/',
    '*': '*',
    '-': '-',
    '+': '+',
    '=': '='
};

// number buttons (cached below)

// position of buttons (datasets)

// operation buttons (+, -, /, *) (cached below)
// numbers
// operations
 
/*----- app's state (variables) -----*/

// store input in output variable
// global variable so all functions can utilize it
// putting input into this variable, and output will be returned
let output;

/*----- cached element references -----*/

// selecting all number and operator buttons
$numAndEqButtons = $("#buttons");

// selecting clear button
$clearBtn = $("#clear");

// selecting input areaß
$input = $(".input");

/*----- event listeners -----*/

// on each button (either number or operation)
$numAndEqButtons.on("click", ".button", addToInput);

// on clear button
$clearBtn.on("click", clearCalc);

/*----- functions -----*/

// clear output on page load
clearCalc();

// clear function (upon clicking the clear button)
function clearCalc () {
    output = "";
    $input.val("");
};

// 
function addToInput (evt) {
    if (evt.target.dataset.value !== "=") {
        output += evt.target.dataset.value;
    } else {
        computeEq(output);
    }
    render();
};

// render output value to input area
// whether it is just added to input area or
// computed before added to input area
function render() {
    if (output) {
        $input.val(output);
    } else {
        $input.val("0");
    }
};

// compute function
function computeEq (exp) {
    let result = Function("return " + exp)();
    output = result;
};
