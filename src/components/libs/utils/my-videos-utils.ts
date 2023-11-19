export const formatDate = (inputDate: string) => {
    const date = new Date(inputDate)
    
    let day = date.getDate().toString()
    let month = (date.getMonth()+1).toString()
    day = day.length === 1 ? `0${day}` : day
    month = month.length === 1 ? `0${month}` : month

    return `${day}.${month}.${date.getFullYear().toString()}`
}

const MillisecondsInDay = 1000*60*60*24
const DaysToDelete = 14

export const daysLeftUntilDeletion = (create_date: string) => {
    return Math.ceil((Date.parse(new Date(create_date).toString()) +
    DaysToDelete*MillisecondsInDay - Date.parse(new Date().toString())) / MillisecondsInDay) 
}

//const MINUTE_IN_MILISECONDS = 60 * 1000
//const videoLifeTime = MINUTE_IN_MILISECONDS * Number(process.env.REACT_APP_MINUTES_TO_DELETE_VIDEO)

// export const isVideoDeleted = (create_date: string) => {
//     const currentTime = Date.parse(new Date().toString())
//     const creationDate = Date.parse(new Date(create_date).toString())
//     return (creationDate + videoLifeTime) < currentTime 
// }

// export const isVideoDeleted = (values: string[]) => {
//     return values.every(value => value !== null)
// }