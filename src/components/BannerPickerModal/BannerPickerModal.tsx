/* eslint-disable @next/next/no-img-element */
import { LIST_IMAGE } from "@/constants/images-banner";
import React from "react";
import styles from "./BannerPickerModal.module.scss";

interface IProps {
  setOpen: Function;
}

const BannerPickerModal: React.FC<IProps> = ({ setOpen }) => {
  return (
    <div className={styles.modal_wrapper} onClick={() => setOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_header}>
          <h3>Choose a banner</h3>
        </div>
        <div className={styles.image_wrapper}>
          {LIST_IMAGE.map((item: string, index: number) => (
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
