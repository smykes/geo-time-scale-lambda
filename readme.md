# Geological Time Calculator

A tool to print the eon, era, period, epoch, and age of a given **positive whole number**. Sometimes all five are not used. For instance the `Hadean` eon has no eras, periods, epochs, or ages.

This was originally written as a [Nightot](https://nightbot.tv/) command for the the first educational [Twitch Ambassadors](<[Ambassadors](https://www.twitch.tv/team/ambassadors)>) on [Twitch](https://twitch.tv), [sciants_streams](https://twitch.tv/sciants_streams).

This is a lambda function for deployment on [Netlify](https://netlify.com). If you want to test this locally you should install the [Netlify CLI tool](https://docs.netlify.com/cli/get-started/).

## TODO
Figure out how to write unit tests for a lambda function like this.

## Usage

### Query Parameter Explanation

Arguments are in millions of years here are some examples:

- `66` is querying `66,000,000 (66 million)`
- `421` is querying `421,000,000 (421 million)`
- `4600` is queryig `4,600,000,000 (4 billion 600 million)`

The upper limit is `4.6 billion years (4600)` while the lower limit is `0 million years (0)`

### Example

Example: `127.0.0.1:{port}/.netlify/functions/epoch?66` will return as plain text:

`66 MYA: Eon: Phanerozoic | Era: Mesozoic | Period: Cretaceous | Epoch: Upper | Age: Maastrichtian`

### Aditional endpoints

Other queiries:

- `127.0.0.1:{port}/.netlify/functions/age?help` will return plain text on how to use this application.
- `127.0.0.1:{port}/.netlify/functions/age?info` will return plain text on the creation of this tool.

### Error Handling

Error handling is as such:

- If the parameter has letters in it, besides `info` or `help` the response will be: `You have to at lest try...`
- If the parameter is not a whole number the response will be: `Argument must be a positive whole number.`
- If the parameter is greater than 4600 (4.6 billion years) the response will be: `Please enter a time when Earth actually existed.`
- If the parameter is less than 0 the response will be: `Argument must be a positive whole number.`
- If the parameter is 0 (this is hard coded) the response will be: `0 MYA = Eon: Cenozoic | Era: Quartenary | Period: Holocene | Age: Meghalayan`

## Use with Nightbot

The command to use this with nightbot is the following (if you are using Netlify)

`$(urlfetch https://{replace_this_with_your_server}/.netlify/functions/age?/$(query))`

In this case the query is the number after the night bot command. If your Nightbot command is `!epoch` to use this you would type `!epoch 66`.

## Data Source

Data source: I honestly can't remember where I got this data from, but it was turned first into JSON data, and then a constant by painstakingly entering it via web page text. If you find an error in the data, please open an issue. If you think I stole your data, please let me know and I will credit you.

More about the Geological Time Scale can be read on [Wikipedia](https://en.wikipedia.org/wiki/Geologic_time_scale).

## License

You can use this for whatever you want, however you **must not** change the `info` route.

###### Written with spite in Chicago, IL
