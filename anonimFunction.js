//? anonymus function didalam variable
let say = function(name) {
    console.log(`Hai ${name}`);
}
say("Eko");

//? anonymus function didalam parameter
function giveMe(callback) {
    callback("Eko");
}
giveMe(say);

giveMe(function(name){
    console.log(`Hi ${name}`);
}) //jika lebih satu parameter tinggal tambahi kome {}, parameter1, parameter2