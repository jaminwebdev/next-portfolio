import Container from "../../Container";
import ScrollReveal from "../../ScrollReveal";
import Image from "next/image";

const FavoriteStackSection = () => {
  return (
    <section id="favoriteStack" className="py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div id="deviceImages" className="grid justify-center">
            <div className="relative">
              <Image
                src="/images/dream-site-desktop.png"
                alt="example site desktop view"
                width={577}
                height={355}
                className="shadow-xl"
              />
              <div className="absolute bottom-0 -right-4">
                <Image
                  src="/images/dream-site-phone.png"
                  alt="example site mobile view"
                  width={132}
                  height={263}
                />
              </div>
              <div className="absolute -top-5 -left-10 -z-10">
                <Image
                  src="/blue-dotted-square.svg"
                  alt="example site mobile view"
                  width={215}
                  height={145}
                />
              </div>
            </div>
          </div>
          <div id="stackIcons" className="py-4 pl-0 lg:pl-20 grid gap-4">
            <h2 className="text-4xl">
              My Favorite <span className="text-secondary">Stack</span>
            </h2>
            <p className="my-4">
              I love all things JS, however, this stack I&apos;m particularly
              fond of. In fact, it&apos;s what this site is built with.
            </p>
            <div className="rounded-lg bg-body-color-light-secondary dark:bg-body-color-dark-secondary shadow-lg p-6 grid gap-6 grid-cols-[1fr,4fr] items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 597 508"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M331.09 6.5375C333.221 9.18296 334.307 12.7528 336.481 19.8927L383.961 175.867C366.406 166.76 347.322 160.192 327.196 156.648L296.281 52.1785C295.776 50.4691 294.205 49.2964 292.423 49.2964C290.636 49.2964 289.063 50.4752 288.561 52.1905L258.021 156.595C237.801 160.123 218.63 166.703 201 175.843L248.713 19.8566H248.714C250.894 12.7291 251.984 9.16542 254.115 6.52465C255.996 4.19338 258.444 2.38284 261.223 1.26555C264.372 -6.27323e-07 268.098 0 275.552 0H309.631C317.095 0 320.826 -5.22769e-07 323.978 1.26821C326.76 2.3878 329.208 4.20198 331.09 6.5375Z"
                    className="fill-black dark:fill-white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M336.771 183.29C328.944 189.983 313.321 194.547 295.325 194.547C273.238 194.547 254.726 187.671 249.813 178.423C248.057 183.723 247.663 189.789 247.663 193.664C247.663 193.664 246.506 212.69 259.74 225.925C259.74 219.053 265.311 213.484 272.182 213.484C283.96 213.484 283.947 223.758 283.936 232.095C283.936 232.345 283.935 232.593 283.935 232.838C283.935 245.492 291.669 256.339 302.668 260.913C301.025 257.534 300.103 253.739 300.103 249.73C300.103 237.662 307.189 233.167 315.423 227.944C321.975 223.789 329.254 219.174 334.271 209.912C336.888 205.079 338.375 199.546 338.375 193.664C338.375 190.047 337.813 186.561 336.771 183.29Z"
                    fill="#FF5D01"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M336.771 183.29C328.944 189.983 313.321 194.547 295.325 194.547C273.238 194.547 254.726 187.671 249.813 178.423C248.057 183.723 247.663 189.789 247.663 193.664C247.663 193.664 246.506 212.69 259.74 225.925C259.74 219.053 265.311 213.484 272.182 213.484C283.96 213.484 283.947 223.758 283.936 232.095C283.936 232.345 283.935 232.593 283.935 232.838C283.935 245.492 291.669 256.339 302.668 260.913C301.025 257.534 300.103 253.739 300.103 249.73C300.103 237.662 307.189 233.167 315.423 227.944C321.975 223.789 329.254 219.174 334.271 209.912C336.888 205.079 338.375 199.546 338.375 193.664C338.375 190.047 337.813 186.561 336.771 183.29Z"
                    fill="url(#paint1_linear_1343_1942)"
                  />
                  <g clipPath="url(#clip0_1343_1942)">
                    <path
                      d="M508.934 299.001L482.492 344.726L456.05 299.001H367.995L482.492 496.999L596.989 299.001H508.934Z"
                      fill="#41B883"
                    />
                    <path
                      d="M508.934 299.001L482.492 344.726L456.05 299.001H413.793L482.492 417.797L551.19 299.001H508.934Z"
                      fill="#34495E"
                    />
                  </g>
                  <g clipPath="url(#clip1_1343_1942)">
                    <path
                      d="M123 420.039C135.109 420.039 144.926 410.172 144.926 398C144.926 385.828 135.109 375.96 123 375.96C110.89 375.96 101.074 385.828 101.074 398C101.074 410.172 110.89 420.039 123 420.039Z"
                      fill="#61DAFB"
                    />
                    <path
                      d="M123 443.154C187.977 443.154 240.652 422.938 240.652 398C240.652 373.063 187.977 352.847 123 352.847C58.0223 352.847 5.34766 373.063 5.34766 398C5.34766 422.938 58.0223 443.154 123 443.154Z"
                      stroke="#61DAFB"
                      strokeWidth="5.8"
                    />
                    <path
                      d="M84.0967 420.577C116.586 477.14 160.34 512.885 181.826 500.416C203.312 487.947 194.392 431.986 161.903 375.424C129.415 318.861 85.6598 283.116 64.174 295.585C42.6883 308.053 51.608 364.014 84.0967 420.577Z"
                      stroke="#61DAFB"
                      strokeWidth="5.8"
                    />
                    <path
                      d="M84.0962 375.424C51.6075 431.986 42.6878 487.947 64.1735 500.416C85.6592 512.885 129.414 477.14 161.903 420.577C194.392 364.015 203.311 308.054 181.826 295.585C160.34 283.116 116.585 318.861 84.0962 375.424Z"
                      stroke="#61DAFB"
                      strokeWidth="5.8"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1343_1942"
                      x1="345.99"
                      y1="-8.26963"
                      x2="292.481"
                      y2="175.867"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#000014" />
                      <stop offset="1" stopColor="#150426" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1343_1942"
                      x1="372.013"
                      y1="128.845"
                      x2="325.671"
                      y2="225.861"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF1639" />
                      <stop offset="1" stopColor="#FF1639" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_1343_1942">
                      <rect
                        width="229"
                        height="198"
                        fill="white"
                        transform="translate(368 299)"
                      />
                    </clipPath>
                    <clipPath id="clip1_1343_1942">
                      <rect
                        width="246"
                        height="220"
                        fill="white"
                        transform="translate(0 288)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="grid gap-2">
                <h4>Astro, React & Vue</h4>
                <p>Astro&apos;s island architecture is seriously powerful.</p>
              </div>
            </div>
            <div className="rounded-lg bg-body-color-light-secondary dark:bg-body-color-dark-secondary shadow-lg p-6 grid gap-6 grid-cols-[1fr,4fr] items-center">
              <div className="grid place-content-center">
                <Image
                  src="/icons/icon-node.svg"
                  alt="Node logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="grid gap-2">
                <h4>Node JS</h4>
                <p>
                  Node & Express is incredibly flexible and great for general
                  i/o.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-body-color-light-secondary dark:bg-body-color-dark-secondary shadow-lg p-6 grid gap-6 grid-cols-[1fr,4fr] items-center">
              <div className="grid place-content-center">
                <Image
                  src="/icons/icon-supabase.svg"
                  alt="Node logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="grid gap-2">
                <h4>Supabase</h4>
                <p>
                  Real-time? ✔. PocheckstgreSQL? ✔. Magic link auth? ✔. What
                  more could you want?
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FavoriteStackSection;
