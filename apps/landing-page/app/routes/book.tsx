import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/404");
}

export default function Book() {
  return null;
}
