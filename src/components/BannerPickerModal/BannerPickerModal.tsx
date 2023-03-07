/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./BannerPickerModal.module.scss";

interface IProps {
  setOpen: Function;
}

const BannerPickerModal: React.FC<IProps> = ({ setOpen }) => {
  const listImage: string[] = [
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_2.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_3.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_4.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_5.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_6.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg",
  ];
  return (
    <div className={styles.modal_wrapper} onClick={() => setOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_header}>
          <h3>Choose a banner</h3>
        </div>
        <div className={styles.image_wrapper}>
          {listImage.map((item: string, index: number) => (
            <img src={item} alt={`image ${index}`} key={index} />
          ))}
        </div>

        <div className={styles.btn_wrapper}>
          <button onClick={() => setOpen(false)}>Close</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default BannerPickerModal;
