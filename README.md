# ifttt-snippets
random code for ifttt

## changeDate.js ##
This filtercode is used to change IFTTT's date format to something a bit more usable.
To use this you need to define the Trigger it takes it's date from at the beginning and the Action it sends the date to at the end.
This code is used for when IFTTT's trigger returns a timestamp of the form "August 9, 2021 at 10:41AM", so "MMMM d, YYYY at hh:mm am/pm", which is only a relevant format in the USA.

## changeDate-fullmonths.js ##
This is a modified version of the previous filtercode which will give back full monthnames in Dutch.
