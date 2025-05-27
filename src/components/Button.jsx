function Button(){
    const handleClick = () =>{
        console.log("Click!");
    };

    return(<button onClick={handleClick}>Click</button>
    );
}

export default Button;