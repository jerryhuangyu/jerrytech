import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type SocialMediaLink = {
  name: string;
  icon: string | StaticImport;
  to: string;
};
