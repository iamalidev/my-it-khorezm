import { lazy } from "react";

const PageNotFound = lazy(() => import("./404"));
const CoursesPage = lazy(() => import("./courses"));
const HomePage = lazy(() => import("./home"));
const Lessons = lazy(() => import("./lessons"));
const LessonTable = lazy(() => import("./lessonTable"));
const LoginPage = lazy(() => import("./login"));
const Modules = lazy(() => import("./modules"));
const MyPayments = lazy(() => import("./myPayments"));
const Profile = lazy(() => import("./profile"));
const Tests = lazy(() => import("./tests"));
const CheckUser = lazy(() => import("./check"));
const Homework = lazy(() => import("./homework"));

export {
    PageNotFound,
    CoursesPage,
    HomePage,
    LessonTable,
    Lessons,
    LoginPage,
    Modules,
    MyPayments,
    Profile,
    Tests,
    CheckUser,
    Homework,
};
