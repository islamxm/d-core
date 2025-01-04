import { Contracts, BgPerson, Ranks } from "../models";

const oficers: BgPerson[] = [
  {
    id: 1,
    name: {
      shortName: "A.Allaberenow",
      forBuyruk: "A.ALLABERENOWY",
      partial: {
        name: "Aganazar",
        lastname: "Allaberenow",
        surname: "Muratgeldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 1,
    positionId: 1
  },
  {
    id: 2,
    name: {
      shortName: "B.Ýazdurdyýew",
      forBuyruk: "B.ÝAZDURDYÝEWI",
      partial: {
        name: "Bagtyýar",
        lastname: "Ýazdurdyýew",
        surname: "Rejepdurdyýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 1
  },
  {
    id: 3,
    name: {
      shortName: "A.Akmämedow",
      forBuyruk: "A.AKMÄMMEDOWY",
      partial: {
        name: "Agaşatlyk",
        lastname: "Akmämmedow",
        surname: "Sahygulyýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 9
    },
    fractionId: 2,
    positionId: 3
  },
  {
    id: 4,
    name: {
      shortName: "Ş.Hojaýew",
      forBuyruk: "Ş.HOJAÝEWI",
      partial: {
        name: "Şatlyk",
        lastname: "Hojaýew",
        surname: "Amangeldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 2,
    positionId: 4
  },
  {
    id: 5,
    name: {
      shortName: "B.Abdyrasulow",
      forBuyruk: "B.ABDYRASULOWY",
      partial: {
        name: "Bahadur",
        lastname: "Abdyrasulow",
        surname: "Muhammedowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 2,
    positionId: 5
  },
  {
    id: 6,
    name: {
      shortName: "N.Baýryýew",
      forBuyruk: "N.BAÝRYÝEWI",
      partial: {
        name: "Nazar",
        lastname: "Baýryýew",
        surname: "Şamuradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 2
  },
  {
    id: 7,
    name: {
      shortName: "A.Hojakulyýewa",
      forBuyruk: "A.HOJAKULYÝEWA",
      partial: {
        name: "Adalat",
        lastname: "Hojakulyýewa",
        surname: "Durdybaýewna"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 2
  },
  {
    id: 8,
    name: {
      shortName: "I.Annaberdiýew",
      forBuyruk: "I.ANNABERDIÝEWI",
      partial: {
        name: "Isgender",
        lastname: "Annaberdiýew",
        surname: "Annamyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 3
  },
  {
    id: 9,
    name: {
      shortName: "A.Gulamow",
      forBuyruk: "A.GULAMOWY",
      partial: {
        name: "Arslan",
        lastname: "Gulamow",
        surname: "Begnazarowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 4
  },
  {
    id: 10,
    name: {
      shortName: "B.Sarjaýew",
      forBuyruk: "B.SARJAÝEWI",
      partial: {
        name: "Balkan",
        lastname: "Sarjaýew",
        surname: "Ahmedowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 5
  },
  {
    id: 11,
    name: {
      shortName: "Ş.Aşyrow",
      forBuyruk: "Ş.AŞYROWY",
      partial: {
        name: "Şöhrat",
        lastname: "Aşyrow",
        surname: "Baýmyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 7
  },
  {
    id: 12,
    name: {
      shortName: "K.Mammaýew",
      forBuyruk: "K.MAMMAÝEWI",
      partial: {
        name: "Kerim",
        lastname: "Mammaýew",
        surname: "Öwezmyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 7
  },
  {
    id: 13,
    name: {
      shortName: "Y.Redjepow",
      forBuyruk: "Y.REDJEPOWY",
      partial: {
        name: "Ylham",
        lastname: "Redjepow",
        surname: "Hanmamedowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 8,
    positionId: 16
  },
  {
    id: 14,
    name: {
      shortName: "Z.Hojakulyýew",
      forBuyruk: "Z.HOJAKULYÝEWI",
      partial: {
        name: "Zairjan",
        lastname: "Hojakulyýew",
        surname: "Babajanowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 8
  },
  {
    id: 15,
    name: {
      shortName: "J.Annamämmedowa",
      forBuyruk: "J.ANNAMÄMMEDOWANY",
      partial: {
        name: "Jennet",
        lastname: "Annamämmedowa",
        surname: "Begmämmedowna"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 9
  },
  {
    id: 16,
    name: {
      shortName: "H.Meredow",
      forBuyruk: "H.MEREDOWY",
      partial: {
        name: "Haýytmyrat",
        lastname: "Meredow",
        surname: "Sapargeldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 8
  },
  {
    id: 17,
    name: {
      shortName: "Ý.Ataýew",
      forBuyruk: "Ý.ATAÝEWI",
      partial: {
        name: "Ýusupberdi",
        lastname: "Ataýew",
        surname: "Akmuhammedowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 10
  },
  {
    id: 18,
    name: {
      shortName: "Ö.Abdullaýew",
      forBuyruk: "Ö.ABDULLAÝEWI",
      partial: {
        name: "Öwezmurat",
        lastname: "Abdullaýew",
        surname: "Jumanazarowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 11
  },
  {
    id: 19,
    name: {
      shortName: "D.Janisow",
      forBuyruk: "D.JANISOWY",
      partial: {
        name: "Dawlet",
        lastname: "Janisow",
        surname: "Basbergenowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 11
  },
  {
    id: 20,
    name: {
      shortName: "M.Berdiýew",
      forBuyruk: "M.BERDIÝEWI",
      partial: {
        name: "Mekan",
        lastname: "Berdiýew",
        surname: "Sapargeldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 12
  },
  {
    id: 21,
    name: {
      shortName: "B.Salamow",
      forBuyruk: "B.SALAMOWY",
      partial: {
        name: "Baýly",
        lastname: "Salamow",
        surname: "Döwrangeldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 2
  },
  {
    id: 22,
    name: {
      shortName: "M.Şamyradow",
      forBuyruk: "M.ŞAMYRADOWY",
      partial: {
        name: "Myrat",
        lastname: "Şamyradow",
        surname: "Bäşimgeldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 13,
    positionId: 26
  },
  {
    id: 23,
    name: {
      shortName: "Ý.Toýlyýew",
      forBuyruk: "Ý.TOÝLYÝEWI",
      partial: {
        name: "Ýazgeldi",
        lastname: "Toýlyýew",
        surname: "Gurbangeldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 13
  },
  {
    id: 24,
    name: {
      shortName: "I.Ataýew",
      forBuyruk: "I.ATAÝEWI",
      partial: {
        name: "Ilmyrat",
        lastname: "Ataýew",
        surname: "Begmyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 5
    },
    fractionId: 13,
    positionId: 28
  },
  {
    id: 25,
    name: {
      shortName: "G.Garagulow",
      forBuyruk: "G.GARAGULOWY",
      partial: {
        name: "Guwanç",
        lastname: "Garagulow",
        surname: "Berdimyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 9
    },
    fractionId: 14,
    positionId: 32
  },
  {
    id: 26,
    name: {
      shortName: "M.Momatow",
      forBuyruk: "M.MOMATOWY",
      partial: {
        name: "Muhammetgurban",
        lastname: "Momatow",
        surname: "Baýramdurdyýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 15
  },
  {
    id: 27,
    name: {
      shortName: "D.Kurbanow",
      forBuyruk: "D.KURBANOWY",
      partial: {
        name: "Döwlet",
        lastname: "Kurbanow",
        surname: "Babakulyýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 14
  },
  {
    id: 28,
    name: {
      shortName: "H.Setdarow",
      forBuyruk: "H.SETDAROWY",
      partial: {
        name: "Hangeldi",
        lastname: "Setdarow",
        surname: "Jumageldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 14
  },
  {
    id: 29,
    name: {
      shortName: "M.Sätgulyýew",
      forBuyruk: "M.SÄTGULYÝEWI",
      partial: {
        name: "Meýlis",
        lastname: "Sätgulyýew",
        surname: "Gurbanmyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 3
    },
    fractionId: 14
  },
  {
    id: 30,
    name: {
      shortName: "J.Koçiýewa",
      forBuyruk: "J.KOÇIÝEWANY",
      partial: {
        name: "Jahantäç",
        lastname: "Koçiýewa",
        surname: "Didarowna"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 14
  },
  {
    id: 31,
    name: {
      shortName: "W.Babanazarow",
      forBuyruk: "W.BABANAZAROWY",
      partial: {
        name: "Wepamyrat",
        lastname: "Babanazarow",
        surname: "Babanazar ogly"
      }
    },
    rank: {
      contractType: 1,
      rank: 5
    },
    fractionId: 15
  },
  {
    id: 32,
    name: {
      shortName: "D.Amanberdiýew",
      forBuyruk: "D.AMANBERDIÝEWI",
      partial: {
        name: "Döwletmyrat",
        lastname: "Amanberdiýew",
        surname: "Annamyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 5
    },
    fractionId: 15
  },
  {
    id: 33,
    name: {
      shortName: "M.Japarow",
      forBuyruk: "M.JAPAROWY",
      partial: {
        name: "Merdan",
        lastname: "Japarow",
        surname: "Otoboýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 2
    },
    fractionId: 15
  },
  {
    id: 34,
    name: {
      shortName: "A.Şamyradow",
      forBuyruk: "A.ŞAMYRADOWY",
      partial: {
        name: "Akmyrat",
        lastname: "Şamyradow",
        surname: "Gylyçmyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 79
  },
  {
    id: 35,
    name: {
      shortName: "D.Täçgulyýewa",
      forBuyruk: "D.TÄÇGULYÝEWANY",
      partial: {
        name: "Dursun",
        lastname: "Täçgulyýewa",
        surname: "Hojaýewna"
      }
    },
    rank: {
      contractType: 1,
      rank: 5
    },
    fractionId: 16
  },
  {
    id: 36,
    name: {
      shortName: "E.Aýdogdyýew",
      forBuyruk: "E.AÝDOGDYÝEWI",
      partial: {
        name: "Ezizmuhammet",
        lastname: "Saparmuhammedowiç",
        surname: "Aýdogdyýew"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 10
  },
  {
    id: 37,
    name: {
      shortName: "Ö.Mämmedow",
      forBuyruk: "Ö.MÄMMEDOWY",
      partial: {
        name: "Öwezgeldi",
        lastname: "Mämmedow",
        surname: "Seýdyllaýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 5
    },
    fractionId: 17,
    positionId: 45
  },
  {
    id: 38,
    name: {
      shortName: "Ş.Sätmyradow",
      forBuyruk: "Ş.SÄTMYRADOWY",
      partial: {
        name: "Şageldi",
        lastname: "Sätmyradow",
        surname: ""
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 21
  },
  {
    id: 39,
    name: {
      shortName: "E.Babaýew",
      forBuyruk: "E.BABAÝEWI",
      partial: {
        name: "Eziz",
        lastname: "Babaýew",
        surname: "Aşyrgeldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 26
  },
  {
    id: 40,
    name: {
      shortName: "G.Myratgeldiýew",
      forBuyruk: "G.MYRATGELDIÝEWI",
      partial: {
        name: "Güýçgeldi",
        lastname: "Myratgeldiýew",
        surname: ""
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 29
  },
  {
    id: 41,
    name: {
      shortName: "A.Şirnazarow",
      forBuyruk: "A.ŞIRNAZAROWY",
      partial: {
        name: "Agamyrat",
        lastname: "Şirnazarow",
        surname: "Durdygulyýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 2
    },
    fractionId: 29
  },
  {
    id: 42,
    name: {
      shortName: "A.Rozyýew",
      forBuyruk: "A.ROZYÝEWI",
      partial: {
        name: "Agajan",
        lastname: "Rozyýew",
        surname: "Töräýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 30
  },
  {
    id: 43,
    name: {
      shortName: "Ý.Ymamberdiýew",
      forBuyruk: "Ý.YMAMBERDIÝEWI",
      partial: {
        name: "Ýalkapberdi",
        lastname: "Ymamberdiýew",
        surname: "Jumaberdiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 34
  },
  {
    id: 44,
    name: {
      shortName: "A.Atdaýew",
      forBuyruk: "A.ATDAÝEWI",
      partial: {
        name: "Akmyrat",
        lastname: "Atdaýew",
        surname: "Gurbansähedowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 39
  },
  {
    id: 45,
    name: {
      shortName: "D.Şyhyýew",
      forBuyruk: "D.ŞYHYÝEWI",
      partial: {
        name: "Döwran",
        lastname: "Şyhyýew",
        surname: "Guwanjowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 42
  },
  {
    id: 46,
    name: {
      shortName: "K.Beglerow",
      forBuyruk: "K.BEGLEROWY",
      partial: {
        name: "Krewengeldi",
        lastname: "Beglerow",
        surname: "Bazargeldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 5
    },
    fractionId: 43
  },
  {
    id: 47,
    name: {
      shortName: "M.Allaberdiýew",
      forBuyruk: "M.ALLABERDIÝEWI",
      partial: {
        name: "Muhammetaly",
        lastname: "Allaberdiýew",
        surname: "Kerimberdiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 47
  },
  {
    id: 48,
    name: {
      shortName: "B.Hydyrgulyýew",
      forBuyruk: "B.HYDYRGULYÝEWI",
      partial: {
        name: "Babanýaz",
        lastname: "Hydyrgulyýew",
        surname: "Aşyrowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 5
    },
    fractionId: 42
  },
  {
    id: 49,
    name: {
      shortName: "H.Orazgulyýew",
      forBuyruk: "H.ORAZGULYÝEWI",
      partial: {
        name: "Hydyr",
        lastname: "Orzgulyýew",
        surname: "Baýramgulyýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 42
  },
  {
    id: 50,
    name: {
      shortName: "Ý.Täçkakaýew",
      forBuyruk: "Ý.TÄÇKAKAÝEWI",
      partial: {
        name: "Ýagşymyrat",
        lastname: "Täçkakaýew",
        surname: "Kazakbaýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 52
  },
  {
    id: 51,
    name: {
      shortName: "A.Kerimow",
      forBuyruk: "A.KERIMOWY",
      partial: {
        name: "Akmyrat",
        lastname: "Kerimow",
        surname: "Täzebaýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 2
    },
    fractionId: 60
  },
  {
    id: 52,
    name: {
      shortName: "N.Garaýew",
      forBuyruk: "N.GARAÝEWI",
      partial: {
        name: "Narly",
        lastname: "Garaýew",
        surname: "Permanowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 9
    },
    fractionId: 64
  },
  {
    id: 53,
    name: {
      shortName: "A.Goçjyýew",
      forBuyruk: "A.GOÇJYÝEWI",
      partial: {
        name: "Agajan",
        lastname: "Goçjyýew",
        surname: "Aganyýazowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 65
  },
  {
    id: 54,
    name: {
      shortName: "Ä.Baýramow",
      forBuyruk: "Ä.BAÝRAMOWY",
      partial: {
        name: "Ähmet",
        lastname: "Baýramow",
        surname: "Aýtmyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 64
  },
  {
    id: 55,
    name: {
      shortName: "A.Ataýew",
      forBuyruk: "A.ATAÝEWI",
      partial: {
        name: "Arazmyrat",
        lastname: "Ataýew",
        surname: "Orunowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 66
  },
  {
    id: 56,
    name: {
      shortName: "M.Berdiýew",
      forBuyruk: "M.BERDIÝEWI",
      partial: {
        name: "Maksat",
        lastname: "Berdiýew",
        surname: "Žumageldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 66
  },
  {
    id: 57,
    name: {
      shortName: "S.Annamyradow",
      forBuyruk: "S.ANNAMYRADOWY",
      partial: {
        name: "Serdar",
        lastname: "Annamyradow",
        surname: "Baýrammyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 16,
    positionId: 41
  },
  {
    id: 58,
    name: {
      shortName: "A.Durdyýew",
      forBuyruk: "A.DURDYÝEWI",
      partial: {
        name: "Azatgeldi",
        lastname: "Durdyýew",
        surname: "Sapargeldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 83
  },
  {
    id: 59,
    name: {
      shortName: "R.Hudaýberganow",
      forBuyruk: "R.HUDAÝBERGANOWY",
      partial: {
        name: "Rüstem",
        lastname: "Hudaýberganow",
        surname: "Çoryýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 1
    },
    fractionId: 88
  },
  {
    id: 60,
    name: {
      shortName: "M.Agaýew",
      forBuyruk: "M.AGAÝEWI",
      partial: {
        name: "Maksat",
        lastname: "Agaýew",
        surname: "Nurýagdyýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 90
  },
  {
    id: 61,
    name: {
      shortName: "A.Mämmetgylyjow",
      forBuyruk: "A.MÄMMETGYLYJOWY",
      partial: {
        name: "Azat",
        lastname: "Mämmetgylyjow",
        surname: "Hangeldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 90
  },
  {
    id: 62,
    name: {
      shortName: "D.Täjiniýazow",
      forBuyruk: "D.TÄJINIÝAZOWY",
      partial: {
        name: "Döwran",
        lastname: "Täjiniýazow",
        surname: "Narmuhammedowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 92
  },
  {
    id: 63,
    name: {
      shortName: "H.Şukurow",
      forBuyruk: "H.ŞUKUROWY",
      partial: {
        name: "Halmyrat",
        lastname: "Şukurow",
        surname: "Rahmanberdiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 93
  },
  {
    id: 64,
    name: {
      shortName: "A.Ýowarow",
      forBuyruk: "A.ÝOWAROWY",
      partial: {
        name: "Allamyrat",
        lastname: "Ýowarow",
        surname: "Gazakowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 94
  },
  {
    id: 65,
    name: {
      shortName: "T.Şihiýew",
      forBuyruk: "T.ŞIHIÝEWI",
      partial: {
        name: "Täçmyrat",
        lastname: "Şihiýew",
        surname: "Goçmyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 3
    },
    fractionId: 94
  },
  {
    id: 66,
    name: {
      shortName: "M.Gylyjow",
      forBuyruk: "M.GYLYJOWY",
      partial: {
        name: "Maksat",
        lastname: "Gylyjow",
        surname: "Agaýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 106
  },
  {
    id: 67,
    name: {
      shortName: "M.Gylyçdurdyýew",
      forBuyruk: "M.GYLYÇDURDYÝEWI",
      partial: {
        name: "Mekan",
        lastname: "Gylyçdurdyýew",
        surname: "Taňrygulyýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 7
    },
    fractionId: 116
  },
  {
    id: 68,
    name: {
      shortName: "S.Söýünow",
      forBuyruk: "S.SÖÝÜNOWY",
      partial: {
        name: "Söýün",
        lastname: "Söýünow",
        surname: "Gurbanmyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 117
  },
  {
    id: 69,
    name: {
      shortName: "Y.Abraýew",
      forBuyruk: "Y.ABRAÝEWI",
      partial: {
        name: "Yhlas",
        lastname: "Abraýew",
        surname: "Ryzwanowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 8
    },
    fractionId: 125
  },
  {
    id: 70,
    name: {
      shortName: "K.Çaryýew",
      forBuyruk: "K.ÇARYÝEWI",
      partial: {
        name: "Kerim",
        lastname: "Çaryýew",
        surname: "Nursähedowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 133
  },
  {
    id: 71,
    name: {
      shortName: "A.Şihiýew",
      forBuyruk: "A.ŞIHIÝEWI",
      partial: {
        name: "Allanazar",
        lastname: "Şihiýew",
        surname: "Gaýyýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 136
  },
  {
    id: 72,
    name: {
      shortName: "G.Ýazmyradow",
      forBuyruk: "G.ÝAZMYRADOWY",
      partial: {
        name: "Gurbanmyrat",
        lastname: "Ýazmyradow",
        surname: "Maksatmyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 2
    },
    fractionId: 138
  },
  {
    id: 73,
    name: {
      shortName: "Ö.Öwezow",
      forBuyruk: "Ö.ÖWEZOWY",
      partial: {
        name: "Öwezgeldi",
        lastname: "Öwezow",
        surname: "Jumageldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 136
  },
  {
    id: 74,
    name: {
      shortName: "D.Annamyradow",
      forBuyruk: "D.ANNAMYRADOWY",
      partial: {
        name: "Dörtguly",
        lastname: "Annamyradow",
        surname: "Şagylyjowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 137
  },
  {
    id: 75,
    name: {
      shortName: "S.Durdyýew",
      forBuyruk: "S.DURDYÝEWI",
      partial: {
        name: "Seýitmyrat",
        lastname: "Durdyýew",
        surname: "Sultanowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 137
  },
  {
    id: 76,
    name: {
      shortName: "A.Babakulyýew",
      forBuyruk: "A.BABAKULYÝEWI",
      partial: {
        name: "Akram",
        lastname: "Babakulyýew",
        surname: "Jorakulyýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 3
    },
    fractionId: 139
  },
  {
    id: 77,
    name: {
      shortName: "M.Seýidow",
      forBuyruk: "M.SEÝIDOWY",
      partial: {
        name: "Merdan",
        lastname: "Seýidow",
        surname: "Baýramowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 141
  },
  {
    id: 78,
    name: {
      shortName: "A.Öwlýakulyýew",
      forBuyruk: "A.ÖWLÝAKULYÝEWI",
      partial: {
        name: "Ahmet",
        lastname: "Öwlýäkulyýew",
        surname: "Hemraýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 141
  },
  {
    id: 79,
    name: {
      shortName: "K.Hanow",
      forBuyruk: "K.HANOWY",
      partial: {
        name: "Kyýas",
        lastname: "Hanow",
        surname: "Saparmyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 2
    },
    fractionId: 141
  },
  {
    id: 80,
    name: {
      shortName: "S.Gurbanýazow",
      forBuyruk: "S.GURBANÝAZOWY",
      partial: {
        name: "Selim",
        lastname: "Gurbanýazow",
        surname: "Durdymyradowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 3
    },
    fractionId: 141
  },
  {
    id: 81,
    name: {
      shortName: "B.Gurbanow",
      forBuyruk: "B.GURBANOWY",
      partial: {
        name: "Batyr",
        lastname: "Gurbanow",
        surname: "Ýagşygeldiýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 141
  },
  {
    id: 82,
    name: {
      shortName: "A.Bekçanow",
      forBuyruk: "A.BEKÇANOWY",
      partial: {
        name: "Azamat",
        lastname: "Bekçanow",
        surname: "Faýzullaýewiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 4
    },
    fractionId: 142
  },
  {
    id: 83,
    name: {
      shortName: "G.Sapargeldiýew",
      forBuyruk: "G.SAPARGELDIÝEWI",
      partial: {
        name: "Gurbannazar",
        lastname: "Sapargeldiýew",
        surname: "Annagylyjowiç"
      }
    },
    rank: {
      contractType: 1,
      rank: 6
    },
    fractionId: 145
  },
  {
    id: 84,
    name: {
      shortName: "M.Hesenow",
      forBuyruk: "M.HESENOWY",
      partial: {
        name: "Maksat",
        lastname: "Hesenow",
        surname: ""
      }
    },
    rank: {
      contractType: 1,
      rank: 1
    },
    fractionId: 60
  },

  //test soldier
  {
    id: 85,
    name: {
      shortName: 'I.Madaminow',
      forBuyruk: 'I.MADAMINOWY',
      partial: {
        name: 'Islam',
        lastname: 'Madaminow',
        surname: 'Adylbekowiç'
      }
    },
    rank: {
      contractType: 0,
      rank: 1
    },
    fractionId: 25
  },
  {
    id: 86,
    name: {
      shortName: 'S.Öwezow',
      forBuyruk: 'S.ÖWEZOWY',
      partial: {
        name: 'Sanjar',
        lastname: 'Öwezow',
        surname: ''
      }
    },
    rank: {
      contractType: 0,
      rank: 2
    },
    fractionId: 60
  },
  {
    id: 87,
    name: {
      shortName: 'M.Remezanow',
      forBuyruk: 'M.REMEZANOWY',
      partial: {
        name: 'Maksat',
        lastname: 'Remezanow',
        surname: 'Wepa Ogly'
      }
    },
    rank: {
      contractType: 0,
      rank: 0
    },
    fractionId: 72
  },
  {
    id: 88,
    name: {
      shortName: 'Y.Şadow',
      forBuyruk: 'Y.ŞADOWY',
      partial: {
        name: 'Yhlas',
        lastname: 'Şadow',
        surname: ''
      }
    },
    rank: {
      contractType: 0,
      rank: 0
    },
    fractionId: 140
  }
]

export default oficers;