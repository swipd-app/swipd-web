import type { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";
import { InstallRedirect } from "./install-redirect";

export const metadata: Metadata = {
  title: `Install ${APP_NAME}`,
  description: `Download ${APP_NAME} on iOS or Android. Swipe through curated products and discover amazing deals.`,
};

export default function InstallPage() {
  return <InstallRedirect />;
}
