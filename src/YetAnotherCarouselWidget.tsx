import { CSSProperties, Component, ReactNode, createElement } from "react";
import { hot } from "react-hot-loader/root";
import { YetAnotherCarouselWidgetContainerProps } from "../typings/YetAnotherCarouselWidgetProps";
import classNames from "classnames";


import { Siema } from "./lib/index";

import "./ui/YetAnotherCarouselWidget.css";

export type BootstrapStyle = "default" | "info" | "inverse" | "primary" | "danger" | "success" | "warning";

class YetAnotherCarouselWidget extends Component<YetAnotherCarouselWidgetContainerProps> {
    private siemaRef?: Siema | null;

    render(): ReactNode {
        return (
          <div>
            <Siema 
              ref={this.setRef} 
              duration={this.props.duration} 
              easing={this.props.easing}
              draggable={this.props.draggable} 
              perPage={this.props.perPage} 
              startIndex={this.props.startIndex}
              threshold={this.props.threshold}
              loop={this.props.loop} 
            >
            <img src="https://unsplash.it/600/350?image=10" alt="slide" />
            <img src="https://unsplash.it/600/350?image=11" alt="slide" />
            <img src="https://unsplash.it/600/350?image=12" alt="slide" />
            <img src="https://unsplash.it/600/350?image=13" alt="slide" />
            <img src="https://unsplash.it/600/350?image=14" alt="slide" />
            <img src="https://unsplash.it/600/350?image=15" alt="slide" />
            <img src="https://unsplash.it/600/350?image=16" alt="slide" />
            </Siema>
            {this.props.showPreviousNextButton &&
              <div>
                <button type='button' className={classNames("btn mx-button", { [`label-${this.props.bootstrapStyle}`]: !!this.props.bootstrapStyle })} style={this.props.style} onClick={this.triggerPrev}>{this.props.buttonLabelText_Previous}</button>
              </div>
            }
            {this.props.showPreviousNextButton &&
              <div>  
                <button type='button' className={classNames("btn mx-button", { [`label-${this.props.bootstrapStyle}`]: !!this.props.bootstrapStyle })} style={this.props.style} onClick={this.triggerNext}>{this.props.buttonLabelText_Next}</button>            
              </div>
            }
          </div>
      );
    }

    private setRef = (elem: Siema | null): void => {
        this.siemaRef = elem;
    };
    
    private triggerPrev = (): void => {
        if (!this.siemaRef) {
          this.logSiemaMissing();
          return;
        }
        this.siemaRef.prev();
    };
    
    private triggerNext = (): void => {
        if (!this.siemaRef) {
          this.logSiemaMissing();
          return;
        }
        this.siemaRef.next();
    };
    
    private logSiemaMissing(): void {
        const message =
          "Siema instance is not available. It may not have been instantiated yet.";
        // tslint:disable-next-line
        console.error(message);
    }
}

export default hot(YetAnotherCarouselWidget);