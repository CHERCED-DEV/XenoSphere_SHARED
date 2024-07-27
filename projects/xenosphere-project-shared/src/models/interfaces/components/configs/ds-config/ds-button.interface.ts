import { ButtonSizes, ButtonStyles } from "../../../../enums/ds-enumerations/ds-button.enum";
import { IconPosition } from "../../../../enums/ui-config.enum";
import { ButtonType } from "../../../../types/basic-configs/ui-types.interface";
import { IconConfig } from "./ds-icon.interface";

export interface ButtonConfig {
  id?: string;
  label: string;
  type?: ButtonType;
  enableLoader: boolean;
  loadingText: string;
  enableToggable: boolean;
  layout: {
    style: ButtonStyles;
    size: ButtonSizes;
  },
  icon?: {
    settings: IconConfig;
    position?: IconPosition;
  }
  ariaProps?: {
    ariaLabel: string;
    ariaControls: string;
    ariaLabelledBy: string;
    ariaDescribedBy: string;
  }
}
