const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/backpack", async (req, res) => {
  try {
    const backPackData = await Backpack.findAll({
      include: [{ model: Product }, { model: User }],
    });

    const backPackSerData = backPackData.map((blog) =>
      blog.get({ plain: true })
    );
    //Serialized BackPack Data with Products Attached to the User
    console.log(backPackSerData);

    res.render("backpack", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
