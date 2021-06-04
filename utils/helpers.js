const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => (word = word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ");
};

/** poor man's copy of the String.replaceAll() prototype method that is missing in NodeJS */
const replaceAll = (replaceWhat, withThis, inString) => {
  console.log("inString: ", inString);
  console.log(typeof inString);

  let newString = "";
  for (let i = 0; (i = inString.length); i++) {
    newString += inString[i] === replaceWhat ? withThis : inString[i];
  }
  console.log(typeof newString);

  console.log(newString); //.split(replaceWhat)); //.join(withThis);
};

const cleanKey = (key) => {
  // console.log(key);

  let attributeName;
  switch (key) {
    case "ua_weapon_group":
      attributeName = "UA Weapon Group";
      break;
    case "is_finesse":
      attributeName = "Is a finesse weapon";
      break;
    case "has_reach":
      attributeName = "Has reach";
      break;
    case "base_ac":
      attributeName = "Base AC";
      break;
    case "max_dex_bonus":
      attributeName = "Maximum allowed Dexterity bonus";
      break;
    case "check_penalty":
      attributeName = "Armor Check Penalty";
      break;
    case "can_run":
      attributeName = "Can be run in";
    default:
      console.log(typeof key);
      attributeName = key.replace("_", " ");
      attributeName = titleCase(attributeName);
      break;
  }
  return attributeName;
};

module.exports = {
  formatAddedData: (context, options) => {
    let ret = "";
    let attributeName;

    for (let prop in context) {
      ret =
        ret + options.fn({ property: cleanKey(prop), value: context[prop] });

      /*

    switch (key) {
      case "ua_weapon_group":
        attributeName = "UA Weapon Group";
        break;
      case "is_finesse":
        attributeName = "Is a finesse weapon";
        break;
      case "has_reach":
        attributeName = "Has reach";
        break;
      case "base_ac":
        attributeName = "Base AC";
        break;
      case "max_dex_bonus":
        attributeName = "Maximum allowed Dexterity bonus";
        break;
      case "check_penalty":
        attributeName = "Armor Check Penalty";
        break;
      case "can_run":
        attributeName = "Can be run in";
      default:
        attributeName = replaceAll("_", " ", key);
        attributeName = titleCase(attributeName);
        break;
    }

    switch (key) {
      case "range_increment":
        value += " " + value > 1 ? "feet" : "foot";
        break;
      case "spell_failure":
        value *= 100;
        value += "%";

      default:
        break;
    }

    return `${attributeName}: ${value}`;
    */
    }
    console.log("ret:", ret);
    return ret;
  },
};
