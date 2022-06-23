import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import common from './locales/en/common.json';
import panels from './locales/en/panels.json';

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'en',
        resources: {
            common: typeof common
            panels: typeof panels
        }
    }
}

export const resources = {
    en: {
        common,
        panels
    }
} as const;

export const defaultNS = 'en';
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false
    },
    defaultNS
})