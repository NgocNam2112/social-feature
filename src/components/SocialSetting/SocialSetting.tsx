import { ISocialInformationError, ISocialTag } from "@/types/types";
import Image from "next/image";
import React from "react";
import ErrorMessage from "../helper/ErrorMessage/ErrorMessage";
import styles from "./styles.module.scss";

interface IProps {
  isManualApprove: boolean;
  onCheckManualApprove: Function;
  onChangePrivacy: Function;
  errors: ISocialInformationError;
  tags: ISocialTag[];
  socialTags: ISocialTag[];
  onAddTag: Function;
  onRemoveTag: Function;
}

const SocialSetting: React.FC<IProps> = ({
  isManualApprove,
  onCheckManualApprove,
  onChangePrivacy,
  errors,
  tags,
  socialTags,
  onAddTag,
  onRemoveTag,
}) => {
  return (
    <div className={styles.settings_container}>
      <h2>Settings</h2>
      <div>
        <label className={styles.checkbox_container}>
          <input
            type="checkbox"
            checked={isManualApprove}
            onChange={(e) => onCheckManualApprove(e)}
          />
          <span className={styles.checkmark}>I want to approve attendees</span>
        </label>
        <ErrorMessage errorMessage={errors.isManualApprove} />
      </div>

      <div className={styles.privacy}>
        <h4>Privacy</h4>
        <div
          className={styles.radio_container}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangePrivacy(e.target.value)
          }
        >
          <div className={styles.radio}>
            <input type="radio" id="1" value="Public" name="privacy" />
            <label htmlFor="1">Public</label>
          </div>

          <div className={styles.radio}>
            <input
              type="radio"
              id="2"
              value="Curated Audience"
              name="privacy"
            />
            <label htmlFor="2">Curated Audience</label>
          </div>

          <div className={styles.radio}>
            <input type="radio" id="3" value="Community Only" name="privacy" />
            <label htmlFor="3">Community Only</label>
          </div>
        </div>
        <ErrorMessage errorMessage={errors.privacy} />
      </div>

      <div className={styles.privacy}>
        <h4>Tag your social</h4>
        <p>Pick tags for our curation engine to work its magin</p>
      </div>

      <div className={styles.tags_container}>
        {tags.length > 0 &&
          tags.map((tag: ISocialTag, index: number) => (
            <div className={styles.tag} key={index}>
              {tag.name}
              <Image
                src="/icons/close-icon.svg"
                alt="close icon"
                width={12}
                height={12}
                onClick={() => onRemoveTag(tag.id)}
              />
            </div>
          ))}
      </div>

      <div className={styles.tags_container}>
        {socialTags?.map((tag: ISocialTag, index: number) => (
          <p key={index} onClick={() => onAddTag(tag)}>
            {tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SocialSetting;
