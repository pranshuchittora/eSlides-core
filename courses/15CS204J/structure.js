let slidesElm = document.querySelector("#slides-cont");
const COURSE_NAME = "JAVA";
const SLIDES_LOCATION = "./Slides/";
const MODULES = 5;
const SESSIONS = [1, 0, 0, 0, 0];
const BEFORE_SLIDES = ["Introduction", "Index"];
const AFTER_SLIDES = [];
function setCourseTitle(COURSE_NAME) {
  document.title = COURSE_NAME;
}
function dynamicSlidesAdd(SLIDES_LOCATION, SLIDES_ARRAY) {
  let slides_string = ``;
  SLIDES_ARRAY.map(elm => {
    let slide_path = `${SLIDES_LOCATION}${elm}.md`;
    slides_string += `
      <section
      data-markdown="${slide_path}"
      data-separator="^\n\n\n"
      data-separator-vertical="^\n\n"
      data-separator-notes="^Note:"
      data-charset="iso-8859-15"
      ></section>
      `;
  });
  slidesElm.innerHTML += slides_string;
}
function dynamicSlides(SLIDES_LOCATION, MODULES, SESSIONS) {
  let new_slides = ``;

  for (let i = 1; i <= MODULES; i++) {
    for (let j = 1; j <= SESSIONS[i - 1]; j++) {
      for (let k = 1; k <= 2; k++) {
        let slide_path = `${SLIDES_LOCATION}M${i}/S${j}/SLO${k}.md`;

        new_slides += `
                   <section
                   data-markdown="${slide_path}"
                   data-separator="^\n\n\n"
                   data-separator-vertical="^\n\n"
                   data-separator-notes="^Note:"
                   data-charset="iso-8859-15"
                   ></section>
                   `;
      }
    }
  }

  slidesElm.innerHTML += new_slides;
}

//Sets the title of the page
setCourseTitle(COURSE_NAME);
//Adss slides before the core slides
dynamicSlidesAdd(SLIDES_LOCATION, BEFORE_SLIDES);
//Adds all the modules with their child slides
dynamicSlides(SLIDES_LOCATION, MODULES, SESSIONS);
// Ending slides
dynamicSlidesAdd(SLIDES_LOCATION, AFTER_SLIDES);
