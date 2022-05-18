import { AuthorInterface } from '../types';

export const AUTHORS = {
  IASON_SARANTOPOULOS: 'IASON_SARANTOPOULOS',
  MARIOS_KIATOS: 'MARIOS_KIATOS',
  ZOE_DOULGERI: 'ZOE_DOULGERI',
  SOTIRIS_MALASSIOTIS: 'SOTIRIS_MALASSIOTIS',
  LEONIDAS_KOUTRAS: 'LEONIDAS_KOUTRAS',
} as const;

export type AUTHORS = typeof AUTHORS[keyof typeof AUTHORS];

export type AuthorDataInterface = { [key in AUTHORS]: AuthorInterface };

export const AUTHOR_DATA: AuthorDataInterface = {
  [AUTHORS.IASON_SARANTOPOULOS]: {
    first_name: 'Iason',
    last_name: 'Sarantopoulos',
    url: 'https://arl.ee.auth.gr/people/sarantopoulos/',
  },
  [AUTHORS.MARIOS_KIATOS]: {
    first_name: 'Marios',
    last_name: 'Kiatos',
    url: 'https://scholar.google.com/citations?user=VBOCox4AAAAJ',
  },
  [AUTHORS.ZOE_DOULGERI]: {
    first_name: 'Zoe',
    last_name: 'Doulgeri',
    url: 'https://arl.ee.auth.gr/people/doulgeri/',
  },
  [AUTHORS.SOTIRIS_MALASSIOTIS]: {
    first_name: 'Sotiris',
    last_name: 'Malassiotis',
    url: 'https://scholar.google.com/citations?user=icuzuYgAAAAJ',
  },
  [AUTHORS.LEONIDAS_KOUTRAS]: {
    first_name: 'Leonidas',
    last_name: 'Koutras',
    url: 'https://arl.ee.auth.gr/people/koutras/',
  },
};
