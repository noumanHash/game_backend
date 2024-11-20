const { MongoClient } = require("mongodb");
const stagesData = require("../src/START/app/SeeerCoppaItaila");
const seedData = require("../src/START/app/seederSerieA");

const connectDB = async () => {
  const client = await MongoClient.connect("mongodb+srv://test_task:test_task@db.e6le9.mongodb.net/testing_score?retryWrites=true&w=majority", {
    useUnifiedTopology: false,
    useNewUrlParser: true,
  });
  return client;
};
const seedDB = async () => {
  try {
    if (process.argv[2] === "-d") {
      const client = await connectDB();
      await client.db().dropDatabase();
      console.log("Database dropped");
      await client.close();
      process.exit(0);
    }
    if (process.argv[2] === "-i") {
      const client = await connectDB();
      console.log("DB connected");

      const documents = seedData.gamedays.map((gameday) => ({
        giornata: gameday.giornata,
        matches: gameday.matches,
      }));

      await client.db().collection("calendars").insertMany(documents);
      await client.db().collection("defaults").insertOne({ giornata: 2 });
      console.log(`Calendar data initialized: ${documents.length} game days inserted`);
      for (const stageData of stagesData) {
        const matchesResult = await client.db().collection("matchs").insertMany(stageData.matches);
        // Use matchesResult.insertedIds to get the inserted document IDs
        const matchIds = Object.values(matchesResult.insertedIds);
        console.log(matchesResult, "inserted matches result");
        const stage = {
          name: stageData.name,
          group: stageData.group,
          matches: matchIds, // Now using the inserted document IDs
        };
        await client.db().collection("stages").insertOne(stage);
      }
      console.log("Database seeded successfully");
      await client.close();
      process.exit(0);
    }
    console.log("Invalid command. Use -d to drop the database or -i to initialize it.");
    process.exit(1);
  } catch (err) {
    console.error("Error:", err);
  }
};
seedDB();
