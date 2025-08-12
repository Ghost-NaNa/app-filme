import { StyleSheet, Appearance} from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
    paddingTop: 20
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginBottom: 10,
  },
  textHeader: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  textBanner: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
  },
  imageBanner: {
    width: '50%',
    height: '40%',
    borderRadius: 10,
    marginBottom: 20,
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    marginBottom: 10,
  },
  movieImage: {
    aspectRatio: '9/16',
    borderRadius: 5,
    marginRight: 10,
  },
  movieText: {
    color: 'white',
    fontSize: 16,
  },
});



export default styles;