import React from 'react'
import Image from 'next/image'
import myImg from '@/app/images/illustration-article.svg'
import UserImg from '@/app/images/image-avatar.webp'
const CardBlog = () => {
  const publishedAt = new Date("2023-12-21");
  return (
    <div className='container'>
      <Image src={myImg} alt='Blog Image' style={{
        borderRadius:"5%"
      }}></Image>
        
        <header style={{
          backgroundColor:"hsl(47, 88%, 63%)",
          height:"auto",
          width:"95px",
          borderRadius:"8%",
          color:'hsl(0, 0%, 7%)',
          fontWeight:"700",
          fontSize:"16px",
          marginTop:"5%"
        }}>
          <h1 style={{
            margin:'5px',
            padding:'2px'
          }} >Learning</h1>
        </header>

        <article>
          <time dateTime={publishedAt.toISOString()}>Published 21 Dec 2023</time>
          <h2 className='BlogTitle'>HTML & CSS foundations</h2>
          <p style={{
            color:'hsl(0, 0%, 42%)'
          }}>These languages are the backbone of every website, defining structure, content, and presentation</p>
        </article>

        <footer style={{
          display:'flex',
          flexDirection:'row'
        }}>
            <Image src={UserImg} alt='photo of User'
            style={{
              width:"35px",
              height:"35px",
              borderRadius:"50%",
              position:'relative',
              top:"-6px"
            }}></Image>
            <span style={{
              color:'hsl(0, 0%, 7%)',
              fontWeight:"700"
            }}>Greg Hooper</span>
        </footer>
    </div>
  )
}

export default CardBlog