

export const GifGrid = ({ category }) => {
    key='aca va la key de usuario de giphy'
    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=${key}&`
        const resp = await fetch(url)
        const { data } = await resp.json()
        console.log(data)

    }

    getGifs()

  return (
    <div>
        <h3>{category}</h3>
    </div>
  )
}
