import { Navigation } from "./Navigation";

export function Layout(props) {
  return (
    <>
      <Navigation></Navigation>
      <div>{props.children}</div>
    </>
  );
}
