interface DirectorInterface {
    workFromHome(): string

    getCoffeeBreak(): string

    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string

    getCoffeeBreak(): string

    workTeacherTasks(): string
}

export class Director implements DirectorInterface {

    getCoffeeBreak = (): string => "Getting a coffee break";

    workDirectorTasks = (): string => "Getting to director tasks";

    workFromHome = (): string => "Working from home";

}

export class Teacher implements TeacherInterface {
    getCoffeeBreak = (): string => "Cannot have a break";

    workFromHome = (): string => "Cannot work from home";

    workTeacherTasks = (): string => "Getting to work";

}

export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();

export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks() !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    let res = undefined;
    (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
    return res;
}

type Subjects = "Math" | "History";

// @ts-ignore
// @ts-ignore
export function teachClass(todayClass: Subjects): string | boolean {
    return (todayClass === "Math") ? "Teaching Math" : (todayClass === "History") ? "Teaching History" : `${undefined}`
}

