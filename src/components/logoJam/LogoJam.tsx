interface CustomImageProps {
    className?: string;
  }
  
export const LogoJam: React.FC<CustomImageProps> = ({ className }) => {
    return <img 
        className={className}
        src="http://www.ctjam.kinghost.net/images/logo-ctjam.png" 
        alt="Logo Ct Jam"
    />;
};