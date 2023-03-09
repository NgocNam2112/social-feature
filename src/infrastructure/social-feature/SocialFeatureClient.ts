import IAxiosConfigure from "@/config/IAxiosConfigure";
import { TYPES } from "@/config/types";
import { ISocialFeature } from "@/types/API/social-feature/SocialFeature";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import ISocialFeatureClient from "./ISocialFeatureClient";

@injectable()
class SocialFeatureClient implements ISocialFeatureClient {
  private client: IAxiosConfigure;

  constructor(
    @inject(TYPES.IAxiosConfigure)
    client: IAxiosConfigure
  ) {
    this.client = client;
  }

  public async postSocial(request: ISocialFeature): Promise<ISocialFeature> {
    return this.client
      .getConfigure()
      .post("/interview/social", { ...request })
      .then((res) => res.data);
  }
}

export default SocialFeatureClient;
