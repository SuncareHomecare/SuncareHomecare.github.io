/** @jsxImportSource theme-ui */
import { NavLink as A } from "theme-ui";
import Link from "next/link";

const NavLink = (props) => (
  <A as={AsLink} activeClassName="active" href={props.path}>
    {props.children || props.label}
  </A>
);

function AsLink(props) {
  return <Link activeClassName="active" {...props} />;
}
export default NavLink;
