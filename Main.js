import React from 'react';

export const Main = () => {

    const students = [
        {
            name: "John",
            age: 23,
            isMarried: false,
            scores: 120
        },
        {
            name: "William",
            age: 28,
            isMarried: true,
            scores: 100
        },
        {
            name: "Ann",
            age: 31,
            isMarried: false,
            scores: 130
        },
        {
            name: "Dennis",
            age: 34,
            isMarried: true,
            scores: 90
        }
    ];

/*/!*    console.log(students.filter(s => s.scores <= 100))*!/
    console.log(studentsFilter(students, s => s.scores <= 100))

    function studentsFilter (array, callback) {
        let newArr = []
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i]) === true) {
                newArr.push(array[i])
            }
        }
        return newArr
    }*/

/*    console.log(students.find(s => s.name === "John"))*/
    console.log(studentsFind(students, s => s.name === "John"))

    function studentsFind (array, callback) {
        
    }


    return (
        <div>
            Hello
        </div>
    );
};
