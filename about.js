export function about( params ) {
    console.log(params)
    return <div onClick={ ( ) => navigate( '/about' ) }>About</div>
}
