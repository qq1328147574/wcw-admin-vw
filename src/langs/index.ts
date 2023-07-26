import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'
import { sessionData } from '@/filters/storage'

// 方式二
import zhLocaleI18n from './cn'
import enLocaleI18n from './en'

Vue.use(VueI18n)

/**
 * 方式二
 * https://segmentfault.com/a/1190000020297356?utm_source=tag-newest TS中使用
 * {{ $t('m.message') }}
 */
let messages = {
  en: {
    ...enLocaleI18n,
  },
  zh: {
    ...zhLocaleI18n,
  }
};

let getLocaleI18n = sessionData('get', 'accessLocaleI18n', '');
let localeI18n = '';
if(getLocaleI18n === null || getLocaleI18n == 'zh-CN') {
  localeI18n = 'zh'
} else {
  localeI18n = 'en'
}

/** this.$i18n.locale
 *  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh',
 */
const i18n = new VueI18n({
  locale: localeI18n == '' ? 'zh' : localeI18n,
  messages
});


export default i18n
