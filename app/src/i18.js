import I18n from 'react-native-i18n'
// import language
import en from './lang/en'
import vi from './lang/vi'
    I18n.fallbacks = true
    I18n.locale = 'vi'
    I18n.translations = {
      en,
      vi
};
export default I18n