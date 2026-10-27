gsap.registerPlugin(ScrollTrigger);


/* ==================================================
   PROJECT LIST GENERATE
================================================== */

const projectList =
    document.getElementById("projectsList");

const projectCount =
    document.getElementById("projectCount");


projectCount.textContent =
    `${String(PROJECTS.length).padStart(2, "0")} PROJECTS`;


PROJECTS.forEach((project, index) => {

    const item =
        document.createElement("div");

    item.className =
        "project-item";

    item.dataset.project =
        project.id;

    item.dataset.cursor =
        "VIEW";

    item.style.setProperty(
        "--project-color",
        project.color || "#222"
    );


    item.innerHTML = `

        <span class="project-index">

            ${String(index + 1)
                .padStart(2, "0")}

        </span>


        <h3 class="project-name">

            ${project.title}

        </h3>


        <p class="project-subtitle">

            ${project.subtitle}

        </p>


        <span class="project-arrow">

            <i class="fa-solid fa-arrow-right"></i>

        </span>

    `;


    item.addEventListener(
        "click",
        () => openProject(index)
    );


    projectList.appendChild(item);

});


/* ==================================================
   PROJECT LIST SCROLL ANIMATION
================================================== */

gsap.utils
    .toArray(".project-item")
    .forEach((item) => {

        gsap.from(item, {

            scrollTrigger: {

                trigger: item,

                start: "top 90%",

                toggleActions:
                    "play none none reverse"

            },

            y: 70,

            opacity: 0,

            duration: .8,

            ease: "power3.out"

        });

    });



/* ==================================================
   HERO ANIMATION
================================================== */

const heroTimeline =
    gsap.timeline({

        scrollTrigger: {

            trigger: ".hero",

            start: "top top",

            end: "bottom top",

            scrub: 1

        }

    });


heroTimeline

    .to(
        ".profile-icon",
        {
            y: -180,
            scale: .5,
            opacity: 0
        },
        0
    )

    .to(
        ".hero-small",
        {
            y: -120,
            opacity: 0
        },
        0
    )

    .to(
        ".hero-name",
        {
            scale: 1.4,
            letterSpacing: ".05em",
            opacity: 0
        },
        0
    )

    .to(
        ".hero-real-name",
        {
            x: 250,
            opacity: 0
        },
        0
    )

    .to(
        ".hero-description",
        {
            x: -250,
            opacity: 0
        },
        0
    )

    .to(
        ".social:nth-child(1)",
        {
            x: -300,
            opacity: 0
        },
        0
    )

    .to(
        ".social:nth-child(2)",
        {
            x: -150,
            y: 100,
            opacity: 0
        },
        0
    )

    .to(
        ".social:nth-child(3)",
        {
            x: 150,
            y: 100,
            opacity: 0
        },
        0
    )

    .to(
        ".social:nth-child(4)",
        {
            x: 300,
            opacity: 0
        },
        0
    );



/* ==================================================
   PROJECT WORD ANIMATION
================================================== */

const letters =
    gsap.utils.toArray(
        ".project-word span"
    );


letters.forEach(
    (letter, index) => {

        const distance =
            (index - 3.5) * 120;

        gsap.from(
            letter,
            {

                x: distance,

                y:
                    index % 2 === 0
                        ? -150
                        : 150,

                rotation:
                    index % 2 === 0
                        ? -20
                        : 20,

                opacity: 0,

                scrollTrigger: {

                    trigger:
                        ".projects-intro",

                    start:
                        "top 70%",

                    end:
                        "center center",

                    scrub: 1

                }

            }
        );

    }
);


gsap.to(
    ".projects-intro-sub",
    {

        opacity: 1,

        y: 0,

        scrollTrigger: {

            trigger:
                ".projects-intro",

            start:
                "35% center",

            end:
                "50% center",

            scrub: 1

        }

    }
);


/* PROJECT WORD EXIT */

gsap.to(
    ".project-word",
    {

        scale: 3,

        opacity: 0,

        scrollTrigger: {

            trigger:
                ".projects-intro",

            start:
                "55% center",

            end:
                "bottom center",

            scrub: 1

        }

    }
);



/* ==================================================
   ABOUT ANIMATION
================================================== */

gsap.utils
    .toArray(".about-big span")
    .forEach(
        (line, index) => {

            gsap.from(
                line,
                {

                    x:
                        index % 2 === 0
                            ? -200
                            : 200,

                    opacity: 0,

                    scrollTrigger: {

                        trigger: line,

                        start:
                            "top 90%",

                        end:
                            "top 55%",

                        scrub: 1

                    }

                }
            );

        }
    );


/* ABOUT TAGS */

gsap.from(
    ".about-tags span",
    {

        y: 50,

        opacity: 0,

        stagger: .08,

        scrollTrigger: {

            trigger:
                ".about-tags",

            start:
                "top 85%"

        }

    }
);



/* ==================================================
   CONTACT ANIMATION
================================================== */

gsap.from(
    ".contact h2",
    {

        scale: .65,

        opacity: .2,

        scrollTrigger: {

            trigger:
                ".contact",

            start:
                "top bottom",

            end:
                "center center",

            scrub: 1

        }

    }
);



/* ==================================================
   CUSTOM CURSOR
================================================== */

const cursor =
    document.querySelector(".cursor");

const cursorText =
    cursor.querySelector("span");


window.addEventListener(
    "mousemove",
    (e) => {

        gsap.to(
            cursor,
            {

                x: e.clientX,

                y: e.clientY,

                duration: .15,

                ease: "power2.out"

            }
        );

    }
);


function setupCursorTargets() {

    document
        .querySelectorAll(
            "[data-cursor]"
        )
        .forEach((element) => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursor.classList
                        .add("active");

                    cursorText.textContent =
                        element.dataset.cursor;

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    cursor.classList
                        .remove("active");

                    cursorText.textContent =
                        "";

                }
            );

        });

}

setupCursorTargets();



/* ==================================================
   MAGNETIC BUTTON
================================================== */

document
    .querySelectorAll(".magnetic")
    .forEach((button) => {

        button.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    e.clientX
                    - rect.left
                    - rect.width / 2;

                const y =
                    e.clientY
                    - rect.top
                    - rect.height / 2;


                gsap.to(
                    button,
                    {

                        x: x * .18,

                        y: y * .18,

                        duration: .3

                    }
                );

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                gsap.to(
                    button,
                    {

                        x: 0,

                        y: 0,

                        duration: .5,

                        ease:
                            "elastic.out(1,.4)"

                    }
                );

            }
        );

    });



/* ==================================================
   DETAIL PAGE
================================================== */

const projectPage =
    document.getElementById(
        "projectPage"
    );

const projectClose =
    document.getElementById(
        "projectClose"
    );

const detailNumber =
    document.getElementById(
        "detailNumber"
    );

const detailTitle =
    document.getElementById(
        "detailTitle"
    );

const detailSubtitle =
    document.getElementById(
        "detailSubtitle"
    );

const detailYear =
    document.getElementById(
        "detailYear"
    );

const detailVisit =
    document.getElementById(
        "detailVisit"
    );

const detailContent =
    document.getElementById(
        "detailContent"
    );

const nextProject =
    document.getElementById(
        "nextProject"
    );

const nextProjectName =
    document.getElementById(
        "nextProjectName"
    );


let currentProjectIndex = 0;



function openProject(index) {

    currentProjectIndex =
        index;

    const project =
        PROJECTS[index];


    /* URL */

    history.pushState(
        {
            project:
                project.id
        },

        "",

        `#${project.id}`
    );


    /* HERO */

    detailNumber.textContent =
        `${String(index + 1)
            .padStart(2, "0")} / PROJECT`;


    detailTitle.textContent =
        project.title;


    detailTitle.style.color =
        project.color || "white";


    detailSubtitle.textContent =
        project.subtitle;


    detailYear.textContent =
        project.year || "";


    /* LINK */

    if (project.link) {

        detailVisit.style.display =
            "inline-flex";

        detailVisit.href =
            project.link;

    }

    else {

        detailVisit.style.display =
            "none";

    }


    /* CONTENT */

    createContent(
        project.content
    );


    /* NEXT */

    const nextIndex =
        (index + 1)
        % PROJECTS.length;

    const next =
        PROJECTS[nextIndex];


    nextProjectName.textContent =
        next.title;


    nextProject.style.setProperty(
        "--next-color",
        next.color
    );


    nextProject.onclick =
        () => switchProject(
            nextIndex
        );


    /* OPEN */

    projectPage.classList
        .add("active");


    document.body.style.overflow =
        "hidden";


    gsap.fromTo(
        projectPage,

        {
            y: "100%"
        },

        {

            y: "0%",

            duration: .9,

            ease:
                "power4.inOut"

        }
    );


    gsap.fromTo(
        "#detailTitle",

        {

            y: 150,

            opacity: 0

        },

        {

            y: 0,

            opacity: 1,

            delay: .45,

            duration: 1,

            ease:
                "power4.out"

        }
    );

}



/* ==================================================
   CONTENT GENERATOR
================================================== */

function createContent(content = []) {

    detailContent.innerHTML = "";

    content.forEach((block) => {

        let element = null;


        /* =========================================
           BIG TEXT
        ========================================= */

        if (block.type === "big") {

            element = document.createElement("div");

            element.className = "content-big";

            element.innerHTML = block.text;

        }


        /* =========================================
           TITLE
        ========================================= */

        else if (block.type === "title") {

            element = document.createElement("h2");

            element.className = "content-title";

            element.innerHTML = block.text;

        }


        /* =========================================
           TEXT
        ========================================= */

        else if (block.type === "text") {

            element = document.createElement("div");

            element.className = "content-text";

            element.innerHTML = block.html;

        }


        /* =========================================
           IMAGE
        ========================================= */

        else if (block.type === "image") {

            element = document.createElement("figure");

            element.className = "content-image";

            element.innerHTML = `
                <img
                    src="${block.src}"
                    alt="${block.alt || ""}"
                    loading="lazy"
                >

                ${
                    block.caption
                    ?
                    `<figcaption>${block.caption}</figcaption>`
                    :
                    ""
                }
            `;

        }


        /* =========================================
           FULL IMAGE
        ========================================= */

        else if (block.type === "imageFull") {

            element = document.createElement("figure");

            element.className = "content-image-full";

            element.innerHTML = `
                <img
                    src="${block.src}"
                    alt="${block.alt || ""}"
                    loading="lazy"
                >

                ${
                    block.caption
                    ?
                    `<figcaption>${block.caption}</figcaption>`
                    :
                    ""
                }
            `;

        }


        /* =========================================
           GALLERY
        ========================================= */

        else if (block.type === "gallery") {

            element = document.createElement("div");

            element.className = "content-gallery";

            const images = block.images || [];

            element.innerHTML = images.map((image) => `
                <figure class="gallery-item">

                    <img
                        src="${image.src}"
                        alt="${image.alt || ""}"
                        loading="lazy"
                    >

                    ${
                        image.caption
                        ?
                        `<figcaption>${image.caption}</figcaption>`
                        :
                        ""
                    }

                </figure>
            `).join("");

        }


        /* =========================================
           VIDEO
        ========================================= */

        else if (block.type === "video") {

            element = document.createElement("div");

            element.className = "content-video";

            element.innerHTML = `
                <video
                    src="${block.src}"
                    ${block.poster ? `poster="${block.poster}"` : ""}
                    controls
                    playsinline
                    ${block.loop ? "loop" : ""}
                    ${block.muted ? "muted" : ""}
                ></video>

                ${
                    block.caption
                    ?
                    `<p class="media-caption">${block.caption}</p>`
                    :
                    ""
                }
            `;

        }


        /* =========================================
           SCROLL VIDEO
        ========================================= */

        else if (block.type === "scrollVideo") {

            element = document.createElement("section");

            element.className = "scroll-video-section";

            element.innerHTML = `
                <div class="scroll-video-sticky">

                    <video
                        class="scroll-video"
                        src="${block.src}"
                        preload="auto"
                        muted
                        playsinline
                    ></video>

                    ${
                        block.text
                        ?
                        `
                        <div class="scroll-video-text">
                            ${block.text}
                        </div>
                        `
                        :
                        ""
                    }

                </div>
            `;

        }


        /* =========================================
           YOUTUBE
        ========================================= */

        else if (block.type === "youtube") {

            element = document.createElement("div");

            element.className = "content-youtube";

            element.innerHTML = `
                <iframe
                    src="https://www.youtube.com/embed/${block.id}"
                    title="${block.title || "YouTube video"}"
                    frameborder="0"
                    allow="
                        accelerometer;
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        gyroscope;
                        picture-in-picture
                    "
                    allowfullscreen>
                </iframe>
            `;

        }


        /* =========================================
           COLUMNS
        ========================================= */

        else if (block.type === "columns") {

            element = document.createElement("div");

            element.className = "content-columns";

            element.innerHTML = `
                <div>
                    ${block.left || ""}
                </div>

                <div>
                    ${block.right || ""}
                </div>
            `;

        }


        /* =========================================
           QUOTE
        ========================================= */

        else if (block.type === "quote") {

            element = document.createElement("blockquote");

            element.className = "content-quote";

            element.innerHTML = `
                <p>
                    ${block.text}
                </p>

                ${
                    block.author
                    ?
                    `<cite>— ${block.author}</cite>`
                    :
                    ""
                }
            `;

        }


        /* =========================================
           STATS
        ========================================= */

        else if (block.type === "stats") {

            element = document.createElement("div");

            element.className = "content-stats";

            const items = block.items || [];

            element.innerHTML = items.map(item => `
                <div class="stat-item">

                    <span class="stat-label">
                        ${item.label}
                    </span>

                    <strong class="stat-value">
                        ${item.value}
                    </strong>

                </div>
            `).join("");

        }


        /* =========================================
           TAGS
        ========================================= */

        else if (block.type === "tags") {

            element = document.createElement("div");

            element.className = "content-tags";

            element.innerHTML =
                (block.items || [])
                    .map(tag => `<span>${tag}</span>`)
                    .join("");

        }


        /* =========================================
           SINGLE LINK
        ========================================= */

        else if (block.type === "link") {

            element = document.createElement("a");

            element.className = "content-link";

            element.href = block.url;

            element.target = "_blank";

            element.rel = "noopener noreferrer";

            element.innerHTML = `
                ${block.text}

                <i class="fa-solid fa-arrow-up-right"></i>
            `;

        }


        /* =========================================
           LINKS
        ========================================= */

        else if (block.type === "links") {

            element = document.createElement("div");

            element.className = "content-links";

            element.innerHTML = (block.items || []).map(item => `
                <a
                    href="${item.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>
                        ${item.text}
                    </span>

                    <i class="fa-solid fa-arrow-up-right"></i>
                </a>
            `).join("");

        }


        /* =========================================
           BUTTON
        ========================================= */

        else if (block.type === "button") {

            element = document.createElement("a");

            element.className = "content-button";

            element.href = block.url;

            element.target = block.newTab === false ? "_self" : "_blank";

            element.rel = "noopener noreferrer";

            element.innerHTML = `
                <span>
                    ${block.text}
                </span>

                <i class="fa-solid fa-arrow-up-right"></i>
            `;

        }


        /* =========================================
           MARQUEE
        ========================================= */

        else if (block.type === "marquee") {

            element = document.createElement("div");

            element.className = "content-marquee";

            const repeatedText =
                Array(6)
                    .fill(`<span>${block.text}</span>`)
                    .join("");

            element.innerHTML = `
                <div class="marquee-track">
                    ${repeatedText}
                </div>
            `;

        }


        /* =========================================
           SPLIT
        ========================================= */

        else if (block.type === "split") {

            element = document.createElement("section");

            element.className =
                `content-split ${
                    block.reverse ? "reverse" : ""
                }`;

            element.innerHTML = `
                <div class="split-media">

                    <img
                        src="${block.image}"
                        alt="${block.alt || ""}"
                        loading="lazy"
                    >

                </div>

                <div class="split-copy">

                    ${
                        block.label
                        ?
                        `<span class="split-label">${block.label}</span>`
                        :
                        ""
                    }

                    ${
                        block.title
                        ?
                        `<h3>${block.title}</h3>`
                        :
                        ""
                    }

                    ${
                        block.html
                        ?
                        `<div>${block.html}</div>`
                        :
                        ""
                    }

                </div>
            `;

        }


        /* =========================================
           NUMBER
        ========================================= */

        else if (block.type === "number") {

            element = document.createElement("div");

            element.className = "content-number";

            element.innerHTML = `
                <strong>
                    ${block.value}
                </strong>

                ${
                    block.label
                    ?
                    `<span>${block.label}</span>`
                    :
                    ""
                }
            `;

        }


        /* =========================================
           DIVIDER
        ========================================= */

        else if (block.type === "divider") {

            element = document.createElement("div");

            element.className = "content-divider";

        }


        /* =========================================
           SPACE
        ========================================= */

        else if (block.type === "space") {

            element = document.createElement("div");

            element.className = "content-space";

            element.style.height =
                `${block.height || 150}px`;

        }

        else if (block.type === "3dViewer") {

            element =
                document.createElement("section");

            element.className =
                "content-3d-viewer";

            element.dataset.model =
                block.model;

            element.dataset.scale =
                block.scale ?? 1;

            element.dataset.autoRotate =
                block.autoRotate !== false;

            element.dataset.mouse =
                block.mouse !== false;

            element.innerHTML = `

                <div class="three-loading">
                    LOADING 3D
                </div>

                ${
                    block.label
                    ?
                    `
                    <div class="viewer-label">
                        ${block.label}
                    </div>
                    `
                    :
                    ""
                }

            `;

        }

        else if (block.type === "3dScroll") {

            element =
                document.createElement("section");

            element.className =
                "content-3d-scroll";

            element.dataset.model =
                block.model;

            element.dataset.scale =
                block.scale ?? 1;

            element.dataset.scenes =
                JSON.stringify(
                    block.scenes || []
                );

            element.innerHTML = `

                <div class="content-3d-scroll-sticky">

                    <div
                        class="content-3d-scroll-canvas"
                    ></div>

                    ${
                        block.text
                        ?
                        `
                        <div
                            class="content-3d-scroll-text"
                        >

                            <h2>
                                ${block.text}
                            </h2>

                        </div>
                        `
                        :
                        ""
                    }

                    <div class="three-loading">
                        LOADING 3D
                    </div>

                </div>

            `;

        }

        else if (block.type === "particles") {

            element =
                document.createElement("section");

            element.className =
                "content-particles";

            element.dataset.count =
                block.count || 800;

            element.dataset.speed =
                block.speed || 1;

            element.innerHTML = `

                ${
                    block.text
                    ?
                    `
                    <div class="particles-text">
                        ${block.text}
                    </div>
                    `
                    :
                    ""
                }

            `;

        }

        /* =========================================
           ADD
        ========================================= */

        if (element) {

            detailContent.appendChild(element);

        }

    });


    requestAnimationFrame(() => {

        setupDetailAnimations();

        setupScrollVideos();

        window.dispatchEvent(
            new CustomEvent(
                "projectContentReady"
            )
        );

    });

}

function setupDetailAnimations() {

    const elements =
        detailContent.querySelectorAll(`
            .content-title,
            .content-text,
            .content-big,
            .content-image,
            .content-image-full,
            .content-gallery,
            .content-video,
            .content-youtube,
            .content-columns,
            .content-quote,
            .content-stats,
            .content-tags,
            .content-links,
            .content-button,
            .content-split,
            .content-number
        `);


    elements.forEach(element => {

        gsap.from(element, {

            y: 70,

            opacity: 0,

            duration: 1,

            ease: "power3.out",

            scrollTrigger: {

                trigger: element,

                scroller: ".project-page-scroll",

                start: "top 88%"

            }

        });

    });


    /* 갤러리 사진 순차 등장 */

    detailContent
        .querySelectorAll(".content-gallery")
        .forEach(gallery => {

            gsap.from(
                gallery.querySelectorAll(".gallery-item"),
                {

                    y: 80,

                    opacity: 0,

                    stagger: .12,

                    duration: .8,

                    scrollTrigger: {

                        trigger: gallery,

                        scroller: ".project-page-scroll",

                        start: "top 80%"

                    }

                }
            );

        });


    /* SPLIT 이미지 Parallax */

    detailContent
        .querySelectorAll(".split-media img")
        .forEach(image => {

            gsap.fromTo(
                image,

                {
                    yPercent: -8
                },

                {
                    yPercent: 8,

                    ease: "none",

                    scrollTrigger: {

                        trigger: image,

                        scroller: ".project-page-scroll",

                        scrub: true

                    }

                }
            );

        });

}



function setupScrollVideos() {

    detailContent
        .querySelectorAll(".scroll-video-section")
        .forEach(section => {

            const video =
                section.querySelector(".scroll-video");


            const createTrigger = () => {

                ScrollTrigger.create({

                    trigger: section,

                    scroller: ".project-page-scroll",

                    start: "top top",

                    end: "bottom bottom",

                    scrub: true,

                    onUpdate: self => {

                        if (
                            video.duration &&
                            Number.isFinite(video.duration)
                        ) {

                            video.currentTime =
                                self.progress * video.duration;

                        }

                    }

                });

            };


            if (video.readyState >= 1) {

                createTrigger();

            }

            else {

                video.addEventListener(
                    "loadedmetadata",
                    createTrigger,
                    { once: true }
                );

            }

        });

}



/* ==================================================
   SWITCH PROJECT
================================================== */

function switchProject(index) {

    gsap.to(
        ".project-page-scroll",
        {

            opacity: 0,

            duration: .35,

            onComplete: () => {

                document.querySelector(
                    ".project-page-scroll"
                ).scrollTop = 0;


                openProject(index);


                gsap.to(
                    ".project-page-scroll",
                    {

                        opacity: 1,

                        duration: .5

                    }
                );

            }

        }
    );

}



/* ==================================================
   CLOSE PROJECT
================================================== */

function closeProject() {

    history.pushState(
        {},
        "",
        window.location.pathname
    );


    gsap.to(
        projectPage,
        {

            y: "100%",

            duration: .8,

            ease:
                "power4.inOut",

            onComplete: () => {

                projectPage
                    .classList
                    .remove("active");

                document.body
                    .style
                    .overflow = "";

            }

        }
    );

}


projectClose.addEventListener(
    "click",
    closeProject
);



/* ==================================================
   ESC CLOSE
================================================== */

window.addEventListener(
    "keydown",
    (e) => {

        if (
            e.key === "Escape"
            &&
            projectPage.classList
                .contains("active")
        ) {

            closeProject();

        }

    }
);



/* ==================================================
   OPEN PROJECT FROM URL
================================================== */

window.addEventListener(
    "load",
    () => {

        const id =
            window.location.hash
                .replace("#", "");

        if (!id)
            return;


        const index =
            PROJECTS.findIndex(
                project =>
                    project.id === id
            );


        if (index !== -1) {

            openProject(index);

        }

    }
);
