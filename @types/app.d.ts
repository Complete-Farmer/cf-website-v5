export type IDrawerPropsDataText = {
    textOneFirst: string;
    textOneLast?: string;
    textTwoFirst: string;
    textTwoLast?: string;
}

export interface IDrawerPropsData {
  login: IDrawerPropsDataText,
  signup: IDrawerPropsDataText
}