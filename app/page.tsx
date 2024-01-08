import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Layout from "./layout";

export default function Home() {
    return (
        <Layout selected="home">
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-bold">
                    Welcome back, Baptist ! 👋
                </h1>
                <div className="grid grid-cols-4 gap-5">
                    <div className="bg-secondary rounded-xl w-full h-96 flex flex-col justify-end p-4 gap-3">
                        <div className="bg-indigo-600 rounded-lg w-full h-full"></div>
                        <div className="flex justify-between">
                            <h1 className="font-semibold">CountryGuessr</h1>
                            <h1 className="font-semibold">Free</h1>
                        </div>
                        <Link href={"/countryguessr"}>
                            <Button className="w-full">Play</Button>
                        </Link>
                    </div>
                    <Skeleton className="bg-secondary rounded-xl w-full h-96" />
                    <Skeleton className="bg-secondary rounded-xl w-full h-96" />{" "}
                    <Skeleton className="bg-secondary rounded-xl w-full h-96" />{" "}
                    <Skeleton className="bg-secondary rounded-xl w-full h-96" />{" "}
                    <Skeleton className="bg-secondary rounded-xl w-full h-96" />{" "}
                    <Skeleton className="bg-secondary rounded-xl w-full h-96" />{" "}
                    <Skeleton className="bg-secondary rounded-xl w-full h-96" />{" "}
                </div>
            </div>
        </Layout>
    );
}
