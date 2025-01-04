import { DutyGroupType } from "../../data/dutyGroups"
import { Duties, PersonBase } from "../../models"

export type Base<T extends [] | object, G extends DutyGroupType> = {
  name: string,
  groupType: G
  body: T,
  readonly isMultiple?: boolean
}

type DutyValue<dutyType extends Duties> = {
  readonly type: dutyType,
  personData?: PersonBase
  personId?: number,
}

type Patrul<T extends DutyValue<Duties>, P extends DutyValue<33 | 35>> = {ulusy:T, patrullar: P[]}
type Garawul<
  T extends DutyValue<Duties>,
  V extends DutyValue<Duties>,
  U extends DutyValue<Duties>
> = {serkerde:T, calshyryjy: V, sakcylar: U[]}

type WithNobatcy<T extends {}, V extends DutyValue<Duties>> = {nobatcy: V} & T 



export type Duty_GT = Base<DutyValue<0>[], 1>
export type Duty_HBN = Base<WithNobatcy<
  {komekci:DutyValue<2>}, DutyValue<1>
>, 2>
export type Duty_IG = Base<Garawul<
  DutyValue<3>, 
  DutyValue<5>, 
  DutyValue<6>
>, 3>
export type Duty_Operator = Base<DutyValue<36>, 4>
export type Duty_NB = Base<{
  ulusy:DutyValue<26>,
  nobatcylar:DutyValue<27>[]
}, 5>
export type Duty_PARK = Base<WithNobatcy<
  {cekiji:DutyValue<9>,gundeciler:DutyValue<8>[]}, 
  DutyValue<7>
>, 6>
export type Duty_BGN = Base<WithNobatcy<
  {komekciler:DutyValue<21>[]}, 
  DutyValue<20>
>, 7>
export type Duty_ROTA = Base<WithNobatcy<
  {gundeciler:DutyValue<23>[], rota: number}, 
  DutyValue<22>
>, 8>
export type Duty_DB = Base<WithNobatcy<
  {gatnadyjylar:DutyValue<30>[]}, 
  DutyValue<29>
>, 9>
export type Duty_IP = Base<Patrul<DutyValue<34>, DutyValue<35>>, 10>
export type Duty_GP = Base<Patrul<DutyValue<32>, DutyValue<33>>, 11>
export type Duty_GGBN = Base<WithNobatcy<{komekci:DutyValue<14>}, DutyValue<13>>, 12>
export type Duty_GG = Base<Garawul<DutyValue<15>, DutyValue<18>, DutyValue<19>> & {komekci:DutyValue<16>,dashynaChykaryjy:DutyValue<17>}, 13>
export type Duty_NN = Base<WithNobatcy<{ashpez:DutyValue<37>,ishciler:DutyValue<24>[]}, DutyValue<12>>, 14>
export type Duty_NL = Base<DutyValue<11>, 15>
export type Duty_NA = Base<DutyValue<10>, 16>
export type Duty_AB = Base<DutyValue<25>, 17>

export type _DutyBuilderDefaultScheme = Array<
  Duty_AB |
  Duty_BGN |
  Duty_DB |
  Duty_GG |
  Duty_GGBN |
  Duty_GP |
  Duty_GT |
  Duty_HBN |
  Duty_IG |
  Duty_IP |
  Duty_NA |
  Duty_NB |
  Duty_NL |
  Duty_NN |
  Duty_Operator |
  Duty_PARK |
  Duty_ROTA
>
 

export type _DutyBuilderItemType = 
  Duty_AB |
  Duty_BGN |
  Duty_DB |
  Duty_GG |
  Duty_GGBN |
  Duty_GP |
  Duty_GT |
  Duty_HBN |
  Duty_IG |
  Duty_IP |
  Duty_NA |
  Duty_NB |
  Duty_NL |
  Duty_NN |
  Duty_Operator |
  Duty_PARK |
  Duty_ROTA