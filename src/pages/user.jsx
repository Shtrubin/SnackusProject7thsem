import { useEffect, useState } from 'react'
import '../styles/user.css'
import UserCard from '../components/UserCard'

const Users=()=>{
    const[allUsers, setAllUsers] = useState([])
    useEffect(
        ()=>{
             fetch('https://jsonplaceholder.typicode.com/users').then(
                async (res)=>{
                    const users= await res.json()
                    console.log("users:::",users)
                    setAllUsers(()=> users)
                }
            )
        },[]// if set to empty array [],called once in each render
    )
    return(
        <div id='users'>
            <h1 id='title'>All  users</h1>
            <div id='user-grid'>
                {
                    allUsers.map(
                        (user, index)=>{
                            return <UserCard user={user} key={index}/>
                        }
                    )               
                }

            </div>
        </div>
    )
}

export default Users