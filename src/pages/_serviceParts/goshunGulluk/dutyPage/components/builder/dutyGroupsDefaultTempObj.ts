import { _DutyBuilderDefaultScheme } from "../../../../../../hooks/useDutyBuilder/types"
import oficers from "../../../../../../data/oficers"

const dutyGroupDefaultTempObj:_DutyBuilderDefaultScheme = [
  {
    groupType: 1,
    name: 'Gözegçi topar',
    body: []
  },
  {
    groupType: 2,
    name: 'Harby bölümiň nobatçylygy',
    body: {
      nobatcy: {
        type: 1
      },
      komekci: {
        type: 2
      }
    }
  },
  // {
  //   groupType: 3,
  //   name: 'Icerki garawul',
  //   body: {
  //     serkerde: {type: 3},
  //     calshyryjy: {type: 5},
  //     sakcylar: []
  //   }
  // },
  {
    groupType: 4,
    name: 'Wideooperator',
    body: {type: 36}
  },
  {
    groupType: 5,
    name: 'Nobatcy bolumce',
    body: {
      ulusy: {type:26},
      nobatcylar: []
    }
  },
  {
    groupType: 6,
    name: 'Park',
    body: {
      nobatcy: {type:7},
      cekiji: {type:9},
      gundeciler: []
    }
  },
  {
    groupType: 7,
    name: 'Barlag-goyberis nokady',
    body: {
      nobatcy: {type:20},
      komekciler: []
    },
    isMultiple: true
  },
  {
    groupType: 8,
    name: 'Rota',
    body: {
      nobatcy: {type:22},
      gundeciler: [],
      rota: 16
    },
    isMultiple: true,
  },
  {
    groupType: 9,
    name: 'Caparlar',
    body: {
      nobatcy: {type:29},
      gatnadyjylar: []
    }
  },
  {
    groupType: 10,
    name: 'Icerki patrul',
    body: {
      ulusy: {type:34},
      patrullar: []
    }
  },
  {
    groupType: 11,
    name: 'Garnizon patrul',
    body: {
      ulusy: {type:32},
      patrullar: []
    }
  },
  {
    groupType: 12,
    name: 'Garnizon garawullar boyunca nobatcy',
    body: {
      nobatcy: {type:13},
      komekci: {type:14}
    }
  },
  // {
  //   groupType: 13,
  //   name: 'Garnizon garawul',
  //   body: {
  //     serkerde: {type:15},
  //     komekci: {type:16},
  //     calshyryjy: {type:18},
  //     dashynaChykaryjy: {type:17},
  //     sakcylar: []
  //   }
  // },
  {
    groupType: 14,
    name: 'Naharhana',
    body: {
      nobatcy: {type:12},
      ashpez: {type:37},
      ishciler: []
    }
  },
  {
    groupType: 15,
    name: 'Nobatcy lukman',
    body: {type:11}
  },
  {
    groupType: 16,
    name: 'Nobatcy awtoulag',
    body: {type:10}
  },
  {
    groupType: 17,
    name: 'Bogun',
    body: {type:25}
  }

]

export default dutyGroupDefaultTempObj