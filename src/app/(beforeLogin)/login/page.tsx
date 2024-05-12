"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  //i/flow/login 으로 이동
  return <Main />;
}

//useRouter - 현재 페이지의 라우터 정보를 가져올 수 있게 해주는 기능 이 Hook을 사용하면 현재 페이지의 URL, 쿼리 파라미터, 라우트 매개변수 등과 같은 라우터 정보에 접근할 수 있다.
// useRouter를 사용하여 현재 페이지의 라우터 정보를 가져와서 해당 정보를 기반으로 동적으로 컴포넌트를 렌더링하거나 상태를 업데이트 하는 등 다양한 작업 수행 가능
