import { FC } from "react";
import { DutyGroupType } from "../../../../../../data/dutyGroups";
import { DefFuctionType } from "../../../../../../models";
import Duty_AB_Component from "../dutyGroupItem/duty_AB_Component";
import Duty_BGN_Component from "../dutyGroupItem/duty_BGN_Component";
import Duty_DB_Component from "../dutyGroupItem/duty_DB_Component";
import Duty_GG_Component from "../dutyGroupItem/duty_GG_Component";
import Duty_GGBN_Component from "../dutyGroupItem/duty_GGBN_Component";
import Duty_GP_Component from "../dutyGroupItem/duty_GP_Component";
import Duty_GT_Component from "../dutyGroupItem/duty_GT_Component";
import Duty_HBN_Component from "../dutyGroupItem/duty_HBN_Component";
import Duty_IG_Component from "../dutyGroupItem/duty_IG_Component";
import Duty_IP_Component from "../dutyGroupItem/duty_IP_Component";
import Duty_NA_Component from "../dutyGroupItem/duty_NA_Component";
import Duty_NB_Component from "../dutyGroupItem/duty_NB_Component";
import Duty_NL_Component from "../dutyGroupItem/duty_NL_Component";
import Duty_NN_Component from "../dutyGroupItem/duty_NN_Component";
import Duty_Operator_Component from "../dutyGroupItem/duty_Operator_Component";
import Duty_PARK_Component from "../dutyGroupItem/duty_PARK_Component";
import Duty_ROTA_Component from "../dutyGroupItem/duty_ROTA_Component";

const dutyGroupComponentGen = (dutyGroupType: DutyGroupType, body: {data: any, index: number}) => {
  switch(dutyGroupType) {
    case 1:
      return <Duty_GT_Component {...body}/>
    case 2:
      return <Duty_HBN_Component {...body}/>
    case 3:
      return <Duty_IG_Component {...body}/>
    case 4:
      return <Duty_Operator_Component {...body}/>
    case 5:
      return <Duty_NB_Component {...body}/>
    case 6:
      return <Duty_PARK_Component {...body}/>
    case 7:
      return <Duty_BGN_Component {...body}/>
    case 8:
      return <Duty_ROTA_Component {...body}/>
    case 9:
      return <Duty_DB_Component {...body}/>
    case 10:
      return <Duty_IP_Component {...body}/>
    case 11:
      return <Duty_GP_Component {...body}/>
    case 12:
      return <Duty_GGBN_Component {...body}/>
    case 13:
      return <Duty_GG_Component {...body}/>
    case 14:
      return <Duty_NN_Component {...body}/>
    case 15:
      return <Duty_NL_Component {...body}/>
    case 16:
      return <Duty_NA_Component {...body}/>
    case 17:
      return <Duty_AB_Component {...body}/>
  }
}



export default dutyGroupComponentGen;