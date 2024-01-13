import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, useColorScheme, View} from 'react-native';
import Config from 'react-native-config';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return <></>;
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <View>{/* <Text>`{Config.ENV}`</Text> */}</View>;
}

export default App;
