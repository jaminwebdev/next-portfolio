/* eslint-disable @next/next/no-img-element */
import AppIcon from "../AppIcon";

interface OverlapCardProps {
  iconLinks?: string[];
  icons?: string[];
  tagIcon?: string;
  tagLink?: string;
  heading: string;
  body: string;
  btns?: JSX.Element | React.ReactNode;
  bgImg: string;
}

const OverlapCard = ({
  iconLinks,
  icons,
  tagIcon,
  tagLink,
  heading,
  body,
  btns,
  bgImg,
}: OverlapCardProps) => {
  return (
    <div className="grid grid-cols-8 grid-rows-[1fr,4fr,1fr]">
      <div
        style={{
          background: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="row-span-full col-span-3 col-start-1 rounded-lg"></div>
      <div className="row-start-2 p-12 row-end-3 col-start-3 col-end-[-1] bg-body-color-light dark:bg-body-color-dark-secondary shadow-xl shadow-primary-dark/13 grid gap-2 rounded-lg">
        <div className="grid grid-flow-col items-center">
          <div className="flex gap-2">
            {icons?.map((icon, index) => (
              <a
                href={iconLinks?.[index]}
                key={icon}
                className="p-1 rounded-full grid place-content-center hover:scale-110 transition-all ease duration-200">
                <img
                  className="w-6"
                  src={`/icons/icon-${icon}.svg`}
                  alt={`${icon} logo`}
                />
              </a>
            ))}
          </div>
          {tagIcon ? (
            <div className="justify-self-end">
              <a href={tagLink ?? "/"} className="group">
                <AppIcon
                  icon={tagIcon}
                  classNames="w-8 fill-primary-dark dark:fill-white group-hover:scale-110 transition-all ease duration-200 "
                />
              </a>
            </div>
          ) : null}
        </div>
        <div className="grid gap-5">
          <h3 className="font-bold text-3xl">{heading}</h3>
          <p>{body}</p>
          <div className="grid grid-cols-[max-content,max-content] justify-items-start gap-4">
            {btns}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlapCard;
