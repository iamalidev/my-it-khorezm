import {
    Chart,
    CoursesCompleted,
    CurrentCourses,
    ProfilePart,
} from "./components/index";

const Profile = () => {
    return (
        <>
            <div className='profile__page'>
                <ProfilePart />
                <div className='profile__content'>
                    <CoursesCompleted />
                    <CurrentCourses />
                    <Chart />
                </div>
            </div>
        </>
    );
};

export default Profile;
