const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => (word = word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ");
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
      attributeName = key.replace("_", " ");
      attributeName = titleCase(attributeName);
      break;
  }
  return attributeName;
};

const cleanValue = (key, value) => {
  switch (key) {
    case "range_increment":
      value += " ";
      value += value > 1 ? "feet" : "foot";
      break;
    case "spell_failure":
      value *= 100;
      value += "%";
    case "critical_multiplier":
      value += "x";
    default:
      if (typeof value !== "number") {
        value = titleCase(String(value));
      }
      break;
  }
  return value;
};

module.exports = {
  formatAddedData: (context, options) => {
    let ret = "";

    for (let prop in context) {
      ret =
        ret +
        options.fn({
          property: cleanKey(prop),
          value: cleanValue(prop, context[prop]),
        });
    }

    return ret;
  },
};
