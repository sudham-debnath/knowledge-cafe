import React from 'react';

const SingleBlog = (props) => {
    const {id, author_img, author_name, blog_title, cover_img, hash_tags,
        published_date, reading_time} = props.blog;
    console.log(id);
    return (
        <div>
            <div className="blog-container m-4">
                <div className="blog-card">
                    <div className="blog-img">
                        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='rounded' width="100%"  height="80%" alt="" />
                    </div>
                    <div className="author d-flex justify-content-between">
                        <div className="author-info d-flex">
                            <div className='author-img'>
                            <img src={author_img} alt="" width="50"
              height="50" />
                            </div>
                            <div>
                            <h5>Mrs.Jennifer</h5>
                            <p>Mar 14 (4 Days ago)</p>
                            </div>
                        </div>
                        <div className="time-bookmark">
                        <p>05 min read </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>How to get your first job as a self-taught programmer</h1>
                    <p>#beginners #programming</p>
                    <button className='btn btn-info'>Mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;