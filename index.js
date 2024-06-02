const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.static("public"));

app.use(
  cors({
    origin: ["https://courses.qaleelo.com"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
// Ensure CORS is applied before defining routes
app.use(express.json());

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "public", "index.html"), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

// let pathtofile = path.join(__dirname, "public", "index.html");
// console.log(pathtofile);

//To start using mongo shell:
// First Spin up a mongodb server by entering mongod in the hyper terminal
// Then Connect to the in a new tab by entering mongo
// Use help for any help

// In case server is sent encoded values
// app.get("/%23/topic/:topicNumber%23:sectionNumber", (req, res) => {
//   // REDIRECT goes here
//   res.redirect(
//     `/#/topic/${req.params.topicNumber}#${req.params.sectionNumber}`
//   );
// });

// app.get("/#/topic/:topicNumber%23:sectionNumber", (req, res) => {
//   // REDIRECT goes here
//   res.redirect(
//     `/#/topic/${req.params.topicNumber}#${req.params.sectionNumber}`
//   );
// });

//Connect to mongodb database you want to create or connect to
mongoose.connect(process.env.mongodburl);

//To check if connection is made
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

//When Front end requests at API /courseData End point to the back end, back end will do this:
app.get("/coursesData", function (req, res) {
  const modelName = "course";
  const collectionName = "courses";
  //Now set up schema and model for your courses collection
  const sampleCourseSchema = new mongoose.Schema(
    {
      courseNumber: String,
      courseTitle: String,
      courseImage: String,
      courseDescription: String,
      courseGoals: [{ type: String }],
      courseTopicsCollectionName: String,
      courseTopicsModelName: String,
      courseExamplesCollectionName: String,
      courseExamplesModelName: String,
    },
    { collection: collectionName }
  );

  let sampleCourse;
  try {
    sampleCourse = mongoose.model(modelName);
  } catch (error) {
    sampleCourse = mongoose.model(modelName, sampleCourseSchema);
  }

  //Querying to get all documents in the sampleCourses Collection, this returns an array
  sampleCourse.find(function (err, sampleCourse) {
    if (err) {
      console.log(err);
    } else {
      res.send(sampleCourse);
      // console.log(sampleTopics);
      // mongoose.connection.close();
    }
  });
});

//When Front end requests at API /TopicsData End point to the back end, back end will do this:

app.get("/:courseTitle/topicsData", function (req, res) {
  console.log("TOPICSDATA", req.query);
  const modelName = req.query.modelName;
  const collectionName = req.query.collectionName;
  //Now set up schema and model for your topics collection
  const sampleTopicSchema = new mongoose.Schema(
    {
      topicHeader: String,
      topicHeaderNumber: String,
      topicNumber: String,
      topicTitle: String,
      topicDescription: String,
      topicYoutubeLink: String,
      sections: [
        {
          sectionNumber: String,
          sectionTitle: String,
          sectionDescription: String,
          sectonYoutubeLink: String,
          sectionNotes: [{ type: String }],
          exampleId: String,
        },
      ],
    },
    { collection: collectionName }
  );

  let sampleTopic;
  try {
    sampleTopic = mongoose.model(modelName);
  } catch (error) {
    sampleTopic = mongoose.model(modelName, sampleTopicSchema);
  }
  //Querying to get all documents in the sampleTopics Collection, this returns an array
  sampleTopic.find(function (err, sampleTopics) {
    if (err) {
      console.log(err);
    } else {
      res.send(sampleTopics);
      // console.log(sampleTopics);
      // mongoose.connection.close();
    }
  });
});

//When Front end requests at API /topic/topicNumber End point to the back end, back end will do this:

app.get("/:courseTitle/topicRESTCAll/:topicNumber", function (req, res) {
  console.log("REQUEST FROM TOPIC!!!!", req.query);
  const modelName = req.query.modelName;
  const collectionName = req.query.collectionName;
  //Now set up schema and model for your topics collection
  const sampleTopicSchema = new mongoose.Schema(
    {
      topicHeader: String,
      topicHeaderNumber: String,
      topicNumber: String,
      topicTitle: String,
      topicDescription: String,
      topicYoutubeLink: String,
      sections: [
        {
          sectionNumber: String,
          sectionTitle: String,
          sectionDescription: String,
          sectonYoutubeLink: String,
          sectionNotes: [{ type: String }],
          exampleId: String,
        },
      ],
    },
    { collection: collectionName }
  );

  let sampleTopic;
  try {
    sampleTopic = mongoose.model(modelName);
  } catch (error) {
    sampleTopic = mongoose.model(modelName, sampleTopicSchema);
  }

  //Querying to get all documents in the sampleTopics Collection, this returns an array
  sampleTopic.findOne(
    { topicNumber: req.params.topicNumber },
    function (err, topic) {
      if (topic) {
        res.send(topic);
      } else {
        res.send("No topic found");
      }
    }
  );
});

//When Front end requests at API /lesson/lessonNumber End point to the back end, back end will do this:

app.get("/:courseTitle/lessonRESTCAll/:lessonNumber", function (req, res) {
  console.log("REQUEST FOR A Lessson!!!!", req.query);
  const modelName = req.query.modelName;
  const collectionName = req.query.collectionName;
  //Now set up schema and model for your topics collection
  const sampleTopicSchema = new mongoose.Schema(
    {
      topicHeader: String,
      topicHeaderNumber: String,
      topicNumber: String,
      topicTitle: String,
      topicDescription: String,
      topicYoutubeLink: String,
      sections: [
        {
          sectionNumber: String,
          sectionTitle: String,
          sectionDescription: String,
          sectonYoutubeLink: String,
          sectionNotes: [{ type: String }],
          exampleId: String,
        },
      ],
    },
    { collection: collectionName }
  );

  let sampleTopic;
  try {
    sampleTopic = mongoose.model(modelName);
  } catch (error) {
    sampleTopic = mongoose.model(modelName, sampleTopicSchema);
  }

  //Querying to get all documents in the sampleTopics Collection, this returns an array
  sampleTopic.findOne(
    { "sections.sectionNumber": req.params.lessonNumber },
    function (err, topic) {
      if (topic) {
        const lesson = topic.sections.find(
          (element) => element.sectionNumber === req.params.lessonNumber
        );
        res.send(lesson);
      } else {
        res.send("No topic found");
      }
    }
  );
});

//When Front end requests at API /examplesData End point to the back end, back end will do this:

app.get("/examplesData", function (req, res) {
  console.log("REQUEST TO Examples", req.query);
  const modelName = req.query.modelName;
  const collectionName = req.query.collectionName;

  //Now set up schema and model for your examples collection
  const sampleExampleSchema = new mongoose.Schema(
    {
      exampleId: String,
      sectionNumber: String,
      sectionTitle: String,
      type: String,
      subType: String,
      question: String,
      answers: [
        {
          answer: String,
          explanation: String,
          isCorrect: Boolean,
        },
      ],
    },
    { collection: collectionName }
  );

  let sampleExample;
  try {
    sampleExample = mongoose.model(modelName);
  } catch (error) {
    sampleExample = mongoose.model(modelName, sampleExampleSchema);
  }

  //Querying to get all documents in the sampleTopics Collection, this returns an array
  sampleExample.find(function (err, sampleExamples) {
    if (err) {
      console.log(err);
    } else {
      res.send(sampleExamples);
      // console.log(sampleTopics);
      // mongoose.connection.close();
    }
  });
});

//When Front end requests at API /examples/topicNumber End point to the back end, back end will do this:

app.get("/examplesRESTCAll/:sectionNumber", function (req, res) {
  //Querying to get all documents in the sampleTopics Collection, this returns an array
  sampleExample.find(
    { sectionNumber: req.params.sectionNumber },
    function (err, examples) {
      if (examples) {
        res.send(examples);
      } else {
        res.send("No topic found");
      }
    }
  );
});

//When Front end requests at API /sideBarData End point to the back end, back end will do this:

app.get("/:courseTitle/sideBarData", function (req, res) {
  console.log(req.query);
  const modelName = req.query.modelName;
  const collectionName = req.query.collectionName;
  //Now set up schema and model for your topics collection
  const sampleTopicSchema = new mongoose.Schema(
    {
      topicHeader: String,
      topicHeaderNumber: String,
      topicNumber: String,
      topicTitle: String,
      topicDescription: String,
      topicYoutubeLink: String,
      sections: [
        {
          sectionNumber: String,
          sectionTitle: String,
          sectionDescription: String,
          sectonYoutubeLink: String,
          sectionNotes: [{ type: String }],
          exampleId: String,
        },
      ],
    },
    { collection: collectionName }
  );

  let sampleTopic;
  try {
    sampleTopic = mongoose.model(modelName);
  } catch (error) {
    sampleTopic = mongoose.model(modelName, sampleTopicSchema);
  }
  //Querying to get all documents in the sampleTopics Collection, this returns an array
  sampleTopic.find(function (err, sampleTopics) {
    if (err) {
      console.log(err);
    } else {
      //Creating SideBarData

      //Step 1: Create an array of distinct topicHeaderNumber and topicHeaders

      const topicHeaders = []; //Grabbing all topicHeaders, even duplicates

      sampleTopics.forEach(function (topic) {
        let topicHeaderDetails = {
          topicHeaderNumber: "",
          topicHeader: "",
        };
        topicHeaderDetails["topicHeaderNumber"] = topic.topicHeaderNumber;
        topicHeaderDetails["topicHeader"] = topic.topicHeader;
        topicHeaders.push(topicHeaderDetails);
      });

      console.log(topicHeaders);

      const uniqueTopicHeaderNumberValueSet = new Set(); // Logic for removing duplicates from topicHeaders starts here:

      const distinctTopicHeaders = topicHeaders.filter((topicHeader) => {
        // check if name property value is already in the set
        const isPresentInSet = uniqueTopicHeaderNumberValueSet.has(
          topicHeader.topicHeaderNumber
        );

        // add topicHeaderNumber property value to set, will only allow to add new values
        uniqueTopicHeaderNumberValueSet.add(topicHeader.topicHeaderNumber);

        // return the negated value of
        // isPresentInSet variable
        return !isPresentInSet;
      });

      console.log(distinctTopicHeaders);

      //Step 2: Sorting distinctTopicHeaders in the order of topicHeaderNumber:

      distinctTopicHeaders.sort((a, b) => {
        let fa = a.topicHeaderNumber,
          fb = b.topicHeaderNumber;

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      console.log(distinctTopicHeaders);

      // Step 3 Obtain an Array of Arrays where each array is full of topics belonging to a single header, and sort the topics within those arrays
      let sortedTopicsByHeader = [];

      for (let i = 0; i < distinctTopicHeaders.length; i++) {
        let sortedTopics = {
          topicHeaderNumber: "",
          topicHeader: "",
          topics: [],
        };
        let topicsInHeader = sampleTopics.filter(
          (topic) =>
            topic.topicHeaderNumber == distinctTopicHeaders[i].topicHeaderNumber
        );

        topicsInHeader.sort((a, b) => {
          let fa = a.topicNumber,
            faa = a.topicNumber.split(".")[1], //Fix to resolve error where topic 1.10, 1.11 were coming before topic 1.2
            fb = b.topicNumber,
            fbb = b.topicNumber.split(".")[1];

          if (faa < fbb) {
            return -1;
          }
          if (faa > fbb) {
            return 1;
          }
          return 0;
        });

        sortedTopics["topicHeaderNumber"] =
          distinctTopicHeaders[i].topicHeaderNumber;
        sortedTopics["topicHeader"] = distinctTopicHeaders[i].topicHeader;
        sortedTopics["topics"] = topicsInHeader;
        sortedTopicsByHeader.push(sortedTopics);
      }

      console.log(sortedTopicsByHeader);

      // Step 4 -Creating Entries (Headers), SubEntries (Topics) and SuperEntries (Sectons)

      const SidebarNEWData = [];

      for (let l = 0; l < sortedTopicsByHeader.length; l++) {
        let SidebarDataHeader = {
          title: "",
          topicHeaderNumber: "",
          entries: [],
          type: {
            rows: false,
            dropDown: false,
          },
        };
        SidebarDataHeader["title"] = sortedTopicsByHeader[l]["topicHeader"];
        SidebarDataHeader["topicHeaderNumber"] =
          sortedTopicsByHeader[l]["topicHeaderNumber"];
        for (let m = 0; m < sortedTopicsByHeader[l]["topics"].length; m++) {
          let SidebarDataTopic = {
            topicNumber: "",
            title: "",
            rows: false,
            entries: [],
          };
          SidebarDataTopic["topicNumber"] =
            sortedTopicsByHeader[l]["topics"][m]["topicNumber"];
          SidebarDataTopic["title"] =
            sortedTopicsByHeader[l]["topics"][m]["topicTitle"];
          SidebarDataTopic["rows"] = false;
          if (sortedTopicsByHeader[l]["topics"][m]["sections"].length !== 0) {
            SidebarDataTopic["rows"] = true;
            let SidebarDataTopicSectionEntry = {
              topicNumber: "",
              title: "",
              entries: [],
            };
            SidebarDataTopicSectionEntry["topicNumber"] =
              sortedTopicsByHeader[l]["topics"][m]["topicNumber"];
            SidebarDataTopicSectionEntry["title"] =
              sortedTopicsByHeader[l]["topics"][m]["topicTitle"];
            for (
              let n = 0;
              n < sortedTopicsByHeader[l]["topics"][m]["sections"].length;
              n++
            ) {
              let SidebarDataSection = {
                sectionNumber: "",
                title: "",
              };

              SidebarDataSection["sectionNumber"] =
                sortedTopicsByHeader[l]["topics"][m]["sections"][n][
                  "sectionNumber"
                ];
              SidebarDataSection["title"] =
                sortedTopicsByHeader[l]["topics"][m]["sections"][n][
                  "sectionTitle"
                ];
              SidebarDataTopicSectionEntry["entries"].push(SidebarDataSection);
            }
            SidebarDataTopic["entries"].push(SidebarDataTopicSectionEntry);
          }

          SidebarDataHeader["entries"].push(SidebarDataTopic);
        }
        SidebarNEWData.push(SidebarDataHeader);
      }

      // console.log(SidebarNEWData);

      res.send(SidebarNEWData);
      // console.log(sampleTopics);
      // mongoose.connection.close();
    }
  });
});

//Now try to query for an particular eg based on eg id returned from sampleTopic above

//
app.get("/", function (req, res) {
  res.send("<h1>Bismillah</h1>");
}); //What should happen when the browser makes a guest request to our server

app.get("/contacts", function (req, res) {
  res.send("<h1>No Contacts Yet!!</h1>");
});

//When Front end requests at API /topicNumbersList End point to the back end, back end will do this:

app.get("/:courseTitle/topicNumbersList", function (req, res) {
  console.log(req.query);
  const modelName = req.query.modelName;
  const collectionName = req.query.collectionName;
  //Now set up schema and model for your topics collection
  const sampleTopicSchema = new mongoose.Schema(
    {
      topicHeader: String,
      topicHeaderNumber: String,
      topicNumber: String,
      topicTitle: String,
      topicDescription: String,
      topicYoutubeLink: String,
      sections: [
        {
          sectionNumber: String,
          sectionTitle: String,
          sectionDescription: String,
          sectonYoutubeLink: String,
          sectionNotes: [{ type: String }],
          exampleId: String,
        },
      ],
    },
    { collection: collectionName }
  );

  let sampleTopic;
  try {
    sampleTopic = mongoose.model(modelName);
  } catch (error) {
    sampleTopic = mongoose.model(modelName, sampleTopicSchema);
  }

  //Querying to get all documents in the sampleTopics Collection, this returns an array
  sampleTopic.find(function (err, sampleTopics) {
    if (err) {
      console.log(err);
    } else {
      //Creating SideBarData

      //Step 1: Create an array of distinct topicHeaderNumber and topicHeaders

      const topicHeaders = []; //Grabbing all topicHeaders, even duplicates

      sampleTopics.forEach(function (topic) {
        let topicHeaderDetails = {
          topicHeaderNumber: "",
          topicHeader: "",
        };
        topicHeaderDetails["topicHeaderNumber"] = topic.topicHeaderNumber;
        topicHeaderDetails["topicHeader"] = topic.topicHeader;
        topicHeaders.push(topicHeaderDetails);
      });

      console.log(topicHeaders);

      const uniqueTopicHeaderNumberValueSet = new Set(); // Logic for removing duplicates from topicHeaders starts here:

      const distinctTopicHeaders = topicHeaders.filter((topicHeader) => {
        // check if name property value is already in the set
        const isPresentInSet = uniqueTopicHeaderNumberValueSet.has(
          topicHeader.topicHeaderNumber
        );

        // add topicHeaderNumber property value to set, will only allow to add new values
        uniqueTopicHeaderNumberValueSet.add(topicHeader.topicHeaderNumber);

        // return the negated value of
        // isPresentInSet variable
        return !isPresentInSet;
      });

      console.log(distinctTopicHeaders);

      //Step 2: Sorting distinctTopicHeaders in the order of topicHeaderNumber:

      distinctTopicHeaders.sort((a, b) => {
        let fa = a.topicHeaderNumber,
          fb = b.topicHeaderNumber;

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      console.log(distinctTopicHeaders);

      // Step 3 Obtain an Array of Arrays where each array is full of topics belonging to a single header, and sort the topics within those arrays
      let sortedTopicsByHeader = [];

      for (let i = 0; i < distinctTopicHeaders.length; i++) {
        let sortedTopics = {
          topicHeaderNumber: "",
          topicHeader: "",
          topics: [],
        };
        let topicsInHeader = sampleTopics.filter(
          (topic) =>
            topic.topicHeaderNumber == distinctTopicHeaders[i].topicHeaderNumber
        );

        topicsInHeader.sort((a, b) => {
          let fa = a.topicNumber,
            faa = a.topicNumber.split(".")[1], //Fix to resolve error where topic 1.10, 1.11 were coming before topic 1.2
            fb = b.topicNumber,
            fbb = b.topicNumber.split(".")[1];

          if (faa < fbb) {
            return -1;
          }
          if (faa > fbb) {
            return 1;
          }
          return 0;
        });

        sortedTopics["topicHeaderNumber"] =
          distinctTopicHeaders[i].topicHeaderNumber;
        sortedTopics["topicHeader"] = distinctTopicHeaders[i].topicHeader;
        sortedTopics["topics"] = topicsInHeader;
        sortedTopicsByHeader.push(sortedTopics);
      }

      console.log(sortedTopicsByHeader);

      //Step 4 - Obtain list of topics Numbers

      let topicNumbers = [];

      sortedTopicsByHeader.forEach(function (topicHeader) {
        topicHeader.topics.forEach(function (topicHeaderTopic) {
          topicNumbers.push(topicHeaderTopic.topicNumber);
        });
      });

      console.log(topicNumbers);

      // console.log(SidebarNEWData);

      res.send(topicNumbers);
      // console.log(sampleTopics);
      // mongoose.connection.close();
    }
  });
});

//Now try to query for an particular eg based on eg id returned from sampleTopic above

//
app.get("/", function (req, res) {
  res.send("<h1>Bismillah</h1>");
}); //What should happen when the browser makes a guest request to our server

app.get("/contacts", function (req, res) {
  res.send("<h1>No Contacts Yet!!</h1>");
});

// Schema and Model declaration for user login data
const collectionName = "loginUsers";
const userSchema = new mongoose.Schema(
  {
    userEmail: String,
    userFamilyName: String,
    userGivenName: String,
    userPicture: String,
    loginDateTime: String,
  },
  { collection: collectionName }
);
const User = mongoose.model("User", userSchema);

// Route handler to insert user login data into the database
app.post("/insertLoginRecord", async (req, res) => {
  try {
    const newUser = new User(req.body);

    // Save the new user to the database
    await newUser.save();

    res.status(201).send("User data inserted successfully!");
  } catch (error) {
    console.error("Error inserting user data:", error);
    res.status(500).send("Error inserting user data");
  }
});

// Schema and Model declaration for user progress data
const collectionNameProgress = "progressUsers";

// Define schema
const progressSchema = new mongoose.Schema({
  userEmail: String,
  progress: [
    {
      courseProgress: String,
      lessonProgress: [String],
    },
  ],
  chapter: [
    {
      courseProgress: String,
      chapterProgress: [String],
    },
  ],
});

const Progress = mongoose.model(
  "Progress",
  progressSchema,
  collectionNameProgress
);

// Route handler to insert or update user progress data in the database
app.post("/insertProgressRecord", async (req, res) => {
  try {
    const userEmail = req.body.userEmail;
    const progressData = req.body.progress;

    // Find a progress document with the same userEmail as the request data
    let progress = await Progress.findOne({ userEmail });

    if (!progress) {
      // If no progress document found, create a new one
      progress = new Progress({ userEmail, progress: progressData });
    } else {
      // If progress document found, update the progress data

      // Iterate over the incoming progress data
      progressData.forEach((courseProg) => {
        // Check if the courseProgress already exists
        const existingCourse = progress.progress.find(
          (prog) => prog.courseProgress === courseProg.courseProgress
        );

        if (existingCourse) {
          // If the courseProgress exists, update the lessonProgress
          courseProg.lessonProgress.forEach((lesson) => {
            // Check if the lesson already exists in the existing courseProgress
            if (!existingCourse.lessonProgress.includes(lesson)) {
              // If lesson doesn't exist, append it
              existingCourse.lessonProgress.push(lesson);
            }
          });
        } else {
          // If the courseProgress doesn't exist, add it
          progress.progress.push(courseProg);
        }
      });
    }

    // Save the progress document
    await progress.save();

    res.status(201).send("Progress data inserted or updated successfully!");
  } catch (error) {
    console.error("Error inserting or updating progress data:", error);
    res.status(500).send("Error inserting or updating progress data");
  }
});

// Route handler to insert or update chapter progress data in the database
app.post("/insertChapterProgressRecord", async (req, res) => {
  try {
    const userEmail = req.body.userEmail;
    const chapterProgressData = req.body.chapterProgress;

    // Find a progress document with the same userEmail as the request data
    let progress = await Progress.findOne({ userEmail });

    if (!progress) {
      // If no progress document found, create a new one
      progress = new Progress({ userEmail, chapter: chapterProgressData });
    } else {
      // If progress document found, update the chapter progress data

      // Iterate over the incoming chapter progress data
      chapterProgressData.forEach((courseProg) => {
        // Check if the courseProgress already exists
        const existingCourse = progress.chapter.find(
          (prog) => prog.courseProgress === courseProg.courseProgress
        );

        if (existingCourse) {
          // If the courseProgress exists, update the chapterProgress
          courseProg.chapterProgress.forEach((chapter) => {
            // Check if the chapter already exists in the existing courseProgress
            if (!existingCourse.chapterProgress.includes(chapter)) {
              // If chapter doesn't exist, append it
              existingCourse.chapterProgress.push(chapter);
            }
          });
        } else {
          // If the courseProgress doesn't exist, add it
          progress.chapter.push(courseProg);
        }
      });
    }

    // Save the progress document
    await progress.save();

    res
      .status(201)
      .send("Chapter progress data inserted or updated successfully!");
  } catch (error) {
    console.error("Error inserting or updating chapter progress data:", error);
    res.status(500).send("Error inserting or updating chapter progress data");
  }
});

// Route handler to fetch user progress data from the database
app.get("/fetchProgressRecord", async (req, res) => {
  try {
    // Find the progress document with the same userEmail as the request query
    const progress = await Progress.findOne({ userEmail: req.query.userEmail });

    if (progress) {
      // If the document exists, send it back to the client
      res.status(200).json(progress.progress); // Send progress data
    } else {
      // If the document doesn't exist, send a 404 status
      res.status(404).send("No progress data found for this user");
    }
  } catch (error) {
    console.error("Error fetching progress data:", error);
    res.status(500).send("Error fetching progress data");
  }
});

// Route handler to fetch user chapter progress data from the database
app.get("/fetchChapterProgressRecord", async (req, res) => {
  try {
    // Find the progress document with the same userEmail as the request query
    const progress = await Progress.findOne({ userEmail: req.query.userEmail });

    if (progress) {
      // If the document exists, send chapter progress data back to the client
      res.status(200).json(progress.chapter); // Send chapter progress data
    } else {
      // If the document doesn't exist, send a 404 status
      res.status(404).send("No chapter progress data found for this user");
    }
  } catch (error) {
    console.error("Error fetching chapter progress data:", error);
    res.status(500).send("Error fetching chapter progress data");
  }
});

// Schema and Model declaration for user response and feedback data
const collectionNameUserResponse = "userResponses";

// Define schema
const userResponseSchema = new mongoose.Schema({
  userEmail: String,
  responses: [
    {
      response: String,
      feedback: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const UserResponse = mongoose.model(
  "UserResponse",
  userResponseSchema,
  collectionNameUserResponse
);

//Router to capture response
app.post("/insertUserResponse", async (req, res) => {
  try {
    const { userEmail, response } = req.body;

    // Find a response document with the same userEmail
    let userResponse = await UserResponse.findOne({ userEmail });

    let newResponse;

    if (!userResponse) {
      // If no response document found, create a new one with the first response
      userResponse = new UserResponse({
        userEmail,
        responses: [{ response }],
      });
      newResponse = userResponse.responses[0];
    } else {
      // If response document found, add the new response
      userResponse.responses.push({ response });
      newResponse = userResponse.responses[userResponse.responses.length - 1];
    }

    // Save the response document
    await userResponse.save();

    // Return the response ID
    res.status(201).send({
      message: "User response inserted successfully!",
      responseId: newResponse._id,
    });
  } catch (error) {
    console.error("Error inserting user response:", error);
    res.status(500).send("Error inserting user response");
  }
});

app.post("/updateUserResponse/:responseId", async (req, res) => {
  try {
    const { responseId } = req.params;
    const { feedback } = req.body;

    // Find the response by ID and update it with feedback
    const userResponse = await UserResponse.findOneAndUpdate(
      { "responses._id": responseId },
      { $set: { "responses.$.feedback": feedback } },
      { new: true }
    );

    if (!userResponse) {
      return res.status(404).send("Response not found");
    }

    res.status(200).send("User feedback updated successfully!");
  } catch (error) {
    console.error("Error updating user feedback:", error);
    res.status(500).send("Error updating user feedback");
  }
});

app.listen(process.env.PORT || 4000, function () {
  console.log("Server Started on port 4000");
}); //listen to any HTTP requests that get sent to our server
//A port is a channel our server is tuned into, it will be on localhost because we are hosting our server locally
