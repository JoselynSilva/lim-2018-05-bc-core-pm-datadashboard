window.computeUsersStats = (users, progress, courses) => {
    users.map(user => {
        let progressUser = progress[user.id];

        if (JSON.stringify(progressUser) === '{}') {
            user.stats = {
                percent: 0,
                exercises: {
                    total: 0,
                    completed: 0,
                    percent: 0,
                },
                quizzes: {
                    total: 0,
                    completed: 0,
                    percent: 0,
                    scoreSum: 0,
                    scoreAvg: 0,
                },
                reads: {
                    total: 0,
                    completed: 0,
                    percent: 0,
                }
            };
        }
        else {
            // iniciar contadores
            let percentTotal = 0,
                totalExercises = 0,
                completedExercises = 0,
                percentExercises = 0,
                totalReads = 0,
                completedReads = 0,
                percentReads = 0,
                totalQuiz = 0,
                completedQuiz = 0,
                percentQuiz = 0,
                scoreSum = 0;

            courses.forEach(course => {
                if (progressUser.hasOwnProperty(course)) {
                    percentTotal += progressUser[course].percent / (courses.length);
                    const unitsCourse = Object.values(progressUser[course].units);
                    unitsCourse.forEach(unit => {
                        const partsUnits = Object.values(unit.parts);
                        partsUnits.forEach(part => {

                            if (part.type === 'practice') {
                                totalExercises++;
                            }
                            if (part.type === 'practice' && part.hasOwnProperty('exercises')) {
                                const exerciseCompleted = Object.values(part.exercises)
                                exerciseCompleted.forEach(exercise => {
                                    if (exercise.completed === 1) {
                                        completedExercises++;
                                    }
                                })
                            }
                            percentExercises = parseInt(((completedExercises * 100) / totalExercises).toFixed());

                            if (part.type === 'quiz') {
                                totalQuiz++;
                            }
                            if (part.type === 'quiz' && part.completed === 1) {
                                completedQuiz++;
                                scoreSum += part.score;
                            }
                            percentQuiz = parseInt(((completedQuiz * 100) / totalQuiz).toFixed());

                            if (part.type === 'read') {
                                totalReads++;
                            }
                            if (part.type === 'read' && part.completed === 1) {
                                completedReads++;
                            }
                            percentReads = parseInt(((completedReads * 100) / totalReads).toFixed());

                        })
                        return partsUnits;
                    })
                }
                //Termina el if
            })
            //Sacar el % fuera del forEach para evitar que recalcule
            scoreAvg = parseInt((scoreSum / completedQuiz || 0).toFixed());

            user.stats = {
                percent: percentTotal,
                exercises: {
                    total: totalExercises,
                    completed: completedExercises,
                    percent: percentExercises,
                },
                quizzes: {
                    total: totalQuiz,
                    completed: completedQuiz,
                    percent: percentQuiz,
                    scoreSum: scoreSum,
                    scoreAvg: scoreAvg,
                },
                reads: {
                    total: totalReads,
                    completed: completedReads,
                    percent: percentReads,
                }
            };
        } //Fin del else    
    })//Termina user forEach
    return users;
};

//Creando la funcion sortUsers
window.sortUsers = (users, orderBy, orderDirection) => {
    let studentsSort = users;

    const sortByName = (a, b) => {
        if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        if (a.name.toUpperCase() === b.name.toUpperCase()) return 0;
        return -1;
    };

    const sortByTotal = (a, b) => {
        if (a.stats.percent > b.stats.percent) return 1;
        if (a.stats.percent === b.stats.percent) return 0;
        return -1;
    };

    const sortByExc = (a, b) => {
        if (a.stats.exercises.percent > b.stats.exercises.percent) return 1;
        if (a.stats.exercises.percent === b.stats.exercises.percent) return 0;
        return -1;
    };

    const sortByQuiz = (a, b) => {
        if (a.stats.quizzes.percent > b.stats.quizzes.percent) return 1;
        if (a.stats.quizzes.percent === b.stats.quizzes.percent) return 0;
        return -1;
    };

    const sortByQuizAvg = (a, b) => {
        if (a.stats.quizzes.scoreAvg > b.stats.quizzes.scoreAvg) return 1;
        if (a.stats.quizzes.scoreAvg === b.stats.quizzes.scoreAvg) return 0;
        return -1;
    };

    const sortByReads = (a, b) => {
        if (a.stats.reads.percent > b.stats.reads.percent) return 1;
        if (a.stats.reads.percent === b.stats.reads.percent) return 0;
        return -1;
    };

    if (orderBy === 'name') {
        studentsSort = users.sort(sortByName);
    }
    else if (orderBy === 'totalComp') {
        studentsSort = users.sort(sortByTotal);
    }
    else if (orderBy === 'excercises') {
        studentsSort = users.sort(sortByExc);
    }
    else if (orderBy === 'quizzes') {
        studentSort = users.sort(sortByQuiz)
    }
    else if (orderBy === 'quizzesAvg') {
        studentSort = users.sort(sortByQuizAvg)
    }
    else if (orderBy === 'reads') {
        studentsSort = users.sort(sortByReads);
    }

    if (orderDirection === 'ASC') {
        studentsSort = studentsSort;
    }
    else if (orderDirection === 'DESC') {
        studentsSort = studentsSort.reverse();
    }
    return studentsSort;
};

//Creando la funcion filterUsers
window.filterUsers = (users, search) => {
    let filterUser = users.filter(user => {
        return user.name.toUpperCase().indexOf(search.toUpperCase()) !== -1;
    })
    return filterUser;
};

//Creando la funcion processCohortData
window.processCohortData = (options) => {
    const courses = Object.keys(options.cohort.coursesIndex);
    let students = computeUsersStats(options.cohortData.users, options.cohortData.progress, courses);
    studentsSorted = sortUsers(students, options.orderBy, options.orderDirection);
    studentsFilter = filterUsers(studentsSorted, options.search);

    return studentsFilter;
};