export const fetchAllProducts = async () => {
    try{
        const data = await fetch("http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6")
        return await data.json()
    }catch(err){
       console.error(err)
    }
 }

export const fetchProduct = async (id) => {
    try{
        const data = await fetch("http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6")
        const parsedData = await data.json()
        const cos = parsedData.filter(item => {
            return item.id == id
        })
        console.log(cos)
        return cos
    }catch(err){
        console.error(err)
    }
}