import { View } from "react-native"

export const ScreenLayout = ({ children }) => {
  return <View className='flex-1 bg-slate-800 pt-4 px-2'>{children}</View>
}