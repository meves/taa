import { RecordedVideos } from "store/redux-store/libs/types"


export const saveFileOnDevice = (url: string, filename: string) => {
    const anchor = document.createElement("a")
    anchor.setAttribute("href", url)
    anchor.setAttribute("type", "application/json;charset=utf-8")
    anchor.setAttribute("download", filename)
    const event = new Event("MouseEvent", { bubbles: true, cancelable: true })
    anchor.dispatchEvent(event)
    anchor.click()
    URL.revokeObjectURL(url)
}

export const getUrlAndFileName = (file: File, side: string, themeNumber: number, ext: string) => {
    const blob = file.slice(0, -1)
    const url = URL.createObjectURL(blob as Blob)        
    const filename = `theme_${themeNumber}_${side}_${new Date().toLocaleDateString()}.${ext}`
    return { url, filename }    
}

export const saveRecordedVideosOnDevice = (recordsToSend: RecordedVideos, ext: string) => {
    [   { side: "positive", file: recordsToSend.positive_video },
        { side: "negative", file: recordsToSend.negative_video },
        { side: "end",      file: recordsToSend.end_video}
    ].forEach(item => {
        const { url, filename } = getUrlAndFileName(item.file, item.side, recordsToSend.theme, ext)
        saveFileOnDevice(url, filename)
    })
}