var mongoose = require('mongoose');


mongoose.connection.once('open', function() {

var ItemSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

var Item = mongoose.model('Item', ItemSchema);

var create = function(name) {
    var item = {
        name: name
    };
    Item.create(item, function(err, snippet) {
        if (err || !item) {
            console.error("Could not create item", name);
            mongoose.disconnect();
            return;
        }
        console.log("Created snippet", snippet.name);
        mongoose.disconnect();
    });
};

var read = function(name) {
    Item.findOne({name: name}, function(err, item) {
        if (err || !item) {
            console.error("Could not read snippet", name);
            mongoose.disconnect();
            return;
        }
        console.log("Read item", item.name);
        mongoose.disconnect();
    });
};

var update = function(name) {
    Item.findOneAndUpdate({name: name}, function(err, item) {
        if (err || !item) {
            console.error("Could not update snippet", name);
            mongoose.disconnect();
            return;
        }
        console.log("Updated snippet", item.name);
        mongoose.disconnect();
    });
};

var del = function(name) {
    Item.findOneAndRemove({name: name}, function(err, item) {
        if (err || !item) {
            console.error("Could not delete snippet", name);
            mongoose.disconnect();
            return;
        }
        console.log("Deleted item", item.name);
        mongoose.disconnect();
    });
};
    
    var main = function() {
        if (process.argv[2] == 'create') {
            create(process.argv[3], process.argv[4]);
        }
        else if (process.argv[2] == 'read') {
            read(process.argv[3]);
        }
        else if (process.argv[2] == 'update') {
            update(process.argv[3], process.argv[4]);
        }
        else if (process.argv[2] == 'delete') {
            del(process.argv[3]);
        }
        else {
            console.error('Command not recognized');
            //db.close();
        }
    };

    main();
    
    module.exports = Item;
});
