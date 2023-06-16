interface CustomImageProps {
  className?: string
}

// eslint-disable-next-line no-undef
export const LogoJam: React.FC<CustomImageProps> = ({ className }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src="http://ctjam.nodejsng10f06.kinghost.net/images/logo-ctjam.png"
      alt="Logo Ct Jam"
    />
  )
}
