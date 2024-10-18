# React native + expo

```
npx create-expo-app
```

## Install Linter 

```
npx expo lint
```

```
npx expo install expo-constants

npx expo install react-native-safe-area-context
```

```
npx expo install react-native-svg
```

https://react-svgr.com/playground/?native=true
https://jakearchibald.github.io/svgomg/

```
npm install nativewind
npm install --save-dev --save-exact tailwindcss@3.3.2

npx tailwindcss init
```

```
npx create-expo-app -e with-router-tailwind
```

```
npx expo install expo-router react-native-screens expo-linking
```

Para el enrutado cambiar el punto de entrada en el package por 'main': 'expo-router/entry'

Para utilizar los linking neceitamos declarar en el app.json los scheme, que son los nombres de las apps

para el enrutador neceitamos tener la carptea app y en principio el _layout.