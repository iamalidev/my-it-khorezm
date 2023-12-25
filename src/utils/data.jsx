import { Icons } from "@/assets/icons/icons";
import { avatarImg } from "@/assets/images";

export const planData = [
    {
        id: 0,
        title: "Web dasturlash",
        date: "Yanvar 5, 2021",
        time: "09.00 - 10.00",
        teacher: "Humoyun Madrahimov",
    },
    {
        id: 1,
        title: "Web va grafik dizayn",
        date: "Yanvar 5, 2021",
        time: "09.00 - 10.00",
        teacher: "Humoyun Madrahimov",
    },
    {
        id: 2,
        title: "Asosiy Dasturlash",
        date: "Yanvar 5, 2021",
        time: "09.00 - 10.00",
        teacher: "Humoyun Madrahimov",
    },
];

export const infoData = [
    {
        id: 1,
        bgImg: <Icons.bgTickIcon />,
        icon: <Icons.tickIcon />,
        number: "1.500",
        text: "Yakunlangan Kurslar",
        class: "info-card green",
    },
    {
        id: 2,
        bgImg: <Icons.bgLampIcon />,
        icon: <Icons.lampIcon />,
        number: "903",
        text: "Davom Etayotgan Kurslar",
        class: "info-card orange",
    },
    {
        id: 3,
        bgImg: <Icons.bgBookmarkIcon />,
        icon: <Icons.bookmarkIcon />,
        number: "1.112",
        text: "Tugallangan Kurslar",
        class: "info-card darkBlue",
    },
];

export const practiseData = [
    {
        id: 1,
        title: "Uyga vazifa",
        courseNameOne: "Web Dizayn",
        progressOne: 70,
        courseNameTwo: "Grafik Dizayn",
        progressTwo: 40,
    },
];

export const courseInfo = [
    {
        id: 0,
        title: "Web va grafik dizayn",
        bgSvg: <Icons.courseCardBg />,
        date: "Yanvar 17, 2021",
        time: "09.00 - 10.00",
        teacher: "Humoyun Madraximov",
        teacherImg: avatarImg,
        progress: 10,
    },
    {
        id: 1,
        title: "Web va grafik dizayn",
        bgSvg: <Icons.courseCardBg />,
        date: "Yanvar 17, 2021",
        time: "09.00 - 10.00",
        teacher: "Humoyun Madraximov",
        teacherImg: avatarImg,
        progress: 30,
    },
];

export const crudInfo = [
    {
        id: 0,
        title: "Web va grafik dizayn",
        bgSvg: <Icons.courseCardBg />,
        date: "Yanvar 17, 2021",
        time: "09.00 - 10.00",
        teacher: "Humoyun Madraximov",
        teacherImg: avatarImg,
        progress: 100,
    },
    {
        id: 1,
        title: "Web va grafik dizayn",
        bgSvg: <Icons.courseCardBg />,
        date: "Yanvar 17, 2021",
        time: "09.00 - 10.00",
        teacher: "Humoyun Madraximov",
        teacherImg: avatarImg,
        progress: 100,
    },
];

export const payInfo = [
    {
        id: 0,
        title: "Web va grafik dizayn",
        img: <Icons.greenPentulIcon />,
        price: "400 000 so'm /oy",
    },
    {
        id: 1,
        title: "SMM",
        img: <Icons.greenPentulIcon />,
        price: "400 000 so’m /oy",
    },
];

export const moduleData = [
    {
        id: 1,
        module: "1-Module",
        text: "Lorem Ipsum is simply dummy text",
        task: "10 savol",
        condition: "done",
    },
    {
        id: 2,
        module: "2-Module",
        text: "Lorem Ipsum is simply dummy text",
        task: "18 savol",
        condition: "progress",
    },
    {
        id: 3,
        module: "3-Module",
        text: "Lorem Ipsum is simply dummy text",
        task: "15 savol",
        condition: "lock",
    },
];

export const courseCompleted = [
    {
        id: 0,
        image: <Icons.completedIcon />,
        title: "100",
        text: "Courses Completed",
    },
    {
        id: 1,
        image: <Icons.completedIcon />,
        title: "34",
        text: "Courses In Progress",
    },
];

export const circleProgress = [
    {
        id: 0,
        text: "Class",
        title: "UI Design Beginner",
        courses: "Total Courses",
        progress: 80,
    },
    {
        id: 1,
        text: "Class",
        title: "UX Research",
        courses: "Total Courses",
        progress: 50,
        color: "#FEC64F",
    },
];

export const profilePart = [
    {
        id: 1,
        name: "Umidbek Jumaniyozov",
        direction: "Backend developer",
        icoins: "iCoins",
        icoinsNum: 2300,
        certificates: "sertifikatlar",
        certificatesNum: 50,
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
];

export const filesInfo = [
    {
        id: 0,
        icon: <Icons.videoIcon />,
        title: "Kirish, Video",
        btn: "Yuklab olish",
    },
    {
        id: 1,
        icon: <Icons.pdfIcon />,
        title: "Kirish, Prezdentatsiya",
        btn: "Yuklab olish",
    },
    {
        id: 2,
        icon: <Icons.zipIcon />,
        title: "Kirish qo'llanilgan materiallar",
        btn: "Yuklab olish",
    },
];

export const tabs = [
    {
        title: "Kirish",
        duration: "1:00",
        condition: false,
        content:
            "https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4",
    },
    {
        title: "Ishni Boshlash",
        duration: "1:00",
        condition: false,
        content: "https://assets.codepen.io/6093409/hubspot-video-example.mp4",
    },
    {
        title: "Asboblar",
        duration: "1:00",
        condition: true,
        content: "https://media-files.vidstack.io/720p.mp4",
    },
];

export const testData = [
    {
        id: 1,
        tab: [
            {
                id: 1,
                question: "Question 1",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 0,
            },
            {
                id: 2,
                question: "Question 2",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 3,
                question: "Question 3",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
            {
                id: 4,
                question: "Question 4",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 0,
            },
            {
                id: 5,
                question: "Question 5",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 6,
                question: "Question 6",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
            {
                id: 7,
                question: "Question 7",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 0,
            },
            {
                id: 8,
                question: "Question 8",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 9,
                question: "Question 9",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
            {
                id: 10,
                question: "Question 10",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 0,
            },
            {
                id: 11,
                question: "Question 11",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 12,
                question: "Question 12",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
            {
                id: 13,
                question: "Question 13",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 0,
            },
            {
                id: 14,
                question: "Question 14",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 15,
                question: "Question 15",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
        ],
    },
    {
        id: 2,
        tab: [
            {
                id: 16,
                question: "Question 1",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 17,
                question: "Question 2",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
        ],
    },
    {
        id: 3,
        tab: [
            {
                id: 16,
                question: "Question 1",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 17,
                question: "Question 2",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
        ],
    },
    {
        id: 4,
        tab: [
            {
                id: 16,
                question: "Question 1",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 17,
                question: "Question 2",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
        ],
    },
    {
        id: 5,
        tab: [
            {
                id: 16,
                question: "Question 1",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 17,
                question: "Question 2",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
        ],
    },
    {
        id: 6,
        tab: [
            {
                id: 16,
                question: "Question 1",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 17,
                question: "Question 2",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
        ],
    },
    {
        id: 7,
        tab: [
            {
                id: 16,
                question: "Question 1",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 17,
                question: "Question 2",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
        ],
    },
    {
        id: 8,
        tab: [
            {
                id: 16,
                question: "Question 1",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 17,
                question: "Question 2",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
        ],
    },
    {
        id: 9,
        tab: [
            {
                id: 16,
                question: "Question 1",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 1,
            },
            {
                id: 18,
                question: "Question 2",
                options: ["Option 1", "Option 2", "Option 3"],
                answer: 2,
            },
        ],
    },
];

export const monthNames = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Auvgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
];

export const weekNames = [
    {
        id: 0,
        week: "M",
    },
    {
        id: 1,
        week: "T",
    },
    {
        id: 2,
        week: "W",
    },
    {
        id: 3,
        week: "T",
    },
    {
        id: 4,
        week: "F",
    },
    {
        id: 5,
        week: "S",
    },
    {
        id: 6,
        week: "S",
    },
];
