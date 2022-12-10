import numeral from "numeral";

export function formatMoneyAmount(num: number | string): string {
  return numeral(num).format("$ 0,0[.]00");
}
