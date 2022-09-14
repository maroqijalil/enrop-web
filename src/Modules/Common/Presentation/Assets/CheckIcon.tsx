import AssetProps from '../Props/AssetProps';

const CheckIcon = (props: AssetProps) => {
  const { width = 32, height = 32 } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_213_18637)">
        <rect width="32" height="32" rx="16" fill="#00B894" />
      </g>
      <path
        d="M20.48 12.6401L14.32 18.8001L11.52 16.0001"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_213_18637"
          x="-48"
          y="-48"
          width="128"
          height="128"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="24" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_213_18637" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_213_18637"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CheckIcon;
