const App = ()=>{

    return(
       <div>
           <Person name="Hancock" age ={19} hobbies= {["hunting", "flying"]} />
           <Person name="Percy" age={17}  hobbies= {["swimming", "whitewater rafting", "reading"]} />
           <Person name="Poseidon" age={99}  hobbies= {["flying", "surfing", "smoking"]} />
       </div>
    )
   }
   
   ReactDOM.render(<App/>, document.getElementById("root"))