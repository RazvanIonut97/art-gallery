import './Paint.css'
function Paint({paint}) {
    return (
        <div className="Paint">
            <img src={paint.source} alt="nu" />
            
            <a className="About" href={paint.source}>
            <h2>{paint.title}</h2>
            <h3>{paint.author}</h3>
            
            </a>
            
        </div>
    )
}
export default Paint
