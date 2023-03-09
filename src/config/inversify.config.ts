import { Container } from "inversify";
import { TYPES } from "./types";
import IAxiosConfigure from "./IAxiosConfigure";
import AxiosConfigure from "./AxiosConfigure";
import ISocialFeatureClient from "@/infrastructure/social-feature/ISocialFeatureClient";
import SocialFeatureClient from "@/infrastructure/social-feature/SocialFeatureClient";

const container = new Container();

container
  .bind<IAxiosConfigure>(TYPES.IAxiosConfigure)
  .to(AxiosConfigure)
  .inSingletonScope();
container
  .bind<ISocialFeatureClient>(TYPES.ISocialFeatureClient)
  .to(SocialFeatureClient)
  .inSingletonScope();

export { container };
