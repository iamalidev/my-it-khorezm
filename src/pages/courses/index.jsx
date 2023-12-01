import { CourseCard, CrudCard, SmallTitle } from "@/components/index";

const CoursesPage = () => {
    return (
        <div className='page-wrapper'>
            <div>
                <SmallTitle text='Jarayonda' />

                <div className='course-card__wrapper'>
                    <CourseCard />
                </div>

                <SmallTitle text='Tugallangan' />
                <div className='course-card__wrapper'>
                    <CrudCard />
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
