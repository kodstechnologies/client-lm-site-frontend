import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import BlogData from "../../data/blog/BlogData.json";
const PUBLIC_URL = import.meta.env.VITE_API_URL;


const allBlogData = BlogData;

const BlogListOne = ({colSize, itemShow}) => {
    return (
        <>
            {allBlogData.slice(0, itemShow).map((data) => (
                <div className={`${colSize}`} key={data.id}>
                    <div className={`blog-list ${(data.id % 2  === 0) ? "border-start" : ""}`}>
                        <div className="post-thumbnail">
                            <Link to={PUBLIC_URL + `/blog-details/${data.id}`}>
                                <img src={`${PUBLIC_URL}/${data.thumb}`} alt="Blog Post" />
                            </Link>
                        </div>
                        <div className="post-content">
                            <h5 className="title">
                                <Link to={PUBLIC_URL + `/blog-details/${data.id}`}>
                                    {data.title}
                                </Link>
                            </h5>
                            <p>{data.excerpt}</p>
                            <Link to={PUBLIC_URL + `/blog-details/${data.id}`} className="more-btn">
                                Learn more <FaAngleRight />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogListOne;