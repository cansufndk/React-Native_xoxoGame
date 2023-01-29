import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Animated,
  Modal,
  FlatList,
  Pressable,
} from 'react-native';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {connect, useSelector} from 'react-redux';
import {
  easyGame,
  hardGame,
  mediumGame,
  modalVisible,
} from '../../Redux/actions/app';

const {width, height} = Dimensions.get('window');

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const HomeScreen = connect(mapDispatchToProps)(props => {
  const state = useSelector(state => state.app);
  const {dispatch} = props;
  console.log('Home', state);
  const navigation = useNavigation();
  const [data, setData] = useState([
    require('../../Themes/gamethree.png'),
    require('../../Themes/gameSix.png'),
    require('../../Themes/gameNine.png'),
  ]);
  const [itemIndex, setItemIndex] = useState(0);
  const ref = useRef();

  const changeGame = () => {
    if (itemIndex == 0) {
      navigation.navigate('GameThree');
    } else if (itemIndex == 1) {
      navigation.navigate('GameSix');
    } else if (itemIndex == 2) {
      navigation.navigate('GameNine');
    } else {
      console.log('false');
    }
  };

  const modalEasy = () => {
    if (itemIndex == 0) {
      dispatch(easyGame(true));
      navigation.navigate('GameThree');
    } else if (itemIndex == 1) {
      dispatch(easyGame(true));
      navigation.navigate('GameSix');
    } else if (itemIndex == 2) {
      dispatch(easyGame(true));
      navigation.navigate('GameNine');
    } else {
      dispatch(modalVisible(false));
    }

    dispatch(modalVisible(false));
  };

  const modalMedium = () => {
    if (itemIndex == 0) {
      dispatch(mediumGame(true));
      navigation.navigate('GameThree');
    } else if (itemIndex == 1) {
      dispatch(mediumGame(true));
      navigation.navigate('GameSix');
    } else if (itemIndex == 2) {
      dispatch(mediumGame(true));
      navigation.navigate('GameNine');
    } else {
      dispatch(modalVisible(false));
    }

    dispatch(modalVisible(false));
  };

  const modalHard = () => {
    if (itemIndex == 0) {
      dispatch(hardGame(true));
      navigation.navigate('GameThree');
    } else if (itemIndex == 1) {
      dispatch(hardGame(true));
      navigation.navigate('GameSix');
    } else if (itemIndex == 2) {
      dispatch(hardGame(true));
      navigation.navigate('GameNine');
    } else {
      dispatch(modalVisible(false));
    }

    dispatch(modalVisible(false));
  };

  return (
    <ImageBackground
      source={require('../../Themes/bg.png')}
      style={styles.bgMain}>
      <View style={styles.center}>
        <FlatList
          data={data}
          pagingEnabled
          horizontal
          ref={ref}
          showsHorizontalScrollIndicator={false}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setItemIndex((x / width).toFixed(0));
          }}
          bounces={false}
          keyExtractor={(item, i) => item + i}
          renderItem={({item, index}) => {
            return (
              <View style={styles.flatList} key={index}>
                <TouchableOpacity disabled style={styles.fltbutton} key={index}>
                  <Image source={item} style={styles.fltimage} key={index} />
                </TouchableOpacity>
              </View>
            );
          }}
        />

        <View style={styles.point}>
          {data.map((item, index) => {
            return (
              <View
                key={item.toString()}
                style={{
                  width: itemIndex == index ? 50 : 9,
                  height: itemIndex == index ? 12 : 9,
                  borderRadius: itemIndex == index ? 7 : 5,
                  backgroundColor: itemIndex == index ? 'orange' : 'white',
                  marginLeft: 7,
                }}></View>
            );
          })}
        </View>
        <Modal
          animationType="slide"
          transparent
          visible={state.visible}
          onRequestClose={() => dispatch(modalVisible(false))}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Difficulty</Text>

              <View style={styles.modalbutton}>
                <TouchableOpacity style={styles.modalEasy} onPress={modalEasy}>
                  <MaterialCommunityIcons
                    name="emoticon-excited"
                    color={'darkgreen'}
                    size={38}
                  />
                  <Text style={styles.modalbtntext}>Easy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalEasy}
                  onPress={modalMedium}>
                  <MaterialCommunityIcons
                    name="emoticon-cool"
                    color={'darkorange'}
                    size={38}
                  />
                  <Text style={styles.modalbtntext}>Medium</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalEasy} onPress={modalHard}>
                  <MaterialCommunityIcons
                    name="emoticon-devil"
                    color={'#F90716'}
                    size={38}
                  />
                  <Text style={styles.modalbtntext}>Hard</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={styles.computer}
          onPress={() => dispatch(modalVisible(true))}>
          <MaterialCommunityIcons name="account" color={'white'} size={40} />
          <Text style={styles.comText}>VS</Text>
          <MaterialCommunityIcons
            name="robot-love"
            color={'orange'}
            size={40}
          />
        </Pressable>
        <TouchableOpacity style={styles.computer} onPress={changeGame}>
          <MaterialCommunityIcons name="account" color={'white'} size={40} />
          <Text style={styles.comText}>VS</Text>
          <MaterialCommunityIcons name="account" color={'orange'} size={40} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
});

export {HomeScreen};

/*<Button
          title="index"
          onPress={() => {
            setItemIndex(itemIndex + 1);
            ref.current.scrollToIndex({
              animated: true,
              index: parseInt(itemIndex) + 1,
            });
          }}
        />*/
