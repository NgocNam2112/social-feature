import React, { useState } from "react";
import BannerPickerModal from "./BannerPickerModal";

interface IProps {
  onCloseModal: Function;
  onPickBanner: Function;
}

const BannerPickerContainer: React.FC<IProps> = ({
  onCloseModal,
  onPickBanner,
}) => {
  const [imagePick, setImagePick] = useState<string | null>(null);

  const handleImagePick = (img: string) => {
    if (imagePick && img === imagePick) {
      setImagePick(null);
      return;
    }
    setImagePick(img);
  };

  const handleSaveImage = () => {
    if (!imagePick) return;
    onPickBanner(imagePick);
  };
  return (
    <BannerPickerModal
      onCloseModal={onCloseModal}
      imagePick={imagePick}
      onImagePick={handleImagePick}
      onPickBanner={handleSaveImage}
    />
  );
};

export default BannerPickerContainer;
