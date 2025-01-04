import { ReactNode } from "react"

export const enum Ranks {
  'hatarçy',
  'kiçi seržant',
  'seržant',
  'uly seržant',
  'starşina',
  'leýtenant',
  'uly leýtenant',
  'kapitan',
  'maýor',
  'podpolkownik',
  'polkownik',
}

//generics
type WithId<T> = T & {id: number} 
type WithName<T> = T & {name: string}

//similar types
export const enum Contracts {
  'çagyryş boýunça h/g',
  'borçnama boýunça h/g'
}

export type FractionLevel = 'wzwod' | 'rota' | 'batalyon' | 'bolumce'

type PersonPositionType = WithName<LinkedListItemType> 

export type DefFuctionType = (...args:any[]) => any

//main types
type LinkedListItemType = {
  key: string
  children: string[]
  parent: string[]
}

type ActionsType = {
  issapar: unknown,
  hassahana: unknown,
  rugsat: unknown,
  tussag: unknown,
  tabsyryk: unknown,
  jogapkar: unknown
}

type HistoryItem = WithId<{
  date: {
    startDate: Date,
    endDate: Date
  },
  placement: {
    type: LeftReasons,
    label: string,
  },
  description: string
}>

type LinkedListType<T = {}> = (LinkedListItemType & T)[]

type Rank = {
  contractType: Contracts //b/g ya-da cagyrysh
  // name: string,
  rank: Ranks  
}

type DateEl = WithId<{
  date: Date,
  actions: ActionsType,
  isFreeDay: boolean
}> 

type PositionType = WithId<{
  name: string,
  fullName: string,
  fractionId: string | number
}>


export type PersonBase = WithId<{
  name: {
    shortName: string,
    forBuyruk: string
    partial: {
      name: string,
      lastname: string,
      surname: string
    },
  },
  positionId?: number,
  limitPositionId?: number | number[]
  globalStartDate?: Date,
  rank?: Rank,
  history?: HistoryItem[]
}>

export type PersonFull = PersonBase & {
  born?: {
    date: Date,
    place: string,
    phoneNumbers: string[]
  },
  positionData?: PositionType,
  fractionId?: number
}

export type BgPerson = PersonFull & {}
export type CgPerson = PersonFull & {}


export const enum Duties {
  'Harby bölümiň gün tertibine gözegçiler' = 0,
  'Harby bölümiň nobatçysy' = 1,
  'Harby bölümiň nobatçysynyň kömekçisi' = 2,
  'Içerki garawul serkerdesi' = 3,
  'Içerki garawul serkerdesiniň kömekçisi' = 4,
  'Içerki garawul çalşyryjy' = 5,
  'Içerki garawul sakçy' = 6,
  'Park nobatçy' = 7,
  'Park gündeçisi' = 8,
  'Nobatçy çekiji' = 9,
  'Nobatçy awtoulag' = 10,
  'Nobatçy lukman' = 11,
  'Naharhana nobatçy' = 12,
  'Garnizon garawullar boýunça nobatçy' = 13,
  'Garnizon garawullar boýunça nobatçyň kömekçisi' = 14,
  'Garnizon garawul serkerdesi' = 15,
  'Garnizon garawul serkerdesiniň kömekçisi' = 16,
  'Garnizon garawulynyň daşyna çykaryjysy' = 17,
  'Garnizon garawulynyň çalşyryjysy' = 18,
  'Garnizon garawul sakçy' = 19,
  'Barlag goýberiş nokadynyň nobatçysy' = 20,
  'Barlag goýberiş nokadynyň nobatçysynyň kömekçisi' = 21,
  'Rota boýunça nobatçy' = 22,
  'Rota boýunça gündeçi' = 23,
  'Naharhana işçisi' = 24,
  'Aragatnaşyk bogunynyň nobatçysy' = 25,
  'Nobatçy bölümçäniň serkerdesi' = 26,
  'Nobatçy bölümçe' = 27,
  'Ýangyn tabşyryk' = 28,
  'Dolandyryş binasynyň nobatçysy' = 29,
  'Gatnadyjy' = 30,
  'Garnizon boýunça gözegçi' = 31,
  'Garnizon patrul serkerdesi' = 32,
  'Garnizon patrul' = 33,
  'Içerki patrul serkerdesi' = 34,
  'Içerki patrul' = 35,
  'Harby bölüm boýunça nobatçynyň tehniki serişdeler boýunça kömekçisi' = 36,
  'Nobatçy aşpez' = 37,
}

export type RankItemType = {
  type: unknown,
  label: {
    short: string,
    full: string,
  },
  contractType: Contracts
}

export const enum LeftReasons {
  'rugsat',
  'iş sapar',
  'hbotg',
  'tussag',
  'hassahana',
  'tabşyryk',
  'jogapkär'
}


export type MenuItemType = {
  id: string,
  label: string,
  isActive: boolean,
  icon?: ReactNode,
  isOpen?: boolean
  isDisabled?: boolean
  children?: MenuItemType[]
  getRoute?: (...args:any[]) => string
}


// Garawul
export type GarawulType = 'IG' | 'GG'
export type GarawulPostType = {
  id: number, 
  number: number, //nomeri
  changes: number, //nace sany calsyk ba
  isActive?: boolean, //yapykmy ya acykmy
  isRest?: boolean //hg tarapyndan goralyanmy 
  _ex?: any[] //goshmaca action ucin wagtlayyn
}
export type GarawulBase = {
  id: number,
  number: number, //nomeri
  type: GarawulType,
  posts: GarawulPostType[]
    
}
