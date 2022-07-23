import { useGetPostsQuery } from './redux'

export const App = () => {
    const { data = [], loading, error } = useGetPostsQuery()
    console.log(data)
    return (
        <>
            <ul>
                {data.map((el) => (
                    <li key={el.id}>{el.title}</li>
                ))}
                <h1>App</h1>
            </ul>
        </>
    )
}
