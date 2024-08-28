import React from 'react'
import styled from "styled-components/native";

const Post = ({title, imageUrl, createdAt}) => {
    return (
        <PostView>
            <PostImage source={{ uri: imageUrl }} />
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostData>{createdAt}</PostData>
            </PostDetails>
        </PostView>
    )
}

const PostView = styled.View`
padding: 10px;
background-color: #d9ecec;
min-height: 45px;
width: max-content;
border-radius: 20px;
margin: 5px;
flex-direction: row;
`

const PostTitle = styled.Text`
font-size: 18px;
font-weight: 600;
`

const PostDetails = styled.View`
flex-direction: columm;
justify-content: center;
`

const PostData = styled.Text`
font-size: 15px;
font-weight: 400;
color: gray;
`

const PostImage = styled.Image`
width:60px;
height:60px;
border-radius:12px;
margin-right: 10px;
`

export default Post
