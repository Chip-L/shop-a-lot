const { Product } = require("../models");

const productData = [
  /****************************** Armor ************************************/
  {
    product_name: "Ashigaru",
    cost: 25,
    stock: 5,
    weight: 20,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 3,
      max_dex_bonus: 5,
      check_penalty: -1,
      spell_failure: 0.15,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Banded Mail",
    description: "The suit includes gauntlets.",
    cost: 250,
    stock: 10,
    weight: 35,
    image_link: "/img/armorHeavy.png",
    image_alt_text: "Heavy Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Heavy",
      base_ac: 6,
      max_dex_bonus: 1,
      check_penalty: -6,
      spell_failure: 0.35,
      has_gauntlets: true,
      can_run: false,
    },
  },
  {
    product_name: "Bark",
    cost: 15,
    stock: 7,
    weight: 15,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 2,
      max_dex_bonus: 5,
      check_penalty: -2,
      spell_failure: 0.15,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Bone",
    cost: 20,
    stock: 4,
    weight: 20,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 3,
      max_dex_bonus: 4,
      check_penalty: -3,
      spell_failure: 0.15,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Bracers",
    cost: 1,
    stock: 17,
    weight: 1,
    image_link: "/img/gloves.png",
    image_alt_text: "Gloves",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      base_ac: 0,
      max_dex_bonus: 99,
      check_penalty: 0,
      spell_failure: 0,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Breastplate",
    description: "It comes with a helmet and greaves.",
    cost: 200,
    stock: 4,
    weight: 30,
    image_link: "/img/armorMedium.png",
    image_alt_text: "Medium Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Medium",
      base_ac: 5,
      max_dex_bonus: 3,
      check_penalty: -4,
      spell_failure: 0.25,
      has_gauntlets: false,
      can_run: false,
    },
  },
  {
    product_name: "Brigandine",
    cost: 30,
    stock: 2,
    weight: 40,
    image_link: "/img/armorMedium.png",
    image_alt_text: "Medium Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Medium",
      base_ac: 4,
      max_dex_bonus: 2,
      check_penalty: -5,
      spell_failure: 0.3,
      has_gauntlets: false,
      can_run: false,
    },
  },
  {
    product_name: "Chain Shirt",
    description: "A chain shirt comes with a steel cap.",
    cost: 100,
    stock: 7,
    weight: 25,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 4,
      max_dex_bonus: 4,
      check_penalty: -2,
      spell_failure: 0.2,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Chainmail",
    description: "The suit includes gauntlets.",
    cost: 150,
    stock: 0,
    weight: 40,
    image_link: "/img/armorMedium.png",
    image_alt_text: "Medium Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Medium",
      base_ac: 5,
      max_dex_bonus: 2,
      check_penalty: -5,
      spell_failure: 0.3,
      has_gauntlets: true,
      can_run: true,
    },
  },
  {
    product_name: "Cord",
    cost: 15,
    stock: 15,
    weight: 15,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 2,
      max_dex_bonus: 5,
      check_penalty: -1,
      spell_failure: 0.05,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Dhenuka",
    cost: 30,
    stock: 9,
    weight: 25,
    image_link: "/img/armorMedium.png",
    image_alt_text: "Medium Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Medium",
      base_ac: 4,
      max_dex_bonus: 1,
      check_penalty: -5,
      spell_failure: 0.25,
      has_gauntlets: false,
      can_run: false,
    },
  },
  {
    product_name: "Full Plate",
    description:
      "The suit includes gauntlets, heavy leather boots, a visored helmet, and a thick layer of padding that is worn underneath the armor. Each suit of full plate must be individually fitted to its owner by a master armor smith, although a captured suit can be resized to fit a new owner at a cost of 200 to 800 (2d4x100) gold pieces.",
    cost: 1500,
    stock: 5,
    weight: 50,
    image_link: "/img/armorHeavy.png",
    image_alt_text: "Heavy Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Heavy",
      base_ac: 8,
      max_dex_bonus: 1,
      check_penalty: -6,
      spell_failure: 0.35,
      has_gauntlets: true,
      can_run: false,
    },
  },
  {
    product_name: "Great",
    cost: 300,
    stock: 19,
    weight: 45,
    image_link: "/img/armorHeavy.png",
    image_alt_text: "Heavy Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Heavy",
      base_ac: 7,
      max_dex_bonus: 2,
      check_penalty: -5,
      spell_failure: 0.4,
      has_gauntlets: true,
      can_run: false,
    },
  },
  {
    product_name: "Half-Plate",
    description: "The suit includes gauntlets.",
    cost: 600,
    stock: 8,
    weight: 50,
    image_link: "/img/armorHeavy.png",
    image_alt_text: "Heavy Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Heavy",
      base_ac: 7,
      max_dex_bonus: 0,
      check_penalty: -7,
      spell_failure: 0.4,
      has_gauntlets: true,
      can_run: false,
    },
  },
  {
    product_name: "Hard Leather",
    cost: 15,
    stock: 8,
    weight: 15,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 2,
      max_dex_bonus: 5,
      check_penalty: -1,
      spell_failure: 0.15,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Heavy Chain Mail",
    cost: 180,
    stock: 2,
    weight: 48,
    image_link: "/img/armorMedium.png",
    image_alt_text: "Medium Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Medium",
      base_ac: 5,
      max_dex_bonus: 1,
      check_penalty: -6,
      spell_failure: 0.4,
      has_gauntlets: true,
      can_run: false,
    },
  },
  {
    product_name: "Heavy Clothing",
    cost: 10,
    stock: 17,
    weight: 10,
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      base_ac: 0,
      max_dex_bonus: 6,
      check_penalty: 0,
      spell_failure: 0.08,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Hide",
    cost: 15,
    stock: 2,
    weight: 25,
    image_link: "/img/armorMedium.png",
    image_alt_text: "Medium Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Medium",
      base_ac: 3,
      max_dex_bonus: 4,
      check_penalty: -3,
      spell_failure: 0.2,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Lamellar",
    cost: 150,
    stock: 11,
    weight: 35,
    image_link: "/img/armorMedium.png",
    image_alt_text: "Medium Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Medium",
      base_ac: 5,
      max_dex_bonus: 3,
      check_penalty: -4,
      spell_failure: 0.3,
      has_gauntlets: false,
      can_run: false,
    },
  },
  {
    product_name: "Leather",
    cost: 10,
    stock: 8,
    weight: 15,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 2,
      max_dex_bonus: 6,
      check_penalty: 0,
      spell_failure: 0.1,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Leather Scale",
    cost: 35,
    stock: 6,
    weight: 20,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 3,
      max_dex_bonus: 6,
      check_penalty: -2,
      spell_failure: 0.15,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Light Hide",
    cost: 10,
    stock: 19,
    weight: 20,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 3,
      max_dex_bonus: 6,
      check_penalty: -1,
      spell_failure: 0.1,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Mage Armor",
    cost: 0,
    stock: 0,
    weight: 0,
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      base_ac: 4,
      max_dex_bonus: 99,
      check_penalty: 0,
      spell_failure: 0,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Naga",
    cost: 125,
    stock: 7,
    weight: 40,
    image_link: "/img/armorMedium.png",
    image_alt_text: "Medium Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Medium",
      base_ac: 4,
      max_dex_bonus: 4,
      check_penalty: -3,
      spell_failure: 0.2,
      has_gauntlets: false,
      can_run: false,
    },
  },
  {
    product_name: "None",
    cost: 0,
    stock: 16,
    weight: 0,
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      base_ac: 0,
      max_dex_bonus: 99,
      check_penalty: 0,
      spell_failure: 0,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Padded",
    cost: 5,
    stock: 11,
    weight: 10,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 1,
      max_dex_bonus: 8,
      check_penalty: 0,
      spell_failure: 0.05,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Partial",
    cost: 50,
    stock: 0,
    weight: 30,
    image_link: "/img/armorMedium.png",
    image_alt_text: "Medium Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Medium",
      base_ac: 4,
      max_dex_bonus: 4,
      check_penalty: -3,
      spell_failure: 0.25,
      has_gauntlets: true,
      can_run: false,
    },
  },
  {
    product_name: "Scale Mail",
    description: "The suit includes gauntlets.",
    cost: 50,
    stock: 2,
    weight: 30,
    image_link: "/img/armorMedium.png",
    image_alt_text: "Medium Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Medium",
      base_ac: 4,
      max_dex_bonus: 3,
      check_penalty: -4,
      spell_failure: 0.25,
      has_gauntlets: true,
      can_run: false,
    },
  },
  {
    product_name: "Splint Mail",
    description: "The suit includes gauntlets.",
    cost: 200,
    stock: 14,
    weight: 45,
    image_link: "/img/armorHeavy.png",
    image_alt_text: "Heavy Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Heavy",
      base_ac: 6,
      max_dex_bonus: 0,
      check_penalty: -7,
      spell_failure: 0.4,
      has_gauntlets: true,
      can_run: false,
    },
  },
  {
    product_name: "Studded Leather",
    cost: 25,
    stock: 16,
    weight: 20,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 3,
      max_dex_bonus: 5,
      check_penalty: -1,
      spell_failure: 0.15,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Wicker",
    cost: 5,
    stock: 2,
    weight: 5,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 1,
      max_dex_bonus: 5,
      check_penalty: 0,
      spell_failure: 0.1,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Wood",
    cost: 15,
    stock: 10,
    weight: 20,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 3,
      max_dex_bonus: 4,
      check_penalty: -3,
      spell_failure: 0.15,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Buckler",
    description:
      "This small metal shield is worn strapped to your forearm. You can use a bow or crossbow without penalty while carrying it. You can also use your shield arm to wield a weapon (whether you are using an off-hand weapon or using your off hand to help wield a two-handed weapon), but you take a -1 penalty on attack rolls while doing so. This penalty stacks with those that may apply for fighting with your off hand and for fighting with two weapons. In any case, if you use a weapon in your off hand, you don't get the buckler's AC bonus for the rest of the round.\n\nYou can't bash someone with a buckler.",
    cost: 15,
    stock: 16,
    weight: 5,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Tiny",
      armor_type: "Light",
      base_ac: 1,
      max_dex_bonus: 99,
      check_penalty: -1,
      spell_failure: 0.05,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Grasping Shield",
    cost: 1000,
    stock: 16,
    weight: 10,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Small",
      armor_type: "Light",
      base_ac: 1,
      max_dex_bonus: 99,
      check_penalty: -1,
      spell_failure: 0.05,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Kappa Shell",
    cost: 1000,
    stock: 6,
    weight: 45,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 0,
      max_dex_bonus: 99,
      check_penalty: -10,
      spell_failure: 0.5,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Shield, Heavy Steel",
    description:
      "You strap a shield to your forearm and grip it with your hand. A heavy shield is so heavy that you can't use your shield hand for anything else.\n\nWooden or Steel: Wooden and steel shields offer the same basic protection, though they respond differently to special attacks.\n\nShield Bash Attacks: You can bash an opponent with a heavy shield, using it as an off-hand weapon. See Table: Weapons for the damage dealt by a shield bash. Used this way, a heavy shield is a martial bludgeoning weapon. For the purpose of penalties on attack rolls, treat a heavy shield as a one-handed weapon. If you use your shield as a weapon, you lose its AC bonus until your next action (usually until the next round). An enhancement bonus on a shield does not improve the effectiveness of a shield bash made with it, but the shield can be made into a magic weapon in its own right.",
    cost: 20,
    stock: 4,
    weight: 15,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Small",
      armor_type: "Light",
      base_ac: 2,
      max_dex_bonus: 99,
      check_penalty: -2,
      spell_failure: 0.15,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Shield, Heavy Wooden",
    description:
      "You strap a shield to your forearm and grip it with your hand. A heavy shield is so heavy that you can't use your shield hand for anything else.\n\nWooden or Steel: Wooden and steel shields offer the same basic protection, though they respond differently to special attacks.\n\nShield Bash Attacks: You can bash an opponent with a heavy shield, using it as an off-hand weapon. See Table: Weapons for the damage dealt by a shield bash. Used this way, a heavy shield is a martial bludgeoning weapon. For the purpose of penalties on attack rolls, treat a heavy shield as a one-handed weapon. If you use your shield as a weapon, you lose its AC bonus until your next action (usually until the next round). An enhancement bonus on a shield does not improve the effectiveness of a shield bash made with it, but the shield can be made into a magic weapon in its own right.",
    cost: 7,
    stock: 14,
    weight: 15,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Small",
      armor_type: "Light",
      base_ac: 2,
      max_dex_bonus: 99,
      check_penalty: -2,
      spell_failure: 0.15,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Shield, Light Steel",
    description:
      "You strap a shield to your forearm and grip it with your hand. A light shield's weight lets you carry other items in that hand, although you cannot use weapons with it.\n\nWooden or Steel: Wooden and steel shields offer the same basic protection, though they respond differently to special attacks.\n\nShield Bash Attacks: You can bash an opponent with a light shield, using it as an off-hand weapon. See Table: Weapons for the damage dealt by a shield bash. Used this way, a light shield is a martial bludgeoning weapon. For the purpose of penalties on attack rolls, treat a light shield as a light weapon. If you use your shield as a weapon, you lose its AC bonus until your next action (usually until the next round). An enhancement bonus on a shield does not improve the effectiveness of a shield bash made with it, but the shield can be made into a magic weapon in its own right.",
    cost: 9,
    stock: 15,
    weight: 6,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Small",
      armor_type: "Light",
      base_ac: 1,
      max_dex_bonus: 99,
      check_penalty: -1,
      spell_failure: 0.05,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Shield, Light Wooden",
    description:
      "You strap a shield to your forearm and grip it with your hand. A light shield's weight lets you carry other items in that hand, although you cannot use weapons with it.\n\nWooden or Steel: Wooden and steel shields offer the same basic protection, though they respond differently to special attacks.\n\nShield Bash Attacks: You can bash an opponent with a light shield, using it as an off-hand weapon. See Table: Weapons for the damage dealt by a shield bash. Used this way, a light shield is a martial bludgeoning weapon. For the purpose of penalties on attack rolls, treat a light shield as a light weapon. If you use your shield as a weapon, you lose its AC bonus until your next action (usually until the next round). An enhancement bonus on a shield does not improve the effectiveness of a shield bash made with it, but the shield can be made into a magic weapon in its own right.",
    cost: 3,
    stock: 1,
    weight: 6,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Small",
      armor_type: "Light",
      base_ac: 1,
      max_dex_bonus: 99,
      check_penalty: -1,
      spell_failure: 0.05,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Shield, Tower",
    description:
      "This massive wooden shield is nearly as tall as you are. In most situations, it provides the indicated shield bonus to your AC. However, you can instead use it as total cover, though you must give up your attacks to do so. The shield does not, however, provide cover against targeted spells; a spellcaster can cast a spell on you by targeting the shield you are holding. You cannot bash with a tower shield, nor can you use your shield hand for anything else.\n\nWhen employing a tower shield in combat, you take a -2 penalty on attack rolls because of the shield's encumbrance.",
    cost: 30,
    stock: 6,
    weight: 45,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Medium",
      armor_type: "Light",
      base_ac: 0,
      max_dex_bonus: 99,
      check_penalty: -10,
      spell_failure: 0.5,
      has_gauntlets: false,
      can_run: true,
    },
  },
  {
    product_name: "Tessen",
    cost: 1000,
    stock: 7,
    weight: 1,
    image_link: "/img/armorLight.png",
    image_alt_text: "Light Armor",
    category_id: 2,
    additional_information: {
      base_size: "Tiny",
      armor_type: "Light",
      base_ac: 1,
      max_dex_bonus: 99,
      check_penalty: -1,
      spell_failure: 0.05,
      has_gauntlets: false,
      can_run: true,
    },
  },
];

const seedArmor = () => Product.bulkCreate(productData);

module.exports = seedArmor;
