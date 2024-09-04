const SingleItem = ( { price, type, id } ) => {

    const urlImage = `../images/${ type }.png`;


    return ( 
        <div className="single-item">
            <img src={ urlImage } alt="Services" />
            <h3>Precio: { price }</h3> 
            <a href="">Borrar</a>
            <a href="">Editar</a>
        </div>
     );
}
 
export default SingleItem;