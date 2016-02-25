function checkAge() {
    var age = prompt('What is your age?');
    console.log('Hello, you are ' + age);
    if (age < 21) {
        alert('You are under 21!');
    } else {
        alert('You are 21 or older!');
    }
}

function checkGrade() {
    var grade = prompt('What is your letter grade in your class?');
    grade = grade.toUpperCase();
    switch (grade) {
        case 'A':
            alert('Excellent!');
            break;
        case 'B':
            alert('Good Job!');
            break;
        case 'C':
            alert('Solid Effort');
            break;
        case 'D':
            alert('Meh');
            break;
        default:
            alert('Better luck next time');
    }
}

function printStaff(shouldAddDavid) {
    var staff = ['Tyler', 'Hillary', 'Haley'];
    if (shouldAddDavid) {
        staff.push('David');
    }

    for(var i = 0; i < staff.length; i++) {
        var staffMember = staff[i];
        console.log('Introducting staff member: ' + staffMember);
        
    }
}

function addDavidToStaff() {
    staff.push('David');
}

function add(op1, op2) {
    return op1 + op2;
}

function subtract(op1, op2) {
    return op1 - op2;
}

function divide(op1, op2) {
    if (op2 != 0) {
        return op1 / op2;
    } else {
        alert('You cannot change the laws of physics!');
    } 
}

function multiply(op1, op2) {
    return op1 * op2;
}