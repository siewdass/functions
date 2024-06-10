export function home( components ) {
    const handler = () => {
        console.log('sss')
    }
    return (
        <div>
            <button onClick={ handler } >Click</button>
        </div>
    )
}