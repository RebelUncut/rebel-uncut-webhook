# Rebel Uncut Website

This is a [Webhook](http://www.webhook.com)-powered website. 

## Installing Webhook

If you haven't got Node.js installed, you'll need to do that. There are many ways to install Node, the easiest is by [visiting their site and running the installer](https://nodejs.org/en/). Once you've done that - run this command in your terminal:

`npm install -g grunt-cli wh`

## Grabbing this code and running a local server

1. Clone this repository using a git client. 
2. `cd` to the repository directory. 
3. Run `wh init rebel-uncut-webhook`.
4. Run the server by typing `wh serve`.

### Running Sass to compile stylesheets

1. `cd` to the repository directory. 
2. Type `cd static/css`.
3. Run `sass --watch style.scss:style.css`

## Deploy changes

1. `cd` to the repository directory. 
2. Run `wh deploy`.
3. Don't forget to push your changes back up to GitHub.
