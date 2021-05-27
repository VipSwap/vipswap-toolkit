export type Position = "top" | "top-right" | "bottom"| "left"| "right";

export interface PositionProps {
  position?: Position;
  canScroll?: boolean;
  className?: string;
}

export interface DropdownProps extends PositionProps {
  target: React.ReactElement;
}
