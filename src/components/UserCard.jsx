import "../styles/user_card.css";
const UserCard = ({user})=>{
    return( <>
        <div className="container">
        <div className="header">
            <h1>{user.name}</h1>
            <h3>@{user.username}</h3>
        </div>
        <div className="info" id="con">
            <p><strong>Email:</strong>{user.email}</p>
            <p><strong>Phone:</strong>{user.phone}</p>
            <p><strong>Website:</strong>{user.website}</p>
        </div>
        <div className="adddress"id="con">
            <p><strong>Address:</strong><br/>{user.address.suite}<br/>{user.address.city}. {user.address.zipcode}</p>
        </div>
        <div className="company"id="con">
            <p><strong>Company:</strong><br/>{user.company.name}</p>
            <p><strong>Catchphrase:</strong><br/>{user.company.catchPhrase}</p>
            <p><strong>Bussiness:</strong><br/>{user.company.bs}</p>
        </div>
        </div>
    </>
    );
}
export default UserCard