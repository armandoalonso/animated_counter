import { id, addonType } from "../../config.caw.js";
import { c } from "../../template/aceDefine.js";
import AddonTypeMap from "../../template/addonTypeMap.js";

export default function (parentClass) {
  return class extends parentClass {
    constructor() {
      super();

      this._initialNumber = 0;
      this._currentNumber = 0;
      this._counterTicks = 10;
      this._useBBcodeTemplate = false;
      this._bbcodeTemplate = "%v";
      this._interval = null;
      this._stepSize = 1;
      this._targetNumber = 0;

      const properties = this._getInitProperties();
      if (properties) {
        this._initialNumber = properties[0];
        this._counterTicks = properties[1];
        this._stepSize = properties[2];
        this._useBBcodeTemplate = properties[3];
        this._bbcodeTemplate = properties[4];
      }

      this._currentNumber = this._initialNumber;
    }

    _postCreate() {
      this.instance.text = this.getCurrentValue();
    }

    getCurrentValue() {
      if (this._useBBcodeTemplate) {
        return this._bbcodeTemplate.replace('%v', this._currentNumber);
      } else {
        return String(this._currentNumber);
      }
    }

    add(number) {
        const total = this._currentNumber + number;
        this.start(total);
    }

    subtract(number) {
        const total = this._currentNumber - number;
        this.start(total);
    }

    set(number) {
      this._currentNumber = number;
      this.instance.text = this.getCurrentValue();
    }

    setStepSize(stepSize) {
      this._stepSize = stepSize;
    }

    setCounterTicks(ticks) {
      this._counterTicks = ticks;
    }

    stop() {
      this._clearInterval();
    }

    forceStop() {
      clearInterval(this._interval);
      this._currentNumber = this._targetNumber;
      this.instance.text = this.getCurrentValue();
    }

    start(target) {
      this._targetNumber = target;
      this._clearInterval();
      this._trigger('OnAnimationStart');

      this._interval = setInterval(() => {
        
        if (this._currentNumber < this._targetNumber) {
          this._currentNumber = this._currentNumber + this._stepSize;
          if (this._currentNumber > this._targetNumber) {
            this._currentNumber = this._targetNumber;
          }
        } else if (this._currentNumber > this._targetNumber) {
          this._currentNumber = this._currentNumber - this._stepSize;
          if (this._currentNumber < this._targetNumber) {
            this._currentNumber = this._targetNumber;
          }
        } else {
          this._clearInterval();
          this._trigger('OnAnimationEnd');
        }

        this.instance.text = this.getCurrentValue();
      }, this._counterTicks);
    }

    _clearInterval() {
      clearInterval(this._interval);
      this._interval = null;
    }

    _trigger(method) {
      super._trigger(self.C3[AddonTypeMap[addonType]][id].Cnds[method]);
    }

    _release() {
      super._release();
    }

    _saveToJson() {
      return {
        "initialNumber": this._initialNumber,
        "currentNumber": this._currentNumber,
        "counterTicks": this._counterTicks,
        "stepSize": this._stepSize,
        "interval": this._interval,
        "useBBcodeTemplate": this._useBBcodeTemplate,
        "bbcodeTemplate": this._bbcodeTemplate,
        "targetNumber": this._targetNumber
      };
    }

    _loadFromJson(o) {
      this._initialNumber = o["initialNumber"];
      this._currentNumber = o["currentNumber"];
      this._counterTicks = o["counterTicks"];
      this._stepSize = o["stepSize"];
      this._interval = o["interval"];
      this._useBBcodeTemplate = o["useBBcodeTemplate"];
      this._bbcodeTemplate = o["bbcodeTemplate"];
      this._targetNumber = o["targetNumber"];
    }

    _getDebuggerProperties()
    {
      return [{
        title: "piranha305.animated_counter",
        properties: [
          {name: "$is-animating",	value: this._interval !== null,	read_only: true },
          {name: "$current-number",	value: this._currentNumber,	onedit: v => this._currentNumber = v },
          {name: "$counter-ticks",	value: this._counterTicks,	onedit: v => this._counterTicks = v },
          {name: "$step-size",	value: this._stepSize,	onedit: v => this._stepSize = v },
          {name: "$use-bbcode-template",	value: this._useBBcodeTemplate,	onedit: v => this._useBBcodeTemplate = v },
          {name: "$bbcode-template",	value: this._bbcodeTemplate,	onedit: v => this._bbcodeTemplate = v },
          {name: "$target-number",	value: this._targetNumber,	onedit: v => this._targetNumber = v }
        ]
      }];
    }
  };
}
