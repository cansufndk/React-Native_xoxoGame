import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  Alert,
} from 'react-native';
import {styles} from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {connect, useSelector} from 'react-redux';
import {easyGame, hardGame, mediumGame} from '../../Redux/actions/app';

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const copyBox = original => {
  const copy = original.map(arr => {
    return arr.slice();
  });
  return copy;
};

const GameNine = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;
  const [box, setBox] = useState(Array(15).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const state = useSelector(state => state.app);
  const navigation = useNavigation();

  useEffect(() => {
    state.modalEasy || state.modalMedium || state.modalHard
      ? currentPlayer === 'O' && playerBot()
      : console.log('useEffect olmadı');
  }, [currentPlayer, box]);

  useEffect(() => {
    const winner = calculateWinner(box);
    if (winner === 'X') {
      Alert.alert('X Won :)');
      resetGame();
    } else if (winner === 'O') {
      Alert.alert('O Won :)');
      resetGame();
    }
  }, [box]);

  const playerBot = () => {
    const playerB = [];

    box.forEach((e, index) => {
      if (e === '') {
        playerB.push({e: index});
      } else {
        console.log('Game over');
      }
    });

    let turnBot;

    if (mediumGame) {
      playerB.forEach(position => {
        const boxCopy = copyBox(box);
        boxCopy[position] = 'O';
        const winner = calculateWinner(boxCopy);

        if (winner === 'O') {
          turnBot = position;
        }
      });

      if (!turnBot) {
        playerB.forEach(position => {
          const boxCopy = copyBox(box);
          boxCopy[position] = 'X';
          const winner = calculateWinner(boxCopy);

          if (winner === 'X') {
            turnBot = position;
          }
        });
      }
    }

    if (hardGame) {
      playerB.forEach(position => {
        const win = calculateWinner((box[position] = 'O'));
        if (win === 'O') {
          turnBot = position;
        }
      });

      if (!turnBot) {
        playerB.forEach(position => {
          const win = calculateWinner((box[position] = 'X'));
          if (win === 'X') {
            turnBot = position;
          }
        });
      }
    }

    if (!turnBot) {
      turnBot = playerB[Math.floor(Math.random() * playerB.length)];
    }

    if (turnBot) {
      turnPlayer(turnBot.e);
    }
    console.log('turnbot', turnBot);
  };

  const turnPlayer = position => {
    if (!box[position]) {
      const turn = [...box];
      turn[position] = currentPlayer;
      setBox(turn);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    } else if (!currentPlayer) {
      alert('oyun bitti');
    }
  };

  const calculateWinner = squares => {
    const won = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [3, 6, 9],
      [4, 7, 10],
      [5, 8, 11],
      [9, 10, 11],
      [3, 7, 11],
      [5, 7, 9],
      [12, 13, 14],
      [6, 9, 12],
      [7, 10, 13],
      [8, 11, 14],
      [6, 10, 14],
      [8, 10, 12],
    ];

    for (let i = 0; i < won.length; i++) {
      const [a, b, c] = won[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      } /*else if (!box.includes(null)) {
        return alert('Game over :('), resetGame();
      }*/

      if (
        !box.includes(
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        )
      ) {
        setBox(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
        setCurrentPlayer('X');
        console.log('Game over :(');
      }
    }

    return null;
  };

  const resetGame = () => {
    setBox(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
    setCurrentPlayer('X');
  };

  const back = () => {
    dispatch(easyGame(false));
    dispatch(mediumGame(false));
    dispatch(hardGame(false));

    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={require('../../Themes/gamebg.png')}
      style={styles.imagebg}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={back}>
          <MaterialCommunityIcons
            name="arrow-left-circle"
            color={'white'}
            size={50}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Game</Text>
        <View style={styles.currentPlayer}>
          {state.modalEasy || state.modalMedium || state.modalHard ? (
            <Text style={styles.textPlayer}>Computer Game</Text>
          ) : currentPlayer === 'X' ? (
            <Image
              source={require('../../Themes/x.png')}
              style={{
                width: 100,
                height: 100,
              }}
            />
          ) : currentPlayer === 'O' ? (
            <Image
              source={require('../../Themes/o.png')}
              style={{
                width: 100,
                height: 100,
              }}
            />
          ) : null}
        </View>
        <View style={styles.main}>
          <View style={styles.one}>
            <Pressable style={styles.button} onPress={() => turnPlayer(0)}>
              {box[0] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />
              ) : box[0] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(1)}>
              {box[1] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[1] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(2)}>
              {box[2] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[2] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>
          </View>

          <View style={styles.one}>
            <Pressable style={styles.button} onPress={() => turnPlayer(3)}>
              {box[3] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[3] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(4)}>
              {box[4] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[4] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(5)}>
              {box[5] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[5] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>
          </View>

          <View style={styles.one}>
            <Pressable style={styles.button} onPress={() => turnPlayer(6)}>
              {box[6] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[6] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(7)}>
              {box[7] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[7] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(8)}>
              {box[8] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[8] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>
          </View>
          <View style={styles.one}>
            <Pressable style={styles.button} onPress={() => turnPlayer(9)}>
              {box[9] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[9] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(10)}>
              {box[10] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[10] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(11)}>
              {box[11] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[11] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>
          </View>
          <View style={styles.one}>
            <Pressable style={styles.button} onPress={() => turnPlayer(12)}>
              {box[12] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[12] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(13)}>
              {box[13] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[13] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(14)}>
              {box[14] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 80, height: 80}}
                />
              ) : box[14] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 80, height: 80}}
                />
              ) : null}
            </Pressable>
          </View>
        </View>
        <View style={styles.replayView}>
          <TouchableOpacity style={styles.replay} onPress={resetGame}>
            <MaterialCommunityIcons name="replay" color={'white'} size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
});

export {GameNine};
