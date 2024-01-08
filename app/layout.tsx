import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { GlobeAsiaAustraliaIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
    children,
    selected,
}: {
    children: React.ReactNode;
    selected: string;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex h-screen w-full  gap-5 divide-x-2 divide-secondary">
                    <div className="w-[15%] py-5 pl-5">
                        <div className="pb-12">
                            <div className="space-y-4 py-4">
                                <div className="px-3 py-2">
                                    <div className="pb-10">
                                        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                                            CountryGames
                                        </h2>
                                        <h2 className="mb-2 px-4 text-md font-secondary tracking-tight">
                                            Welcome back, Baptist ! 👋
                                        </h2>
                                    </div>
                                    <div className="space-y-1">
                                        <Link href={"/"}>
                                            <Button
                                                variant={
                                                    selected == "home"
                                                        ? "secondary"
                                                        : "ghost"
                                                }
                                                className="w-full justify-start">
                                                <GlobeAsiaAustraliaIcon className="h-5 w-5 mr-2" />
                                                Home
                                            </Button>
                                        </Link>
                                        <Link href={"/countryguessr"}>
                                            <Button
                                                variant={
                                                    selected == "countryguessr"
                                                        ? "secondary"
                                                        : "ghost"
                                                }
                                                className="w-full justify-start">
                                                <GlobeAsiaAustraliaIcon className="h-5 w-5 mr-2" />
                                                CountryGuessr
                                            </Button>
                                        </Link>
                                        <Button
                                            variant={
                                                selected == "CapitaleFinding"
                                                    ? "secondary"
                                                    : "ghost"
                                            }
                                            className="w-full justify-start">
                                            <GlobeAsiaAustraliaIcon className="h-5 w-5 mr-2" />
                                            CapitaleFinding
                                        </Button>
                                        <Button
                                            variant={
                                                selected == "WhatBorders"
                                                    ? "secondary"
                                                    : "ghost"
                                            }
                                            className="w-full justify-start">
                                            <GlobeAsiaAustraliaIcon className="h-5 w-5 mr-2" />
                                            WhatBorders
                                        </Button>
                                    </div>
                                </div>
                                <div className="px-3 py-2">
                                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                                        Games
                                    </h2>
                                    <div className="space-y-1">
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-start">
                                            <GlobeAsiaAustraliaIcon className="h-5 w-5 mr-2" />
                                            Friends
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-start">
                                            <GlobeAsiaAustraliaIcon className="h-5 w-5 mr-2" />
                                            Leaderboards
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-start">
                                            <PlusIcon
                                                strokeWidth={3}
                                                className="h-4 w-4 mr-2"
                                            />
                                            Add a friend
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 pl-5 max-h-screen overflow-y-scroll">
                        <div className="p-5">{children}</div>
                    </div>
                </main>
            </body>
        </html>
    );
}
