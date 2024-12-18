import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

type Datalinks = {
  name: string;
  path: string;
};

const data: Datalinks[] = [
  {
    name: "Chats",
    path: "/chat",
  },
  {
    name: "Assitants",
    path: "/assistant",
  },
];

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex h-full w-full items-center justify-center gap-8">
        {data.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>Go to your {item.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={item.path}>{item.name}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
