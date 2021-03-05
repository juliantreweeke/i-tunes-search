import { CHARACTER_LIMIT } from './constants';

export const formatDateString = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}

export const isObjectEmpty = (object) => (Object.entries(object).length === 0);

export const truncateString = (string) => {
    if(!string){
        return
    }
    if (string.length <= CHARACTER_LIMIT) {
        return string
    }
    return `${string.slice(0, CHARACTER_LIMIT)}...`;
}
