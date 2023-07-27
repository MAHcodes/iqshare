import { ComponentType, HTMLAttributes, Suspense } from "react";

import Loading from "../Loading";

const withSuspense =
  <T extends HTMLAttributes<HTMLElement>>(Component: ComponentType<T>) =>
  // eslint-disable-next-line react/display-name
  (props: T) => (
    <Suspense fallback={<Loading fullscreen />}>
      <Component {...props} />
    </Suspense>
  );

export default withSuspense;
