import React, { useEffect } from 'react'

const Posts = ({posts}) => {

    useEffect(()=>{
        console.log(posts);
    })
  return (
   
    <div>
      this is post component
    </div>
  )
}

export default Posts
