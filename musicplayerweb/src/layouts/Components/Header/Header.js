import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile} from "react-icons/cg"

// export default function Header() {
function Header() {
    return <Container>
        <div className="search__bar">
            <AiOutlineSearch />
            <input type="text" placeholder="Nhập tên bài hát, ca sĩ, thể loại..."/>
        </div>
        <div className="avatar">
            <a href="https://facebook.com">
                <CgProfile />
                <span>Username</span>
            </a>
        </div>
    </Container>;
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    height: 5vh;
    position: sticky;
    top: 0;
    transition: 0.3s ease-in-out;
    background-color: #21212a;
    .search__bar {
        margin-left: 15rem;
        background-color: #3e3f44;
        width: 35%;
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        input {
            color: white;
            background-color: #3e3f44;
            border: none;
            height: 1.5rem;
            width: 100%;
            &:focus {
                outline: none;             
            }
        }
        input::placeholder {
            color: #9ca3af;
        }
        svg {
            font-size: 1.5rem;
        }
    }
    .avatar {
        background-color: #3e3f44;
        padding: 0.3rem 0.4rem;
        padding-right: 1rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            color: #a5a6c4;
            svg {
                font-size: 1.3rem;
                background-color: #21212a;
                padding: 0.2rem;
                border-radius: 1rem;
                color: white;
            }
        }
    }
`;

export default Header;