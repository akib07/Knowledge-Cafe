import { useEffect, useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data =>console.log(data))
    }, [])

    return (
        <div>
            {/* <h1 className='text-5xl text-bold text-orange-500'>Knowledge Cafe</h1> */}
        </div>
    );
};

export default Blogs;