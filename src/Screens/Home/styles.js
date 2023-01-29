import {StyleSheet} from 'react-native';
import color from '../../Themes/color';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgMain: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  computer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 4,
    padding: 5,
    borderColor: color.white,
    width: width / 1.5,
    marginVertical: 5,
    backgroundColor: color.rgbablack,
  },
  comText: {
    color: color.darkpink,
    fontSize: 22,
    fontWeight: '700',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  flatList: {
    width: width,
    height: height / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fltbutton: {
    width: width,
    flex: 1 / 5,
    alignItems: 'center',
  },
  fltimage: {
    width: width / 1.32,
    alignItems: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  point: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: width / 1.3,
    height: height / 3.5,
    margin: 20,
    backgroundColor: '#f4f4f1',
    borderRadius: 40,
    padding: 35,
    alignItems: 'center',
    shadowColor: color.rgbablack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 1,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: color.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: color.lightBlack,
    letterSpacing: 1,
    borderRadius: 5,
    elevation: 2,
    padding: 10,
  },
  modalbutton: {
    flexDirection: 'row',
  },
  modalEasy: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    elevation: 2,
    padding: 10,
  },
  modalbtntext: {
    fontSize: 16,
    fontWeight: '600',
  },
});
