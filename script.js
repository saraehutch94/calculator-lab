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

// outcome of equations
// equations being randomized
// input area

let output;

/*----- cached element references -----*/

$numAndEqButtons = $("#buttons");
$clearBtn = $("#clear");
$input = $(".input");

/*----- event listeners -----*/

// on each button (either number or operation)
$numAndEqButtons.on("click", ".button", addToInput);

// on clear button
$clearBtn.on("click", clearCalc);

/*----- functions -----*/

clearCalc();

// clear function (also want to call this function
// at page load to clear calculator)
function clearCalc () {
    output = "";
    $input.val("");
};

function addToInput (evt) {
    if (evt.target.dataset.value !== "=") {
        output += evt.target.dataset.value;
    } else {
        computeEq(output);
    }
    render();
};

function render() {
    if (output) {
        $input.val(output);
    } else {
        $input.val("0");
    }
};

// compute function
function computeEq (arg) {
    if (arg.includes("+")) {
        // alert("this includes addition!");
    } else if (arg.includes("-")) {
        alert("this includes subtraction!");
    } else if (arg.includes("/")) {
        alert("this includes division!");
    } else if (arg.includes("*")) {
        alert("this includes multiplication!");
    }
};
