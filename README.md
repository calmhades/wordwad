# wordwad
A Choose your own adventure app developed by Steven Henke, Ryen Goldsmith, Jack Morrissey, Thomas Fitzer, and Zachery Corzine

Remember those chose you own adventure books you used to read in your youth.  Here is the adult version.  Pick a Wad(story) and choose you own adventure, one post at a time or create an entry at any point in the story, the adventure is yours to choose/make.

This application uses mySQL database to keep track of Users, Stories(Wad) and Entries.  To modify an entry you must be logged in and authenicated which was achieved through the use of nodes Passport Module.

What's working:
* Passport is setup and functioning, sending information to and from the database.
* Able to submit a story and have it post to mySql.  Then use handlebars to pull information from database to display new stories.

What still needs to be fixed:
* Displaying stories to the storyFrag page:   We're having trouble inserting the primary Key from the Stories Table to the Entry table.
* Linking the three options to the new story.






