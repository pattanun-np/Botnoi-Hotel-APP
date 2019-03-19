
import I18n from 'react-native-i18n';
import { getLanguages } from 'react-native-i18n';
import en from './Langauge/en';
import th from './Langauge/th'; 

 

I18n.fallbacks = true;

I18n.translations = {
  en,
  th,
};
// getLanguages().then(languages => {
//   console.log(languages); // ['en-US', 'en']
// });
export default I18n; 