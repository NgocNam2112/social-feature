interface ISocial {
  title: string;
  venue: string;
  maxOpacity: string;
  cost: string;
  description: string;
}

export interface ISocialInformation extends ISocial {
  date: Date | null;
  time: Date | null;
}

export interface ISocialInformationError extends ISocial {
  date: string;
  time: string;
  privacy: string;
  isManualApprove: string;
}

export interface IPickDate {
  name: string;
  src: string;
  size: number;
  title: string;
}

export interface IPickDateConst {
  DATE: IPickDate;
  TIME: IPickDate;
}

export interface IInputForm {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholder: string;
  type: string;
}

export interface IInputFormConst {
  VENUE: IInputForm;
  MAX_OPACITY: IInputForm;
  COST: IInputForm;
}

export interface ISocialSetting {
  isManualApprove: boolean;
}

export interface ISocialTag {
  id: number;
  name: string;
}
