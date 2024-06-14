export function home( { useNavigate, useRequest } ) {
    const navigate = useNavigate()

    return (
        <div>
            <h3>Home</h3>
            <button onClick={ () => useRequest('POST', 'http://woveer.ddns.net:3000/api/tester/register', { daa: 2 } ) }>Click</button>
            <button onClick={ ( ) => navigate( '/about' ) }>GoTo</button>
        </div>
    )
}