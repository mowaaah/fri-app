import {Link} from 'react-router-dom';
function Card(props){
    return(
        <div className="col-12 col-md-6 col-lg-2 d-md-inline-flex d-sm-block d-lg-inline-flex my-4 mx-4">
            <div className="card cardhover" style={{width:"20rem", height:"32rem" ,backgroundColor:"#f4d1c1", color:"white"}}>
                <img src={props.img} className="card-img-top"/>
                <div className="card-body cardhover">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <Link to="/booklist" className="btn justify-content-center align-text-bottom cardBtn btn-outline-light">Go Book List</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;