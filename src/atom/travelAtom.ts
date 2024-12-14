import { atom } from "jotai";

type TravelInfo = {
  contentid: string;
  title: string;
  addr1: string;
  firstimage: string;
  mapx: string;
  mapy: string;
};

export const travelListAtom = atom<TravelInfo[]>([]);
