import Image from "next/image";

interface ThumbnailCardProps {
  img: string;
  link: string;
  heading: string;
}

const ThumbnailCard = ({ img, link, heading }: ThumbnailCardProps) => {
  return (
    <a href={link} className="hover:scale-105 transition-all duration-200">
      <div className="grid gap-4 items-center grid-cols-[max-content,1fr] p-5 bg-body-color-light-secondary dark:bg-body-color-dark-secondary rounded-md">
        <div className="rounded-full overflow-hidden flex">
          <Image
            src={img}
            width={55}
            height={55}
            alt={`${heading} YouTube thumbnail`}
            quality={75}
          />
        </div>
        <h4>{heading}</h4>
      </div>
    </a>
  );
};

export default ThumbnailCard;
