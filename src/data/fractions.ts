import { FractionLevel } from "../models"

type FractionType = 'top_management' | 'main_fraction'

export interface Fraction {
  id: number
  name: {
    staffName: string,
    number?: number,
    type?: FractionType
  }
  parentFractionId?: number,
  level?: FractionLevel
}

// const fractions:Fraction[]= [
//   {
//     id: 1,
//     name: {
//       staffName: 'Dolandyryş (serkerdelik)',
//       type: 'top_management'
//     },
    
//   },
//   {
//     id: 2,
//     name: {
//       staffName: 'Dolandyryş bölümi',
//       type: 'top_management'
//     }
//   },
//   {
//     id: 3,
//     name: {
//       staffName: '8-nji bölümçesi',
//       type: 'top_management'
//     }
//   },
//   {
//     id: 4,
//     name: {
//       staffName: 'Topografiýa gullugy',
//       type: 'top_management'
//     }
//   },
//   {
//     id: 5,
//     name: {
//       staffName: 'Gizlin bölümi',
//       type: 'top_management'
//     }
//   },
//   {
//     id: 6,
//     name: {
//       staffName: 'Iş önümçiligi',
//       type: 'top_management'
//     }
//   },
//   {
//     id: 7,
//     name: {
//       staffName: 'Terbiýeçilik işleri boýunça bölümçesi',
//       type: 'top_management'
//     }
//   },
//   {
//     id: 8,
//     name: {
//       staffName: 'Gulluklar',
//       type: 'top_management'
//     }
//   },
//   {
//     id: 9,
//     name: {
//       staffName: 'Maliýe gullugy',
//       type: 'top_management'
//     }
//   },
//   {
//     id: 10,
//     name: {
//       staffName: 'Tehniki bölümi',
//       type: 'top_management'
//     }
//   },
//   {
//     id: 11,
//     name: {
//       staffName: 'Raketa-artilleriýa ýaraglary gullugy',
//       type: 'top_management'
//     }
//   },
//   {
//     id: 12,
//     name: {
//       staffName: 'Awtomobil we bronetank gullugy',
//       type: 'top_management'
//     }
//   },
//   {
//     id: 13,
//     name: {
//       staffName: 'Tyl',
//       type: 'top_management'
//     }
//   },
//   //esasy bölünmeler
//   {
//     id: 14,
//     name: {
//       staffName: '1-nji reaktiw-artilleriýa diwiziony',
//       number: 1,
//       type: 'main_fraction'
//     },
//     level: 'batalyon'
//   },
//   {
//     id: 15,
//     name: {
//       staffName: 'Dolandyryş bölümi',
//       type: 'main_fraction'
//     },
//   },
//   {
//     id: 16,
//     name: {
//       staffName: '1-nji reaktiw-artilleriýa batareýasy',
//       number: 1,
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 17,
//     name: {
//       staffName: '1-nji reaktiw artilleriýa wzwody',
//       number: 1,
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 18,
//     name: {
//       staffName: '1-nji hasap',
//       number: 1,
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 19,
//     name: {
//       staffName: '2-nji hasap',
//       number: 2,
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 20,
//     name: {
//       staffName: '3-nji hasap',
//       number: 3,
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 21,
//     name: {
//       staffName: '2-nji reaktiw-artilleriýa wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 22,
//     name: {
//       staffName: '4-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 23,
//     name: {
//       staffName: '5-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 24,
//     name: {
//       staffName: '6-njy hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 25,
//     name: {
//       staffName: 'Ok-däri daşaýjy bölümçe',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 26,
//     name: {
//       staffName: 'Dolandyryş wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 27,
//     name: {
//       staffName: 'Dolandyryş bölümçesi (batareýa serkerdesiniňki)',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 28,
//     name: {
//       staffName: 'Dolandyryş bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 29,
//     name: {
//       staffName: '2-nji reaktiw artilleriýa batareýasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 30,
//     name: {
//       staffName: '1-nji reaktiw artilleriýa wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 31,
//     name: {
//       staffName: '1-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 32,
//     name: {
//       staffName: '2-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 33,
//     name: {
//       staffName: '3-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 34,
//     name: {
//       staffName: '2-nji reaktiw artilleriýa wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 35,
//     name: {
//       staffName: '4-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 36,
//     name: {
//       staffName: '5-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 37,
//     name: {
//       staffName: '6-njy hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 38,
//     name: {
//       staffName: 'Ok-däri daşaýjy bölümçe',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 39,
//     name: {
//       staffName: 'Dolandyryş wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 40,
//     name: {
//       staffName: 'Dolandyryş bölümçesi (batareýa serkerdesiniňki)',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 41,
//     name: {
//       staffName: 'Dolandyryş bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 42,
//     name: {
//       staffName: '3-nji reaktiw artilleriýa batareýasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 43,
//     name: {
//       staffName: '1-nji reaktiw artilleriýa wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 44,
//     name: {
//       staffName: '1-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 45,
//     name: {
//       staffName: '2-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 46,
//     name: {
//       staffName: '3-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 47,
//     name: {
//       staffName: '2-nji reaktiw artilleriýa wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 48,
//     name: {
//       staffName: '4-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 49,
//     name: {
//       staffName: '5-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 50,
//     name: {
//       staffName: '6-njy hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 51,
//     name: {
//       staffName: 'Ok-däri daşaýjy bölümçe',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 52,
//     name: {
//       staffName: 'Dolandyryş wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 53,
//     name: {
//       staffName: 'Dolandyryş bölümçesi (batareýa serkerdesiniňki)',
//       type: 'main_fraction'
//     },
//     level:'bolumce'
//   },
//   {
//     id: 54,
//     name: {
//       staffName: 'Dolandyryş bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 55,
//     name: {
//       staffName: 'Diwizionyň dolandyryş wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 56,
//     name: {
//       staffName: 'Dolandyryş bölümçesi (diwizionyň serkerdesiniňki)',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 57,
//     name: {
//       staffName: 'Dolandyryş bölümçesi (diwizionyň dolandyryş bölüminiňki)',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 58,
//     name: {
//       staffName: 'Artilleriýa razwedka bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 59,
//     name: {
//       staffName: 'Dolandyryş bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 60,
//     name: {
//       staffName: 'Üpjünçilik wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 61,
//     name: {
//       staffName: 'Tehniki hyzmat ediş bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 62,
//     name: {
//       staffName: 'Awtomobil bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 63,
//     name: {
//       staffName: 'Hojalyk bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 64,
//     name: {
//       staffName: '2-nji reaktiw artilleriýa diwiziony',
//       type: 'main_fraction'
//     },
//     level: 'batalyon'
//   },
//   {
//     id: 65,
//     name: {
//       staffName: 'Dolandyryş bölümi',
//       type: 'main_fraction'
//     },
//   },
//   {
//     id: 66,
//     name: {
//       staffName: '4-nji reaktiw artilleriýa batareýasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 67,
//     name: {
//       staffName: '1-nji reaktiw artilleriýa wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 68,
//     name: {
//       staffName: '1-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 69,
//     name: {
//       staffName: '2-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 70,
//     name: {
//       staffName: '3-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 71,
//     name: {
//       staffName: '2-nji reaktiw artilleriýa wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 72,
//     name: {
//       staffName: '4-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 73,
//     name: {
//       staffName: '5-nji hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 74,
//     name: {
//       staffName: '6-njy hasap',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 75,
//     name: {
//       staffName: 'Ok-däri daşaýjy bölümçe',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 76,
//     name: {
//       staffName: 'Dolandyryş wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 77,
//     name: {
//       staffName: 'Dolandyryş bölümçesi (batareýa serkerdesiniňki)',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 78,
//     name: {
//       staffName: 'Dolandyryş bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 79,
//     name: {
//       staffName: '5-nji reaktiw artilleriýa batareýasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 80,
//     name: {
//       staffName: '1-nji reaktiw artilleriýa wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 81,
//     name: {
//       staffName: '2-nji reaktiw artilleriýa wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 82,
//     name: {
//       staffName: 'Dolandyryş wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 83,
//     name: {
//       staffName: '6-njy reaktiw artilleriýa batareýasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 84,
//     name: {
//       staffName: '1-nji reaktiw artilleriýa wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 85,
//     name: {
//       staffName: '2-nji reaktiw artilleriýa wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 86,
//     name: {
//       staffName: 'Diwizionyň dolandyryş wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 87,
//     name: {
//       staffName: 'Dolandyryş bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 88,
//     name: {
//       staffName: 'Üpjünçilik wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 89,
//     name: {
//       staffName: 'Awtomobil bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 90,
//     name: {
//       staffName: '3-nji reaktiw artilleriýa diwiziony',
//       type: 'main_fraction'
//     },
//     level: 'batalyon'
//   },
//   {
//     id: 91,
//     name: {
//       staffName: '7-nji reaktiw artilleriýa batareýasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 92,
//     name: {
//       staffName: '8-nji reaktiw artilleriýa batareýasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 93,
//     name: {
//       staffName: '9-nji reaktiw artilleriýa batareýasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 94,
//     name: {
//       staffName: 'Asmana atyjy raketa-artilleriýa batareýasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 95,
//     name: {
//       staffName: 'Asmana atyjy artilleriýa wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 96,
//     name: {
//       staffName: 'Asmana atyjy wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 97,
//     name: {
//       staffName: 'Dolandyryş wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 98,
//     name: {
//       staffName: 'Razwedka bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 99,
//     name: {
//       staffName: 'Aragatnaşyk bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 100,
//     name: {
//       staffName: 'Artilleriýa razwedkaçylyk batareýasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 101,
//     name: {
//       staffName: 'Ses ölçeýji razwedka wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 102,
//     name: {
//       staffName: 'Ses ölçeýiş bölünmesi (akkustika bazasy)',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 103,
//     name: {
//       staffName: 'Ses ölçeýiş nokady (duýdurma)',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 104,
//     name: {
//       staffName: 'Topogeodeziki wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 105,
//     name: {
//       staffName: 'Topogeodeziki bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 106,
//     name: {
//       staffName: 'Dolandyryş batareýasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 107,
//     name: {
//       staffName: 'Artilleriýa razwedka wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 108,
//     name: {
//       staffName: 'Hasaplaýyş bölümçesi (brigadanyň dolandyryş bölüminiňki)',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 109,
//     name: {
//       staffName: 'Artilleriýa razwedka bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 110,
//     name: {
//       staffName: 'Aragatnaşyk wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 111,
//     name: {
//       staffName: 'Radiostansiýa (R-156)',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 112,
//     name: {
//       staffName: 'Radiostansiýa (R-142N)',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 113,
//     name: {
//       staffName: 'Serkerdelik-dolandyryş maşynlary bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 114,
//     name: {
//       staffName: 'Radio bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 115,
//     name: {
//       staffName: 'Telefon bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 116,
//     name: {
//       staffName: 'Aragatnaşyk boguny (stasionar)',
//       type: 'main_fraction'
//     }
//   },
//   {
//     id: 117,
//     name: {
//       staffName: 'Inžener-tehniki wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 118,
//     name: {
//       staffName: 'Ýer gazyjy maşynlar bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 119,
//     name: {
//       staffName: 'Meýdan suw üpjünçilik bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 120,
//     name: {
//       staffName: 'Awtomobil bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 121,
//     name: {
//       staffName: 'Radiasiýa, himiýa we biologiki goranyş wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 122,
//     name: {
//       staffName: 'Radiasiýa we himiýa razwedka bölümçesi',
//       type: 'main_fraction'
//     },
//     level:'bolumce'
//   },
//   {
//     id: 123,
//     name: {
//       staffName: 'Ýörite arassalaýyş çärelerini geçiriş bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 124,
//     name: {
//       staffName: 'Dozimetrik bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 125,
//     name: {
//       staffName: 'Abatlaýyş rotasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 126,
//     name: {
//       staffName: 'Ýarag abatlaýyş bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 127,
//     name: {
//       staffName: 'Abatlaýyş wzwody (awtomobil we bronetank tehnikalary)',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 128,
//     name: {
//       staffName: 'Awtomobil abatlaýyş bölümçesi (sökmek-süzmek işleri)',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 129,
//     name: {
//       staffName: 'Awtomobil abatlaýyş bölümçesi (slesar-mehanik we agregatlaryň gündelik bejeriji işleri)',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 130,
//     name: {
//       staffName: 'Tehniki hyzmat ediş bölümçesi (diagnostika we sazlaýyş işleri)',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 131,
//     name: {
//       staffName: 'Awtomobil rotasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 132,
//     name: {
//       staffName: 'Abatlaýyş wzwody (ok-däri daşamak üçin)',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 133,
//     name: {
//       staffName: 'Abatlaýyş wzwody (ýag-ýangyç we harby tehniki emläker üçin)',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 134,
//     name: {
//       staffName: 'Awtomobil bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 135,
//     name: {
//       staffName: 'Tehniki hyzmat ediş bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 136,
//     name: {
//       staffName: 'Maddy üpjünçilik rotasy',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 137,
//     name: {
//       staffName: 'Awtomobil wzwody (azyk we goş emläkleri daşamak üçin)',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 138,
//     name: {
//       staffName: 'Hojalyk wzwody',
//       type: 'main_fraction'
//     },
//     level: 'rota'
//   },
//   {
//     id: 139,
//     name: {
//       staffName: 'Naharhana',
//       type: 'main_fraction'
//     },
//   },
//   {
//     id: 140,
//     name: {
//       staffName: 'Meýdan hammamy',
//       type: 'main_fraction'
//     },
//   },
//   {
//     id: 141,
//     name: {
//       staffName: 'Ammarlar',
//       type: 'main_fraction'
//     },
//   },
//   {
//     id: 142,
//     name: {
//       staffName: 'Komendant wzwody',
//       type: 'main_fraction'
//     },
//     level: 'wzwod'
//   },
//   {
//     id: 143,
//     name: {
//       staffName: 'Awtomobil bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 144,
//     name: {
//       staffName: 'Komendant bölümçesi',
//       type: 'main_fraction'
//     },
//     level: 'bolumce'
//   },
//   {
//     id: 145,
//     name: {
//       staffName: 'Lukmançylyk nokady',
//       type: 'main_fraction'
//     }
//   },
// ]
const fractions: Fraction[] = [
  {
    "id": 1,
    "name": {
      "staffName": "Dolandyryş (serkerdelik)",
      "type": "top_management"
    }
  },
  {
    "id": 2,
    "name": {
      "staffName": "Dolandyryş bölümi",
      "type": "top_management"
    }
  },
  {
    "id": 3,
    "name": {
      "staffName": "8-nji bölümçesi",
      "type": "top_management"
    }
  },
  {
    "id": 4,
    "name": {
      "staffName": "Topografiýa gullugy",
      "type": "top_management"
    }
  },
  {
    "id": 5,
    "name": {
      "staffName": "Gizlin bölümi",
      "type": "top_management"
    }
  },
  {
    "id": 6,
    "name": {
      "staffName": "Iş önümçiligi",
      "type": "top_management"
    }
  },
  {
    "id": 7,
    "name": {
      "staffName": "Terbiýeçilik işleri boýunça bölümçesi",
      "type": "top_management"
    }
  },
  {
    "id": 8,
    "name": {
      "staffName": "Gulluklar",
      "type": "top_management"
    }
  },
  {
    "id": 9,
    "name": {
      "staffName": "Maliýe gullugy",
      "type": "top_management"
    }
  },
  {
    "id": 10,
    "name": {
      "staffName": "Tehniki bölümi",
      "type": "top_management"
    }
  },
  {
    "id": 11,
    "name": {
      "staffName": "Raketa-artilleriýa ýaraglary gullugy",
      "type": "top_management"
    }
  },
  {
    "id": 12,
    "name": {
      "staffName": "Awtomobil we bronetank gullugy",
      "type": "top_management"
    }
  },
  {
    "id": 13,
    "name": {
      "staffName": "Tyl",
      "type": "top_management"
    }
  },
  {
    "id": 14,
    "name": {
      "staffName": "1-nji reaktiw-artilleriýa diwiziony",
      "number": 1,
      "type": "main_fraction"
    },
    "level": "batalyon"
  },
  {
    "id": 15,
    "name": {
      "staffName": "Dolandyryş bölümi",
      "type": "main_fraction"
    },
    "parentFractionId": 14
  },
  {
    "id": 16,
    "name": {
      "staffName": "1-nji reaktiw-artilleriýa batareýasy",
      "number": 1,
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 14
  },
  {
    "id": 17,
    "name": {
      "staffName": "1-nji reaktiw artilleriýa wzwody",
      "number": 1,
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 16
  },
  {
    "id": 18,
    "name": {
      "staffName": "1-nji hasap",
      "number": 1,
      "type": "main_fraction"
    },
    "parentFractionId": 17
  },
  {
    "id": 19,
    "name": {
      "staffName": "2-nji hasap",
      "number": 2,
      "type": "main_fraction"
    },
    "parentFractionId": 17
  },
  {
    "id": 20,
    "name": {
      "staffName": "3-nji hasap",
      "number": 3,
      "type": "main_fraction"
    },
    "parentFractionId": 17
  },
  {
    "id": 21,
    "name": {
      "staffName": "2-nji reaktiw-artilleriýa wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 16
  },
  {
    "id": 22,
    "name": {
      "staffName": "4-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 21
  },
  {
    "id": 23,
    "name": {
      "staffName": "5-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 21
  },
  {
    "id": 24,
    "name": {
      "staffName": "6-njy hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 21
  },
  {
    "id": 25,
    "name": {
      "staffName": "Ok-däri daşaýjy bölümçe",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 21
  },
  {
    "id": 26,
    "name": {
      "staffName": "Dolandyryş wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 16
  },
  {
    "id": 27,
    "name": {
      "staffName": "Dolandyryş bölümçesi (batareýa serkerdesiniňki)",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 26
  },
  {
    "id": 28,
    "name": {
      "staffName": "Dolandyryş bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 26
  },
  {
    "id": 29,
    "name": {
      "staffName": "2-nji reaktiw artilleriýa batareýasy",
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 14
  },
  {
    "id": 30,
    "name": {
      "staffName": "1-nji reaktiw artilleriýa wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 29
  },
  {
    "id": 31,
    "name": {
      "staffName": "1-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 30
  },
  {
    "id": 32,
    "name": {
      "staffName": "2-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 30
  },
  {
    "id": 33,
    "name": {
      "staffName": "3-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 30
  },
  {
    "id": 34,
    "name": {
      "staffName": "2-nji reaktiw artilleriýa wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 29
  },
  {
    "id": 35,
    "name": {
      "staffName": "4-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 34
  },
  {
    "id": 36,
    "name": {
      "staffName": "5-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 34
  },
  {
    "id": 37,
    "name": {
      "staffName": "6-njy hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 34
  },
  {
    "id": 38,
    "name": {
      "staffName": "Ok-däri daşaýjy bölümçe",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 34
  },
  {
    "id": 39,
    "name": {
      "staffName": "Dolandyryş wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 29
  },
  {
    "id": 40,
    "name": {
      "staffName": "Dolandyryş bölümçesi (batareýa serkerdesiniňki)",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 39
  },
  {
    "id": 41,
    "name": {
      "staffName": "Dolandyryş bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 39
  },
  {
    "id": 42,
    "name": {
      "staffName": "3-nji reaktiw artilleriýa batareýasy",
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 14
  },
  {
    "id": 43,
    "name": {
      "staffName": "1-nji reaktiw artilleriýa wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 42
  },
  {
    "id": 44,
    "name": {
      "staffName": "1-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 43
  },
  {
    "id": 45,
    "name": {
      "staffName": "2-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 43
  },
  {
    "id": 46,
    "name": {
      "staffName": "3-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 43
  },
  {
    "id": 47,
    "name": {
      "staffName": "2-nji reaktiw artilleriýa wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 42
  },
  {
    "id": 48,
    "name": {
      "staffName": "4-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 47
  },
  {
    "id": 49,
    "name": {
      "staffName": "5-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 47
  },
  {
    "id": 50,
    "name": {
      "staffName": "6-njy hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 47
  },
  {
    "id": 51,
    "name": {
      "staffName": "Ok-däri daşaýjy bölümçe",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 47
  },
  {
    "id": 52,
    "name": {
      "staffName": "Dolandyryş wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 42
  },
  {
    "id": 53,
    "name": {
      "staffName": "Dolandyryş bölümçesi (batareýa serkerdesiniňki)",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 52
  },
  {
    "id": 54,
    "name": {
      "staffName": "Dolandyryş bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 52
  },
  {
    "id": 55,
    "name": {
      "staffName": "Diwizionyň dolandyryş wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 14
  },
  {
    "id": 56,
    "name": {
      "staffName": "Dolandyryş bölümçesi (diwizionyň serkerdesiniňki)",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 55
  },
  {
    "id": 57,
    "name": {
      "staffName": "Dolandyryş bölümçesi (diwizionyň dolandyryş bölüminiňki)",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 55
  },
  {
    "id": 58,
    "name": {
      "staffName": "Artilleriýa razwedka bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 55
  },
  {
    "id": 59,
    "name": {
      "staffName": "Dolandyryş bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 55
  },
  {
    "id": 60,
    "name": {
      "staffName": "Üpjünçilik wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 14
  },
  {
    "id": 61,
    "name": {
      "staffName": "Tehniki hyzmat ediş bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 60
  },
  {
    "id": 62,
    "name": {
      "staffName": "Awtomobil bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 60
  },
  {
    "id": 63,
    "name": {
      "staffName": "Hojalyk bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 60
  },
  {
    "id": 64,
    "name": {
      "staffName": "2-nji reaktiw artilleriýa diwiziony",
      "type": "main_fraction"
    },
    "level": "batalyon",
    "parentFractionId": 1
  },
  {
    "id": 65,
    "name": {
      "staffName": "Dolandyryş bölümi",
      "type": "main_fraction"
    },
    "parentFractionId": 64
  },
  {
    "id": 66,
    "name": {
      "staffName": "4-nji reaktiw artilleriýa batareýasy",
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 64
  },
  {
    "id": 67,
    "name": {
      "staffName": "1-nji reaktiw artilleriýa wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 66
  },
  {
    "id": 68,
    "name": {
      "staffName": "1-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 67
  },
  {
    "id": 69,
    "name": {
      "staffName": "2-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 67
  },
  {
    "id": 70,
    "name": {
      "staffName": "3-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 67
  },
  {
    "id": 71,
    "name": {
      "staffName": "2-nji reaktiw artilleriýa wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 66
  },
  {
    "id": 72,
    "name": {
      "staffName": "4-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 71
  },
  {
    "id": 73,
    "name": {
      "staffName": "5-nji hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 71
  },
  {
    "id": 74,
    "name": {
      "staffName": "6-njy hasap",
      "type": "main_fraction"
    },
    "parentFractionId": 71
  },
  {
    "id": 75,
    "name": {
      "staffName": "Ok-däri daşaýjy bölümçe",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 71
  },
  {
    "id": 76,
    "name": {
      "staffName": "Dolandyryş wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 66
  },
  {
    "id": 77,
    "name": {
      "staffName": "Dolandyryş bölümçesi (batareýa serkerdesiniňki)",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 76
  },
  {
    "id": 78,
    "name": {
      "staffName": "Dolandyryş bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 76
  },
  {
    "id": 79,
    "name": {
      "staffName": "5-nji reaktiw artilleriýa batareýasy",
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 64
  },
  {
    "id": 80,
    "name": {
      "staffName": "1-nji reaktiw artilleriýa wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 79
  },
  {
    "id": 81,
    "name": {
      "staffName": "2-nji reaktiw artilleriýa wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 79
  },
  {
    "id": 82,
    "name": {
      "staffName": "Dolandyryş wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 79
  },
  {
    "id": 83,
    "name": {
      "staffName": "6-njy reaktiw artilleriýa batareýasy",
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 64
  },
  {
    "id": 84,
    "name": {
      "staffName": "1-nji reaktiw artilleriýa wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 83
  },
  {
    "id": 85,
    "name": {
      "staffName": "2-nji reaktiw artilleriýa wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 83
  },
  {
    "id": 86,
    "name": {
      "staffName": "Diwizionyň dolandyryş wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 64
  },
  {
    "id": 87,
    "name": {
      "staffName": "Dolandyryş bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 86
  },
  {
    "id": 88,
    "name": {
      "staffName": "Üpjünçilik wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 64
  },
  {
    "id": 89,
    "name": {
      "staffName": "Awtomobil bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 88
  },
  {
    "id": 90,
    "name": {
      "staffName": "3-nji reaktiw artilleriýa diwiziony",
      "type": "main_fraction"
    },
    "level": "batalyon",
    "parentFractionId": 1
  },
  {
    "id": 91,
    "name": {
      "staffName": "7-nji reaktiw artilleriýa batareýasy",
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 90
  },
  {
    "id": 92,
    "name": {
      "staffName": "8-nji reaktiw artilleriýa batareýasy",
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 90
  },
  {
    "id": 93,
    "name": {
      "staffName": "9-nji reaktiw artilleriýa batareýasy",
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 90
  },
  {
    "id": 94,
    "name": {
      "staffName": "Asmana atyjy raketa-artilleriýa batareýasy",
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 1
  },
  {
    "id": 95,
    "name": {
      "staffName": "Asmana atyjy artilleriýa wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 94
  },
  {
    "id": 96,
    "name": {
      "staffName": "Asmana atyjy wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 94
  },
  {
    "id": 97,
    "name": {
      "staffName": "Dolandyryş wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 94
  },
  {
    "id": 98,
    "name": {
      "staffName": "Razwedka bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 97
  },
  {
    "id": 99,
    "name": {
      "staffName": "Aragatnaşyk bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 97
  },
  {
    "id": 100,
    "name": {
      "staffName": "Artilleriýa razwedkaçylyk batareýasy",
      "type": "main_fraction"
    },
    "level": "rota"
  },
  {
    "id": 101,
    "name": {
      "staffName": "Ses ölçeýji razwedka wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 100
  },
  {
    "id": 102,
    "name": {
      "staffName": "Ses ölçeýiş bölünmesi (akkustika bazasy)",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 101
  },
  {
    "id": 103,
    "name": {
      "staffName": "Ses ölçeýiş nokady (duýdurma)",
      "type": "main_fraction"
    },
    "parentFractionId": 101
  },
  {
    "id": 104,
    "name": {
      "staffName": "Topogeodeziki wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 100
  },
  {
    "id": 105,
    "name": {
      "staffName": "Topogeodeziki bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 104
  },
  {
    "id": 106,
    "name": {
      "staffName": "Dolandyryş batareýasy",
      "type": "main_fraction"
    },
    "level": "rota"
  },
  {
    "id": 107,
    "name": {
      "staffName": "Artilleriýa razwedka wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 106
  },
  {
    "id": 108,
    "name": {
      "staffName": "Hasaplaýyş bölümçesi (brigadanyň dolandyryş bölüminiňki)",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 107
  },
  {
    "id": 109,
    "name": {
      "staffName": "Artilleriýa razwedka bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 107
  },
  {
    "id": 110,
    "name": {
      "staffName": "Aragatnaşyk wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 106
  },
  {
    "id": 111,
    "name": {
      "staffName": "Radiostansiýa (R-156)",
      "type": "main_fraction"
    },
    "parentFractionId": 110
  },
  {
    "id": 112,
    "name": {
      "staffName": "Radiostansiýa (R-142N)",
      "type": "main_fraction"
    },
    "parentFractionId": 110
  },
  {
    "id": 113,
    "name": {
      "staffName": "Serkerdelik-dolandyryş maşynlary bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 110
  },
  {
    "id": 114,
    "name": {
      "staffName": "Radio bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 110
  },
  {
    "id": 115,
    "name": {
      "staffName": "Telefon bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 110
  },
  {
    "id": 116,
    "name": {
      "staffName": "Aragatnaşyk boguny (stasionar)",
      "type": "main_fraction"
    },
    "parentFractionId": 106
  },
  {
    "id": 117,
    "name": {
      "staffName": "Inžener-tehniki wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod"
  },
  {
    "id": 118,
    "name": {
      "staffName": "Ýer gazyjy maşynlar bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 117
  },
  {
    "id": 119,
    "name": {
      "staffName": "Meýdan suw üpjünçilik bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 117
  },
  {
    "id": 120,
    "name": {
      "staffName": "Awtomobil bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 117
  },
  {
    "id": 121,
    "name": {
      "staffName": "Radiasiýa, himiýa we biologiki goranyş wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod"
  },
  {
    "id": 122,
    "name": {
      "staffName": "Radiasiýa we himiýa razwedka bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 121
  },
  {
    "id": 123,
    "name": {
      "staffName": "Ýörite arassalaýyş çärelerini geçiriş bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 121
  },
  {
    "id": 124,
    "name": {
      "staffName": "Dozimetrik bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 121
  },
  {
    "id": 125,
    "name": {
      "staffName": "Abatlaýyş rotasy",
      "type": "main_fraction"
    },
    "level": "rota"
  },
  {
    "id": 126,
    "name": {
      "staffName": "Ýarag abatlaýyş bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 125
  },
  {
    "id": 127,
    "name": {
      "staffName": "Abatlaýyş wzwody (awtomobil we bronetank tehnikalary)",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 125
  },
  {
    "id": 128,
    "name": {
      "staffName": "Awtomobil abatlaýyş bölümçesi (sökmek-süzmek işleri)",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 127
  },
  {
    "id": 129,
    "name": {
      "staffName": "Awtomobil abatlaýyş bölümçesi (slesar-mehanik we agregatlaryň gündelik bejeriji işleri)",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 127
  },
  {
    "id": 130,
    "name": {
      "staffName": "Tehniki hyzmat ediş bölümçesi (diagnostika we sazlaýyş işleri)",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 127
  },
  {
    "id": 131,
    "name": {
      "staffName": "Awtomobil rotasy",
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 13
  },
  {
    "id": 132,
    "name": {
      "staffName": "Abatlaýyş wzwody (ok-däri daşamak üçin)",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 131
  },
  {
    "id": 133,
    "name": {
      "staffName": "Abatlaýyş wzwody (ýag-ýangyç we harby tehniki emläker üçin)",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 131
  },
  {
    "id": 134,
    "name": {
      "staffName": "Awtomobil bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 133
  },
  {
    "id": 135,
    "name": {
      "staffName": "Tehniki hyzmat ediş bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 133
  },
  {
    "id": 136,
    "name": {
      "staffName": "Maddy üpjünçilik rotasy",
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 13
  },
  {
    "id": 137,
    "name": {
      "staffName": "Awtomobil wzwody (azyk we goş emläkleri daşamak üçin)",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 136
  },
  {
    "id": 138,
    "name": {
      "staffName": "Hojalyk wzwody",
      "type": "main_fraction"
    },
    "level": "rota",
    "parentFractionId": 136
  },
  {
    "id": 139,
    "name": {
      "staffName": "Naharhana",
      "type": "main_fraction"
    },
    "parentFractionId": 136
  },
  {
    "id": 140,
    "name": {
      "staffName": "Meýdan hammamy",
      "type": "main_fraction"
    },
    "parentFractionId": 136
  },
  {
    "id": 141,
    "name": {
      "staffName": "Ammarlar",
      "type": "main_fraction"
    },
    "parentFractionId": 136
  },
  {
    "id": 142,
    "name": {
      "staffName": "Komendant wzwody",
      "type": "main_fraction"
    },
    "level": "wzwod",
    "parentFractionId": 2
  },
  {
    "id": 143,
    "name": {
      "staffName": "Awtomobil bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 142
  },
  {
    "id": 144,
    "name": {
      "staffName": "Komendant bölümçesi",
      "type": "main_fraction"
    },
    "level": "bolumce",
    "parentFractionId": 142
  },
  {
    "id": 145,
    "name": {
      "staffName": "Lukmançylyk nokady",
      "type": "main_fraction"
    }
  }
]

export default fractions