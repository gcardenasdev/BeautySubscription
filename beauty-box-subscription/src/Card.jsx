
function Card(props){
    return(    

    <div className="card">
        <div>

            <h3 className="card-title">{props.title}</h3>
        </div>
        <div>
            <p className="card-description">{props.description}</p>
        </div>
    </div>
    
);


}

export default Card