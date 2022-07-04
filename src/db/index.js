module.exports = function (model, data) {
  const Schema = mongoose.Schema;
  const dataSchema = new Schema(model); //创建模型
  const dataModel = mongoose.model("data", dataSchema); //创建模型实例
  const data = new dataModel(data);
  data.save().then(() => console.log("123"));
};
