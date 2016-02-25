document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('id-1');
    element.style.color = 'red';
});

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
var staff = ['Tyler', 'Hillary', 'Haley'];
function printStaff() {
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

function addParagraph() {
    // Setting up paragraph and text
    var paragraph = document.createElement('p');
    var text = document.createTextNode(new Date().toString());
    paragraph.appendChild(text);
    
    // Modifying the paragraph
    paragraph.className = 'my-para';
    
    // Actually adding paragraph to the document body so it is visible
    document.body.appendChild(paragraph);
}