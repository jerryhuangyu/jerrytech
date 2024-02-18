import { proxy } from "valtio";
import { Section } from "@/types";

export const store = proxy<{ toggleSection: Section }>({
  toggleSection: "",
});
