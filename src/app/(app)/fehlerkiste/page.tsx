import { redirect } from "next/navigation";

export default function Fehlerkiste() {
  redirect("/ueben/fehlerkiste?scope=all");
}
