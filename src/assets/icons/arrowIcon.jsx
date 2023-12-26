const ArrowIcon = ({ color, size, scale }) => (
  <svg
    style={{ transform: `scale(${scale}) rotateZ(180deg)` }}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
  >
    <path
      fill={color}
      d="M12 16a1.332 1.332 0 0 1 .387-.946L17.72 9.72a1.339 1.339 0 0 1 1.893 1.894L15.213 16l4.387 4.387a1.333 1.333 0 0 1-1.88 1.88l-5.333-5.333A1.334 1.334 0 0 1 12 16Z"
    />
  </svg>
);
export default ArrowIcon;
