import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id:"1",
            image:"https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/03/google-photos-logo-fireworks.jpg",
            caption:"Scenery"
        }
    ])

    useEffect (() => {
        axios.get("http://localhost:3000/posts")
        .then ((res) => {
            console.log(res.data)
            setPosts(res.data.posts)
        })
    },[])
  return (
    <section className='feed-section'>
        {
            posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className='post-card'>
                        <img src = {post.image} alt={post.caption}/>
                        <p> {post.caption}</p>
                    </div>
                ))
            ) : (
                <h1> No Posts Available</h1>
            )
        }
        

    </section>
  )
}

export default Feed
