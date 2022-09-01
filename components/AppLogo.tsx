import Link from "next/link";
import Image from "next/image";
import LogoBlue from "../public/logo--blue.svg";

interface AppLogoProps {
  classNames: string;
}

const AppLogo = ({ classNames }: AppLogoProps) => {
  return (
    <div>
      <Link href="/">
        <a className={classNames}>
          <Image
            src={LogoBlue}
            alt="He Builds Websites logo"
            width={150}
            height={75}
          />
        </a>
      </Link>
    </div>
  );
};

export default AppLogo;
