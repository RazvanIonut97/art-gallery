import Paint from './Paint';

import './Gallery.css'
function Gallery({paintings}) {

    return (
    <div className="Gallery">

        
    {paintings.map(paint=>{
     return <Paint paint={paint} key={paint.id}/>
    })}
    
    </div>
    )
}
export default Gallery;
