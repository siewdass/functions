export function home( param ) {
    const handler = async () => {
        const response = await fetch( 'http://woveer.ddns.net:3000/api/testing', {
            method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify( { daa: 2 } )
		} )
        console.log( await response.json( ) )
    }
    return (
        <div>
            <h3>Home</h3>
            <button onClick={ handler }>Click</button>
            <button onClick={ ( ) => console.log(param) }>GoTo</button>
        </div>
    )
}