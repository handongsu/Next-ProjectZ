import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  router.replace("i/flow/login");
  return null;
}

//router.push
//localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
//뒤로가기 했을때 i/flow/login -> /login으로

//router.replace
//localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
//뒤로가기 했을 때 i/flow/login -> localhost:3000으로
