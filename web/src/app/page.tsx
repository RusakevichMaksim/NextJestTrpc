import Image from "next/image";
import styles from "./page.module.css";

import { trpc } from "./trpc.ts/trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `dsadas` });
  return <div>{greeting}</div>;
}
