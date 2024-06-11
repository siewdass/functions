export function home( components ) {
    const handler = async () => {
        const response = await fetch( 'http://woveer.ddns.net:3000/api/testing', {
            method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify( { daa: 2 } )
		} )
        console.log( response.json( ) )
    }
    return (
        <div>
            <h3>Home</h3>
            <button onClick={ handler } >Click</button>
        </div>
    )
}