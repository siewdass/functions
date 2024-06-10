export function home( components ) {
    const handler = () => {
        console.log('sss')
    }
    return (
        <div>
            <h3>Home</h3>
            <button onClick={ handler } >Click</button>
        </div>
    )
}