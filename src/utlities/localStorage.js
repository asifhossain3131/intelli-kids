const getWishList=()=>{
    let wishList={}
    const storedList=localStorage.getItem('wish-list')
    if(storedList){
        wishList=JSON.parse(storedList)
    }
    return wishList
}

const addToLocalStorage=id=>{
    const wishList=getWishList()
    
}