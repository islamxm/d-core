import CONSTANTS from "../constants";

const getPxFromSm = (cm: number) => {
  return CONSTANTS.METRIC.cm * cm
}

export default getPxFromSm;