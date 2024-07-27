import { ImgConfig } from "../../../ui-basic.interface";

export interface IconConfig {
  role?: string;
  img: ImgConfig;
  ariaProps?: {
    ariaLabel: string;
    ariaHidden: boolean;
    ariaDescribedby: string
  }
}
