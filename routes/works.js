const express = require("express");

const router = express.Router({ mergeParams: true });

// ดึงงาน 1 งานของ user 1 คน
// GET /users/works/jamming -> ไม่รู้ user id เหมือนขอดึงงาน jamming ของทุกคน
// GET /users/:id/work -> /users/touch/jamming
router.get("/:workid", (req, res) => {
  console.log(req.params);
  console.log({ username: req.username });
  res.send(req.params);
});

router.post("/", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

router.put("/:workid", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

router.delete("/:workid", (req, res) => {
  console.log(req.params);
  res.json(req.params);
});

module.exports = router;
