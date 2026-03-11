import { GoogleAnalytics as GA } from "@next/third-parties/google";

export default function GoogleAnalytics() {
  // Replace G-XXXXXXXXXX with your actual Google Analytics 4 Measurement ID
  // Get it from: https://analytics.google.com → Admin → Data Streams → Measurement ID
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

  // Only render GA in production or when ID is configured
  if (GA_MEASUREMENT_ID === "G-XXXXXXXXXX" && process.env.NODE_ENV === "production") {
    return null;
  }

  return <GA gaId={GA_MEASUREMENT_ID} />;
}
