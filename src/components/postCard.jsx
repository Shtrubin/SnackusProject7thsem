import "../styles/postCard.css"
const Postcard= ({id,title,description}) => {
    return(
        <div className="post-card">
            <div className="post-id">
                {id}
            </div>
            <div className="post-title-desc">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )

}
export default Postcard;

