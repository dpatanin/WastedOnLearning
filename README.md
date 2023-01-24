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
To run the app in the development mode, execute `npm start`.
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

Unfortunately, the specific question "How long do people look at pictures in eLearnings?" hasn't been studied very well today.
(Mostly, studies focus on the effects of visual material, not on the duration on it.)
So we need to derive a realistic and practical value from general studies on human perception and image processing.
In order to do so we first need to analyze what context and kind of pictures we assume to be most prominent in the use case WastedOnLearning is designed for.
This tool is designed for eLearning and digital training material. We defined the general factors and categories, thus we will define which type of images are the most probable to appear for which category.
It is important to note that such a practice sets an assumption and may not accurately estimate the time if the actual content deviates heavily from this assumption.
However, if we'd want to actually calculate the image view time we would need to process and analyze each image, which could be done with an AI trained to do so.
Probably a model is freely available for a suited AI able to achieve this. But the actual implementation surpasses my current contingent on this tool,
if you would like to have such a neat solution, feel free to request or propose.

If we do not calculate the estimated time base on image processing, but use a "blind estimation", the following definitions are set for this tool:

|             | Seconds per image |
| ----------- | ----------------- |
| Informative | 1.2               |
| Educational | 1.8               |
| Marketing   | 0.75              |
| Scientific  | 4                 |

Due to the lack of specific research, the differences in different audience groups will not be regarded.
In general, many studies exist which have examined the general learning & processing speed of various age groups.
This will be considered later in the overall complexity factor.

Now to the research that is available.
The first, and probably most famous one, is the MIT study conducted on image processing time:

[Potter, M.C., Wyble, B., Hagmann, C.E. et al. Detecting meaning in RSVP at 13 ms per picture. Atten Percept Psychophys 76, 270–279 (2014). https://doi.org/10.3758/s13414-013-0605-z](https://link.springer.com/article/10.3758/s13414-013-0605-z)

Here we see that humans are able to process images displayed for only 13ms. Obviously, this case is far from comparable to digital material, as images in those are permanently visible.
But this gives us an absolute lower value and an idea at how long someone would look **over** a picture without looking **at** the picture.
To be more precise: If we consider irrelevant images like stock footage in marketing focused content, it is save to say that the reader does not spare much time on viewing those kinds of images.
Of course it would surely be more than those 13ms. So, what's a good upper limit?

[Microsoft Attention Spans Research Report](https://www.scribd.com/document/265348695/Microsoft-Attention-Spans-Research-Report#)

According to a study conducted by Microsoft on attention spans, the average human attention span in the year 2013 was 8 seconds.
Finally, let's assume the following definitions:

- Marketing based content either includes images which do not provide any information (decorative), or overviews about prices or alike. So, this tool defines an average of 0.75 sec (0.5 - 1).
- Informative content might also contain more images with illustrations to help understand the content, focused on simple graphs and analogies. Not much more than marketing based content, but more none the less: 1.2 sec.
- Educational content gets more interesting because it features not only substantially more information per image, but the images are likely to be often times mandatory to understand, thus increasing the time to roughly about 1.8 sec.
- Scientific literature features mostly illustrated results or alike, often times fairly complex in nature. To set the "maximum" of 8 sec would however be an overestimation since we talk about averages, hence we define a comfy 4 sec.

This follows a bit the trend of the reading speeds, to have some anchor of orientation.

### Interactions & Quizzes

Defining additional durations due to interactions and quizzes is currently not regarded by this tool, as those depend highly on the technology used.
For now, please consider a careful estimation with the complexity factor.

### Complexity factor

In the end, this tool aims for simplification and a quick, yet realistic average estimation.
Besides the very tangible parameters, the remaining factors are addressed by a complexity factor.
It multiplies the calculated time by a set factor, allowing for general adjustments.
Though, in the current state of WastedOnLearning, it leaves more responsibility and awareness than desired in the hands of the user.

A different role of the factor is the compensation for many unconsidered aspects.
The current categories established are very broad and for the most part do not consider factors like age, familiarity with the content or other topics mentioned before.
While a general compensatory function is not necessarily bad, for now it compensates for too many factors and poses high risks especially for overestimation.
So, be aware how much of your content truly requires additional compensation or shows higher complexity than assessed already and avoid vast overestimations.

## Indications & Future Potential

At this point it is important to note that at the current state, this is a short term, on man solution to a complex topic.
While it attempts to lean on scientific research, it still summarizes broadly in some areas and lacks substantial evidence in others.
And this tool itself is not scientifically proven for its accuracy. Nonetheless it does offer a solution which is otherwise not available.

As much as it is very rudimentary today, it still offers anticipating possibilities for any interested party.
Following are suggestions for improvement and practical implications which might find interest.

- The categories could be extended as they only offer a very, very general selection of groups and types of content.
- The reading speed is the most well researched factor considered. But to be fully scientifically accurate, it would require a factorial structure as follows:
  - Each target group has its own base reading speed (this is done).
  - For each target group the relative reading speed deviation for each type of content needs to be calculated and considered.
  - Right now, the relative factors are based on the data on students.
  - The complexity of the text itself could be analyzed using a AI model, thus further automating the equation
- The average view time per image is a rough estimation mostly based on general attention spans.
  - Here a study might be required to conduct.
  - The view time per image should be based on the type of image and not the general type of content.
  - A basic image processing AI could be trained to categorize images.
  - Text inside of images is not considered, this could also be solved by the same AI.
- A model on how to estimate interactive elements (those would need to be detected by the tool though the respective module for an intuitive approach).
- A model on how to estimate quizzes (those would need to be detected by the tool though the respective module for an intuitive approach).
- Support for more file and package types.
- Given more development and/or research, this tool can be used to verify learning & reading times of different materials in studies.
