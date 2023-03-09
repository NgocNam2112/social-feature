import { ISocialFeature } from "@/types/API/social-feature/SocialFeature";

export default interface ISocialFeatureClient {
  postSocial(request: ISocialFeature): Promise<ISocialFeature>;
}
