module.exports = function() {
    var ItemSchema = new Schema({
        nome: String,
        middlename: String,
        sobrenome: String
    });
    mongoose.model('Item', ItemSchema);
}