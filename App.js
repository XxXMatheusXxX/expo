import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet,Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <Image style={styles.container}
      source={{uri:'https://pbs.twimg.com/media/GIeqcg9XgAAe8EU?format=jpg&name=medium'}}    
    />
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    flex: 1,
    backgroundColor: '#1A8CD8',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  
});
