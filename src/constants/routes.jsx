import {
    HomePage,
    CoursesPage,
    LessonTable,
    Profile,
    MyPayments,
    Lessons,
    Modules,
    Homework,
    Tests,
} from "@/pages/index";

export const routes = [
    {
        id: 0,
        components: <HomePage />,
        path: "/",
    },
    {
        id: 1,
        components: <CoursesPage />,
        path: "/my-courses",
    },
    {
        id: 2,
        components: <LessonTable />,
        path: "/lesson-table",
    },
    {
        id: 3,
        components: <Profile />,
        path: "/profile",
    },
    {
        id: 4,
        components: <MyPayments />,
        path: "/my-payments",
    },
    {
        id: 5,
        components: <Lessons />,
        path: "/lessons",
        visible: true,
    },
    {
        id: 6,
        components: <Modules />,
        path: "/modules",
        visible: true,
    },
    {
        id: 7,
        components: <Tests />,
        path: "/tests",
        visible: true,
    },
    {
        id: 8,
        components: <Homework />,
        path: "/homework",
    },
    {
        id: 9,
        components: <Lessons />,
        path: "/my-courses/:path",
    },
];
