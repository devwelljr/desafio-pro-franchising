const connection = require("../connection");
const { ObjectId } = require("mongodb");

/* produto sendo deletado */
module.exports = async (id) => {
  const db = await connection();

  const deleted = await db
    .collection("products")
    .deleteOne({ _id: ObjectId(id) });

  return deleted;
};
