import { useEffect } from "react"
// dynamic title
const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - Dragon News`;
    }, [title])
       
}

export default useTitle;
