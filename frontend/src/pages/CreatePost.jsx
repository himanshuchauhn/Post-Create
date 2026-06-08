import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreatePost = () => {
    const navigate = useNavigate()

    /* const handleClick = () => {
    window.location.href = "/feed";
  };*/

  const handleClick = () => {
    navigate("/feed");
  };
    

const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    axios.post("http://localhost:3000/create-post", formData)
    .then((res) => {
        navigate("/feed")
        console.log(res)
        alert("Post created Successfully")
        e.target.reset()
    })
    .catch((err) =>{
        console.log(err)
        alert("Error Creating post")
    })
}

  return (
    <section className='create-post-section'>
        <h1> Create Post </h1>
        <form onSubmit={handleSubmit}>
            <input type='file' name='image' accept='image/*'/>
            <input type='text' name='caption' placeholder='Enter Caption' required/>
            <button type="submit"> Submit </button>
            <button onClick={handleClick}> View Post </button>
        </form>
    </section>
  )
}

export default CreatePost
