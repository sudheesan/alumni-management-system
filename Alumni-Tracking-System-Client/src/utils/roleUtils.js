import { hasRole } from "../services/userService"


const isUserAdmin = () => hasRole(['Admin']);

const isUserStudent = () => hasRole(['Admin','Student']);

const isUserFaculty = () => isUserAdmin() || hasRole(['Admin','Faculty']);

export {
    isUserAdmin,
    isUserStudent,
    isUserFaculty,
}