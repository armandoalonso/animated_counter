import {
  ADDON_CATEGORY,
  ADDON_TYPE,
  PLUGIN_TYPE,
  PROPERTY_TYPE,
} from "./template/enums.js";
import _version from "./version.js";
export const addonType = ADDON_TYPE.BEHAVIOR;
export const type = PLUGIN_TYPE.OBJECT;
export const id = "piranha305_animatedcounter";
export const name = "Animated Counter";
export const version = _version;
export const author = "piranha305";
export const website = "https://piranha305.itch.io";
export const documentation = "https://www.construct.net";
export const description = "A simple counter that animates from one number to another";
export const category = ADDON_CATEGORY.GENERAL;

export const hasDomside = false;
export const files = {
  extensionScript: {},
  fileDependencies: [],
};

// categories that are not filled will use the folder name
export const aceCategories = {
  general: "General",
  config: "Config",
  stop: "Stop",
};

export const info = {
  // icon: "icon.svg",
  // PLUGIN world only
  // defaultImageUrl: "default-image.png",
  Set: {
    // COMMON to all
    CanBeBundled: true,
    IsDeprecated: false,
    GooglePlayServicesEnabled: false,

    // BEHAVIOR only
    IsOnlyOneAllowed: false,

    // PLUGIN world only
    IsResizable: false,
    IsRotatable: false,
    Is3D: false,
    HasImage: false,
    IsTiled: false,
    SupportsZElevation: false,
    SupportsColor: false,
    SupportsEffects: false,
    MustPreDraw: false,

    // PLUGIN object only
    IsSingleGlobal: true,
  },
  // PLUGIN only
  AddCommonACEs: {
    Position: false,
    SceneGraph: false,
    Size: false,
    Angle: false,
    Appearance: false,
    ZOrder: false,
  },
};

export const properties = [
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "initialNumber",
    options: {
      initialValue: 0,
    },
    name: "Initial Number",
    desc: "The initial number",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "updateInterval",
    options: {
      initialValue: 10,
    },
    name: "Update Interval",
    desc: "Update interval in milliseconds, how often the counter will update",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "stepSize",
    options: {
      initialValue: 1,
    },
    name: "Step Size",
    desc: "how much to increment/decrement by each update tick"
  },
  {
    type: PROPERTY_TYPE.CHECK,
    id: "useBBCodeTemplate",
    options: {
      initialValue: false,
    },
    name: "Use BBCode Template",
    desc: "If true, the BBCode template will be used to format the number",
  },
  {
    type: PROPERTY_TYPE.TEXT,
    id: "bbcodeTemaplate",
    options: {
      initialValue: "[b]%v[/b]",
    },
    name: "BBCode Template",
    desc: "The template for the BBCode, %v will be replaced with the counter value",
  }
  //TODO: HANDLE BIG NUMBERS


  /*
  {
    type: PROPERTY_TYPE.INTEGER,
    id: "property_id",
    options: {
      initialValue: 0,
      interpolatable: false,

      // minValue: 0, // omit to disable
      // maxValue: 100, // omit to disable

      // for type combo only
      // items: [
      //   {itemId1: "item name1" },
      //   {itemId2: "item name2" },
      // ],

      // dragSpeedMultiplier: 1, // omit to disable

      // for type object only
      // allowedPluginIds: ["Sprite", "<world>"],

      // for type link only
      // linkCallback: function(instOrObj) {},
      // linkText: "Link Text",
      // callbackType:
      //   "for-each-instance"
      //   "once-for-type"

      // for type info only
      // infoCallback: function(inst) {},
    },
    name: "Property Name",
    desc: "Property Description",
  }
  */
];
