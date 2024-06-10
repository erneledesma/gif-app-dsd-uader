import  { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'



export const GifGrid = ({ category }) => {

const [images, setImages] = useState([])  

useEffect(() => {
  getGifs( category)
}, [])


    const key='H34PGip1gUHR5Uzn7j9B5hUP30a4qELj&'

    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${key}&`
        const resp = await fetch(url)
        const { data } = await resp.json()
     
        const gifs = data.map( img => {
          return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }

    })
    console.log(gifs)
    setImages(gifs)

  }



  return (
    <div className='card-grid'>
        <h3>{category}</h3>
        <ol>
            {
                images.map( img => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                     />
                ))
            }
        </ol>
    </div>
  )
}
