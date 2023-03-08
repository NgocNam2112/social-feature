import { SOCIAL_TAGS } from "@/constants/social-tags";
import { ISocialInformationError, ISocialTag } from "@/types/types";
import React from "react";
import SocialSetting from "./SocialSetting";

interface IProps {
  isManualApprove: boolean;
  errors: ISocialInformationError;
  onCheckManualApprove: Function;
  onChangePrivacy: Function;
  tags: ISocialTag[];
  setTags: Function;
}

const SocialSettingContainer: React.FC<IProps> = ({
  isManualApprove,
  errors,
  onCheckManualApprove,
  onChangePrivacy,
  tags,
  setTags,
}) => {
  const handleAddTag = (item: ISocialTag) => {
    if (!tags.some((_it) => _it.id === item.id))
      setTags((prevS: ISocialTag[]) => [...prevS, item]);
  };

  const handleRemoveTag = (id: number) => {
    setTags((prevS: ISocialTag[]) => prevS.filter((tag) => tag.id !== id));
  };
  return (
    <SocialSetting
      isManualApprove={isManualApprove}
      onCheckManualApprove={onCheckManualApprove}
      onChangePrivacy={onChangePrivacy}
      errors={errors}
      tags={tags}
      socialTags={SOCIAL_TAGS}
      onAddTag={handleAddTag}
      onRemoveTag={handleRemoveTag}
    />
  );
};

export default SocialSettingContainer;
