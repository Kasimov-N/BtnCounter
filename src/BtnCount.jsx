let Button =(a)=>{
    return(
        <button onClick={a.fn}> Add <span>{a.count}</span></button>
    )
}
export default Button