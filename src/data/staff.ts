
export type Staff = {
  id?: number
  fractionId?: number
  name: {
    staffName: string
    shortName?: string,
    useName?: string
    fullName?: string,
  },
  isChaining?: boolean //eýeleýän wezipesini dine useName - dan almalymy ýa-da funksiýanyň kömegi bilen. false = 1, true = 2
}

// const staff: Staff[] = [
//   {
//     name: {
//       staffName: 'Brigadanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Brigadanyň serkerdesiniň orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Brigadanyň dolandyryş bölüminiň serkerdesi-brigadanyň serkerdesiniň orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Dolandyryş bölümiň serkerdesiniň orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Dolandyryş bölümiň serkerdesiniň mobilizasiýa işleri boýunça orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Dolandyryş bölümiň serkerdesiniň işgärler bölümi boýunça uly kömekçisi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Dolandyryş bölümiň serkerdesiniň nyzam bölümi boýunça uly kömekçisi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Razwedka müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Aragatnaşygyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Gullugyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümiň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Iş ýörediji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Brigadanyň serkerdesiniň terbiýeçilik işler boýunça orunbasary - bölümçäniň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Psiholog',
//     }
//   },
//   {
//     name: {
//       staffName: 'Inžener we radiasion, himiki we biologiki goranyş gullugynyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Lukmançylyk gullugynyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Beden taýýarlygynyň we sportuň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Gullugyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Brigadanyň serkerdesiniň ýaraglanyş boýunça orunbasary - tehniki bölümiň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Barlag - tehniki nokadyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Gullugyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Gullugyň müdiriniň kömekçisi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Gullugyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Gullugyň müdiriniň kömekçisi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Brigadanyň serkerdesiniň tyl boýunça orunbasary - tylyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Ýag we ýangyç gullugynyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Azyk gullugynyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Goş gullugynyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Jaý ulanyş gullugynyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Jaý ulanyş gullugynyň ammarynyň müdiri',
//     }
//   },
//   //1Read
//   {
//     name: {
//       staffName: 'Diwizionyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Diwizionyň serkerdesiniň terbiýeçilik işler boýunça orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Diwizion serkerdesiniň ýaraglanyş boýunça orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Tehnik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Feldşer',
//     }
//   },
//   {
//     name: {
//       staffName: 'Dolandyryş bölümiň serkerdesi - diwizionyň serkerdesiniň orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Razwedkanyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Aragatnaşyk müdiri - wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Gözükdiriji',
//     }
//   },
//   //1Reab
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesiniň terbiýeçilik işleri boýunça orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Starşina',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sanitar gözükdirji',
//     }
//   },
//   //1reab 1wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi - batareýada uly hünärmen',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - hasaplaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Operator - topogeodeziýaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   //1reab 1reaw 1hasap
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //1reab 1reaw 2 hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //1reab 1reaw 3hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //1reab 2reaw
//   {
//     name: {
//       staffName: 'Wzowd serkerdesi',
//     }
//   },
//   //1reab 2reaw 4 hasap
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //1reab 2reaw 5hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //1reab 2reaw 6hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //1reab 2reaw ok-däri daşaýjy
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - sürüji-oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //1reab dolwzw
//   {
//     name: {
//       staffName: 'Wzowdyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - topogeodeziýaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly razwedkaçy - uzaklygy ölçeýji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - razwedkaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //2reab
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesiniň terbiýeçilik işleri boýunça orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Starşina',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sanitar gözükdirji',
//     }
//   },
//   //2reab 1wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi - batareýada uly hünärmen',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - hasaplaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Operator - topogeodeziýaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   //2reab 1reaw 1hasap
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //2reab 1reaw 2 hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //2reab 1reaw 3hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //2reab 2reaw
//   {
//     name: {
//       staffName: 'Wzowd serkerdesi',
//     }
//   },
//   //2reab 2reaw 4 hasap
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //2reab 2reaw 5hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //2reab 2reaw 6hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //2reab 2reaw ok-däri daşaýjy
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - sürüji-oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //2reab dolwzw
//   {
//     name: {
//       staffName: 'Wzowdyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - topogeodeziýaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly razwedkaçy - uzaklygy ölçeýji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - razwedkaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //3reab
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesiniň terbiýeçilik işleri boýunça orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Starşina',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sanitar gözükdirji',
//     }
//   },
//   //3reab 1wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi - batareýada uly hünärmen',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - hasaplaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Operator - topogeodeziýaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   //3reab 1reaw 1hasap
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //3reab 1reaw 2 hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //3reab 1reaw 3hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //3reab 2reaw
//   {
//     name: {
//       staffName: 'Wzowd serkerdesi',
//     }
//   },
//   //3reab 2reaw 4 hasap
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //3reab 2reaw 5hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //3reab 2reaw 6hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //3reab 2reaw ok-däri daşaýjy
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - sürüji-oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //3reab dolwzw
//   {
//     name: {
//       staffName: 'Wzowdyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - topogeodeziýaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly razwedkaçy - uzaklygy ölçeýji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - razwedkaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //1read dolwzw
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - topogeodeziýaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly razwedkaçy - uzaklygy ölçeýji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelegrafçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelegrafçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiotelegrafçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Mehanik - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Operator - hasaplaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - uzaklygy ölçeýji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Operator - razwedkaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Operator - topogeodeziýaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Mehanik - sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly razwedkaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly operator',
//     }
//   },
//   {
//     name: {
//       staffName: 'Razwedkaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiotelegrafçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   //1read ü/w
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly mehanik - akkumulýatorçy (elektrik we elektron gurluşyna)',
//     }
//   },
//   {
//     name: {
//       staffName: 'Slesar - gurnaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Slesar - mehanik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - guýujy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - guýujy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - aşpez',
//     }
//   },
//   {
//     name: {
//       staffName: 'Aşpez',
//     }
//   },
//   {
//     name: {
//       staffName: 'Aşpez',
//     }
//   },
//   //2read
//   {
//     name: {
//       staffName: 'Diwizionyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Diwizionyň serkerdesiniň terbiýeçilik işleri boýunça orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Diwizion serkedesiniň ýaraglanyş boýunça orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Tehnik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Dolandyryş bölüminiň serkerdesi - diwizionyň serkerdesiniň orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Aragatnaşygyň müdiri - wzwodyň serkerdesi',
//     }
//   },
//   //4reab
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Starşina',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sanitar gözükdiriji',
//     }
//   },
//   //4reab 1reaw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi - batareýada uly hünärmen',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - hasaplaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Operator - topogeodeziýaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   //4reab 1reaw 1hasap
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //4reab 1reaw 2hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //4reab 1reaw 3hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //4reab 2reaw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   //4reab 2reaw 4hasap
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //4reab 2reaw 5hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //4reab 2reaw 6hasap
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //4reab 2reaw ok-däri daşaýjy
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - sürüji-oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - oklaýjy',
//     }
//   },
//   //4reab dolwzwd
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - topogeodeziýaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly razwedkaçy - uzaklygy ölçeýji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - razwedkaçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //5reab
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesi',
//     }
//   },
//   //5reab 1reaw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi - batareýada uly hünärmen',
//     }
//   },
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji-oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   //5reab 2reaw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Maşynyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   //5reab dol wzw
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //6reab
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesi',
//     }
//   },
//   //6reab 1wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi - batareýada uly hünärmen',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   //6reab 2wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //2read dolwzwd
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary - bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   //2read ü/w
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   //3read
//   {
//     name: {
//       staffName: 'Diwizionyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Diwizionyň serkerdesiniň ýaraglanyş boýunça orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Tehnik',
//     }
//   },
//   //7reab
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   //8reab
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   //9reab
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - oklaýjy',
//     }
//   },
//   //AARAB
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesiniň terbiýeçilik işleri boýunça orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Starşina',
//     }
//   },
//   //AARAB AAAW
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary - topuň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçaniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Gönükdiriji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Ussa - hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //AARAB AAW
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesiniň orunbasary - gurluşyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Gönükdirji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Gönükdirji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Hasapdaky agza',
//     }
//   },
//   {
//     name: {
//       staffName: 'Oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Oklaýjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //AARAB dolwzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly uzaklygy ölçeýji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Planşetçi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiotelefonçy',
//     }
//   },
//   //ARB 
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   //ARB topogeodeziki wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //Dolbat
//   {
//     name: {
//       staffName: 'Batareýanyň serkerdesi',
//     }
//   },
//   //Dolbat art razwedka wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary - bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - uzaklygy ölçeýji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Mehanik - sürüji',
//     }
//   },
//   //Dolbat aragatnaşyk wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiostansiýanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiostansiýanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elktrik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - radiostansiýanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bogunyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Tehnik (radiotelefon bölümçäniň serkerdesi)',
//     }
//   },
//   {
//     name: {
//       staffName: 'Tehnik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Liniýa gözegçi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Radiotelefonçy',
//     }
//   },
//   //inžener-tehniki wzwod
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - mehanik-sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - mehanik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji krançy',
//     }
//   },
//   //rhbg wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Wzwod serkerdesiniň orunbasary - bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - himik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - himik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - motorçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //abatlaýyş rota
//   {
//     name: {
//       staffName: 'Rotanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi - ussa',
//     }
//   },
//   {
//     name: {
//       staffName: 'Ussa',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - akkumulýatorçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - kebşirleýji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - slesar',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //abatlaýyş rota abatlaýyş wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - slesar',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - mehanik',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji motorçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - mehanik',
//     }
//   },
//   //awto rota
//   {
//     name: {
//       staffName: 'Rotanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly tehnik',
//     }
//   },
//   //awto rota awto wzw (ok-däri)
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //awto rota awto wzw (ýag-ýangyç)
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - slesar',
//     }
//   },
//   //MÜR
//   {
//     name: {
//       staffName: 'Rotanyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly tehnik',
//     }
//   },
//   //MÜR awto wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesiniň orunbasary',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly sürüji - radiotelefonçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   //MÜR hojalyk wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   //MÜR naharhana
//   {
//     name: {
//       staffName: 'Naharhananyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly aşpez',
//     }
//   },
//   {
//     name: {
//       staffName: 'Aşpez',
//     }
//   },
//   {
//     name: {
//       staffName: 'Aşpez',
//     }
//   },
//   {
//     name: {
//       staffName: 'Aşpez',
//     }
//   },
//   //MÜR meýdan hammam
//   {
//     name: {
//       staffName: 'Sanitar gözükdriji - hammamyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - ýokançsyzlandyryjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - bug geçiriji',
//     }
//   },
//   //MÜR Ammarlar
//   {
//     name: {
//       staffName: 'Ammaryň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Ammaryň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Ammaryň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Ammaryň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Ammaryň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Ammaryň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Ammaryň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Ammarçy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Ammarçy - laborant',
//     }
//   },
//   //komendant wzw
//   {
//     name: {
//       staffName: 'Wzwodyň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Pulemýot atyjy',
//     }
//   },
//   {
//     name: {
//       staffName: 'Bölümçäniň serkerdesi',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly - sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Uly - sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - elektrik',
//     }
//   },
//   //l/n
//   {
//     name: {
//       staffName: 'Lukmançylyk nokadynyň müdiri',
//     }
//   },
//   {
//     name: {
//       staffName: 'Dermanhananyň müdiri - feldşer',
//     }
//   },
//   {
//     name: {
//       staffName: 'Sürüji - sanitar',
//     }
//   },
// ] 

const staff: Staff[] = [
  {
    "name": {
      "staffName": "Brigadanyň serkerdesi",
      "useName": "Harby bölümiň serkerdesi"
    },
    "id": 1,
    "fractionId": 1
  },
  {
    "name": {
      "staffName": "Brigadanyň serkerdesiniň orunbasary",
      "useName": "Harby bölümiň serkerdesiniň orunbasary"
    },
    "id": 2,
    "fractionId": 1
  },
  {
    "name": {
      "staffName": "Brigadanyň dolandyryş bölüminiň serkerdesi-brigadanyň serkerdesiniň orunbasary",
      "useName": "Harby bölümiň dolandyryş bölüminiň serkerdesi-harby bölümiň serkerdesiniň orunbasary"
    },
    "id": 3,
    "fractionId": 2,
    
  },
  {
    "name": {
      "staffName": "Dolandyryş bölümiň serkerdesiniň orunbasary",
      "useName": "Harby bölümiň dolandyryş bölüminiň serkerdesiniň orunbasary"
    },
    "id": 4,
    "fractionId": 2
  },
  {
    "name": {
      "staffName": "Dolandyryş bölümiň serkerdesiniň mobilizasiýa işleri boýunça orunbasary",
      "useName": "Harby bölümiň dolandyryş bölüminiň serkerdesiniň mobilizasiýa işleri boýunça orunbasary"
    },
    "id": 5,
    "fractionId": 2
  },
  {
    "name": {
      "staffName": "Dolandyryş bölümiň serkerdesiniň işgärler bölümi boýunça uly kömekçisi",
      "useName": "Harby bölümiň dolandyryş bölüminiň serkerdesiniň işgärler bölümi boýunça uly kömekçisi"
    },
    "id": 6,
    "fractionId": 2
  },
  {
    "name": {
      "staffName": "Dolandyryş bölümiň serkerdesiniň nyzam bölümi boýunça uly kömekçisi",
      "useName": "Harby bölümiň dolandyryş bölüminiň serkerdesiniň nyzam bölümi boýunça uly kömekçisi"
    },
    "id": 7,
    "fractionId": 2
  },
  {
    "name": {
      "staffName": "Razwedka müdiri",
      "useName": "Harby bölümiň razwedka müdiri"
    },
    "id": 8,
    "fractionId": 2
  },
  {
    "name": {
      "staffName": "Aragatnaşygyň müdiri",
      "useName": "Harby bölümiň aragatnaşygynyň müdiri"
    },
    "id": 9,
    "fractionId": 2
  },
  {
    "name": {
      "staffName": "Bölümçäniň müdiri",
      "useName": "8-nji bölümçäniň müdiri"
    },
    "id": 10,
    "fractionId": 3
  },
  {
    "name": {
      "staffName": "Gullugyň müdiri",
      "useName": ""
    },
    "id": 11,
    "fractionId": 4
  },
  {
    "name": {
      "staffName": "Bölümiň müdiri",
      "useName": "Gizlin bölümiň müdiri"
    },
    "id": 12,
    "fractionId": 5
  },
  {
    "name": {
      "staffName": "Iş ýörediji"
    },
    "id": 13
  },
  {
    "name": {
      "staffName": "Brigadanyň serkerdesiniň terbiýeçilik işler boýunça orunbasary - bölümçäniň müdiri",
      "useName": "Harby bölümiň serkerdesiniň terbiýeçilik işler boýunça orunbasary - bölümçäniň müdiri"
    },
    "id": 14,
    "fractionId": 7
  },
  {
    "name": {
      "staffName": "Psiholog",
      "useName": "Harby bölümiň psihology"
    },
    "id": 15,
    "fractionId": 7
  },
  {
    "name": {
      "staffName": "Inžener we radiasion, himiki we biologiki goranyş gullugynyň müdiri",
      "useName": "Inžener we radiasion, himiki we biologiki goranyş gullugynyň müdiri"
    },
    "id": 16,
    "fractionId": 8
  },
  {
    "name": {
      "staffName": "Lukmançylyk gullugynyň müdiri",
      "useName": "Lukmançylyk gullugynyň müdiri"
    },
    "id": 17,
    "fractionId": 8
  },
  {
    "name": {
      "staffName": "Beden taýýarlygynyň we sportuň müdiri",
      "useName": "Beden taýýarlygynyň we sportuň müdiri",
    },
    "id": 18,
    "fractionId": 8
  },
  {
    "name": {
      "staffName": "Gullugyň müdiri"
    },
    "id": 19,
    "fractionId": 9
  },
  {
    "name": {
      "staffName": "Brigadanyň serkerdesiniň ýaraglanyş boýunça orunbasary - tehniki bölümiň müdiri",
      "useName": "Harby bölümiň serkerdesiniň ýaraglanyş boýunça orunbasary - tehniki bölümiň müdiri"
    },
    "id": 20,
    "fractionId": 10
  },
  {
    "name": {
      "staffName": "Barlag - tehniki nokadyň müdiri"
    },
    "id": 21,
    "fractionId": 10
  },
  {
    "name": {
      "staffName": "Gullugyň müdiri"
    },
    "id": 22,
    "fractionId": 11
  },
  {
    "name": {
      "staffName": "Gullugyň müdiriniň kömekçisi"
    },
    "id": 23,
    "fractionId": 11
  },
  {
    "name": {
      "staffName": "Gullugyň müdiri"
    },
    "id": 24,
    "fractionId": 12
  },
  {
    "name": {
      "staffName": "Gullugyň müdiriniň kömekçisi"
    },
    "id": 25,
    "fractionId": 12
  },
  {
    "name": {
      "staffName": "Brigadanyň serkerdesiniň tyl boýunça orunbasary - tylyň müdiri"
    },
    "id": 26,
    "fractionId": 13
  },
  {
    "name": {
      "staffName": "Ýag we ýangyç gullugynyň müdiri"
    },
    "id": 27,
    "fractionId": 13
  },
  {
    "name": {
      "staffName": "Azyk gullugynyň müdiri",
      "useName": "Azyk gullugynyň müdiri"
    },
    "id": 28,
    "fractionId": 13
  },
  {
    "name": {
      "staffName": "Goş gullugynyň müdiri"
    },
    "id": 29,
    "fractionId": 13
  },
  {
    "name": {
      "staffName": "Jaý ulanyş gullugynyň müdiri"
    },
    "id": 30,
    "fractionId": 13
  },
  {
    "name": {
      "staffName": "Jaý ulanyş gullugynyň ammarynyň müdiri"
    },
    "id": 31,
    "fractionId": 13
  },
  {
    "name": {
      "staffName": "Diwizionyň serkerdesi",
      "useName": "serkerdesi"
    },
    "isChaining": true,
    "id": 32,
    "fractionId": 14
  },
  {
    "name": {
      "staffName": "Diwizionyň serkerdesiniň terbiýeçilik işler boýunça orunbasary"
    },
    "id": 33,
    "fractionId": 14
  },
  {
    "name": {
      "staffName": "Diwizion serkerdesiniň ýaraglanyş boýunça orunbasary"
    },
    "id": 34,
    "fractionId": 14
  },
  {
    "name": {
      "staffName": "Tehnik"
    },
    "id": 35,
    "fractionId": 14
  },
  {
    "name": {
      "staffName": "Feldşer"
    },
    "id": 36,
    "fractionId": 14
  },
  {
    "name": {
      "staffName": "Dolandyryş bölümiň serkerdesi - diwizionyň serkerdesiniň orunbasary"
    },
    "id": 37,
    "fractionId": 15
  },
  {
    "name": {
      "staffName": "Razwedkanyň müdiri"
    },
    "id": 38,
    "fractionId": 15
  },
  {
    "name": {
      "staffName": "Aragatnaşyk müdiri - wzwodyň serkerdesi"
    },
    "id": 39,
    "fractionId": 15
  },
  {
    "name": {
      "staffName": "Gözükdiriji"
    },
    "id": 40,
    "fractionId": 15
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesi",
      "useName": "serkerdesi"
    },
    "id": 41,
    "fractionId": 16,
    "isChaining": true
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesiniň terbiýeçilik işleri boýunça orunbasary"
    },
    "id": 42,
    "fractionId": 16
  },
  {
    "name": {
      "staffName": "Starşina"
    },
    "id": 43,
    "fractionId": 16
  },
  {
    "name": {
      "staffName": "Sanitar gözükdirji"
    },
    "id": 44,
    "fractionId": 16
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi - batareýada uly hünärmen"
    },
    "id": 45,
    "fractionId": 17
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - hasaplaýjy"
    },
    "id": 46,
    "fractionId": 17
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 47,
    "fractionId": 17
  },
  {
    "name": {
      "staffName": "Operator - topogeodeziýaçy"
    },
    "id": 48,
    "fractionId": 17
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 49,
    "fractionId": 30
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi"
    },
    "id": 50,
    "fractionId": 18
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 51,
    "fractionId": 18
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 52,
    "fractionId": 18
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 53,
    "fractionId": 18
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 54,
    "fractionId": 18
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 55,
    "fractionId": 19
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 56,
    "fractionId": 19
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 57,
    "fractionId": 19
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 58,
    "fractionId": 19
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 59,
    "fractionId": 19
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 60,
    "fractionId": 20
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 61,
    "fractionId": 20
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 62,
    "fractionId": 20
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 63,
    "fractionId": 20
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 64,
    "fractionId": 20
  },
  {
    "name": {
      "staffName": "Wzowd serkerdesi"
    },
    "id": 65,
    "fractionId": 21
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi"
    },
    "id": 66,
    "fractionId": 22
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 67,
    "fractionId": 22
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 68,
    "fractionId": 22
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 69,
    "fractionId": 22
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 70,
    "fractionId": 22
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 71,
    "fractionId": 23
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 72,
    "fractionId": 23
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 73,
    "fractionId": 23
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 74,
    "fractionId": 23
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 75,
    "fractionId": 23
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 76,
    "fractionId": 24
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 77,
    "fractionId": 24
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 78,
    "fractionId": 24
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 79,
    "fractionId": 24
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 80,
    "fractionId": 24
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - sürüji-oklaýjy"
    },
    "id": 81,
    "fractionId": 25
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 82,
    "fractionId": 25
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 83,
    "fractionId": 25
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 84,
    "fractionId": 25
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 85,
    "fractionId": 25
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 86,
    "fractionId": 25
  },
  {
    "name": {
      "staffName": "Wzowdyň serkerdesi"
    },
    "id": 87,
    "fractionId": 26
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - topogeodeziýaçy"
    },
    "id": 88,
    "fractionId": 27
  },
  {
    "name": {
      "staffName": "Uly razwedkaçy - uzaklygy ölçeýji"
    },
    "id": 89,
    "fractionId": 27
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 90,
    "fractionId": 27
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 91,
    "fractionId": 27
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - razwedkaçy"
    },
    "id": 92,
    "fractionId": 28
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 93,
    "fractionId": 28
  },
  {
    "name": {
      "staffName": "Radiotelefonçy"
    },
    "id": 94,
    "fractionId": 28
  },
  {
    "name": {
      "staffName": "Radiotelefonçy"
    },
    "id": 95,
    "fractionId": 28
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 96,
    "fractionId": 28
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesi"
    },
    "id": 97,
    "fractionId": 29
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesiniň terbiýeçilik işleri boýunça orunbasary"
    },
    "id": 98,
    "fractionId": 29
  },
  {
    "name": {
      "staffName": "Starşina"
    },
    "id": 99,
    "fractionId": 29
  },
  {
    "name": {
      "staffName": "Sanitar gözükdirji"
    },
    "id": 100,
    "fractionId": 29
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi - batareýada uly hünärmen"
    },
    "id": 101,
    "fractionId": 30
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - hasaplaýjy"
    },
    "id": 102,
    "fractionId": 30
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 103,
    "fractionId": 30
  },
  {
    "name": {
      "staffName": "Operator - topogeodeziýaçy"
    },
    "id": 104,
    "fractionId": 30
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 105,
    "fractionId": 30
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi"
    },
    "id": 106,
    "fractionId": 31
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 107,
    "fractionId": 31
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 108,
    "fractionId": 31
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 109,
    "fractionId": 31
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 110,
    "fractionId": 31
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 111,
    "fractionId": 32
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 112,
    "fractionId": 32
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 113,
    "fractionId": 32
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 114,
    "fractionId": 32
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 115,
    "fractionId": 32
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 116,
    "fractionId": 33
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 117,
    "fractionId": 33
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 118,
    "fractionId": 33
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 119,
    "fractionId": 33
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 120,
    "fractionId": 33
  },
  {
    "name": {
      "staffName": "Wzowd serkerdesi"
    },
    "id": 121,
    "fractionId": 34
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi"
    },
    "id": 122,
    "fractionId": 35
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 123,
    "fractionId": 35
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 124,
    "fractionId": 35
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 125,
    "fractionId": 35
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 126,
    "fractionId": 35
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 127,
    "fractionId": 36
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 128,
    "fractionId": 36
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 129,
    "fractionId": 36
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 130,
    "fractionId": 36
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 131,
    "fractionId": 36
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 132,
    "fractionId": 37
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 133,
    "fractionId": 37
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 134,
    "fractionId": 37
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 135,
    "fractionId": 37
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 136,
    "fractionId": 37
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - sürüji-oklaýjy"
    },
    "id": 137,
    "fractionId": 38
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 138,
    "fractionId": 38
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 139,
    "fractionId": 38
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 140,
    "fractionId": 38
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 141,
    "fractionId": 38
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 142,
    "fractionId": 38
  },
  {
    "name": {
      "staffName": "Wzowdyň serkerdesi"
    },
    "id": 143,
    "fractionId": 39
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - topogeodeziýaçy"
    },
    "id": 144,
    "fractionId": 40
  },
  {
    "name": {
      "staffName": "Uly razwedkaçy - uzaklygy ölçeýji"
    },
    "id": 145,
    "fractionId": 40
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 146,
    "fractionId": 40
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 147,
    "fractionId": 40
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - razwedkaçy"
    },
    "id": 148,
    "fractionId": 41
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 149,
    "fractionId": 41
  },
  {
    "name": {
      "staffName": "Radiotelefonçy"
    },
    "id": 150,
    "fractionId": 41
  },
  {
    "name": {
      "staffName": "Radiotelefonçy"
    },
    "id": 151,
    "fractionId": 41
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 152,
    "fractionId": 41
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesi"
    },
    "id": 153,
    "fractionId": 42
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesiniň terbiýeçilik işleri boýunça orunbasary"
    },
    "id": 154,
    "fractionId": 42
  },
  {
    "name": {
      "staffName": "Starşina"
    },
    "id": 155,
    "fractionId": 42
  },
  {
    "name": {
      "staffName": "Sanitar gözükdirji"
    },
    "id": 156,
    "fractionId": 42
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi - batareýada uly hünärmen"
    },
    "id": 157,
    "fractionId": 43
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - hasaplaýjy"
    },
    "id": 158,
    "fractionId": 43
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 159,
    "fractionId": 43
  },
  {
    "name": {
      "staffName": "Operator - topogeodeziýaçy"
    },
    "id": 160,
    "fractionId": 43
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 161,
    "fractionId": 43
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi"
    },
    "id": 162,
    "fractionId": 44
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 163,
    "fractionId": 44
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 164,
    "fractionId": 44
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 165,
    "fractionId": 44
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 166,
    "fractionId": 44
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 167,
    "fractionId": 45
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 168,
    "fractionId": 45
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 169,
    "fractionId": 45
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 170,
    "fractionId": 45
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 171,
    "fractionId": 45
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 172,
    "fractionId": 46
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 173,
    "fractionId": 46
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 174,
    "fractionId": 46
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 175,
    "fractionId": 46
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 176,
    "fractionId": 46
  },
  {
    "name": {
      "staffName": "Wzowd serkerdesi"
    },
    "id": 177,
    "fractionId": 47
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi"
    },
    "id": 178,
    "fractionId": 48
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 179,
    "fractionId": 48
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 180,
    "fractionId": 48
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 181,
    "fractionId": 48
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 182,
    "fractionId": 48
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 183,
    "fractionId": 49
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 184,
    "fractionId": 49
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 185,
    "fractionId": 49
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 186,
    "fractionId": 49
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 187,
    "fractionId": 49
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 188,
    "fractionId": 50
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 189,
    "fractionId": 50
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 190,
    "fractionId": 50
  },
  {
    "name": {
      "staffName": "Hasapdaky agza - radiotelefonçy"
    },
    "id": 191,
    "fractionId": 50
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 192,
    "fractionId": 50
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - sürüji-oklaýjy"
    },
    "id": 193,
    "fractionId": 51
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 194,
    "fractionId": 51
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 195,
    "fractionId": 51
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 196,
    "fractionId": 51
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 197,
    "fractionId": 51
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 198,
    "fractionId": 51
  },
  {
    "name": {
      "staffName": "Wzowdyň serkerdesi"
    },
    "id": 199,
    "fractionId": 52
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - topogeodeziýaçy"
    },
    "id": 200,
    "fractionId": 53
  },
  {
    "name": {
      "staffName": "Uly razwedkaçy - uzaklygy ölçeýji"
    },
    "id": 201,
    "fractionId": 53
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 202,
    "fractionId": 53
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 203,
    "fractionId": 53
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - razwedkaçy"
    },
    "id": 204,
    "fractionId": 54
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 205,
    "fractionId": 54
  },
  {
    "name": {
      "staffName": "Radiotelefonçy"
    },
    "id": 206,
    "fractionId": 54
  },
  {
    "name": {
      "staffName": "Radiotelefonçy"
    },
    "id": 207,
    "fractionId": 54
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 208,
    "fractionId": 54
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - topogeodeziýaçy"
    },
    "id": 209,
    "fractionId": 56
  },
  {
    "name": {
      "staffName": "Uly razwedkaçy - uzaklygy ölçeýji"
    },
    "id": 210,
    "fractionId": 56
  },
  {
    "name": {
      "staffName": "Uly radiotelegrafçy"
    },
    "id": 211,
    "fractionId": 56
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 212,
    "fractionId": 56
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 213,
    "fractionId": 57
  },
  {
    "name": {
      "staffName": "Uly radiotelegrafçy"
    },
    "id": 214,
    "fractionId": 57
  },
  {
    "name": {
      "staffName": "Radiotelegrafçy"
    },
    "id": 215,
    "fractionId": 57
  },
  {
    "name": {
      "staffName": "Mehanik - radiotelefonçy"
    },
    "id": 216,
    "fractionId": 57
  },
  {
    "name": {
      "staffName": "Operator - hasaplaýjy"
    },
    "id": 217,
    "fractionId": 57
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 218,
    "fractionId": 57
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - uzaklygy ölçeýji"
    },
    "id": 219,
    "fractionId": 58
  },
  {
    "name": {
      "staffName": "Radiotelefonçy"
    },
    "id": 220,
    "fractionId": 58
  },
  {
    "name": {
      "staffName": "Operator - razwedkaçy"
    },
    "id": 221,
    "fractionId": 58
  },
  {
    "name": {
      "staffName": "Operator - topogeodeziýaçy"
    },
    "id": 222,
    "fractionId": 58
  },
  {
    "name": {
      "staffName": "Mehanik - sürüji"
    },
    "id": 223,
    "fractionId": 58
  },
  {
    "name": {
      "staffName": "Uly razwedkaçy"
    },
    "id": 224,
    "fractionId": 59
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 225,
    "fractionId": 59
  },
  {
    "name": {
      "staffName": "Uly operator"
    },
    "id": 226,
    "fractionId": 59
  },
  {
    "name": {
      "staffName": "Razwedkaçy"
    },
    "id": 227,
    "fractionId": 59
  },
  {
    "name": {
      "staffName": "Radiotelegrafçy"
    },
    "id": 228,
    "fractionId": 59
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 229,
    "fractionId": 59
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 230,
    "fractionId": 60
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 231,
    "fractionId": 61
  },
  {
    "name": {
      "staffName": "Uly mehanik - akkumulýatorçy (elektrik we elektron gurluşyna)"
    },
    "id": 232,
    "fractionId": 61
  },
  {
    "name": {
      "staffName": "Slesar - gurnaýjy"
    },
    "id": 233,
    "fractionId": 61
  },
  {
    "name": {
      "staffName": "Slesar - mehanik"
    },
    "id": 234,
    "fractionId": 61
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 235,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 236,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 237,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 238,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 239,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 240,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 241,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 242,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 243,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 244,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 245,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 246,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 247,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 248,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 249,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 250,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 251,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - guýujy"
    },
    "id": 252,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji - guýujy"
    },
    "id": 253,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 254,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 255,
    "fractionId": 62
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - aşpez"
    },
    "id": 256,
    "fractionId": 63
  },
  {
    "name": {
      "staffName": "Aşpez"
    },
    "id": 257,
    "fractionId": 63
  },
  {
    "name": {
      "staffName": "Aşpez"
    },
    "id": 258,
    "fractionId": 63
  },
  {
    "name": {
      "staffName": "Diwizionyň serkerdesi"
    },
    "id": 259,
    "fractionId": 64
  },
  {
    "name": {
      "staffName": "Diwizionyň serkerdesiniň terbiýeçilik işleri boýunça orunbasary"
    },
    "id": 260,
    "fractionId": 64
  },
  {
    "name": {
      "staffName": "Diwizion serkedesiniň ýaraglanyş boýunça orunbasary"
    },
    "id": 261,
    "fractionId": 64
  },
  {
    "name": {
      "staffName": "Tehnik"
    },
    "id": 262,
    "fractionId": 64
  },
  {
    "name": {
      "staffName": "Dolandyryş bölüminiň serkerdesi - diwizionyň serkerdesiniň orunbasary"
    },
    "id": 263,
    "fractionId": 65
  },
  {
    "name": {
      "staffName": "Aragatnaşygyň müdiri - wzwodyň serkerdesi"
    },
    "id": 264,
    "fractionId": 65
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesi"
    },
    "id": 265,
    "fractionId": 66
  },
  {
    "name": {
      "staffName": "Starşina"
    },
    "id": 266,
    "fractionId": 66
  },
  {
    "name": {
      "staffName": "Sanitar gözükdiriji"
    },
    "id": 267,
    "fractionId": 66
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi - batareýada uly hünärmen"
    },
    "id": 268,
    "fractionId": 67
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - hasaplaýjy"
    },
    "id": 269,
    "fractionId": 67
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 270,
    "fractionId": 67
  },
  {
    "name": {
      "staffName": "Operator - topogeodeziýaçy"
    },
    "id": 271,
    "fractionId": 67
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 272,
    "fractionId": 67
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi"
    },
    "id": 273,
    "fractionId": 68
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 274,
    "fractionId": 68
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 275,
    "fractionId": 68
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 276,
    "fractionId": 68
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 277,
    "fractionId": 69
  },
  {
    "name": {
      "staffName": "uly gönükdiriji"
    },
    "id": 278,
    "fractionId": 69
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 279,
    "fractionId": 69
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 280,
    "fractionId": 69
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 281,
    "fractionId": 70
  },
  {
    "name": {
      "staffName": "uly gönükdiriji"
    },
    "id": 282,
    "fractionId": 70
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 283,
    "fractionId": 70
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 284,
    "fractionId": 70
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 285,
    "fractionId": 71
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary - maşynyň serkerdesi"
    },
    "id": 286,
    "fractionId": 72
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 287,
    "fractionId": 72
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 288,
    "fractionId": 72
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 289,
    "fractionId": 72
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 290,
    "fractionId": 73
  },
  {
    "name": {
      "staffName": "uly gönükdiriji"
    },
    "id": 291,
    "fractionId": 73
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 292,
    "fractionId": 73
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 293,
    "fractionId": 73
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 294,
    "fractionId": 74
  },
  {
    "name": {
      "staffName": "uly gönükdiriji"
    },
    "id": 295,
    "fractionId": 74
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 296,
    "fractionId": 74
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 297,
    "fractionId": 74
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - sürüji-oklaýjy"
    },
    "id": 298,
    "fractionId": 75
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 299,
    "fractionId": 75
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 300,
    "fractionId": 75
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 301,
    "fractionId": 75
  },
  {
    "name": {
      "staffName": "Sürüji - oklaýjy"
    },
    "id": 302,
    "fractionId": 75
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 303,
    "fractionId": 76
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - topogeodeziýaçy"
    },
    "id": 304,
    "fractionId": 77
  },
  {
    "name": {
      "staffName": "Uly razwedkaçy - uzaklygy ölçeýji"
    },
    "id": 305,
    "fractionId": 77
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 306,
    "fractionId": 77
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 307,
    "fractionId": 77
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - razwedkaçy"
    },
    "id": 308,
    "fractionId": 78
  },
  {
    "name": {
      "staffName": "Uly radiotelefonçy"
    },
    "id": 309,
    "fractionId": 78
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 310,
    "fractionId": 78
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesi"
    },
    "id": 311,
    "fractionId": 79
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi - batareýada uly hünärmen"
    },
    "id": 312,
    "fractionId": 80
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 313,
    "fractionId": 80
  },
  {
    "name": {
      "staffName": "Uly sürüji-oklaýjy"
    },
    "id": 314,
    "fractionId": 80
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 315,
    "fractionId": 80
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 316,
    "fractionId": 80
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 317,
    "fractionId": 80
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 318,
    "fractionId": 81
  },
  {
    "name": {
      "staffName": "Maşynyň serkerdesi"
    },
    "id": 319,
    "fractionId": 81
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 320,
    "fractionId": 81
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 321,
    "fractionId": 81
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 322,
    "fractionId": 81
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 323,
    "fractionId": 82
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesi"
    },
    "id": 324,
    "fractionId": 83
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi - batareýada uly hünärmen"
    },
    "id": 325,
    "fractionId": 84
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 326,
    "fractionId": 84
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 327,
    "fractionId": 84
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 328,
    "fractionId": 84
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 329,
    "fractionId": 84
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 330,
    "fractionId": 84
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 331,
    "fractionId": 85
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 332,
    "fractionId": 85
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary - bölümçäniň serkerdesi"
    },
    "id": 333,
    "fractionId": 87
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 334,
    "fractionId": 87
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 335,
    "fractionId": 88
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 336,
    "fractionId": 89
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 337,
    "fractionId": 89
  },
  {
    "name": {
      "staffName": "Diwizionyň serkerdesi"
    },
    "id": 338,
    "fractionId": 90
  },
  {
    "name": {
      "staffName": "Diwizionyň serkerdesiniň ýaraglanyş boýunça orunbasary"
    },
    "id": 339,
    "fractionId": 90
  },
  {
    "name": {
      "staffName": "Tehnik"
    },
    "id": 340,
    "fractionId": 90
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesi"
    },
    "id": 341,
    "fractionId": 91
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 342,
    "fractionId": 91
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 343,
    "fractionId": 91
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesi"
    },
    "id": 344,
    "fractionId": 92
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 345,
    "fractionId": 92
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 346,
    "fractionId": 92
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesi"
    },
    "id": 347,
    "fractionId": 93
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 348,
    "fractionId": 93
  },
  {
    "name": {
      "staffName": "Uly sürüji - oklaýjy"
    },
    "id": 349,
    "fractionId": 93
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesi"
    },
    "id": 350,
    "fractionId": 94
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesiniň terbiýeçilik işleri boýunça orunbasary"
    },
    "id": 351,
    "fractionId": 94
  },
  {
    "name": {
      "staffName": "Starşina"
    },
    "id": 352,
    "fractionId": 94
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 353,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary - topuň serkerdesi"
    },
    "id": 354,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Bölümçaniň serkerdesi"
    },
    "id": 355,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Uly gönükdiriji"
    },
    "id": 356,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Uly sürüji"
    },
    "id": 357,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Gönükdiriji"
    },
    "id": 358,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 359,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 360,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 361,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Ussa - hasapdaky agza"
    },
    "id": 362,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 363,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 364,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 365,
    "fractionId": 95
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 366,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesiniň orunbasary - gurluşyň serkerdesi"
    },
    "id": 367,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Uly sürüji"
    },
    "id": 368,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Gönükdirji"
    },
    "id": 369,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Gönükdirji"
    },
    "id": 370,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 371,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Hasapdaky agza"
    },
    "id": 372,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Oklaýjy"
    },
    "id": 373,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Oklaýjy"
    },
    "id": 374,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Oklaýjy"
    },
    "id": 375,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Oklaýjy"
    },
    "id": 376,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 377,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 378,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 379,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 380,
    "fractionId": 96
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 381
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 382
  },
  {
    "name": {
      "staffName": "Uly uzaklygy ölçeýji"
    },
    "id": 383
  },
  {
    "name": {
      "staffName": "Planşetçi"
    },
    "id": 384
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 385
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 386
  },
  {
    "name": {
      "staffName": "Radiotelefonçy"
    },
    "id": 387
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesi"
    },
    "id": 388
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary"
    },
    "id": 389
  },
  {
    "name": {
      "staffName": "Sürüji - radiotelefonçy"
    },
    "id": 390
  },
  {
    "name": {
      "staffName": "Sürüji - radiotelefonçy"
    },
    "id": 391
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 392
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 393
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 394
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 395
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 396
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 397
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 398
  },
  {
    "name": {
      "staffName": "Batareýanyň serkerdesi"
    },
    "id": 399,
    "fractionId": 106
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 400
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary - bölümçäniň serkerdesi"
    },
    "id": 401
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - uzaklygy ölçeýji"
    },
    "id": 402
  },
  {
    "name": {
      "staffName": "Mehanik - sürüji"
    },
    "id": 403
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 404
  },
  {
    "name": {
      "staffName": "Radiostansiýanyň serkerdesi"
    },
    "id": 405
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 406
  },
  {
    "name": {
      "staffName": "Radiostansiýanyň serkerdesi"
    },
    "id": 407
  },
  {
    "name": {
      "staffName": "Sürüji - elktrik"
    },
    "id": 408
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - radiostansiýanyň serkerdesi"
    },
    "id": 409
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 410,
    "fractionId": 113
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 411
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 412
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 413
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 414,
    "fractionId": 115
  },
  {
    "name": {
      "staffName": "Bogunyň müdiri"
    },
    "id": 415,
    "fractionId": 116
  },
  {
    "name": {
      "staffName": "Tehnik (radiotelefon bölümçäniň serkerdesi)"
    },
    "id": 416
  },
  {
    "name": {
      "staffName": "Tehnik"
    },
    "id": 417
  },
  {
    "name": {
      "staffName": "Liniýa gözegçi"
    },
    "id": 418
  },
  {
    "name": {
      "staffName": "Radiotelefonçy"
    },
    "id": 419
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 420,
    "fractionId": 117
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - mehanik-sürüji"
    },
    "id": 421
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - mehanik"
    },
    "id": 422
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 423
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 424
  },
  {
    "name": {
      "staffName": "Uly sürüji"
    },
    "id": 425
  },
  {
    "name": {
      "staffName": "Sürüji krançy"
    },
    "id": 426
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 427
  },
  {
    "name": {
      "staffName": "Wzwod serkerdesiniň orunbasary - bölümçäniň serkerdesi"
    },
    "id": 428
  },
  {
    "name": {
      "staffName": "Sürüji - himik"
    },
    "id": 429
  },
  {
    "name": {
      "staffName": "Sürüji - himik"
    },
    "id": 430
  },
  {
    "name": {
      "staffName": "Sürüji - motorçy"
    },
    "id": 431
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 432
  },
  {
    "name": {
      "staffName": "Rotanyň serkerdesi"
    },
    "id": 433,
    "fractionId": 125
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi - ussa"
    },
    "id": 434
  },
  {
    "name": {
      "staffName": "Ussa"
    },
    "id": 435
  },
  {
    "name": {
      "staffName": "Sürüji - akkumulýatorçy"
    },
    "id": 436
  },
  {
    "name": {
      "staffName": "Sürüji - kebşirleýji"
    },
    "id": 437
  },
  {
    "name": {
      "staffName": "Sürüji - slesar"
    },
    "id": 438
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 439
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 440
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 441
  },
  {
    "name": {
      "staffName": "Sürüji - slesar"
    },
    "id": 442
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 443
  },
  {
    "name": {
      "staffName": "Sürüji - mehanik"
    },
    "id": 444,
    "fractionId": 129
  },
  {
    "name": {
      "staffName": "Sürüji motorçy"
    },
    "id": 445
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 446
  },
  {
    "name": {
      "staffName": "Sürüji - mehanik"
    },
    "id": 447
  },
  {
    "name": {
      "staffName": "Rotanyň serkerdesi"
    },
    "id": 448
  },
  {
    "name": {
      "staffName": "Uly tehnik"
    },
    "id": 449
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 450
  },
  {
    "name": {
      "staffName": "Uly sürüji"
    },
    "id": 451
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 452
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 453
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 454
  },
  {
    "name": {
      "staffName": "Uly sürüji"
    },
    "id": 455
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 456
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 457
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 458
  },
  {
    "name": {
      "staffName": "Sürüji - slesar"
    },
    "id": 459
  },
  {
    "name": {
      "staffName": "Rotanyň serkerdesi"
    },
    "id": 460
  },
  {
    "name": {
      "staffName": "Uly tehnik"
    },
    "id": 461
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesiniň orunbasary"
    },
    "id": 462
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 463
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 464
  },
  {
    "name": {
      "staffName": "Uly sürüji"
    },
    "id": 465
  },
  {
    "name": {
      "staffName": "Uly sürüji - radiotelefonçy"
    },
    "id": 466
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 467
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 468
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 469
  },
  {
    "name": {
      "staffName": "Naharhananyň müdiri"
    },
    "id": 470
  },
  {
    "name": {
      "staffName": "Uly aşpez"
    },
    "id": 471
  },
  {
    "name": {
      "staffName": "Aşpez"
    },
    "id": 472
  },
  {
    "name": {
      "staffName": "Aşpez"
    },
    "id": 473
  },
  {
    "name": {
      "staffName": "Aşpez"
    },
    "id": 474
  },
  {
    "name": {
      "staffName": "Sanitar gözükdriji - hammamyň müdiri"
    },
    "id": 475
  },
  {
    "name": {
      "staffName": "Sürüji - ýokançsyzlandyryjy"
    },
    "id": 476
  },
  {
    "name": {
      "staffName": "Sürüji - bug geçiriji"
    },
    "id": 477
  },
  {
    "name": {
      "staffName": "Ammaryň müdiri"
    },
    "id": 478
  },
  {
    "name": {
      "staffName": "Ammaryň müdiri"
    },
    "id": 479
  },
  {
    "name": {
      "staffName": "Ammaryň müdiri"
    },
    "id": 480
  },
  {
    "name": {
      "staffName": "Ammaryň müdiri"
    },
    "id": 481
  },
  {
    "name": {
      "staffName": "Ammaryň müdiri"
    },
    "id": 482
  },
  {
    "name": {
      "staffName": "Ammaryň müdiri"
    },
    "id": 483
  },
  {
    "name": {
      "staffName": "Ammaryň müdiri"
    },
    "id": 484
  },
  {
    "name": {
      "staffName": "Ammarçy"
    },
    "id": 485
  },
  {
    "name": {
      "staffName": "Ammarçy - laborant"
    },
    "id": 486
  },
  {
    "name": {
      "staffName": "Wzwodyň serkerdesi"
    },
    "id": 487
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 488
  },
  {
    "name": {
      "staffName": "Pulemýot atyjy"
    },
    "id": 489
  },
  {
    "name": {
      "staffName": "Bölümçäniň serkerdesi"
    },
    "id": 490
  },
  {
    "name": {
      "staffName": "Uly - sürüji"
    },
    "id": 491
  },
  {
    "name": {
      "staffName": "Uly - sürüji"
    },
    "id": 492
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 493
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 494
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 495
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 496
  },
  {
    "name": {
      "staffName": "Sürüji"
    },
    "id": 497
  },
  {
    "name": {
      "staffName": "Sürüji - elektrik"
    },
    "id": 498
  },
  {
    "name": {
      "staffName": "Lukmançylyk nokadynyň müdiri"
    },
    "id": 499
  },
  {
    "name": {
      "staffName": "Dermanhananyň müdiri - feldşer"
    },
    "id": 500
  },
  {
    "name": {
      "staffName": "Sürüji - sanitar"
    },
    "id": 501
  }
]

export default staff;