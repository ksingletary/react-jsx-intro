const App = ()=>{
    return(
        <div>
            <Tweet username = "Ksingle" name="Keith" 
            tweet="Hello, World!" 
            date = "1/5/2023" />
    
            <Tweet username = "Ksingle" name="Keith" 
            tweet="Hi there, universe" 
            date = "12/11/2023" />
    
            <Tweet username = "Ksingle" name="Keith" 
            tweet="Whats up, America?" 
            date = "2/12/2023" />
    
    
        </div>
    )
    }
    
    ReactDOM.render(<App/>, document.getElementById("root"))