import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../views/Home';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Home} />
      
    </Drawer.Navigator>
  );
}