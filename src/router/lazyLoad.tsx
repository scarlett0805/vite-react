/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";

function LazyLoad(Element: any) {
  return (
    <Suspense fallback={<h1>加载中.....</h1>}>
      <Element />
    </Suspense>
  );
}

export default LazyLoad;
