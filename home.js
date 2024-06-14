export function home( props ) {
    const handler = async () => {
        const response = await fetch( 'http://woveer.ddns.net:3000/api/tester/register', {
            method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify( { daa: 2 } )
		} )
        console.log( await response.json( ) )
    }
    console.log(props)
    return (
        <div>
            <h3>Home</h3>
            <button onClick={ handler }>Click</button>
            <button onClick={ ( ) => console.log( 'Buenasxxxdx', useHistory ) }>GoTo</button>
        </div>
    )
}