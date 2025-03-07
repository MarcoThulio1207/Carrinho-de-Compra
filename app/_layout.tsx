import {NavigationContainer} from '@react-navigation/native'
import { StatusBar } from "react-native";
import Routes from '../src/routes'
import Home from '../src/pages/home'
import CartProvider from '../src/contexts/CartContexts'

export default function RootLayout() {
  return (

      <CartProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
          <Routes/>
      </CartProvider>

  );
}
