import { ComponentType, HTMLAttributes, Suspense } from "react";

import Loading from "../Loading";

const WithSuspense = <T extends HTMLAttributes<HTMLElement>>(
  Component: ComponentType<T>,
) => {
  const EnhancedWithSuspense = (props: T) => (
    <Suspense fallback={<Loading fullscreen />}>
      <Component {...props} />
    </Suspense>
  );
  return EnhancedWithSuspense;
};

export default WithSuspense;
