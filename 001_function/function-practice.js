//Student score, total possible score
//A: 90 - 100, B: 80 - 89, C: 70 - 79, D: 60 - 69, F: 00 - 59

let studentGrade = function (studentScore, totalPossibleScore) {
    let percent = (studentScore / totalPossibleScore) * 100

    if (percent >= 90) {
        let grade = 'A'
        return grade
    } else if (percent >= 80) {
        let grade = 'B'
        return grade
    } else if (percent >= 70) {
        let grade = 'C'
        return grade
    } else if (percent >= 60) {
        let grade = 'D'
        return grade
    } else {
        let grade = 'F'
        return grade
    }
}

let letterGrade = studentGrade(45, 100)
console.log(letterGrade)