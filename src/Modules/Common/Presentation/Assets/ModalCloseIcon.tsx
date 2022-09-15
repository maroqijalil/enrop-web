import AssetProps from '../Props/AssetProps';

const ModalCloseIcon = (props: AssetProps) => {
  const {width, height, stroke} = props;
  return (
    <svg
      width={width ?? 23}
      height={height ?? 23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 2L2 21"
        stroke={stroke ?? '#FFFFFF'}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 2L21 21"
        stroke={stroke ?? '#FFFFFF'}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ModalCloseIcon;
