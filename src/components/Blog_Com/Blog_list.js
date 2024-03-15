import React from 'react'
import { Link } from 'react-router-dom';
import blogPosts from './Blog_deta';
import './Blog.css';
import Newsletter from'../Newsletter-form/Newsletter';
export default function Blog_list() {
    return (
        <>
        <div class="blog-page">
        <div class="container">
        <div class="row">
          {blogPosts.map(post => (
            <div key={post.id}>
             <div class="blog-list">
              <Link to={`/blog/${post.id}`}><img src={post.imageUrl} alt={post.title}/>
              <h2>{post.title}</h2>
              </Link>
              <p>{post.content}</p>
              <h3><a class="banner-btn" href="/">Read More</a></h3>
              </div>
            </div>
          ))}
          </div>
        </div>
       
        </div>
        <Newsletter/>
        </>
        
      );
      
    };
    

