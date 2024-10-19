import { IconHome, IconInfoCircle } from "@tabler/icons-react-native";
import { Tabs } from "expo-router";

export default function TabsLayput() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#314455' },
        tabBarActiveTintColor: 'yellow'
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconHome color={color} />
        }}
      />
      <Tabs.Screen
        name='about'
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <IconInfoCircle color={color} />
        }}
      />
    </Tabs>
  )
}