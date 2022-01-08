import React, { useState, useRef } from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './home';

import img1 from '../../assets/images/venom1.jpg';
import img2 from '../../assets/images/venom2.jpg';
import img3 from '../../assets/images/venom3.jpg';
import img4 from '../../assets/images/venom4.jpg';

import { data } from '../../data/Data';

const { width: scrennWidth } = Dimensions.get('window');
const imgStyle = {
  flex: 1,
  width: null,
  height: null,
  justifyContent: 'flex-start',
};

export default function Home() {
  const carouselRef = useRef(null);
  const [filme] = useState(data);
  const [background, setBackground] = useState(filme[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  const btnInformation = () => {
    const info =
      'Tom Hardy and his Venom co-stars embrace their inner monsters and reveal which MCU character the Marvel antihero should face off against.';
    Alert.alert('Venom', `${info}`);
  };

  const imgChange = img => {
    switch (img) {
      case 'img1':
        return img1;
      case 'img2':
        return img2;
      case 'img3':
        return img3;
      case 'img4':
        return img4;
      default:
        return 0;
    }
  };

  const filmes = ({ item }) => {
    return (
      <TouchableOpacity onPress={btnInformation}>
        <S.CarouselImg source={imgChange(item.img)} />
        <S.CarouselIcon name="play-circle-outline" size={30} color="#fff" />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={imgChange(background)}
        style={imgStyle}
        blurRadius={4}>
        <S.Title>{filme[activeIndex].title}</S.Title>

        <S.CarouselView>
          <Carousel
            layout="default"
            ref={carouselRef}
            data={filme}
            renderItem={filmes}
            sliderWidth={scrennWidth}
            itemWidth={230}
            inactiveSlideOpacity={0.6}
            onSnapToItem={index => {
              setBackground(filme[index].img);
              setActiveIndex(index);
            }}
          />
        </S.CarouselView>

        <S.Information>
          <S.Information.View>
            <S.Information.Title>
              {filme[activeIndex].title}
            </S.Information.Title>
            <TouchableOpacity onPress={btnInformation}>
              <Icon name="queue" color="#131313" size={30} />
            </TouchableOpacity>
          </S.Information.View>

          <S.Information.Text>{filme[activeIndex].text}</S.Information.Text>
          <S.Information.Release>
            {filme[activeIndex].release}
          </S.Information.Release>
          <S.Information.Direction>
            {filme[activeIndex].direction}
          </S.Information.Direction>
        </S.Information>
      </ImageBackground>
    </>
  );
}