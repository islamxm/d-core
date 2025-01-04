import { MenuItemType } from "../models"
import {nanoid} from 'nanoid'
import routes from "./routes"

export const GoshunGullukMenu:MenuItemType[] = [
  {
    id: nanoid(), 
    label: 'Tabşyryklar',
    isActive: false,
    children: [
      {
        id: nanoid(), 
        label: 'Täze tabşyrygy ýüklemek',
        isActive: false,
        getRoute: () => routes.goshunGullugy.duty
      },
      {
        id: nanoid(), 
        label: 'Kalendar',
        isActive: false,
      },
      {
        id: nanoid(), 
        label: 'Tabşyryklar sahypasy',
        isActive: false,
      },
      {
        id: nanoid(), 
        label: 'Tabşyryklar grafigi',
        isActive: false,
      }
    ]
  },
  {
    id: nanoid(),
    label: 'Garawul',
    isActive: false,
    getRoute: () => routes.goshunGullugy.garawul
  },
  {
    id: nanoid(),
    label: 'Döşe dakylýan nyşan',
    isActive: false,
    children: [
      {
        id: nanoid(),
        label: 'Goşmak',
        isActive: false,
      },
      {
        id: nanoid(),
        label: 'Sanawy',
        isActive: false,
      }
    ]
  },
  {
    id: nanoid(),
    label: 'Aýlyk resminamalar',
    isActive: false,
    children:[
      {
        id: nanoid(),
        label: 'Içerki garawul',
        isActive: false,
      },
      {
        id: nanoid(),
        label: 'Garnizon garawul',
        isActive: false,
      },
      {
        id: nanoid(),
        label: 'Içerki tabşyryk (ç/g)',
        isActive: false,
      },
      {
        id: nanoid(),
        label: 'Ýaragly tabşyryk (b/g)',
        isActive: false,
      }
    ]
  },
  {
    id: nanoid(),
    label: 'Seljerme',
    isActive: false,
    children:[
      {
        id: nanoid(),
        label: 'Hepdelik',
        isActive: false,
      },
      {
        id: nanoid(),
        label: 'Aýlyk',
        isActive: false,
      }
    ]
  },
  {
    id: nanoid(),
    label: 'Harby gullukçylar',
    isActive: false,
    getRoute: () => routes.goshunGullugy.stuff
  },
  {
    id: nanoid(),
    label: 'Statistika',
    isActive: false
  },
  {
    id: nanoid(),
    label: 'Arhiw',
    isActive: false,
    isDisabled: true
  }
]