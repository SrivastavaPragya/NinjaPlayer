import React, { useEffect } from 'react';
import PostItem from './PostItem';


const Posts = ({ posts }) => {
    useEffect(() => {
        console.log(posts);
    });

    return (

        <div>
        
      
        <div className="grid grid-cols-1 
        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-5 mt-5 px-10 ">
            {posts.map((item) => (
                <PostItem key={item.id} post={item} /> 
            ))}
        </div>
        </div>
        
    );
}

export default Posts;
