import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BasicLink = {
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

export type Section = "" | "about" | "experience" | "project";
