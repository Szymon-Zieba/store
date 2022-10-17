export const link = "http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6"

export const fetchData = async (url) => {
    try{
        const data = await fetch(url)
        return await data.json()
    }catch(err){
       console.error(err)
    }
 }