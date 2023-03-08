import { IInputFormConst, IPickDateConst } from "@/types/types";

export const PICK_DATE: IPickDateConst = {
  DATE: {
    name: "date",
    src: "/icons/date-icon.svg",
    size: 34,
    title: "Date",
  },
  TIME: {
    name: "time",
    src: "/icons/clock-icon.svg",
    size: 48,
    title: "Time",
  },
};

export const INPUT_FORM: IInputFormConst = {
  VENUE: {
    name: "venue",
    src: "/icons/location-icon.svg",
    alt: "location",
    width: 14,
    height: 17,
    placeholder: "Venue",
    type: "string",
  },
  MAX_OPACITY: {
    name: "maxOpacity",
    src: "/icons/max-capacity-icon.svg",
    alt: "max-capacity-icon",
    width: 17,
    height: 15,
    placeholder: "Max Capacity",
    type: "number",
  },
  COST: {
    name: "cost",
    src: "/icons/cost-icon.svg",
    alt: "cost icon",
    width: 17,
    height: 15,
    placeholder: "Cost per person",
    type: "number",
  },
};
