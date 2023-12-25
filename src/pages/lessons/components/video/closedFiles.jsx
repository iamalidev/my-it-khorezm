/* eslint-disable react/prop-types */
import MemberModal from "../memberModal";
import { Icons } from "@/assets/icons/icons";

function ClosedFiles({ setLock, setIsModalOpen, isModalOpen }) {
    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <div className='close'>
                <h2 className='close-title'>
                    Qo’shimcha funksiyalarni ochish uchun a’zo bo’ling !
                </h2>
                <button className='close-btn' onClick={showModal}>
                    A`zo bo`lish
                </button>
                <Icons.bgBookIcon className='close-book__icon' />
                <Icons.bgCalendarIcon className='close-calendar__icon' />
                <Icons.crownIcon className='close-crown__icon' />
                <Icons.bigCrownIcon className='close-big__crown-icon' />
            </div>
            <MemberModal
                setLock={setLock}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </>
    );
}

export default ClosedFiles;
