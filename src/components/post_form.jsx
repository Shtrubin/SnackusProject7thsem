import CustomFormField from "./custom_form_field"

export const PostForm = ({onChangeTitle, onChangeDescription, onChangeUserId}) =>{
    return(
        <div>
            <CustomFormField label= "title" placeholder={"Enter post title"} type={"text"} cName={"title"} onChange={onChangeTitle}/>
        
            <CustomFormField label= "description" placeholder={"Enter post description"} type={"text"} cName={"body"} onChange={onChangeDescription}/>
            
            <CustomFormField label= "User Id" placeholder={"Enter User Id"} type={"number"} cName={"userId"} onChange={onChangeUserId}/>
            <div>
                <input type="Submit" value={"Add Post"} style={
                    {
                        backgroundColor: "#4CAF50",
                        color: "white",
                        fontSize: "18px",
                        borderRadius:"10px",
                        padding: "10px 20px",
                        border:"none",
                        cursor: "pointer",
                    }
                } />
            </div>
        </div>
    )
}