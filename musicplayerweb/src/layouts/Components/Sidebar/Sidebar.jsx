import React from "react";
import styled from "styled-components";
// import logo from "../assets/images/musical-note.png"
import { AiOutlineHome, AiOutlineHeart, AiOutlineCloudUpload } from 'react-icons/ai'
import { MdOutlineLibraryMusic } from 'react-icons/md'

export default function Sidebar() {
  return <Container>
    <div className="top__links">
      <div className="logo">
        {/* <img src={logo} alt="LuxMusic" /> */}
      </div>
      <ul>
      <li>
        <AiOutlineHome fontSize={"1.5rem"}/>
        <span>Trang Chủ</span>
      </li>
        <span>ÂM NHẠC</span>
        
      <li>
        <AiOutlineHeart fontSize={"1.5rem"}/>
        <span>Đã yêu thích</span>
      </li>
      <li>
        <MdOutlineLibraryMusic fontSize={"1.5rem"}/>
        <span>Bài hát đã nghe</span>
      </li>
      <li>
        <AiOutlineCloudUpload fontSize={"1.5rem"}/>
        <span>Đã tải lên</span>
      </li>
      <span>DANH SÁCH PLAYLIST</span>
    </ul>
    </div>
    
  </Container>;
}


const Container = styled.div`
    background-color: #21212a;
    color: #a5a6c4;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .top__links {
      display: flex;
      flex-direction: column;
      .logo {
        text-align: center;
        margin: 1rem 0;
        img {
          max-inline-size: 25%;
          block-size: auto;
        }
      }
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        li {
          display: flex;
          gap: 1rem;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            color: #ff5f96;
          }
        }
      }
    }

`;