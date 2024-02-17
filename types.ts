import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type SocialMediaLink = {
  name: string;
  icon: string | StaticImport;
  to: string;
};

export type Card = {
  name: string;
  skills: string[];
  demo: string;
  source: string;
};
