export function home( { useNavigate, useFetch } ) {
    const navigate = useNavigate()
    const handler = async () => {
        const response = await useFetch('POST', 'http://woveer.ddns.net:3000/api/tester/register', { daa: 2 } )
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