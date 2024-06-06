
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['one punch'])

  return (
    <>
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory 
            setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return <GifGrid 
                        key={ category }
                        category={ category } />
                    })
                }
            </ol>
        </div>
    </>
  )
}
