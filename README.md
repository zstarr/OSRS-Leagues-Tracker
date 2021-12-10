# OSRS Leagues Tracker
This project was created for players to track and plan their route in the Oldschool Runescape Trailblazer League.

Its features include:
* Loading your account from hiscores
* Sorting tasks with the following filters:
 * If you are able to complete the task with your stats
 * If you have the region unlocked
 * Filtering away tasks marked as completed
 * Filtering away tasks that are not area specific
* Showing how many points you would have accumulated
* Showing how many points until your next relic unlock

I have chosen to let my custom domain expire, but will leave a historical version of the [firebase page](https://osrstracker-f26ee.firebaseapp.com/) live. Some sample data is left in the project to try out the features.

## Steps to run the project locally
0. [Install node.js for npm if needed.](https://nodejs.org/en/download/)
0. Clone the repo
0. Navigate to the `/OSRS-Leagues-Tracker` folder
0. Run `npm i`
0. `npm run start`
Note: The hiscores will be broken due to how Jagex manages their API.
