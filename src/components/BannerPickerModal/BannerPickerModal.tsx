/* eslint-disable @next/next/no-img-element */
import { LIST_IMAGE } from "@/constants/images-banner";
import React from "react";
import styles from "./BannerPickerModal.module.scss";

interface IProps {
  onCloseModal: Function;
  imagePick: string | null;
  onImagePick: Function;
  onPickBanner: Function;
}

const BannerPickerModal: React.FC<IProps> = ({
  onCloseModal,
  imagePick,
  onImagePick,
  onPickBanner,
}) => {
  return (
    <div className={styles.modal_wrapper} onClick={() => onCloseModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_header}>
          <h3>Choose a banner</h3>
        </div>
        <div className={styles.image_wrapper}>
          {LIST_IMAGE.map((item: string, index: number) => {
            if (imagePick && item === imagePick)
              return (
                <div
                  key={index}
                  className={styles.pick_image}
                  onClick={() => onImagePick(item)}
                >
                  <img src={item} alt={`image ${index}`} />
                  <img src="/images/pick-image.png" alt="pick image" />
                </div>
              );

            return (
              <img
                src={item}
                alt={`image ${index}`}
                key={index}
                onClick={() => onImagePick(item)}
              />
            );
          })}
        </div>

        <div className={styles.btn_wrapper}>
          <button onClick={() => onCloseModal()}>Close</button>
          <button onClick={() => onPickBanner()}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default BannerPickerModal;
