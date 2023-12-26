const ClockIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 17 17"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4_17)">
      <path
        d="M8.63574 16.2041C12.9107 16.2041 16.3857 12.7291 16.3857 8.4541C16.3857 4.17911 12.9107 0.704102 8.63574 0.704102C4.36075 0.704102 0.885742 4.17911 0.885742 8.4541C0.885742 12.7291 4.36075 16.2041 8.63574 16.2041ZM7.88574 4.2991C7.88574 3.88409 8.22073 3.5491 8.63574 3.5491C9.05075 3.5491 9.38574 3.88409 9.38574 4.2991V7.7041H11.1357C11.5508 7.7041 11.8857 8.03909 11.8857 8.4541C11.8857 8.86911 11.5508 9.2041 11.1357 9.2041H8.63574C8.22073 9.2041 7.88574 8.86911 7.88574 8.4541V4.2991Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_4_17">
        <rect
          width={size}
          height={size}
          fill={color}
          transform="translate(0.635742 0.454102)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default ClockIcon;
