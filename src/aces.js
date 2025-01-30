import { action, condition, expression } from "../template/aceDefine.js";

const general = "General";
const config = "Config";
const stop = "Stop";

//----------------------------------------------------
//-------------------- Actions -----------------------
//----------------------------------------------------

action(
  general,
  "SetValue",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set Value",
    displayText: "Set {my} to {0}",
    description: "Set the initial value of the counter, instantly", 
    params: [
      {
        id: "value",
        name: "Value",
        desc: "The value to set",
        type: "number",
        initialValue: '0',
      },
    ],
  },
  function (value) {
    this.set(value);
  }
)

action(
  general,
  "SetTarget",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set Target",
    displayText: "Set {my} target to {0}",
    description: "Set the target value of the counter, this will start the animation",
    params: [
      {
        id: "target",
        name: "Target",
        desc: "The target value",
        type: "number",
        initialValue: '0',
      },
    ],
  },
  function (target) {
    this.start(target);
  }
);

action(
  general,
  "Add",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Add",
    displayText: "Add {0} to {my}",
    description: "Add value to the counter",
    params: [
      {
        id: "value",
        name: "Value",
        desc: "The value to add",
        type: "number",
        initialValue: '0',
      },
    ],
  },
  function (value) {
    this.add(value);
  }
);

action(
  general,
  "Subtract",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Subtract",
    displayText: "Subtract {0} from {my}",
    description: "Subtract value from the counter",
    params: [
      {
        id: "value",
        name: "Value",
        desc: "The value to subtract",
        type: "number",
        initialValue: '0',
      },
    ],
  },
  function (value) {
    this.subtract(value);
  }
);

action(
  general,
  "SetValueAndTarget",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set Value and Target",
    displayText: "Set {my} to {0} and target to {1}",
    description: "Set the initial value of the counter and the target value",
    params: [
      {
        id: "value",
        name: "Value",
        desc: "The value to set",
        type: "number",
        initialValue: '0',
      },
      {
        id: "target",
        name: "Target",
        desc: "The target value",
        type: "number",
        initialValue: '0',
      },
    ],
  },
  function (value, target) {
    this.set(value);
    this.start(target);
  }
);


action(
  stop,
  "Stop",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Stop",
    displayText: "{my} Stop",
    description: "Stop the counter",
    params: [],
  },
  function () {
    this.stop();
  }
);

action(
  stop,
  "ForceStop",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Force Stop",
    displayText: "{my} Force Stop",
    description: "Force stop the counter, set value to target",
    params: [],
  },
  function () {
    this.forceStop();
  }
)

action(
  config,
  "SetStepSize",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set Step Size",
    displayText: "Set {my} step size to {0}",
    description: "Set the step size of the counter, the amount to increment or decrement by each tick",
    params: [
      {
        id: "stepSize",
        name: "Step Size",
        desc: "The step size of the counter",
        type: "number",
        initialValue: '1',
      },
    ],
  },
  function (steps) {
    this.setStepSize(steps);
  }
);

action(
  config,
  "SetUopdateInterval",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set Counter Update Interval",
    displayText: "Set {my} Counter Update Interval to {0} milliseconds",
    description: "Set the update interval of the counter, how often the counter will update in milliseconds", 
    params: [
      {
        id: "milliseconds",
        name: "Milliseconds",
        desc: "The speed the counter will update",
        type: "number",
        initialValue: '10',
      },
    ],
  },
  function (ticks) {
    this.setCounterTicks(ticks);
  }
);

action(
  config,
  "SetUseBBCodeTemplate",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set Use BBCode Template",
    displayText: "Set {my} Use BBCode Template to {0}",
    description: "Set if the BBCode template should be used to format the number",
    params: [
      {
        id: "use",
        name: "Use",
        desc: "If true, the BBCode template will be used to format the number",
        type: "boolean",
        initialValue: 'false',
      },
    ],
  },
  function (use) {
    this._useBBcodeTemplate = use;
  }
);

action(
  config,
  "SetBBCodeTemplate",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set BBCode Template",
    displayText: "Set {my} BBCode Template to {0}",
    description: "Set the BBCode template to format the number",
    params: [
      {
        id: "template",
        name: "Template",
        desc: "The template for the BBCode, %v will be replaced with the counter value",
        type: "string",
        initialValue: '\"[b]%v[/b]\"',
      },
    ],
  },
  function (template) {
    this._bbcodeTemplate = template;
  }
);

//----------------------------------------------------
//-------------------- CONDITIONS --------------------
//----------------------------------------------------

condition(
  general,
  "IsAnimating",
  {
    highlight: false,
    deprecated: false,
    listName: "Is Animating",
    displayText: "{my} is animating",
    description: "Check if the counter is animating",
    params: [],
  },
  function () {
    return this._interval !== null;
  }
);

condition(
  general,
  "OnAnimationStart",
  {
    highlight: false,
    deprecated: false,
    listName: "On Animation Start",
    displayText: "{my} On animation start",
    description: "Triggered when the counter starts animating",
    isTrigger: true,
    params: [],
  },
  function () {
    return true;
  }
);

condition(
  general,
  "OnAnimationEnd",
  {
    highlight: false,
    deprecated: false,
    listName: "On Animation End",
    displayText: "{my} On animation end",
    description: "Triggered when the counter stops animating",
    isTrigger: true,
    params: [],
  },
  function () {
    return true;
  }
);

condition(
  general,
  "IsIncreasing",
  {
    highlight: false,
    deprecated: false,
    listName: "Is Increasing",
    displayText: "{my} is increasing",
    description: "Check if the counter is increasing",
    params: [],
  },
  function () {
    return  this._interval !== null && this._currentNumber < this._targetNumber;
  }
)

condition(
  general,
  "IsDecreasing",
  {
    highlight: false,
    deprecated: false,
    listName: "Is Decreasing",
    displayText: "{my} is decreasing",
    description: "Check if the counter is decreasing",
    params: [],
  },
  function () {
    return this._interval !== null && this._currentNumber > this._targetNumber;
  }
)

//----------------------------------------------------
//-------------------- EXPRESSIONS -------------------
//----------------------------------------------------

expression(
  general,
  "CurrentValue",
  {
    highlight: false,
    deprecated: false,
    returnType: "number",
    description: "Get the current value of the counter",
    params: [],
  },
  function () {
    return this._currentNumber;
  }
);

expression(
  general,
  "TargetValue",
  {
    highlight: false,
    deprecated: false,
    returnType: "number",
    description: "Get the target value of the counter",
    params: [],
  },
  function () {
    return this._targetNumber;
  }
);

expression(
  config,
  "StepSize",
  {
    highlight: false,
    deprecated: false,
    returnType: "number",
    description: "Get the step size of the counter",
    params: [],
  },
  function () {
    return this._stepSize;
  }
);

expression(
  config,
  "UpdateInterval",
  {
    highlight: false,
    deprecated: false,
    returnType: "number",
    description: "Get the counter update interval",
    params: [],
  },
  function () {
    return this._counterTicks;
  }
);

expression(
  general,
  "Diff",
  {
    highlight: false,
    deprecated: false,
    returnType: "number",
    description: "Get the difference between the current and target value",
    params: [],
  },
  function () {
    return this._targetNumber - this._currentNumber;
  }
);