const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("title", "Creating SideDrawer Button \nAction Bar Example");
    page.bindingContext = vm;
}
function showSideDrawer(args) {
    console.log("Show SideDrawer tapped.");
    // Show sidedrawer ...
}

exports.onNavigatingTo = onNavigatingTo;
exports.showSideDrawer = showSideDrawer;
