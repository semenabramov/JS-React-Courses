/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   useColorScheme
 } from 'react-native';

 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/Header/Header';
import PizzaList from './src/components/PizzaList/PizzaList';


const PIZZA_DATA=[
{
  id: '1',
  title: "Колбаски Барбекю",
  description: "Острая чоризо, соус барбекю, томаты, красный лук, моцарелла, томатный соус",
  price: "395 ₽",
  img: "https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_366x366.jpeg",
},
{
  id: '2',
  title: "Чикен бомбони",
  description: "Куриные кусочки, сладкий перец, смесь сыров чеддер и пармезан, моцарелла, красный лук, соус сладкий чили, соус альфредо",
  price: "445 ₽",
  img: "https://dodopizza-a.akamaihd.net/static/Img/Products/d60ca9c065364cda960c1e1c8167e1dd_366x366.jpeg",
},
{
  id: '3',
  title: "Пепперони фреш",
  description: "Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус",
  price: "245 ₽",
  img: "https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_366x366.jpeg",
},
{
  id: '4',
  title: "Сырная",
  description: "Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо",
  price: "245 ₽",
  img: "https://dodopizza-a.akamaihd.net/static/Img/Products/ebf8b8670d6b4f078d9afa616d01202a_366x366.jpeg",
}

]


 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   return (
     <SafeAreaView style={styles.appConteiner}>
       
       <Header title="My Pizza App"/>
       <PizzaList pizzaList={PIZZA_DATA} />
       
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
  appConteiner: {
     flex: 1,
   },
   
 });

 export default App;
