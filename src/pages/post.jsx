import { useEffect, useState } from 'react'
import Postcard from '../components/postCard'

const Post=()=>{
    const[allPost, setAllPost] = useState([])
    useEffect(
        ()=>{
             fetch('https://jsonplaceholder.typicode.com/posts').then(
                async (res)=>{
                    const posts= await res.json()
                    console.log("posts:::",posts)
                    
                    setAllPost(()=> posts)
                }
            )
        },[]// if set to empty array [],called once in each render
    )
    return(
        <div id='all-posts'>
            <h1 id='title'>All  posts</h1>
            <div id='user-grid'>
                {
                    allPost.map(
                        (p, index)=>{
                            return <Postcard id={p.id} key={index} title={p.title} description={p.body}/>
                        }
                    )               
                }

            </div>
        </div>
    )
}

export default Post;