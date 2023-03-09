import {
  ISocialInformation,
  ISocialInformationError,
  ISocialTag,
} from "@/types/types";
import React, { useRef, useState } from "react";
import BannerPickerModal from "../BannerPickerModal";
import SocialFeature from "./SocialFeature";
import { container } from "@/config/inversify.config";
import { TYPES } from "@/config/types";
import ISocialFeatureClient from "@/infrastructure/social-feature/ISocialFeatureClient";
import dayjs from "dayjs";

const SocialFeatureContainer: React.FC = () => {
  const refTitle = useRef(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [pickBanner, setPickBanner] = useState<string | null>(null);
  const [socialInformation, setSocialInformation] =
    useState<ISocialInformation>({
      title: "",
      venue: "",
      maxOpacity: "",
      cost: "",
      description: "",
      date: null,
      time: null,
    });
  const [tags, setTags] = useState<ISocialTag[]>([]);

  const [errors, setErrors] = useState<ISocialInformationError>({
    title: "",
    venue: "",
    maxOpacity: "",
    cost: "",
    description: "",
    date: "",
    time: "",
    privacy: "",
    isManualApprove: "",
  });

  const iSocialService = container.get<ISocialFeatureClient>(
    TYPES.ISocialFeatureClient
  );

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

  const handleCreateSocial = async () => {
    if (!(refTitle.current as unknown as HTMLElement).textContent) {
      alert("Title is required, Please enter the Social Title");
      return;
    }
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

    const startAt =
      dayjs(socialInformation.date).format("YYYY-MM-DD") +
      dayjs(socialInformation.time).format("HH:mm:ssZ");

    const socialPost = await iSocialService.postSocial({
      title: (refTitle.current as unknown as HTMLElement)
        ?.textContent as string,
      startAt,
      venue: socialInformation.venue,
      capacity: +socialInformation.maxOpacity,
      price: +socialInformation.cost,
      description: socialInformation.description,
      privacy,
      banner: pickBanner,
      tags: [],
    });

    console.log("socialPost", socialPost);
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
