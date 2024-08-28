import { useEffect, useState } from 'react';
import { ActivityIndicator, 
        TouchableOpacity, 
        View, FlatList, 
        RefreshControl, 
        Button} from 'react-native';
import styled from 'styled-components/native';
import Post from '../components/Post';
import SplashMessage from '../components/SplashMessage';
import { instance } from '../api/axios';



export const HomeScreen = ({navigation}) => {

  const [posts, setPosts] = useState([]);
  const [isLoading, setloading] = useState(true);

  const fetchPosts = () => {
    setPosts([]);
    setloading(true);
    instance.get("/articles")
    .then(({ data }) => {
      if (data && data.length)
        setPosts(data)
    })
    .catch(err => {
      console.error(err)
      // Alert.alert('Error', 'Posts cannot be fetched yet. Please,try again later.')
    })
    .finally(() => setloading(false))
  }

  useEffect(() => {
    fetchPosts();
  }, [])


  return (
    <>
      {posts.length ?
        <View>
          <FlatList
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
            data={posts}
            renderItem={({ item }) => 
            <TouchableOpacity onPress={() => navigation.navigate('fullpost', {id: item.id, title: item.title})}>
              <Post
                title={item.title}
                imageUrl={item.preview}
                createdAt={item.createdAt}
                id={item.id}
              />
            </TouchableOpacity>
          }
          />
        </View>

        : isLoading ?
            <SplashMessage><Loader>Loading</Loader><ActivityIndicator size='large' /></SplashMessage>
          : <SplashMessage><Loader>Error occured while fetching posts.</Loader><Button onPress={fetchPosts} title="Try Again"/></SplashMessage>
      }

    </>
  );
}



const Loader = styled.Text`
font-weight: 500;
font-size: 16px;
margin-bottom: 10px;
`