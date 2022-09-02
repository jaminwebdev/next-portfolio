import { useEffect, useState } from "react";
import useDarkMode from "../lib/useDarkMode";

const ColorModeToggle = () => {
  const [theme, setTheme] = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const changeColorMode = () => {
    setTheme((oldColorTheme) => {
      return oldColorTheme === "light" ? "dark" : "light";
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="p-2 cursor-pointer hover:scale-110 transition-all duration-200"
      onClick={changeColorMode}>
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41 41"
          fill="none"
          className="w-5">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.7095 30.6203C33.5381 30.6244 33.3665 30.6265 33.195 30.6266C20.5913 30.6266 10.3734 20.4087 10.3734 7.80498C10.3734 7.63278 10.3734 7.46058 10.3797 7.29046C8.55792 8.74903 7.06423 10.5754 5.99611 12.6503C4.92799 14.7252 4.30944 17.0021 4.18084 19.3323C4.05224 21.6624 4.41649 23.9935 5.24979 26.1734C6.0831 28.3533 7.36674 30.3329 9.01692 31.9831C10.6671 33.6333 12.6467 34.9169 14.8266 35.7502C17.0065 36.5835 19.3376 36.9478 21.6677 36.8192C23.9979 36.6906 26.2748 36.072 28.3497 35.0039C30.4246 33.9358 32.251 32.4421 33.7095 30.6203V30.6203ZM36.2365 26.2303C32.8906 26.7837 29.4572 26.4155 26.3048 25.1651C23.1524 23.9147 20.4001 21.8293 18.3432 19.1329C16.2864 16.4365 15.0028 13.2308 14.6302 9.86001C14.2576 6.48921 14.81 3.08056 16.2282 0C11.6233 1.02723 7.5061 3.59351 4.55587 7.27545C1.60564 10.9574 -0.00135204 15.535 8.53526e-07 20.2531C8.53526e-07 31.7116 9.28838 41 20.7469 41C25.4649 41.001 30.0423 39.3938 33.7242 36.4437C37.4061 33.4935 39.9724 29.3765 41 24.7718C39.4852 25.4704 37.8828 25.961 36.2365 26.2303V26.2303Z"
            className="fill-white"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 60"
          fill="none"
          className="w-5">
          <path
            d="M30 41.25C27.0163 41.25 24.1548 40.0647 22.045 37.955C19.9353 35.8452 18.75 32.9837 18.75 30C18.75 27.0163 19.9353 24.1548 22.045 22.045C24.1548 19.9353 27.0163 18.75 30 18.75C32.9837 18.75 35.8452 19.9353 37.955 22.045C40.0647 24.1548 41.25 27.0163 41.25 30C41.25 32.9837 40.0647 35.8452 37.955 37.955C35.8452 40.0647 32.9837 41.25 30 41.25ZM30 45C33.9782 45 37.7936 43.4196 40.6066 40.6066C43.4196 37.7936 45 33.9782 45 30C45 26.0218 43.4196 22.2064 40.6066 19.3934C37.7936 16.5804 33.9782 15 30 15C26.0218 15 22.2064 16.5804 19.3934 19.3934C16.5804 22.2064 15 26.0218 15 30C15 33.9782 16.5804 37.7936 19.3934 40.6066C22.2064 43.4196 26.0218 45 30 45V45ZM30 0C30.4973 0 30.9742 0.197544 31.3258 0.549175C31.6775 0.900806 31.875 1.37772 31.875 1.875V9.375C31.875 9.87228 31.6775 10.3492 31.3258 10.7008C30.9742 11.0525 30.4973 11.25 30 11.25C29.5027 11.25 29.0258 11.0525 28.6742 10.7008C28.3225 10.3492 28.125 9.87228 28.125 9.375V1.875C28.125 1.37772 28.3225 0.900806 28.6742 0.549175C29.0258 0.197544 29.5027 0 30 0V0ZM30 48.75C30.4973 48.75 30.9742 48.9475 31.3258 49.2992C31.6775 49.6508 31.875 50.1277 31.875 50.625V58.125C31.875 58.6223 31.6775 59.0992 31.3258 59.4508C30.9742 59.8025 30.4973 60 30 60C29.5027 60 29.0258 59.8025 28.6742 59.4508C28.3225 59.0992 28.125 58.6223 28.125 58.125V50.625C28.125 50.1277 28.3225 49.6508 28.6742 49.2992C29.0258 48.9475 29.5027 48.75 30 48.75V48.75ZM60 30C60 30.4973 59.8025 30.9742 59.4508 31.3258C59.0992 31.6775 58.6223 31.875 58.125 31.875H50.625C50.1277 31.875 49.6508 31.6775 49.2992 31.3258C48.9475 30.9742 48.75 30.4973 48.75 30C48.75 29.5027 48.9475 29.0258 49.2992 28.6742C49.6508 28.3225 50.1277 28.125 50.625 28.125H58.125C58.6223 28.125 59.0992 28.3225 59.4508 28.6742C59.8025 29.0258 60 29.5027 60 30ZM11.25 30C11.25 30.4973 11.0525 30.9742 10.7008 31.3258C10.3492 31.6775 9.87228 31.875 9.375 31.875H1.875C1.37772 31.875 0.900806 31.6775 0.549175 31.3258C0.197544 30.9742 0 30.4973 0 30C0 29.5027 0.197544 29.0258 0.549175 28.6742C0.900806 28.3225 1.37772 28.125 1.875 28.125H9.375C9.87228 28.125 10.3492 28.3225 10.7008 28.6742C11.0525 29.0258 11.25 29.5027 11.25 30ZM51.2137 8.78625C51.5653 9.13786 51.7627 9.61469 51.7627 10.1119C51.7627 10.6091 51.5653 11.0859 51.2137 11.4375L45.9113 16.7438C45.7369 16.9178 45.53 17.0559 45.3023 17.15C45.0747 17.2441 44.8307 17.2925 44.5843 17.2923C44.0867 17.2919 43.6097 17.0939 43.2581 16.7419C43.084 16.5675 42.946 16.3606 42.8519 16.133C42.7578 15.9053 42.7094 15.6613 42.7096 15.4149C42.7099 14.9174 42.9079 14.4403 43.26 14.0887L48.5625 8.78625C48.9141 8.43474 49.3909 8.23728 49.8881 8.23728C50.3853 8.23728 50.8621 8.43474 51.2137 8.78625V8.78625ZM16.74 43.26C17.0915 43.6116 17.289 44.0884 17.289 44.5856C17.289 45.0828 17.0915 45.5596 16.74 45.9113L11.4375 51.2137C11.0839 51.5553 10.6102 51.7443 10.1186 51.74C9.627 51.7357 9.15673 51.5386 8.80909 51.1909C8.46145 50.8433 8.26426 50.373 8.25999 49.8814C8.25571 49.3898 8.4447 48.9161 8.78625 48.5625L14.0887 43.26C14.4404 42.9085 14.9172 42.711 15.4144 42.711C15.9116 42.711 16.3884 42.9085 16.74 43.26V43.26ZM51.2137 51.2137C50.8621 51.5653 50.3853 51.7627 49.8881 51.7627C49.3909 51.7627 48.9141 51.5653 48.5625 51.2137L43.26 45.9113C42.9185 45.5576 42.7295 45.084 42.7337 44.5924C42.738 44.1008 42.9352 43.6305 43.2828 43.2828C43.6305 42.9352 44.1008 42.738 44.5924 42.7337C45.084 42.7295 45.5576 42.9185 45.9113 43.26L51.2137 48.5625C51.5653 48.9141 51.7627 49.3909 51.7627 49.8881C51.7627 50.3853 51.5653 50.8621 51.2137 51.2137ZM16.74 16.7438C16.3884 17.0953 15.9116 17.2927 15.4144 17.2927C14.9172 17.2927 14.4404 17.0953 14.0887 16.7438L8.78625 11.4375C8.60717 11.2645 8.46433 11.0576 8.36606 10.8289C8.26779 10.6001 8.21607 10.3541 8.21391 10.1051C8.21174 9.85617 8.25918 9.60927 8.35346 9.37884C8.44774 9.14841 8.58696 8.93906 8.76301 8.76301C8.93906 8.58696 9.14841 8.44774 9.37884 8.35346C9.60927 8.25918 9.85617 8.21174 10.1051 8.21391C10.3541 8.21607 10.6001 8.26779 10.8289 8.36606C11.0576 8.46433 11.2645 8.60717 11.4375 8.78625L16.74 14.0887C16.9146 14.2629 17.0531 14.4698 17.1477 14.6976C17.2422 14.9254 17.2909 15.1696 17.2909 15.4163C17.2909 15.6629 17.2422 15.9071 17.1477 16.1349C17.0531 16.3627 16.9146 16.5696 16.74 16.7438V16.7438Z"
            className="fill-secondary"
          />
        </svg>
      )}
    </div>
  );
};

export default ColorModeToggle;
