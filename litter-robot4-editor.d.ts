import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
export declare class LitterRobot4Editor extends LitElement {
    static get properties(): {
        hass: {
            type: ObjectConstructor;
        };
        _config: {
            type: ObjectConstructor;
        };
    };
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: any): void;
    static styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
