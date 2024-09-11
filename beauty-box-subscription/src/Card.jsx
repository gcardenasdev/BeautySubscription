
function Card(props){
    return(    

    <div className="card">
        <div className="card-header">
            <h3 className="card-title">{props.title}</h3>
        </div>
        <div className="card-body">
            <p className="card-description">{props.description}</p>
        </div>
    </div>
    
);


}

export default Card