import { Box } from "theme-ui";
import RcDrawer from "rc-drawer";

export default function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <div styles="top: 0; position: fixed">
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`${className || ""}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={["#__next"]}
        duration={"0.4s"}
        {...props}
      >
        <Box sx={drawerStyle}>
          {closeButton && (
            <Box as="div" onClick={toggleHandler} sx={closeBtnStyle}>
              {closeButton}
            </Box>
          )}
          {children}
        </Box>
      </RcDrawer>
      <Box className="drawer__handler" style={{ dispaly: "inline-block" }} onClick={toggleHandler}>
        {drawerHandler}
      </Box>
    </div>
  );
}

Drawer.defaultProps = {
  width: "35vw",
  placement: "left",
};
