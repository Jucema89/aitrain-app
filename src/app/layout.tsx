/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import PrelineScript from "./shared/components/PrelineScript";
import { SvgAitrainLogoPC, SvgAitrainLogoPhone } from "../../public/svg";
import Navigation from "./shared/components/navigation/navigation";
import Header from "./shared/components/header.component";
import StoreProvider from "./StoreProvider";
import { NotificationProvider } from "./shared/hooks/NotificationContext";

//const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aitrain | Train AI easy",
  description: "Aitrain: An app that democratizes access to fine-tuning AI models. Upload documents related to the company or customer service chat history, and it generates the files needed to train an LLM for the company's specific use case.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <Navigation />
        <div className="w-full lg:ps-64">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <NotificationProvider>
            <StoreProvider>
              { children }
              <PrelineScript />
            </StoreProvider>
          </NotificationProvider>
          </div>
        </div>
      </body>

    </html>
  )
}
