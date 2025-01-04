import { PositiveUniversalMeasure } from "docx";
type T = {
  DOC: {
    BASE_PROPS: {
      fontSize: PositiveUniversalMeasure,
      [key: string]: any,
    },
    [key: string]: any,
  },
  [key: string]: any,
}

const CONSTANTS:T = {
  DOC: {
    BASE_PROPS: {
      fontSize: '14pt',
      color: '#000000',
      one_cm: 570
    },
    LANG: {value: 'tm-TM'}
  },
  GLOBAL: {
    TEAM: '02952'
  },
  DB: {
    VERSION: 1,
    NAME: 'goshun_gulluk_client_database',
    STORE_OBJECTS: {
      oficers: 'OFICERS',
      soldiers: 'SOLDIERS',
      days: 'DAYS',
      fractions: 'FRACTIONS'
    }
  },
}

export const enum ChakraColorPalette {
  gray = 'gray',
  red = 'red',
  green = 'green',
  blue = 'blue',
  teal = 'teal',
  pink = 'pink',
  purple = 'purple',
  cyan = 'cyan',
  orange = 'orange',
  yellow = 'yellow'
}



export const BASE_COLORS = {
  color_1: '#fff',
  color_2: '#1a1a1a',
}

export default CONSTANTS;