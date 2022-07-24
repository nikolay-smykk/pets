import { useGetPostsQuery, useAddPostMutation } from './redux'
import { useState } from 'react'

export const App = () => {
    const { data = [], loading, error } = useGetPostsQuery()
    const [newProduct, setNewProduct] = useState('')
    console.log(data)
    const [addProduct, { isError }] = useAddPostMutation()

    const handleAddProduct = async () => {
        if (newProduct) {
            await addProduct({
                title: newProduct,
                description: 'description',
                price: '1231111',
                color: 'red',
                size: 'L',
                image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
            }).unwrap()
            setNewProduct('')
        }
    }
    return (
        <>
            <ul>
                <input
                    type="text"
                    value={newProduct}
                    onChange={(e) => setNewProduct(e.target.value)}
                />
                <button onClick={() => handleAddProduct()}>Add</button>
                {data.map((el) => (
                    <li key={el.id}>
                        Title: {el.title} : Price -&gt; {el.price}
                    </li>
                ))}
                <h1>App</h1>
            </ul>
        </>
    )
}
