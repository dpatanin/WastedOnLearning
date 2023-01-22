# WastedOnLearning

Time is expensive and time management thus important.
Therefore aims this tool to estimate the time required to complete a given material in a given context.
This work is based on scientific evidence and simplifies the research into a straight forward process.
It is important to understand that it does not aim for absolute accuracy but rather an average estimation.
In this context, precise values from mentioned studies might be broadened or summed up to achieve a suited simplification.
Feel free to extend or improve this as you see fit.

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses the [Chakra UI](https://chakra-ui.com/) component library.
If you encounter bugs, errors or require support for a not yet supported data type you can either open an issue or integrate it yourself.

### Setup

This project runs on NodeJS.
For local development clone or download this repository and install the dependencies with `npm install`.
To run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Participation

Open a new branch for your feature or bugfix and create a pull request once you see it as ready.

Here's the structure how to add new modules for unsupported file types:

WIP

## Research

This serves as a collection on related research and evidence to enable professional estimation.

Fundamentally, to estimate the average time required to complete a certain course or paper you have to look at multiple factors:

- Reading speed
- Media (images, video & audio)
- Interactions
- Included quizzes or tests

Those factors however depend on the type, and thus complexity, of your content and on the target group.
Hence we need to formulate an equation, which calculates the above factors based on those two aspects.
To achieve that it is necessary to establish a set of gradations for the type, or difficulty,
of the content and possible target groups, sorted by their affinity to process and learn new information.

### Content & Audience

Both serve only as general categorizations with very significant differences as this tool also enables to manually configure each parameter.
Thus, we only require few and significantly different gradations.

For the content, the choice falls on commonly encountered learning-related or course-related areas:

- Marketing (Product/program presentations, pricing, ...)
- Scientific (Scientific papers, studies, cases, ...)
- Education (Content designed to be educative, not simply informative)
- Informative (General non-fictional content)

For the audience, the choice falls on target groups commonly categorized in studies:

- Students (Undergraduate & graduate)
- Adults
- Elderly
- Non-native speaker (English as second language)

To be fully scientifically correct, one would estimate for each target group the relative deviations of each factor for each type of content and
encompass how familiar the audience is with the general subject or type of content.
This is a multidimensional multifactorial problem, which is precisely why we need to simplify it down.
Since all variable parameters of the final function can be adjusted disregarding this categorization, we will set the following boundaries for determining the factors:

- First, the subject familiarity problem will be ignored all-together (this can be regarded by raising the complexity factor in the advanced settings)
- Next, each factor will have a fixed base value, which all other categories refer relative to
- The base value for each factor will be set for the 'Informative' content type, from there all target groups and other types of content will refer relative to
- Depending on the available data, it is enough to calculate the relative trend of the most represented target group regarding the different types of content in the data and assume that the others follow a similar enough one

If a more comprehensive configuration is required, you can either use the direct parameters or propose a change to this model.
Once again, this tool is specifically designed to simplify. If you disagree, please propose a change.

### Reading Speed

To determine the average reading speed this tool refers mainly to the meta-analysis:

[How many words do we read per minute? A review and meta-analysis of reading rate, Marc Brysbaert, Journal of Memory and Language, Volume 109, 2019.](https://doi.org/10.1016/j.jml.2019.104047)

Since currently WastedOnLearning does not support different languages, only data from studies conducted for the english language will be considered.
Additionally, fictional content is not in the current scope of this tool and thus, respective studies are not considered neither.
For practical uses we need a base reading speed and the relative deviations per target group.
Further we need the factors of the type of content relative to the base reading speed.

The averages for the established groups and categories will be calculated from the filtered data (see mentioned source),
respectively sorted with the highest possible comparison, regarding the types of material and study objectives.
The base reading speed for the overall population averages at around 238 words per minute.
As for the categories set for this tool, this average applies for 'Informative', and also will form the absolute base reading speed this tool will refer to.
Due to the massive data on undergraduate, graduate and university students, the relative factors of the different types of content will be calculated using the data on students.

This leaves us with:

|                     | Words per minute | Relative factor (to 238 WpM) |
| ------------------- | ---------------- | ---------------------------- |
| Adults              | 247              | 1.04                         |
| Students            | 254              | 1.07                         |
| Elderly             | 205              | 0.86                         |
| Non-native speaker  | 190              | 0.8                          |
| ------------------- | ---------------- | (to 254 WpM)                 |
| Informative         | 254              | 1                            |
| Educational         | 241              | 0.95                         |
| Marketing           | 269              | 1.06                         |
| Scientific          | 185              | 0.73                         |

For elderly people this tool refers to:

[Silent reading as determined by age and visual acuity, Journal of Research in Reading, ISSN 0141-0423,Volume 20, Issue 3, 1997, pp 184±204,Dieuwke H. A. Aberson and Don G. Bouwhuis, Institute for Perception Research, Netherlands](https://pure.tue.nl/ws/portalfiles/portal/1411535/617401.pdf)

Once again, this tool is specifically designed to simplify. If you disagree, please propose a change.

### Time per Image
