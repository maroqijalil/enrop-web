import AssetProps from '../Props/AssetProps';

const TwitterIcon = (props: AssetProps) => {
  const { width = 40, height = 40 } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31 11.0101C30.0424 11.6855 28.9821 12.2022 27.86 12.5401C27.2577 11.8476 26.4573 11.3567 25.567 11.134C24.6767 10.9112 23.7395 10.9673 22.8821 11.2945C22.0247 11.6218 21.2884 12.2045 20.773 12.9638C20.2575 13.7231 19.9877 14.6224 20 15.5401V16.5401C18.2426 16.5856 16.5013 16.1959 14.931 15.4055C13.3607 14.6151 12.0103 13.4487 11 12.0101C11 12.0101 7 21.0101 16 25.0101C13.9405 26.408 11.4872 27.109 9 27.0101C18 32.0101 29 27.0101 29 15.5101C28.9991 15.2315 28.9723 14.9537 28.92 14.6801C29.9406 13.6735 30.6608 12.4028 31 11.0101V11.0101Z"
        stroke="#0066FE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TwitterIcon;
