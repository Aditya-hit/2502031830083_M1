function hello() {
    
    const getName = (yourname) =>{
        return yourname;
    }
    function handleClick(){
        alert("Button was clicked")
    }

    const handleInput = (event) => {
        console.clear()
        console.log("Value :", event.target.value)
    }
    const name = "Aditya"
    const name1 = "Aryan"
    
    const handleMouseOver = () => console.log("Mouse is Over the Text!")
    const handleDoubleClick = () => console.log("Text Double Clicked!")

    return(
        <>
            <h1>Hello {getName(name)}</h1>
            <h2>Bye {getName(name1)}</h2>
            <p onMouseOver={handleMouseOver} onDoubleClick ={handleDoubleClick}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias optio obcaecati, sequi earum quae dolor tempora fuga ullam sit, corporis vel eveniet, praesentium dignissimos quo neque mollitia! Nostrum, asperiores doloremque.</p>
            <button onClick ={handleClick}>Click Me</button>
            <button onClick={()=> alert("Hello from Inline Function!")}>Say Hello</button>
            <br />
            <input type="text" onChange = {handleInput} placeholder="Type Something" />
        </>
    )
}

export default hello

