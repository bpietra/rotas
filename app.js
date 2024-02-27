import * as React from 'react'; import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';





function HomeScreen({ navigation }) {

return (

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<Text>Home Screen</Text>

<Button

title="Annely"

onPress={() => navigation.navigate('Details')} />

</View>

 );

}





function DetailsScreen({ navigation }) {

return (

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<Text> Eu confio na Annely porque eu sinto que posso ser eu mesmo ao redor dela, sem medo de julgamento, sinto tambem que posso contar com ela nos momentos difíceis e compartilhar as alegrias nos momentos felizes. Gostaria que ela imitasse uma borboleta.</Text>

<Button title="Go back" onPress={() => navigation.goBack()} />

</View>

);

}















const Stack = createNativeStackNavigator();

function App() {

return (

<NavigationContainer>

<Stack.Navigator initialRouteName="Home">

<Stack.Screen name="Home" component={HomeScreen} />

<Stack.Screen name="Details" component={DetailsScreen} />

</Stack.Navigator>

</NavigationContainer>

);

}

export default App;
