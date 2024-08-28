import { ActivityIndicator, Button } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import SplashMessage from '../components/SplashMessage';
import { instance } from '../api/axios';

const FullPostsScreen = ({ route, navigation }) => {
    const [data, setData] = React.useState(null);
    const [isLoading, setloading] = React.useState(true);
    const { id, title } = route.params;


    const fetchPost = () => {
        if (id) {
            setData(null);
            setloading(true);
            instance.get("/articles/" + id)
                .then(({ data }) => {
                    if (data)
                        setData(data)
                })
                .catch(err => {
                    console.error(err)
                    // Alert.alert('Error', 'Posts cannot be fetched yet. Please,try again later.')yarn add react-native-screens react-native-safe-area-context
                })
                .finally(() => setloading(false))
        } else setloading(false);
    }


    React.useEffect(() => {
        navigation.setOptions({
            title
        })
        fetchPost();
    }, [])



    return (
        <>
            {data ?
                <PostContent>
                    <PostImage source={{ uri: data.preview }} />
                    <PostTitle>{data.title}</PostTitle>
                    <PostData>{data.createdAt}</PostData>
                    <PostDesc>{data.description}</PostDesc>
                </PostContent>

                : isLoading ?
                    <SplashMessage><Loader>Loading</Loader><ActivityIndicator size='large' /></SplashMessage>
                    : <SplashMessage><Loader>Error occured while fetching post.</Loader><Button onPress={fetchPost} title="Try Again" /></SplashMessage>

            }

        </>
    );

}

const Loader = styled.Text`
font-weight: 500;
font-size: 16px;
margin-bottom: 10px;
`

const PostTitle = styled.Text`
font-size: 28px;
font-weight: 600;
`
const PostDesc = styled.Text`
font-size: 18px;
font-weight: 400;
color: gray;
`

const PostData = styled.Text`
font-size: 18px;
font-weight: 400;
color: #c4c4c4;
font-style: italic;
`

const PostImage = styled.Image`
width:"max-width";
height: 300px;
border-radius:12px;
margin-bottom: 10px;
object-fit: cover;
background: #d9ecec
`

const PostContent = styled.View`
padding: 10px;
`

export default FullPostsScreen