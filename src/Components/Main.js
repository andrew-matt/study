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

    const studentsFilter = (students, callback) => {
        let newArr = []
        for (let i = 0; i < students.length; i++) {
            newArr[i] = callback(students[i])
        }
        return newArr
    }

    console.log(students.filter(s => s.scores <= 100))
    console.log(studentsFilter(students, students.filter(s => s.scores <= 100)))




    return (
        <div>
            Hello
        </div>
    );
};

