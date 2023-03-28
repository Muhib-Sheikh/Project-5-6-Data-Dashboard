# Web Development Project 5 - *Name of App Here*

Submitted by: **Muhib Sheikh**

This web app: **A web app that gets a list of random recipies and lets the user find ones they like**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The list displays a list of data fetched using an API call**
- [X] **Data uses the useEffect React hook and async/await syntax**
- [X] **The app dashboard includes at least three summary statistics about the data such as**
  - [X] Number of recipes
  - [X] Number of healthy recipes
  - [X] average cooking time of the recipes
- [X] **A search bar allows the user to search for an item in the fetched data**
- [ ] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**
  - Currently can only filter by healthy recipes (health score >= 10)

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='Project5Walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [Licecap](https://www.cockos.com/licecap/) for Windows/mac  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Working with the API was quite challenging given there were so many endpoints and options avaialble. It took some time to figure out how to use it and then the best way to use it for my use case. It was also difficult using useEffect and fetch to get the correct information. The search results were another issue as there were many ways to implement them and I was not sure which was best. The last problem was figuring out how to filter based on categories, unfourtuntely I did it in a weird way so it would be difficult to add multiple categories. I should have made it easier to extend but I did not have enough time to redo it so I only had one category to fitler by. I was planning on being able to filter by diet type, intolerences, and potentially cusisine as well.

## License

    Copyright [2023] [Muhib Sheikh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
