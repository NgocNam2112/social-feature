/* eslint-disable @next/next/no-img-element */
import { INPUT_FORM, PICK_DATE } from "@/constants/social-feature";
import {
  ISocialInformation,
  ISocialInformationError,
  ISocialTag,
} from "@/types/types";
import Image from "next/image";
import React from "react";
import DatePick from "../DatePicker/DatePicker";
import ErrorMessage from "../helper/ErrorMessage/ErrorMessage";
import InputForm from "../helper/InputForm/InputForm";
import SocialSetting from "../SocialSetting";
import styles from "./styles.module.scss";

interface IProps {
  refTitle: React.RefObject<HTMLSpanElement>;
  errors: ISocialInformationError;
  setIsShowModal: Function;
  socialInformation: ISocialInformation;
  onChangeForm: Function;
  onCreateSocial: Function;
  isManualApprove: boolean;
  onCheckManualApprove: Function;
  onChangePrivacy: Function;
  tags: ISocialTag[];
  setTags: Function;
  pickBanner: string | null;
}

const SocialFeature: React.FC<IProps> = ({
  refTitle,
  errors,
  setIsShowModal,
  socialInformation,
  onChangeForm,
  onCreateSocial,
  isManualApprove,
  onCheckManualApprove,
  onChangePrivacy,
  tags,
  setTags,
  pickBanner,
}) => {
  return (
    <>
      <div className={styles.event_container}>
        <div className={styles.event_info}>
          <div className={styles.title_container}>
            <span
              className={styles.title}
              contentEditable={true}
              ref={refTitle}
            >
              Web3 Founders & Designers Mixer + fireside chat with Coinbase
              Senior Designer & Airfoil founder
            </span>
          </div>
          <div className={styles.select_container}>
            <DatePick
              pickDateInfor={PICK_DATE.DATE}
              value={socialInformation.date}
              onChange={onChangeForm}
              error={errors.date}
            />
            <DatePick
              pickDateInfor={PICK_DATE.TIME}
              isShowTimeSelectOnly={true}
              value={socialInformation.time}
              onChange={onChangeForm}
              error={errors.time}
            />
          </div>

          <InputForm
            className={styles.location}
            inputForm={INPUT_FORM.VENUE}
            value={socialInformation.venue}
            onChange={onChangeForm}
            error={errors.venue}
          />

          <div className={styles.cost_container}>
            <InputForm
              inputForm={INPUT_FORM.MAX_OPACITY}
              className={styles.size}
              value={socialInformation.maxOpacity}
              onChange={onChangeForm}
              error={errors.maxOpacity}
            />

            <InputForm
              className={styles.size}
              inputForm={INPUT_FORM.COST}
              value={socialInformation.cost}
              error={errors.cost}
              onChange={onChangeForm}
            />
          </div>
        </div>

        {!pickBanner ? (
          <div
            className={styles.add_banner_container}
            onClick={() => setIsShowModal(true)}
          >
            <Image
              src="/icons/add-banner-icon.svg"
              alt="add-banner-icon"
              width={24}
              height={24}
            />
            Add a banner
          </div>
        ) : (
          <div className={styles.banner_container}>
            <img src={pickBanner} alt="banner" />
          </div>
        )}
      </div>

      <div className={styles.des_container}>
        <p>Description</p>
        <textarea
          placeholder="Description of your event.."
          value={socialInformation.description}
          onChange={(e) => onChangeForm("description", e.target.value)}
        />
        <ErrorMessage errorMessage={errors.description} />
      </div>

      <SocialSetting
        isManualApprove={isManualApprove}
        onCheckManualApprove={onCheckManualApprove}
        onChangePrivacy={onChangePrivacy}
        errors={errors}
        tags={tags}
        setTags={setTags}
      />

      <button className={styles.btn_create} onClick={() => onCreateSocial()}>
        CREATE SOCIAL
      </button>
    </>
  );
};

export default SocialFeature;
