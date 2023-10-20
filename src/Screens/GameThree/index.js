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
import {easyGame, mediumGame, hardGame} from '../../Redux/actions/app';
import B2 from '../../ads/B/B2';
import G2 from '../../ads/G/G2';

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const copyBox = original => {
  const copy = original.map(arr => {
    return arr.slice();
  });
  return copy;
};

const GameThree = connect(mapDispatchToProps)(props => {
  G2()
  const {dispatch} = props;

  const [box, setBox] = useState(['', '', '', '', '', '', '', '', '']);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const navigation = useNavigation();
  const state = useSelector(state => state.app);

  useEffect(() => {
    state.modalEasy || state.modalMedium || state.modalHard
      ? currentPlayer === 'O' && playerBot()
      : console.log('easyGame olmadı');
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
      playerB.map(position => {
        box[position] = 'O';
        const win = calculateWinner('O');
        if (win === 'O') {
          turnBot = position;
        }
      });

      if (!turnBot) {
        playerB.map(position => {
          box[position] = 'X';
          const win = calculateWinner('X');
          if (win === 'X') {
            turnBot = position;
          }
        });
      }

      /* playerB.forEach(position => {
        const boxCopy = copyBox(box);
        boxCopy[position] = 'O';
        const winner = calculateWinner(boxCopy);

        if (winner === 'O') {
          turnBot = position;
        } else {
          turnBot != position;
        }
      });

      if (!turnBot) {
        playerB.forEach(position => {
          const boxCopy = copyBox(box);
          boxCopy[position] = 'X';
          const winner = calculateWinner(boxCopy);

          if (winner === 'X') {
            turnBot = position;
          } else {
            turnBot != position;
          }
        });
      }*/
    }

    if (hardGame) {
      playerB.map(position => {
        let won = (box[position] = 'O');
        const win = calculateWinner(won);
        if (win === 'O') {
          turnBot = position;
          console.log('win = o', (turnBot = position));
        } else {
          turnBot = win;
          console.log('win o ve x e eşit değil', (turnBot = win));
        }
      });

      if (!turnBot) {
        playerB.map(position => {
          let won = (box[position] = 'X');
          const win = calculateWinner(won);
          if (win === 'X') {
            turnBot = position;
            console.log('bot yoksa X', (turnBot = position));
          } else if (won === 'O') {
            turnBot = position;
            console.log('psotion o  eşit', (turnBot = position));
          }
        });
      }
      /* playerB.forEach(position => {
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
      }*/
    }

    if (!turnBot) {
      turnBot = playerB[Math.floor(Math.random() * playerB.length)];
    }

    if (turnBot) {
      turnPlayer(turnBot.e);
    }
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
    ];

    for (let i = 0; i < won.length; i++) {
      const [a, b, c] = won[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }

      if (!box.includes('', '', '', '', '', '', '', '', '')) {
        setBox(['', '', '', '', '', '', '', '', '']);
        setCurrentPlayer('X');
        console.log('Game over :(');
      }
    }
    return null;
  };

  const resetGame = () => {
    setBox(['', '', '', '', '', '', '', '', '']);
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
          {state.modalEasy || state.modalHard || state.modalMedium ? (
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
                    width: 100,
                    height: 100,
                  }}
                />
              ) : box[0] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 100, height: 100}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(1)}>
              {box[1] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 100, height: 100}}
                />
              ) : box[1] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 100, height: 100}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(2)}>
              {box[2] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 100, height: 100}}
                />
              ) : box[2] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 100, height: 100}}
                />
              ) : null}
            </Pressable>
          </View>

          <View style={styles.one}>
            <Pressable style={styles.button} onPress={() => turnPlayer(3)}>
              {box[3] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 100, height: 100}}
                />
              ) : box[3] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 100, height: 100}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(4)}>
              {box[4] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 100, height: 100}}
                />
              ) : box[4] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 100, height: 100}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(5)}>
              {box[5] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 100, height: 100}}
                />
              ) : box[5] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 100, height: 100}}
                />
              ) : null}
            </Pressable>
          </View>

          <View style={styles.one}>
            <Pressable style={styles.button} onPress={() => turnPlayer(6)}>
              {box[6] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 100, height: 100}}
                />
              ) : box[6] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 100, height: 100}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(7)}>
              {box[7] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 100, height: 100}}
                />
              ) : box[7] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 100, height: 100}}
                />
              ) : null}
            </Pressable>

            <Pressable style={styles.button} onPress={() => turnPlayer(8)}>
              {box[8] === 'X' ? (
                <Image
                  source={require('../../Themes/x.png')}
                  style={{width: 100, height: 100}}
                />
              ) : box[8] === 'O' ? (
                <Image
                  source={require('../../Themes/o.png')}
                  style={{width: 100, height: 100}}
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
        <B2/>
      </View>
    </ImageBackground>
  );
});

export {GameThree};

/*
 if (gameMode === "BOT_MEDIUM") {
      // Attack
      possiblePositions.forEach((possiblePosition) => {
        const mapCopy = copyArray(map);

        mapCopy[possiblePosition.row][possiblePosition.col] = "o";

        const winner = getWinner(mapCopy);
        if (winner === "o") {
          // Attack that position
          chosenOption = possiblePosition;
        }
      });

      if (!chosenOption) {
        // Defend
        // Check if the opponent WINS if it takes one of the possible Positions
        possiblePositions.forEach((possiblePosition) => {
          const mapCopy = copyArray(map);

          mapCopy[possiblePosition.row][possiblePosition.col] = "x";

          const winner = getWinner(mapCopy);
          if (winner === "x") {
            // Defend that position
            chosenOption = possiblePosition;
          }
        });
      }
    }

*/
