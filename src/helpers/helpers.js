export const formatDateString = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}

export const isObjectEmpty = (object) => (Object.entries(object).length === 0);

