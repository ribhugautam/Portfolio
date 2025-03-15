import { LinkedInProfile } from "@/models/linkedIn-data";
import { create } from "zustand";

const initialState: LinkedInProfile = {
  id: "",
  urn: "",
  username: "",
  firstName: "",
  lastName: "",
  fullName: "",
  headline: "",
  summary: "",
  isTopVoice: true,
  isCreator: true,
  isPremium: true,
  profilePicture: { url: "", width: 0, height: 0 },
  profilePictures: [{ url: "", width: 0, height: 0 }],
  backgroundImage: { url: "", width: 0, height: 0 },
  geo: {
    country: "",
    countryCode: "",
    city: "",
    cityCode: "",
    state: "",
    stateCode: "",
  },
  educations: [],
  position: {
    companyName: "",
    title: "",
    start: { day: 0, month: 0, year: 0 },
  },
  fullPositions: [],
};

const useStore = create((set) => ({
  linkedInData: initialState,
  setLinkedInData: (data: LinkedInProfile) => set({ linkedInData: data }),
}));

export default useStore;
