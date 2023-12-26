const GreenTickIcon = ({color, size}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM14.144 21.42L22.78 10.624L21.22 9.376L13.856 18.578L8.64 14.232L7.36 15.768L14.144 21.422V21.42Z"
      fill={color}
    />
  </svg>
);
export default GreenTickIcon;
