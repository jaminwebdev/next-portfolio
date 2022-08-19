interface IconComponentProps {
  icon: string;
  classNames: string;
}

const Icon = ({ icon = "book", classNames }: IconComponentProps) => {
  const icons = {
    book: () => (
      <svg
        className={classNames}
        viewBox="0 0 30 37"
        xmlns="http://www.w3.org/2000/svg">
        <path
          className="fill-inherit"
          d="M28.9535 0H5.23256C3.84528 0.00159908 2.51527 0.563757 1.53431 1.56315C0.55336 2.56253 0.00156958 3.91754 0 5.33088V35.1838C0 35.4666 0.110257 35.7378 0.306516 35.9377C0.502775 36.1377 0.76896 36.25 1.04651 36.25H26.1628C26.4403 36.25 26.7065 36.1377 26.9028 35.9377C27.099 35.7378 27.2093 35.4666 27.2093 35.1838C27.2093 34.9011 27.099 34.6299 26.9028 34.4299C26.7065 34.23 26.4403 34.1176 26.1628 34.1176H2.09302V33.7623C2.09395 32.9142 2.42501 32.1012 3.01359 31.5016C3.60217 30.902 4.40018 30.5647 5.23256 30.5637H28.9535C29.231 30.5637 29.4972 30.4514 29.6935 30.2514C29.8897 30.0515 30 29.7803 30 29.4975V1.06618C30 0.783409 29.8897 0.512223 29.6935 0.312276C29.4972 0.112329 29.231 0 28.9535 0ZM17.26 2.13235H22.3256V15.993L20.42 13.0072C20.2388 12.8688 20.0164 12.794 19.79 12.7941C19.5636 12.7941 19.3411 12.8689 19.16 13.0074L17.26 15.9923V2.13235ZM27.907 28.4314H5.23256C4.09978 28.4302 2.99754 28.8055 2.09302 29.5002V5.33088C2.09395 4.48287 2.42501 3.66986 3.01359 3.07022C3.60217 2.47058 4.40018 2.13329 5.23256 2.13235H15.16V18.125C15.16 18.323 15.2178 18.5172 15.32 18.6856C15.4222 18.8541 15.5661 18.9902 15.74 19.0788C15.9139 19.1673 16.1064 19.2048 16.3 19.187C16.4936 19.1692 16.6845 19.0968 16.84 18.9779L19.79 15.193L22.7444 18.9779C22.8998 19.0967 23.0847 19.1691 23.2783 19.1869C23.4719 19.2046 23.6664 19.1672 23.8403 19.0786C24.0141 18.9901 24.1603 18.854 24.2625 18.6855C24.3647 18.5171 24.4188 18.323 24.4188 18.125V2.13235H27.9072L27.907 28.4314Z"
        />
        <path
          className="stroke-inherit"
          d="M26.5 34.5L29 30"
          strokeWidth="1.5"
        />
      </svg>
    ),
    devices: () => (
      <svg
        className={classNames}
        viewBox="0 0 40 32"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H33.3333C34.3942 0 35.4116 0.421427 36.1618 1.17157C36.9119 1.92172 37.3333 2.93913 37.3333 4V22.6667C37.3333 23.7275 36.9119 24.7449 36.1618 25.4951C35.4116 26.2452 34.3942 26.6667 33.3333 26.6667H16.5333V24H33.3333C33.687 24 34.0261 23.8595 34.2761 23.6095C34.5262 23.3594 34.6667 23.0203 34.6667 22.6667V4C34.6667 3.64638 34.5262 3.30724 34.2761 3.05719C34.0261 2.80714 33.687 2.66667 33.3333 2.66667H4C3.64638 2.66667 3.30724 2.80714 3.05719 3.05719C2.80714 3.30724 2.66667 3.64638 2.66667 4V8H0V4Z"
          className="fill-inherit"
        />
        <path
          d="M16.5334 32.0002H38.6668C39.0204 32.0002 39.3595 31.8597 39.6096 31.6096C39.8596 31.3596 40.0001 31.0205 40.0001 30.6668C40.0001 30.3132 39.8596 29.9741 39.6096 29.724C39.3595 29.474 39.0204 29.3335 38.6668 29.3335H16.5334V32.0002Z"
          className="fill-inherit"
        />
        <path
          d="M5.86672 25.6001C5.58382 25.6001 5.31251 25.7125 5.11247 25.9125C4.91243 26.1126 4.80005 26.3839 4.80005 26.6668C4.80005 26.9497 4.91243 27.221 5.11247 27.421C5.31251 27.6211 5.58382 27.7334 5.86672 27.7334H8.00005C8.28295 27.7334 8.55426 27.6211 8.7543 27.421C8.95433 27.221 9.06672 26.9497 9.06672 26.6668C9.06672 26.3839 8.95433 26.1126 8.7543 25.9125C8.55426 25.7125 8.28295 25.6001 8.00005 25.6001H5.86672Z"
          className="fill-inherit"
        />
        <path
          d="M0.533447 13.5756C0.533447 12.8041 0.822426 12.0641 1.33681 11.5186C1.8512 10.973 2.54885 10.6665 3.2763 10.6665H10.5906C11.318 10.6665 12.0157 10.973 12.5301 11.5186C13.0445 12.0641 13.3334 12.8041 13.3334 13.5756V29.0907C13.3334 29.8623 13.0445 30.6022 12.5301 31.1478C12.0157 31.6933 11.318 31.9998 10.5906 31.9998H3.2763C2.54885 31.9998 1.8512 31.6933 1.33681 31.1478C0.822426 30.6022 0.533447 29.8623 0.533447 29.0907V13.5756ZM3.2763 12.6059C3.03382 12.6059 2.80127 12.7081 2.62981 12.8899C2.45835 13.0718 2.36202 13.3184 2.36202 13.5756V29.0907C2.36202 29.3479 2.45835 29.5946 2.62981 29.7764C2.80127 29.9583 3.03382 30.0604 3.2763 30.0604H10.5906C10.8331 30.0604 11.0656 29.9583 11.2371 29.7764C11.4085 29.5946 11.5049 29.3479 11.5049 29.0907V13.5756C11.5049 13.3184 11.4085 13.0718 11.2371 12.8899C11.0656 12.7081 10.8331 12.6059 10.5906 12.6059H3.2763Z"
          className="fill-inherit"
        />
      </svg>
    ),
    clipboard: () => (
      <svg
        className={classNames}
        viewBox="0 0 31 36"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.36143 2.57143C5.62742 1.81909 6.12021 1.16776 6.77188 0.707215C7.42355 0.246671 8.20202 -0.000417806 9 5.30323e-07H16.7143C17.5123 -0.000417806 18.2907 0.246671 18.9424 0.707215C19.5941 1.16776 20.0869 1.81909 20.3529 2.57143H21.8571C22.8801 2.57143 23.8612 2.97781 24.5846 3.70116C25.3079 4.42451 25.7143 5.40559 25.7143 6.42857V16.704C25.2823 16.704 24.8503 16.7734 24.4363 16.92C24.4668 16.3403 24.3664 15.7613 24.1425 15.2257C23.9186 14.6902 23.5769 14.212 23.1429 13.8266V6.42857C23.1429 6.08758 23.0074 5.76055 22.7663 5.51943C22.5252 5.27832 22.1981 5.14286 21.8571 5.14286H20.3529C20.0869 5.8952 19.5941 6.54653 18.9424 7.00707C18.2907 7.46762 17.5123 7.7147 16.7143 7.71429H9C8.20202 7.7147 7.42355 7.46762 6.77188 7.00707C6.12021 6.54653 5.62742 5.8952 5.36143 5.14286H3.85714C3.51615 5.14286 3.18912 5.27832 2.94801 5.51943C2.70689 5.76055 2.57143 6.08758 2.57143 6.42857V32.1429C2.57143 32.4838 2.70689 32.8109 2.94801 33.052C3.18912 33.2931 3.51615 33.4286 3.85714 33.4286H11.7977L11.7309 33.6549C11.502 34.4571 11.5457 35.2697 11.8029 36H3.85714C2.83416 36 1.85309 35.5936 1.12973 34.8703C0.406377 34.1469 0 33.1658 0 32.1429V6.42857C0 5.40559 0.406377 4.42451 1.12973 3.70116C1.85309 2.97781 2.83416 2.57143 3.85714 2.57143H5.36143ZM9 2.57143C8.65901 2.57143 8.33198 2.70689 8.09086 2.94801C7.84974 3.18912 7.71429 3.51615 7.71429 3.85714C7.71429 4.19814 7.84974 4.52516 8.09086 4.76628C8.33198 5.0074 8.65901 5.14286 9 5.14286H16.7143C17.0553 5.14286 17.3823 5.0074 17.6234 4.76628C17.8645 4.52516 18 4.19814 18 3.85714C18 3.51615 17.8645 3.18912 17.6234 2.94801C17.3823 2.70689 17.0553 2.57143 16.7143 2.57143H9Z"
          className="fill-inherit"
        />
        <path
          d="M16.3802 35.5942C16.235 35.7471 16.0545 35.862 15.8545 35.929C15.6546 35.996 15.4413 36.013 15.2332 35.9785C15.0252 35.944 14.8288 35.8591 14.6611 35.7311C14.4935 35.6031 14.3598 35.4361 14.2717 35.2445C14.1453 34.9677 14.1216 34.6551 14.2048 34.3625L19.3477 16.3625C19.3939 16.2 19.4717 16.0483 19.5766 15.916C19.6815 15.7836 19.8115 15.6732 19.959 15.5911C20.1066 15.5089 20.2689 15.4567 20.4367 15.4372C20.6044 15.4178 20.7744 15.4316 20.9368 15.4779C21.0992 15.5242 21.251 15.602 21.3833 15.7069C21.5157 15.8118 21.6261 15.9417 21.7082 16.0893C21.7904 16.2368 21.8426 16.3991 21.862 16.5669C21.8815 16.7347 21.8676 16.9046 21.8214 17.067L16.6785 35.067C16.6227 35.2641 16.5204 35.4449 16.3802 35.5942V35.5942Z"
          className="fill-inherit"
        />
        <path
          d="M11.2629 21.3974C11.3727 21.2691 11.4561 21.1204 11.5083 20.9598C11.5606 20.7993 11.5808 20.63 11.5676 20.4617C11.5545 20.2933 11.5084 20.1292 11.4318 19.9787C11.3552 19.8282 11.2498 19.6943 11.1215 19.5845C10.9932 19.4748 10.8445 19.3914 10.6839 19.3391C10.5234 19.2868 10.3541 19.2666 10.1858 19.2798C10.0174 19.2929 9.85331 19.3391 9.70282 19.4156C9.55232 19.4922 9.41837 19.5976 9.30862 19.7259L5.45148 24.2259C5.25228 24.4588 5.14282 24.7552 5.14282 25.0617C5.14282 25.3681 5.25228 25.6645 5.45148 25.8974L9.30862 30.3974C9.41837 30.5257 9.55232 30.6311 9.70282 30.7077C9.85331 30.7842 10.0174 30.8304 10.1858 30.8435C10.3541 30.8567 10.5234 30.8365 10.6839 30.7842C10.8445 30.7319 10.9932 30.6485 11.1215 30.5388C11.2498 30.4291 11.3552 30.2951 11.4318 30.1446C11.5084 29.9941 11.5545 29.83 11.5676 29.6617C11.5808 29.4933 11.5606 29.324 11.5083 29.1635C11.4561 29.0029 11.3727 28.8543 11.2629 28.7259L8.12319 25.0617L11.2603 21.3974H11.2629Z"
          className="fill-inherit"
        />
        <path
          d="M24.8786 30.5359C24.7502 30.4261 24.6448 30.2922 24.5682 30.1417C24.4917 29.9912 24.4455 29.8271 24.4324 29.6587C24.4192 29.4904 24.4394 29.3211 24.4917 29.1606C24.544 29 24.6274 28.8513 24.7371 28.723L27.8794 25.0613L24.7371 21.3944C24.5155 21.1353 24.4059 20.7987 24.4324 20.4587C24.4589 20.1187 24.6194 19.8032 24.8786 19.5816C25.1377 19.3599 25.4743 19.2503 25.8143 19.2768C26.1543 19.3034 26.4698 19.4639 26.6914 19.723L30.5486 24.223C30.7478 24.4559 30.8572 24.7523 30.8572 25.0587C30.8572 25.3652 30.7478 25.6616 30.5486 25.8944L26.6914 30.3944C26.4694 30.6532 26.1537 30.8133 25.8137 30.8393C25.4738 30.8653 25.1374 30.7553 24.8786 30.5333V30.5359Z"
          className="fill-inherit"
        />
      </svg>
    ),
    close: () => (
      <svg
        className={classNames}
        viewBox="0 0 35 35"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.5 31.5C9.7825 31.5 3.5 25.2175 3.5 17.5C3.5 9.7825 9.7825 3.5 17.5 3.5C25.2175 3.5 31.5 9.7825 31.5 17.5C31.5 25.2175 25.2175 31.5 17.5 31.5ZM17.5 0C7.8225 0 0 7.8225 0 17.5C0 27.1775 7.8225 35 17.5 35C27.1775 35 35 27.1775 35 17.5C35 7.8225 27.1775 0 17.5 0ZM22.0325 10.5L17.5 15.0325L12.9675 10.5L10.5 12.9675L15.0325 17.5L10.5 22.0325L12.9675 24.5L17.5 19.9675L22.0325 24.5L24.5 22.0325L19.9675 17.5L24.5 12.9675L22.0325 10.5Z"
          className="fill-inherit"
        />
      </svg>
    ),
    eyes: () => (
      <svg
        className={classNames}
        viewBox="0 0 54 40"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M53.6424 18.4172C47.7714 6.16565 38.8968 0 27 0C15.097 0 6.2286 6.16564 0.357618 18.4233C0.12213 18.9173 0 19.4568 0 20.0031C0 20.5493 0.12213 21.0889 0.357618 21.5828C6.2286 33.8344 15.1032 40 27 40C38.903 40 47.7714 33.8344 53.6424 21.5767C54.1192 20.5828 54.1192 19.4294 53.6424 18.4172V18.4172ZM27 35.5828C17.0106 35.5828 9.69669 30.5644 4.53791 20C9.69669 9.43558 17.0106 4.41718 27 4.41718C36.9893 4.41718 44.3033 9.43558 49.4621 20C44.3095 30.5644 36.9955 35.5828 27 35.5828ZM26.7523 9.20245C20.7326 9.20245 15.8526 14.0368 15.8526 20C15.8526 25.9632 20.7326 30.7975 26.7523 30.7975C32.7719 30.7975 37.652 25.9632 37.652 20C37.652 14.0368 32.7719 9.20245 26.7523 9.20245ZM26.7523 26.8712C22.9188 26.8712 19.8161 23.7975 19.8161 20C19.8161 16.2025 22.9188 13.1288 26.7523 13.1288C30.5857 13.1288 33.6884 16.2025 33.6884 20C33.6884 23.7975 30.5857 26.8712 26.7523 26.8712Z"
          className="fill-inherit"
        />
      </svg>
    ),
    github: () => (
      <svg
        className={classNames}
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 2.5C13.3585 2.5 11.733 2.82332 10.2165 3.45151C8.69989 4.07969 7.3219 5.00043 6.16117 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 20.525 6.0875 25.2125 11.05 26.875C11.675 26.975 11.875 26.5875 11.875 26.25V24.1375C8.4125 24.8875 7.675 22.4625 7.675 22.4625C7.1 21.0125 6.2875 20.625 6.2875 20.625C5.15 19.85 6.375 19.875 6.375 19.875C7.625 19.9625 8.2875 21.1625 8.2875 21.1625C9.375 23.0625 11.2125 22.5 11.925 22.2C12.0375 21.3875 12.3625 20.8375 12.7125 20.525C9.9375 20.2125 7.025 19.1375 7.025 14.375C7.025 12.9875 7.5 11.875 8.3125 10.9875C8.1875 10.675 7.75 9.375 8.4375 7.6875C8.4375 7.6875 9.4875 7.35 11.875 8.9625C12.8625 8.6875 13.9375 8.55 15 8.55C16.0625 8.55 17.1375 8.6875 18.125 8.9625C20.5125 7.35 21.5625 7.6875 21.5625 7.6875C22.25 9.375 21.8125 10.675 21.6875 10.9875C22.5 11.875 22.975 12.9875 22.975 14.375C22.975 19.15 20.05 20.2 17.2625 20.5125C17.7125 20.9 18.125 21.6625 18.125 22.825V26.25C18.125 26.5875 18.325 26.9875 18.9625 26.875C23.925 25.2 27.5 20.525 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z"
          className="fill-inherit"
        />
      </svg>
    ),
    menu: () => (
      <svg
        className={classNames}
        viewBox="0 0 90 68"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 28.3333H67.5V39.6667H0V28.3333ZM0 0H90V11.3333H0V0ZM0 68H40.6969V56.6667H0V68Z"
          className="fill-inherit"
        />
      </svg>
    ),
    linkedin: () => (
      <svg
        className={classNames}
        viewBox="0 0 25 29"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.59598 25.0757H0.412946V8.33392H5.59598V25.0757ZM3.00167 6.0502C1.34431 6.0502 0 4.67324 0 3.01083C1.18627e-08 2.2123 0.316247 1.44649 0.87917 0.88185C1.44209 0.317211 2.20558 0 3.00167 0C3.79777 0 4.56125 0.317211 5.12418 0.88185C5.6871 1.44649 6.00335 2.2123 6.00335 3.01083C6.00335 4.67324 4.65848 6.0502 3.00167 6.0502ZM24.9944 25.0757H19.8225V16.9259C19.8225 14.9836 19.7835 12.4928 17.1278 12.4928C14.433 12.4928 14.0201 14.603 14.0201 16.786V25.0757H8.84263V8.33392H13.8136V10.6177H13.8862C14.5781 9.30227 16.2684 7.91412 18.7902 7.91412C24.0357 7.91412 25 11.3789 25 15.8792V25.0757H24.9944Z"
          className="fill-inherit"
        />
      </svg>
    ),
    plus: () => (
      <svg
        className={classNames}
        viewBox="0 0 45 43"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.5 21.5H2M23.5 43V21.5V43ZM23.5 21.5V0V21.5ZM23.5 21.5H45H23.5Z"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
    search: () => (
      <svg
        className={classNames}
        viewBox="0 0 35 27"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.695651 4.15328L0.785281 5.95996C0.194091 6.75645 -0.077083 7.71981 0.0189393 8.68244L1.44631 23.2189C1.54749 24.2508 2.06123 25.2104 2.88666 25.9093C3.7121 26.6082 4.78961 26.9959 5.90767 26.9963H19.7422V24.9197H5.90767C5.34866 24.9192 4.81003 24.7251 4.39752 24.3755C3.98502 24.0258 3.72842 23.5459 3.67811 23.03L2.25074 8.49346C2.22273 8.20616 2.25961 7.9166 2.35904 7.64323C2.45847 7.36987 2.61826 7.11871 2.82823 6.90575C3.03821 6.69279 3.29375 6.52271 3.57858 6.40635C3.86341 6.28999 4.17127 6.22991 4.48254 6.22992H30.5202C30.8315 6.22991 31.1394 6.28999 31.4242 6.40635C31.709 6.52271 31.9646 6.69279 32.1746 6.90575C32.3845 7.11871 32.5443 7.36987 32.6438 7.64323C32.7432 7.9166 32.7801 8.20616 32.752 8.49346L32.156 14.5365H34.408L34.9816 8.68244C35.0379 8.10784 34.9645 7.52866 34.7659 6.98183C34.5673 6.435 34.248 5.93252 33.8283 5.5064C33.4085 5.08029 32.8976 4.73989 32.3281 4.50692C31.7585 4.27395 31.1428 4.15351 30.5202 4.15328H21.5975C20.409 4.15305 19.2693 3.71532 18.4291 2.93637L16.5737 1.21691C15.7335 0.437966 14.5938 0.000235231 13.4053 0H5.17718C3.98861 0 2.84871 0.437577 2.00826 1.21647C1.16781 1.99536 0.695651 3.05176 0.695651 4.15328ZM13.4053 2.07664C13.9995 2.07676 14.5694 2.29562 14.9895 2.6851L16.5737 4.15328H4.48254C3.94476 4.15328 3.42938 4.2405 2.9521 4.40248L2.93642 4.11175C2.94815 3.56822 3.1894 3.05063 3.60836 2.67012C4.02732 2.28961 4.59058 2.07653 5.17718 2.07664H13.4053Z"
          className="fill-inherit"
        />
        <path
          d="M32.3745 25.3601L28.7871 22.0021M30.121 18.9891C30.121 20.12 29.6405 21.2046 28.7852 22.0043C27.9299 22.8039 26.7698 23.2532 25.5602 23.2532C24.3507 23.2532 23.1906 22.8039 22.3353 22.0043C21.48 21.2046 20.9995 20.12 20.9995 18.9891C20.9995 17.8582 21.48 16.7737 22.3353 15.974C23.1906 15.1743 24.3507 14.7251 25.5602 14.7251C26.7698 14.7251 27.9299 15.1743 28.7852 15.974C29.6405 16.7737 30.121 17.8582 30.121 18.9891Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tag: () => (
      <svg
        className={classNames}
        viewBox="0 0 22 19"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.3765 17.0354C13.1755 17.2109 12.9369 17.3502 12.6743 17.4452C12.4117 17.5402 12.1303 17.5891 11.846 17.5891C11.5617 17.5891 11.2803 17.5402 11.0177 17.4452C10.7551 17.3502 10.5165 17.2109 10.3155 17.0354L1.76651 9.57125C1.36066 9.21699 1.1326 8.73647 1.13251 8.2354V2.88852C1.13251 1.84691 2.10251 1 3.29651 1H9.4195C9.9925 1 10.5435 1.19907 10.9495 1.55355L19.4985 9.0177C19.6995 9.19316 19.859 9.40148 19.9678 9.63077C20.0766 9.86005 20.1326 10.1058 20.1326 10.354C20.1326 10.6022 20.0766 10.8479 19.9678 11.0772C19.859 11.3065 19.6995 11.5148 19.4985 11.6903L13.3765 17.0354Z"
          className="stroke-inherit"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.63251 4.05591L5.13251 4.49078"
          className="stroke-inherit"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    arrowLeft: () => (
      <svg
        className={classNames}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 8"
        fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99992 4.00014C7.99992 4.13275 7.94724 4.25993 7.85347 4.3537C7.7597 4.44747 7.63253 4.50014 7.49992 4.50014H1.70692L3.85392 6.64614C3.90041 6.69263 3.93728 6.74782 3.96244 6.80856C3.9876 6.8693 4.00055 6.9344 4.00055 7.00014C4.00055 7.06589 3.9876 7.13099 3.96244 7.19173C3.93728 7.25247 3.90041 7.30766 3.85392 7.35414C3.80743 7.40063 3.75224 7.43751 3.6915 7.46267C3.63076 7.48783 3.56566 7.50077 3.49992 7.50077C3.43417 7.50077 3.36907 7.48783 3.30833 7.46267C3.24759 7.43751 3.19241 7.40063 3.14592 7.35414L0.145917 4.35414C0.0993539 4.3077 0.062411 4.25252 0.0372045 4.19178C0.0119981 4.13103 -0.000976563 4.06591 -0.000976562 4.00014C-0.000976563 3.93438 0.0119981 3.86925 0.0372045 3.80851C0.062411 3.74776 0.0993539 3.69259 0.145917 3.64614L3.14592 0.646143C3.2398 0.552257 3.36714 0.499512 3.49992 0.499512C3.63269 0.499512 3.76003 0.552257 3.85392 0.646143C3.9478 0.74003 4.00055 0.867368 4.00055 1.00014C4.00055 1.13292 3.9478 1.26026 3.85392 1.35414L1.70692 3.50014H7.49992C7.63253 3.50014 7.7597 3.55282 7.85347 3.64659C7.94724 3.74036 7.99992 3.86754 7.99992 4.00014Z"
          className="fill-inherit"
        />
      </svg>
    ),
    arrowRight: () => (
      <svg
        className={classNames}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 8"
        fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.32757e-05 3.50083C8.32873e-05 3.36822 0.0527613 3.24105 0.14653 3.14728C0.240298 3.05351 0.367475 3.00083 0.500083 3.00083L6.29308 3.00083L4.14608 0.854833C4.0996 0.808345 4.06272 0.753156 4.03756 0.692416C4.0124 0.631677 3.99945 0.566577 3.99945 0.500833C3.99945 0.435089 4.0124 0.369988 4.03756 0.309249C4.06272 0.24851 4.0996 0.193321 4.14608 0.146833C4.19257 0.100345 4.24776 0.0634683 4.3085 0.0383093C4.36924 0.0131502 4.43434 0.00020139 4.50008 0.000201396C4.56583 0.000201402 4.63093 0.0131502 4.69167 0.0383093C4.75241 0.0634684 4.8076 0.100345 4.85408 0.146833L7.85408 3.14683C7.90065 3.19328 7.93759 3.24845 7.9628 3.3092C7.988 3.36994 8.00098 3.43507 8.00098 3.50083C8.00098 3.5666 7.988 3.63172 7.9628 3.69247C7.93759 3.75321 7.90065 3.80839 7.85408 3.85483L4.85408 6.85483C4.7602 6.94872 4.63286 7.00146 4.50008 7.00146C4.36731 7.00146 4.23997 6.94872 4.14608 6.85483C4.0522 6.76095 3.99945 6.63361 3.99945 6.50083C3.99945 6.36806 4.0522 6.24072 4.14608 6.14683L6.29308 4.00083L0.500083 4.00083C0.367475 4.00083 0.240298 3.94815 0.146529 3.85439C0.0527613 3.76062 8.32641e-05 3.63344 8.32757e-05 3.50083Z"
          className="fill-inherit"
        />
      </svg>
    ),
    paperPlane: () => (
      <svg
        className={classNames}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 51"
        fill="none">
        <path
          d="M17.7381 33.8812V49.8336L27.3096 40.2621M1.78577 22.7145L52.8334 1.86475L43.9001 48.2383L1.78577 22.7145ZM52.8334 1.97641L17.7381 33.8812L52.8334 1.97641Z"
          className="stroke-inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return <>{icons[icon]()}</>;
};

export default Icon;