const { mongoose } = require(".");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean,
        done: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Mission = mongoose.model("mission", schema);
    return Mission;
  };