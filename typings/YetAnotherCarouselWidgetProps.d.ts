/**
 * This file was generated from YetAnotherCarouselWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, ListValue } from "mendix";

export type BootstrapStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export interface YetAnotherCarouselWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    duration: number;
    easing: string;
    perPage: number;
    startIndex: number;
    draggable: boolean;
    threshold: number;
    loop: boolean;
    showPreviousNextButton: boolean;
    buttonLabelText_Next: DynamicValue<string>;
    buttonLabelText_Previous: DynamicValue<string>;
    bootstrapStyle: BootstrapStyleEnum;
    selector?: string;
    staticHTML?: string;
    image_objects: ListValue;
}

export interface YetAnotherCarouselWidgetPreviewProps {
    class: string;
    style: string;
    duration: number | null;
    easing: string;
    perPage: number | null;
    startIndex: number | null;
    draggable: boolean;
    threshold: number | null;
    loop: boolean;
    showPreviousNextButton: boolean;
    buttonLabelText_Next: string;
    buttonLabelText_Previous: string;
    bootstrapStyle: BootstrapStyleEnum;
    selector: string;
    staticHTML: string;
    image_objects: {} | null;
}
