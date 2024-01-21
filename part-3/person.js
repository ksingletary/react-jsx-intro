const Person = (props) =>{
    let hobbiesArr = props.hobbies.map(h => <li>{h}</li>)
    
    
    
        return(
        <div>
    
    {props.name.length > 8?
    <p>
    Learn some information about this person. 
    This person's name is {props.name.slice(0,6)} and he/she is {props.age}years old.
    </p> 
    :
    <p>
    Learn some information about this person. 
    This person's name is {props.name} and he/she is {props.age}years old.
    </p> }
    
    
    {props.age >= 18? <h3>GO VOTE</h3> : <h3> you must be 18 to vote</h3>}
    
    <p>hobbies:</p>
    
    <ul>
    {hobbiesArr}
    </ul>
    
        </div>
    
    
        )
    }