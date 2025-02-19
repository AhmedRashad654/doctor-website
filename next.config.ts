import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
const protocol =
  process.env.NEXT_PUBLIC_PROTOCOL === "https"
    ? process.env.NEXT_PUBLIC_PROTOCOL
    : "https";

const hostname = process.env.NEXT_PUBLIC_IMAGE_HOSTNAME || "";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5047",
      },
      {
        protocol,
        hostname,
      },
    ],
  },
};

export default withNextIntl(nextConfig);
