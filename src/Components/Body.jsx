export const Body = ({heading,table}) => {
    return (
        <div>
            <div className="container-fluid">
                <h1 className="h3 mb-2 " style={{color: 'black', fontWeight: 'bold'}}>{heading}</h1>
                <br/>
                    {table}
            </div>
        </div>
    )
}