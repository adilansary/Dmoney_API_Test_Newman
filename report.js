const newman = require("newman");

newman.run(
  {
    //collection: require("./collection/dmoney.json"),
    collection:
      "https://api.postman.com/collections/24414195-a095d05d-8d04-41a6-88db-d5be58a1d25b?access_key=PMAT-01H11VBKVAQ6BWHF8RE0ZKD0E6",
    //environment:require('./collection/env.json'),

    reporters: "htmlextra",

    iterationCount: 1,

    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to newman/ in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
