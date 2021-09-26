import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color : '#fff',// Hex Color Code.
    textAlign : 'center',
    margin: '5%',
  },
  imageContainer:{
    height: '10%',
    marginTop: '30%',
    width: '20%',
  },
  image:{
    height: '100%',
    width: '100%',
  }
});


export default styles