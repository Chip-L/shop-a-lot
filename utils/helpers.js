const titleCase = function (str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => (word = word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ");
};

module.exports = {
  formatAddedData: ({ key, value }) => {
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
        attributeName = key.replaceAll("_", " ");
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
  },
};
