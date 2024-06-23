export function home( { useNavigate, useFetch } ) {
    const navigate = useNavigate()
    const handler = async () => {
        const response = await useFetch('POST', 'http://riser.ddns.net:3000/api/cc36baaf-a634-474f-8b02-37e95b7cf8dd/register', { daa: 2 } )
        console.log( response )
    }
    
    return (
        <div>
            <h3>Home</h3>
            <button onClick={ handler }>Click</button>
            <button onClick={ ( ) => navigate( '/about' ) }>GoTo</button>
        </div>
    )
}