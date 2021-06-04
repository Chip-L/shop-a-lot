const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => (word = word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ");
};

/** poor man's copy of the String.replaceAll() prototype method that is missing in NodeJS */
const replaceAll = (replaceWhat, withThis, inString) => {
  console.log(inString);
  let newString = String(inString);
  console.log(typeof newString);
  newString3 = newString.replaceAll("_", " ");
  console.log(typeof newString3);

  console.log(newString); //.split(replaceWhat)); //.join(withThis);
};

module.exports = {
  formatAddedData: (context, options) => {
    let ret = "";
    let attributeName;

    for (let prop in context) {
      console.log(options.fn({ property: prop, value: context[prop] }));
      ret = ret + options.fn({ property: prop, value: context[prop] });

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
    return ret;
  },
};
