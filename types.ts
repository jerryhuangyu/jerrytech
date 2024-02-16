import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Url } from "next/dist/shared/lib/router/router";

export type SocialMediaLink = {
  name: string;
  icon: string | StaticImport;
  to: Url;
};
