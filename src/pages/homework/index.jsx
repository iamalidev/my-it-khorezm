import { LargeTitle } from "@/components/index";
import { HomeworkCard } from "./components/index";

const Homework = () => {
    return (
        <div className='homework__page'>
            <LargeTitle text='Uyga Vazifa' />
            <HomeworkCard />
        </div>
    );
};

export default Homework;
