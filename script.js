var rain = prompt("How many inches of rain fell?");

console.log ('*'.repeat(rain))

let i = 50
i.toFixed(2)

if (rain >= 20) {
    (i *= .9)
} else if (rain < 10) {
    (i *= .8)}
    else {
        i=50
    }

// Determine how the yield is affected by the rain...Normally the land produces 50 bushels of grain, But if there's too much rain (20 inches or more), that number goes down by 10%, Or if there's too little rain (less than 10 inches), that number goes down by 20%.

var fert = prompt("Did you use fertilizer?");

if (fert === "yes") {
    var type = prompt("What fertilizer did you use?");
  } else {
    console.log ("The yield should be " + i + " bushels per acre.");
}

if (type === "premium") {
    (i *= 1.15)
    var b = i.toFixed(2);
    console.log ("The yield should be " + b + " bushels per acre.");
}

if (type === "regular") {
        (i *= 1.1)
        var b = i.toFixed(2);
        console.log ("The yield should be " + b + " bushels per acre.");
}