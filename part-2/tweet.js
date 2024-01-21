const Tweet = (props) => {
    return (
        <div>
            <h2> {props.username} </h2>
            <h3> {props.name} </h3>
            <div>
                <p> {props.tweet}</p>
                <p> {props.date}</p>
            </div>
        </div>

    )
}