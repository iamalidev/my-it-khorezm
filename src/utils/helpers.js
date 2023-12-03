export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};

export const setLocalStorage = (key) => {
    return localStorage.setItem(key);
};

export const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
};

export const getFirstDayOfMonth = (year, month) => {
    const firstDay = new Date(year, month - 1, 0).getDay();
    return firstDay === 0 ? 7 : firstDay;
};

export const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
};

export const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
};
