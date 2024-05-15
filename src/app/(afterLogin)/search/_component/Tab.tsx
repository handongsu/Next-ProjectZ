"use client";

import style from "../search.module.css";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function Tab() {
  const [current, setCurrent] = useState("hot");
  const router = useRouter(); //현재 페이지의 URL, 쿼리 파라미터, 라우트 매개변수 등과 같은 라우터 정보에 접근할 수 있습니다. useRouter를 사용하여 현재 페이지의 라우터 정보를 가져와서 해당 정보를 기반으로 동적으로 컴포넌트를 렌더링하거나 상태를 업데이트하는 등 다양한 작업을 수행할 수 있습니다.
  console.log(router);
  const searchParams = useSearchParams();
  console.log(searchParams);
  const onClickHot = () => {
    setCurrent("hot");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };
  const onClickNew = () => {
    setCurrent("new");
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === "new"}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === "hot"}></div>
        </div>
      </div>
    </div>
  );
}
