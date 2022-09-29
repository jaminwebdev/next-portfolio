/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import AppIcon from "../AppIcon";

interface AppCardProps {
  iconLinks?: string[];
  icons?: string[];
  tagIcon?: string;
  tagLink?: string;
  heading: string;
  body: string;
  btns?: JSX.Element | React.ReactNode;
  bgImg: string;
}

const AppCard = ({
  iconLinks,
  icons,
  tagIcon,
  tagLink,
  heading,
  body,
  btns,
  bgImg,
}: AppCardProps) => {
  return (
    <div className="grid grid-rows-[210px,1fr] gap-6 bg-body-color-light-secondary/50 dark:bg-body-color-dark-secondary rounded-2xl shadow-lg lg:shadow-xl shadow-primary-dark/10 p-6 pb-8">
      <div className="rounded-xl min-h-[210px] w-full relative overflow-hidden">
        <Image src={bgImg} layout="fill" alt="" />
        <div className="flex gap-2 absolute left-2 bottom-1">
          {icons?.map((icon, index) => (
            <a
              href={iconLinks?.[index]}
              key={icon}
              className="p-2 rounded-full bg-body-color-light dark:bg-body-color-dark grid place-content-center hover:scale-110 transition-all ease duration-200">
              <img
                className="w-6"
                src={`/icons/icon-${icon}.svg`}
                alt={`${icon} logo`}
              />
            </a>
          ))}
        </div>
        {tagIcon ? (
          <div className="absolute top-2 right-2">
            <a href={tagLink ?? "/"} className="group">
              <AppIcon
                icon={tagIcon}
                classNames="w-8 fill-primary-dark group-hover:scale-110 transition-all ease duration-200 "
              />
            </a>
          </div>
        ) : null}
      </div>
      <div className="grid gap-3">
        <h3 className="font-bold text-2xl">{heading}</h3>
        <p>{body}</p>
        {btns ? (
          <div className="mt-2 content-end grid grid-cols-[repeat(auto-fit,_minmax(130px,_max-content))] justify-between gap-4 md:gap-4 lg:gap-4">
            {btns}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AppCard;
