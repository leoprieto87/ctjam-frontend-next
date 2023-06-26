interface CustomImageProps {
  className?: string
}

// eslint-disable-next-line no-undef
export const LogoJam: React.FC<CustomImageProps> = ({ className }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src="https://ctjam.com.br/images/logo-ctjam.png"
      alt="Logo Ct Jam"
    />
  )
}
