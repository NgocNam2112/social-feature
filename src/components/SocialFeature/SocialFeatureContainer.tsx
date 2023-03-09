import {
  ISocialInformation,
  ISocialInformationError,
  ISocialTag,
} from "@/types/types";
import React, { useRef, useState } from "react";
import BannerPickerModal from "../BannerPickerModal";
import SocialFeature from "./SocialFeature";

const SocialFeatureContainer: React.FC = () => {
  const refTitle = useRef(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [pickBanner, setPickBanner] = useState<string | null>(null);
  const [socialInformation, setSocialInformation] =
    useState<ISocialInformation>({
      venue: "",
      maxOpacity: "",
      cost: "",
      description: "",
      date: new Date(),
      time: new Date(),
    });
  const [tags, setTags] = useState<ISocialTag[]>([]);

  const [errors, setErrors] = useState<ISocialInformationError>({
    venue: "",
    maxOpacity: "",
    cost: "",
    description: "",
    date: "",
    time: "",
    privacy: "",
    isManualApprove: "",
  });

  const [privacy, setPrivacy] = useState<string>("");
  const [isManualApprove, setIsManualApprove] = useState<boolean>(false);

  const handleChangeForm = (
    field: keyof ISocialInformation,
    value: string | Date
  ) => {
    setSocialInformation((prevState: ISocialInformation) => ({
      ...prevState,
      [field]: value,
    }));
    setErrors((prevS) => ({
      ...prevS,
      [field]: !value ? `${field} is required` : "",
    }));
  };

  const handleCreateSocial = () => {
    if (!pickBanner) {
      alert("Banner is required");
      return;
    }
    if (!privacy) {
      setErrors((prevS) => ({ ...prevS, privacy: "Privacy is required" }));
    }

    if (!isManualApprove) {
      setErrors((prevS) => ({
        ...prevS,
        isManualApprove: "Manual approve is required",
      }));
    }

    for (const field in socialInformation) {
      if (!socialInformation[field as keyof ISocialInformation]) {
        setErrors((prevS) => ({ ...prevS, [field]: `${field} is required` }));
      }
    }
    if (Object.values(errors).includes("")) {
      return;
    }
  };

  const handleCheckManualApprove = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsManualApprove(e.target.checked);
    setErrors((prevS) => ({
      ...prevS,
      isManualApprove: !e.target.checked ? `Manual approve is required` : "",
    }));
  };

  const handleChangePrivacy = (value: string) => {
    setErrors((prevS) => ({
      ...prevS,
      privacy: !value ? `Privacy is required` : "",
    }));
    setPrivacy(value);
  };

  const handlePickBanner = (value: string) => {
    setPickBanner(value);
    setIsShowModal(false);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
    setPickBanner(null);
  };

  return (
    <>
      <SocialFeature
        refTitle={refTitle}
        errors={errors}
        setIsShowModal={setIsShowModal}
        socialInformation={socialInformation}
        onChangeForm={handleChangeForm}
        onCreateSocial={handleCreateSocial}
        isManualApprove={isManualApprove}
        onCheckManualApprove={handleCheckManualApprove}
        onChangePrivacy={handleChangePrivacy}
        tags={tags}
        setTags={setTags}
        pickBanner={pickBanner}
      />
      {isShowModal && (
        <BannerPickerModal
          onCloseModal={handleCloseModal}
          onPickBanner={handlePickBanner}
        />
      )}
    </>
  );
};

export default SocialFeatureContainer;
