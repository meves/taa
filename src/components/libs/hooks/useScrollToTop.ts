import { useEffect } from "react";


type Coordinates = { x: number, y: number }

export const useScrollToTop = (coordinates: Coordinates ) => {
    useEffect(() => {
        window.scrollTo(coordinates.x, coordinates.y); 
    }, [coordinates])
}