import axios, { AxiosInstance } from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";
import { injectable } from "inversify";
import "reflect-metadata";

import IAxiosConfigure from "./IAxiosConfigure";

@injectable()
class AxiosConfigure implements IAxiosConfigure {
  private axiosInstance: AxiosInstance;

  constructor() {
    let baseURL =
      process.env.NEXT_PUBLIC_BASE_URL || "https://api.supermomos-dev.com";
    if (typeof window === "undefined") {
      baseURL =
        process.env.NEXT_PUBLIC_SERVER_BASE_URL ||
        "https://api.supermomos-dev.com";
    }

    const httpsProxyUrl = process.env.https_proxy || process.env.HTTPS_PROXY;

    this.axiosInstance = axios.create({
      baseURL,
      timeout: process.env.NEXT_PUBLIC_SERVER_TIMEOUT
        ? Number(process.env.NEXT_PUBLIC_SERVER_TIMEOUT)
        : 90000,
      headers: { "Content-Type": "application/json" },
      proxy: false,
    });
  }

  public getConfigure(): AxiosInstance {
    return this.axiosInstance;
  }
}

export default AxiosConfigure;
