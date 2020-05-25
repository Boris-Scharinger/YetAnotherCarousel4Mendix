import { Component, ReactNode, createElement } from "react";
import { YetAnotherCarouselWidgetPreviewProps } from "../typings/YetAnotherCarouselWidgetProps";
import { Siema } from "./lib/index";

declare function require(name: string): string;

export class preview extends Component<YetAnotherCarouselWidgetPreviewProps> {
    render(): ReactNode {
        return (
        <Siema ref='siema'>
            <img src="https://pawelgrzybek.com/siema/assets/siema--pink.svg"/>
            <img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg"/>
            <img src="https://pawelgrzybek.com/siema/assets/siema--pink.svg"/>
            <img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg"/>
      </Siema>
        )
    }
}

export function getPreviewCss(): string {
    return require("./ui/YetAnotherCarouselWidget.css");
}
