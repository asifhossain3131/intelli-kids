import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`IntelliKids | ${title}`
    },[title])
}

export default useTitle