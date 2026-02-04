import React from 'react'
import { useState } from 'react'


const BlogForm = ({ onSubmit, initialValues, buttonText}) => {
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [author, setAuthor] = useState();

    const handleSubmit = (e) => {
      e.preventDefault();
      // create post object
      // call onSubmit(postObject)
    };


  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label htmlFor="">Title</label>
             <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
/>
              <label htmlFor="">Author</label>
             <input 
                type="text" 
                value={author}
                onChange={(e) => setTitle(e.target.value)}
/>
              <label htmlFor="">Content</label>
             <textarea name="" id="" value={content}></textarea>

              <button type='submit'>Submit</button>
        </form>
      </div>
  )
}

export default BlogForm