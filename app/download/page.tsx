import type { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";
import { DownloadRedirect } from "./download-redirect";

export const metadata: Metadata = {
  title: `Download ${APP_NAME}`,
  description: `Download ${APP_NAME} on iOS or Android. Swipe through curated products and discover amazing deals.`,
};

export default function DownloadPage() {
  return <DownloadRedirect />;
}
