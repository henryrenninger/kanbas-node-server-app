import database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = database;
    enrollments.push({
        _id: Date.now().toString(), user: userId, course: courseId,
    });
}
export function unenrollUserInCourse(userId, courseId) {
    const { enrollments } = database;
    database.enrollments = enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
    );
}
export function fetchAllEnrollments() {
    return database.enrollments;
}