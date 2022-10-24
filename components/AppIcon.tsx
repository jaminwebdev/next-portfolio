interface IconComponentProps {
  icon: string;
  classNames: string;
}

const Icon = ({ icon = "book", classNames }: IconComponentProps) => {
  const icons = {
    book: (
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
    devices: (
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
    clipboard: (
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
    close: (
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
    eyes: (
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
    github: (
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
    menu: (
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
    linkedin: (
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
    plus: (
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
    search: (
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
    tag: (
      <svg
        className={classNames}
        viewBox="0 0 22 19"
        xmlns="http://www.w3.org/2000/svg"
        fill="none">
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
    arrowLeft: (
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
    arrowRight: (
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
    paperPlane: (
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
    chat: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames}
        viewBox="0 0 59 54"
        fill="transparent">
        <path
          d="M34.7858 46.0478C45.403 46.0478 50.713 46.0478 54.01 42.748C57.3097 39.4511 57.3097 34.1411 57.3097 23.5239C57.3097 12.9067 57.3097 7.59669 54.01 4.29975C50.713 1 45.403 1 34.7858 1H23.5239C12.9067 1 7.59669 1 4.29975 4.29975C1 7.59669 1 12.9067 1 23.5239C1 34.1411 1 39.4511 4.29975 42.748C6.13826 44.5894 8.60181 45.403 12.2619 45.7606"
          className="stroke-inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.1547 23.5244V23.5526M17.8928 23.5244V23.5526M40.4167 23.5244V23.5526M34.7857 46.0483C31.3057 46.0483 27.471 47.4561 23.9714 49.272C18.3461 52.1917 15.5334 53.6529 14.1482 52.721C12.7629 51.7919 13.0248 48.906 13.5513 43.1371L13.6695 41.8251"
          className="stroke-inherit"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
    vue: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames}
        viewBox="0 0 59 50"
        fill="none">
        <path
          d="M47.0019 0H36.875L29.5 11.5446L23.1786 0H0L29.5 50L59 0H47.0019ZM7.33496 4.16997H14.4213L29.5 29.9967L44.5661 4.16997H51.6524L29.5021 41.7247L7.33496 4.16997Z"
          className="fill-inherit"
        />
      </svg>
    ),
    react: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames}
        viewBox="0 0 68 60"
        fill="none">
        <path
          d="M33.7205 36.0143C37.0414 36.0143 39.7336 33.3222 39.7336 30.0013C39.7336 26.6804 37.0414 23.9883 33.7205 23.9883C30.3996 23.9883 27.7075 26.6804 27.7075 30.0013C27.7075 33.3222 30.3996 36.0143 33.7205 36.0143Z"
          className="fill-inherit"
        />
        <path
          d="M16.8836 41.9571L15.553 41.6168C5.66942 39.1207 0 34.8762 0 29.9883C0 25.097 5.67279 20.8559 15.553 18.3598L16.8836 18.0229L17.2575 19.34C18.2565 22.7885 19.5363 26.1493 21.0843 29.3887L21.3706 29.9883L21.0843 30.5879C19.5347 33.8319 18.2513 37.1938 17.2575 40.6433L16.8836 41.9571V41.9571ZM14.9399 21.4252C7.43122 23.5407 2.81955 26.7679 2.81955 29.9883C2.81955 33.202 7.42785 36.4325 14.9399 38.5446C15.8596 35.6207 16.9712 32.7607 18.258 29.9883C16.9619 27.2113 15.8534 24.3505 14.9399 21.4252V21.4252ZM50.5532 41.9571L50.1826 40.6366C49.181 37.1874 47.9001 33.8256 46.3525 30.5846L46.0661 29.9883L46.3525 29.3853C47.902 26.1481 49.1787 22.7828 50.1826 19.3333L50.5532 18.0195L51.8838 18.3564C61.7707 20.8526 67.4368 25.0937 67.4368 29.9883C67.4368 34.8796 61.7674 39.1207 51.8838 41.6168L50.5532 41.9571V41.9571ZM49.172 29.9883C50.5195 32.9055 51.6412 35.7756 52.4969 38.5446C60.0089 36.4325 64.6206 33.202 64.6206 29.9883C64.6206 26.7679 60.0123 23.5441 52.4969 21.4252C51.5781 24.3496 50.4675 27.2102 49.172 29.9883V29.9883Z"
          className="fill-inherit"
        />
        <path
          d="M14.9196 21.4115L14.549 20.0977C11.7665 10.3017 12.6087 3.28487 16.8633 0.839234C21.0235 -1.56934 27.717 1.27716 34.7272 8.4692L35.6839 9.45284L34.7272 10.4331C32.2373 13.0225 29.9616 15.8097 27.9225 18.7671L27.5419 19.3128L26.8816 19.3667C23.296 19.6484 19.7393 20.2218 16.2468 21.0814L14.9196 21.4115V21.4115ZM20.2488 2.78631C19.4942 2.78631 18.8272 2.95137 18.2646 3.27476C15.4754 4.8816 14.9836 10.4769 16.9037 18.0294C19.9052 17.3658 22.9336 16.8908 25.9856 16.6247C27.7525 14.1186 29.68 11.7297 31.756 9.47305C27.3667 5.20499 23.2233 2.78631 20.2488 2.78631V2.78631ZM47.1878 59.9993C43.1858 59.9993 38.0453 56.981 32.7094 51.5036L31.756 50.5233L32.7094 49.5464C35.1996 46.9528 37.4763 44.1623 39.5174 41.2023L39.8947 40.6633L40.5482 40.5993C44.1351 40.3226 47.6931 39.7514 51.1863 38.8914L52.5169 38.5545L52.8909 39.8716C55.6599 49.6609 54.8211 56.6879 50.5732 59.1335C49.5419 59.7181 48.3732 60.017 47.1878 59.9993V59.9993ZM35.6839 50.4997C40.0698 54.7678 44.2166 57.1898 47.1878 57.1898C47.9457 57.1898 48.6127 57.0214 49.1719 56.7014C51.9645 55.0911 52.4597 49.4857 50.5328 41.9332C47.5347 42.6002 44.503 43.0786 41.4442 43.3447C39.6848 45.8548 37.7605 48.245 35.6839 50.4997V50.4997Z"
          className="fill-inherit"
        />
        <path
          d="M52.5172 21.4112L51.1866 21.0777C47.6936 20.2154 44.1355 19.6419 40.5485 19.363L39.8949 19.3058L39.5177 18.76C37.4795 15.801 35.2025 13.0137 32.7096 10.426L31.7563 9.44576L32.7096 8.46885C39.7164 1.28018 46.4065 -1.56632 50.5735 0.838888C54.8247 3.28789 55.6703 10.3048 52.8911 20.0974L52.5172 21.4112ZM41.4445 16.6243C44.6582 16.9107 47.7034 17.3924 50.5331 18.029C52.4566 10.4766 51.9648 4.88125 49.1722 3.27104C46.3964 1.6642 41.1717 4.12331 35.6841 9.47271C37.7592 11.7297 39.6861 14.1147 41.4445 16.6243ZM20.249 59.9989C19.0637 60.0158 17.8952 59.717 16.8636 59.1332C12.609 56.6875 11.7668 49.6639 14.5459 39.8713L14.9098 38.5542L16.2404 38.891C19.4877 39.7096 23.0652 40.2856 26.8785 40.5989L27.532 40.6629L27.9127 41.2019C29.9474 44.1596 32.2246 46.9522 34.7173 49.546L35.674 50.5229L34.7173 51.5032C29.3848 56.984 24.2443 59.9989 20.249 59.9989V59.9989ZM16.904 41.9363C14.9839 49.4888 15.4757 55.0942 18.2649 56.7044C21.044 58.2876 26.252 55.8454 31.7563 50.4994C29.6811 48.242 27.7536 45.8532 25.9858 43.3477C22.9308 43.0776 19.8969 42.606 16.904 41.9363V41.9363Z"
          className="fill-inherit"
        />
        <path
          d="M33.7196 43.7062C31.4054 43.7062 29.0305 43.6086 26.6455 43.4098L25.9852 43.3525L25.6046 42.8068C24.2597 40.8729 22.9942 38.8849 21.8115 36.8477C20.6375 34.8051 19.5463 32.7159 18.5405 30.5854L18.2576 29.9892L18.5405 29.3862C19.5478 27.2572 20.6358 25.1686 21.8115 23.1272C22.9804 21.1195 24.2571 19.1118 25.6046 17.1647L25.9852 16.6258L26.6455 16.5651C31.3511 16.171 36.0814 16.171 40.787 16.5651L41.4405 16.6291L41.8212 17.1681C44.5154 21.0378 46.8817 25.1259 48.8953 29.3895L49.1749 29.9925L48.8953 30.5888C46.8873 34.8554 44.5207 38.9438 41.8212 42.8102L41.4405 43.3559L40.787 43.4132C38.4088 43.6052 36.0305 43.7062 33.7196 43.7062V43.7062ZM27.5415 40.661C31.7018 40.9743 35.7374 40.9743 39.8943 40.661C42.2149 37.2628 44.2778 33.6955 46.0657 29.9892C44.2841 26.2795 42.221 22.7118 39.8943 19.3173C35.7828 19.0007 31.653 19.0007 27.5415 19.3173C25.2129 22.7105 23.1497 26.2784 21.3702 29.9892C23.1619 33.6935 25.2246 37.2604 27.5415 40.661V40.661Z"
          className="fill-inherit"
        />
      </svg>
    ),
    javascript: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames}
        viewBox="0 0 60 60"
        fill="none">
        <path
          d="M32.5 27.5C32.5 25.5109 33.2902 23.6032 34.6967 22.1967C36.1032 20.7902 38.0109 20 40 20H47.5C48.163 20 48.7989 20.2634 49.2678 20.7322C49.7366 21.2011 50 21.837 50 22.5C50 23.163 49.7366 23.7989 49.2678 24.2678C48.7989 24.7366 48.163 25 47.5 25H40C39.337 25 38.7011 25.2634 38.2322 25.7322C37.7634 26.2011 37.5 26.837 37.5 27.5V30C37.5 30.663 37.7634 31.2989 38.2322 31.7678C38.7011 32.2366 39.337 32.5 40 32.5H42.5C44.4891 32.5 46.3968 33.2902 47.8033 34.6967C49.2098 36.1032 50 38.0109 50 40V42.5C50 44.4891 49.2098 46.3968 47.8033 47.8033C46.3968 49.2098 44.4891 50 42.5 50H35C34.337 50 33.7011 49.7366 33.2322 49.2678C32.7634 48.7989 32.5 48.163 32.5 47.5C32.5 46.837 32.7634 46.2011 33.2322 45.7322C33.7011 45.2634 34.337 45 35 45H42.5C43.163 45 43.7989 44.7366 44.2678 44.2678C44.7366 43.7989 45 43.163 45 42.5V40C45 39.337 44.7366 38.7011 44.2678 38.2322C43.7989 37.7634 43.163 37.5 42.5 37.5H40C38.0109 37.5 36.1032 36.7098 34.6967 35.3033C33.2902 33.8968 32.5 31.9891 32.5 30V27.5ZM30 22.5C30 21.837 29.7366 21.2011 29.2678 20.7322C28.7989 20.2634 28.163 20 27.5 20C26.837 20 26.2011 20.2634 25.7322 20.7322C25.2634 21.2011 25 21.837 25 22.5V42.5C25 43.163 24.7366 43.7989 24.2678 44.2678C23.7989 44.7366 23.163 45 22.5 45H17.5C16.837 45 16.2011 45.2634 15.7322 45.7322C15.2634 46.2011 15 46.837 15 47.5C15 48.163 15.2634 48.7989 15.7322 49.2678C16.2011 49.7366 16.837 50 17.5 50H22.5C24.4891 50 26.3968 49.2098 27.8033 47.8033C29.2098 46.3968 30 44.4891 30 42.5V22.5ZM0 12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0H47.5C50.8152 0 53.9946 1.31696 56.3388 3.66117C58.683 6.00537 60 9.18479 60 12.5V47.5C60 50.8152 58.683 53.9946 56.3388 56.3388C53.9946 58.683 50.8152 60 47.5 60H12.5C9.18479 60 6.00537 58.683 3.66117 56.3388C1.31696 53.9946 0 50.8152 0 47.5V12.5ZM12.5 5C10.5109 5 8.60322 5.79018 7.1967 7.1967C5.79018 8.60322 5 10.5109 5 12.5V47.5C5 49.4891 5.79018 51.3968 7.1967 52.8033C8.60322 54.2098 10.5109 55 12.5 55H47.5C49.4891 55 51.3968 54.2098 52.8033 52.8033C54.2098 51.3968 55 49.4891 55 47.5V12.5C55 10.5109 54.2098 8.60322 52.8033 7.1967C51.3968 5.79018 49.4891 5 47.5 5H12.5Z"
          className="fill-inherit"
        />
      </svg>
    ),
    video: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames}
        viewBox="0 0 60 48"
        fill="none">
        <path
          d="M47 1H12.5C6.14873 1 1 6.14873 1 12.5V35.5C1 41.8513 6.14873 47 12.5 47H47C53.3513 47 58.5 41.8513 58.5 35.5V12.5C58.5 6.14873 53.3513 1 47 1Z"
          className="stroke-inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38.375 24L24 15.375V32.625L38.375 24Z"
          className="stroke-inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    calendar: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames}
        viewBox="0 0 21 19"
        fill="none">
        <path
          d="M2 6.98483H16V8.73104H18V3.49241C18 2.532 17.1 1.74621 16 1.74621H15V0H13V1.74621H5V0H3V1.74621H2C0.89 1.74621 0.00999999 2.532 0.00999999 3.49241L0 15.7159C0 16.179 0.210714 16.6231 0.585787 16.9506C0.960859 17.2781 1.46957 17.4621 2 17.4621H9V15.7159H2V6.98483ZM2 3.49241H16V5.23862H2V3.49241ZM19.84 12.4679L19.13 13.0878L17.01 11.2368L17.72 10.6169C17.8125 10.536 17.9224 10.4718 18.0434 10.428C18.1644 10.3842 18.294 10.3616 18.425 10.3616C18.556 10.3616 18.6857 10.3842 18.8066 10.428C18.9276 10.4718 19.0375 10.536 19.13 10.6169L19.84 11.2368C20.23 11.5774 20.23 12.1274 19.84 12.4679ZM16.3 11.8567L18.42 13.7077L13.12 18.3352H11V16.4842L16.3 11.8567Z"
          className="fill-inherit"
        />
      </svg>
    ),
  };

  return <>{icons[icon]}</>;
};

export default Icon;
