import { useState } from "react"
import { PostForm } from "../components/post_form"

export const AddPost=()=>{

    const [title, setTitle]= useState("");
    const [description, setDescription]= useState("");
    const [userId, setUserId]=useState("1")
    const [isLoading,setIsLoading]=useState(false)

    const handleSubmit=async(event)=>{
        event.preventDefault()
        
        if(title ===""){
            alert("Please enter a title")
            return
        }
        if(title <50){
            alert("Title should be less than 50")
            return
        }
        if(description ===""){
            alert("Please enter a description")
            return
        }
        if(userId ===""){
            alert("Please enter user id")
            return
        }
        try{
        setIsLoading(true)
        const result= await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        title:title,
                        body:description,
                        userId:userId
                    }
                ) ,
                headers:{
                    "Content-Type":"application/json",
                },
            }
        )
        const data=await result.json()
        console.log("data:",data)
        alert("Post created successfullys")
    }catch(err){
        alert("Something went wrong:")
    }finally{
        setIsLoading(false)

    }
        
        
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Add Post</h1>
            {isLoading && <p>Loading....</p>}
                <PostForm onChangeTitle={(e)=>setTitle(e.target.value)} onChangeDescription={(e)=>setDescription(e.target.value)} onChangeUserId={(e)=>setUserId(e.target.value)}/>

        </form>
    )
}