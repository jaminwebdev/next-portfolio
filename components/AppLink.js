import Link from "next/link";

const AppLink = ({ origin = "internal", link, children }) => {
  const decorationColors = {
    0: "decoration-sky-500",
    1: "decoration-pink-500",
    2: "decoration-indigo-500",
    3: "decoration-emerald-500",
  };

  const randomNumber = Math.floor(Math.random() * 4);

  return (
    <>
      {origin === "external" ? (
        <span className="hover:scale-105">
          <a
            href={link}
            className={`
              underline
              decoration-2
              font-semibold
              ${decorationColors[randomNumber]}`}>
            {children}
          </a>
        </span>
      ) : (
        <span className="hover:scale-105 inline-block">
          <Link href={link}>
            <a>
              <span
                className={`
              underline
              decoration-2
              font-semibold
              ${decorationColors[randomNumber]}`}>
                {children}
              </span>
            </a>
          </Link>
        </span>
      )}
    </>
  );
};

export default AppLink;
