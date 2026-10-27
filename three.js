import * as THREE from
    "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";

import {
    GLTFLoader
} from
    "https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/loaders/GLTFLoader.js";

import {
    OrbitControls
} from
    "https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/controls/OrbitControls.js";


/* ==================================================
   COMMON
================================================== */

const loader =
    new GLTFLoader();


const activeScenes = [];


function createRenderer(container) {

    const renderer =
        new THREE.WebGLRenderer({

            antialias: true,

            alpha: true

        });


    renderer.setPixelRatio(
        Math.min(
            window.devicePixelRatio,
            2
        )
    );


    renderer.setSize(
        container.clientWidth,
        container.clientHeight
    );


    renderer.outputColorSpace =
        THREE.SRGBColorSpace;


    container.appendChild(
        renderer.domElement
    );


    return renderer;

}



/* ==================================================
   LIGHTS
================================================== */

function addLights(scene) {

    const ambient =
        new THREE.AmbientLight(
            0xffffff,
            1.7
        );


    scene.add(ambient);


    const key =
        new THREE.DirectionalLight(
            0xffffff,
            3
        );


    key.position.set(
        4,
        5,
        6
    );


    scene.add(key);


    const rim =
        new THREE.DirectionalLight(
            0x8888ff,
            1.5
        );


    rim.position.set(
        -4,
        2,
        -5
    );


    scene.add(rim);

}



/* ==================================================
   RESIZE
================================================== */

function registerScene(
    container,
    camera,
    renderer
) {

    activeScenes.push({

        container,
        camera,
        renderer

    });

}


window.addEventListener(
    "resize",
    () => {

        activeScenes.forEach(
            ({
                container,
                camera,
                renderer
            }) => {

                if (
                    !container.isConnected
                ) {
                    return;
                }


                const width =
                    container.clientWidth;

                const height =
                    container.clientHeight;


                camera.aspect =
                    width / height;

                camera.updateProjectionMatrix();


                renderer.setSize(
                    width,
                    height
                );

            }
        );

    }
);



/* ==================================================
   HERO 3D
================================================== */

function initHero3D() {

    const container =
        document.getElementById(
            "hero3D"
        );


    if (!container)
        return;


    const scene =
        new THREE.Scene();


    const camera =
        new THREE.PerspectiveCamera(
            45,
            container.clientWidth /
            container.clientHeight,
            .1,
            100
        );


    camera.position.z = 7;


    const renderer =
        createRenderer(container);


    registerScene(
        container,
        camera,
        renderer
    );


    /* OBJECT */

    const geometry =
        new THREE.IcosahedronGeometry(
            1.7,
            1
        );


    const material =
        new THREE.MeshPhysicalMaterial({

            color:
                0x111111,

            metalness:
                .8,

            roughness:
                .22,

            wireframe:
                false

        });


    const object =
        new THREE.Mesh(
            geometry,
            material
        );


    object.position.x = 2.8;


    scene.add(object);


    /* WIREFRAME */

    const wireMaterial =
        new THREE.MeshBasicMaterial({

            color:
                0xffffff,

            wireframe:
                true,

            transparent:
                true,

            opacity:
                .15

        });


    const wire =
        new THREE.Mesh(
            geometry,
            wireMaterial
        );


    wire.scale.setScalar(
        1.02
    );


    object.add(wire);


    addLights(scene);


    /* MOUSE */

    let targetX = 0;
    let targetY = 0;


    window.addEventListener(
        "mousemove",
        e => {

            targetX =
                (
                    e.clientX /
                    window.innerWidth
                    - .5
                ) * .6;


            targetY =
                (
                    e.clientY /
                    window.innerHeight
                    - .5
                ) * .6;

        }
    );


    /* SCROLL */

    gsap.to(
        object.rotation,
        {

            x: Math.PI * 1.5,

            y: Math.PI * 2,

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",

                end: "bottom top",

                scrub: 1

            }

        }
    );


    gsap.to(
        object.scale,
        {

            x: .25,
            y: .25,
            z: .25,

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",

                end: "bottom top",

                scrub: 1

            }

        }
    );


    gsap.to(
        object.position,
        {

            x: 0,

            z: -3,

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",

                end: "bottom top",

                scrub: 1

            }

        }
    );


    function animate() {

        requestAnimationFrame(
            animate
        );


        object.rotation.y +=
            .0025;


        object.rotation.x +=
            (
                targetY -
                object.rotation.x
            ) * .015;


        object.rotation.y +=
            (
                targetX -
                object.rotation.y
            ) * .01;


        renderer.render(
            scene,
            camera
        );

    }


    animate();

}



/* ==================================================
   PROJECTS TRANSITION 3D
================================================== */

function initProjects3D() {

    const container =
        document.getElementById(
            "projects3D"
        );


    if (!container)
        return;


    const scene =
        new THREE.Scene();


    const camera =
        new THREE.PerspectiveCamera(
            50,
            container.clientWidth /
            container.clientHeight,
            .1,
            100
        );


    camera.position.z = 8;


    const renderer =
        createRenderer(container);


    registerScene(
        container,
        camera,
        renderer
    );


    const group =
        new THREE.Group();


    scene.add(group);


    const pieces = [];


    /* SHAPES */

    const geometries = [

        new THREE.BoxGeometry(
            .5,.5,.5
        ),

        new THREE.TetrahedronGeometry(
            .4
        ),

        new THREE.OctahedronGeometry(
            .45
        )

    ];


    for (
        let i = 0;
        i < 22;
        i++
    ) {

        const geometry =
            geometries[
                i %
                geometries.length
            ];


        const material =
            new THREE.MeshBasicMaterial({

                color:
                    0xffffff,

                wireframe:
                    true,

                transparent:
                    true,

                opacity:
                    .35

            });


        const mesh =
            new THREE.Mesh(
                geometry,
                material
            );


        const start = {

            x:
                (Math.random() - .5)
                * 12,

            y:
                (Math.random() - .5)
                * 8,

            z:
                (Math.random() - .5)
                * 5

        };


        mesh.position.set(
            start.x,
            start.y,
            start.z
        );


        mesh.userData.start =
            start;


        group.add(mesh);


        pieces.push(mesh);

    }


    /* SCROLL */

    pieces.forEach(
        (piece, index) => {

            gsap.to(
                piece.position,
                {

                    x:
                        (
                            index -
                            pieces.length / 2
                        ) * .07,

                    y: 0,

                    z: 0,

                    scrollTrigger: {

                        trigger:
                            ".projects-intro",

                        start:
                            "top 80%",

                        end:
                            "45% center",

                        scrub: 1

                    }

                }
            );


            gsap.to(
                piece.rotation,
                {

                    x:
                        Math.PI * 2,

                    y:
                        Math.PI * 2,

                    scrollTrigger: {

                        trigger:
                            ".projects-intro",

                        start:
                            "top 80%",

                        end:
                            "50% center",

                        scrub: 1

                    }

                }
            );


            gsap.to(
                piece.scale,
                {

                    x: 0,
                    y: 0,
                    z: 0,

                    scrollTrigger: {

                        trigger:
                            ".projects-intro",

                        start:
                            "48% center",

                        end:
                            "70% center",

                        scrub: 1

                    }

                }
            );

        }
    );


    function animate() {

        requestAnimationFrame(
            animate
        );


        group.rotation.y +=
            .001;


        renderer.render(
            scene,
            camera
        );

    }


    animate();

}



/* ==================================================
   3D VIEWER
================================================== */

function init3DViewer(element) {

    if (
        element.dataset.initialized
    ) return;


    element.dataset.initialized =
        "true";


    const scene =
        new THREE.Scene();


    const camera =
        new THREE.PerspectiveCamera(
            45,
            element.clientWidth /
            element.clientHeight,
            .1,
            100
        );


    camera.position.set(
        0,
        0,
        5
    );


    const renderer =
        createRenderer(element);


    registerScene(
        element,
        camera,
        renderer
    );


    addLights(scene);


    const controls =
        new OrbitControls(
            camera,
            renderer.domElement
        );


    controls.enableDamping =
        true;


    controls.enablePan =
        false;


    controls.enableZoom =
        true;


    const autoRotate =
        element.dataset.autoRotate
        === "true";


    controls.autoRotate =
        autoRotate;


    controls.autoRotateSpeed =
        1;


    const modelURL =
        element.dataset.model;


    loader.load(

        modelURL,

        gltf => {

            const model =
                gltf.scene;


            const scale =
                Number(
                    element.dataset.scale
                ) || 1;


            model.scale.setScalar(
                scale
            );


            /* AUTO CENTER */

            const box =
                new THREE.Box3()
                    .setFromObject(
                        model
                    );


            const center =
                box.getCenter(
                    new THREE.Vector3()
                );


            model.position.sub(
                center
            );


            scene.add(model);


            const loading =
                element.querySelector(
                    ".three-loading"
                );


            if (loading) {

                loading.classList
                    .add("loaded");

            }

        },

        undefined,

        error => {

            console.error(
                "3D MODEL ERROR:",
                error
            );

        }

    );


    function animate() {

        if (
            !element.isConnected
        ) return;


        requestAnimationFrame(
            animate
        );


        controls.update();


        renderer.render(
            scene,
            camera
        );

    }


    animate();

}



/* ==================================================
   3D SCROLL
================================================== */

function init3DScroll(element) {

    if (
        element.dataset.initialized
    ) return;


    element.dataset.initialized =
        "true";


    const canvasContainer =
        element.querySelector(
            ".content-3d-scroll-canvas"
        );


    const scene =
        new THREE.Scene();


    const camera =
        new THREE.PerspectiveCamera(
            45,
            canvasContainer.clientWidth /
            canvasContainer.clientHeight,
            .1,
            100
        );


    camera.position.z = 6;


    const renderer =
        createRenderer(
            canvasContainer
        );


    registerScene(
        canvasContainer,
        camera,
        renderer
    );


    addLights(scene);


    const scenes =
        JSON.parse(
            element.dataset.scenes
            || "[]"
        );


    loader.load(

        element.dataset.model,

        gltf => {

            const model =
                gltf.scene;


            const scale =
                Number(
                    element.dataset.scale
                ) || 1;


            model.scale.setScalar(
                scale
            );


            const box =
                new THREE.Box3()
                    .setFromObject(
                        model
                    );


            const center =
                box.getCenter(
                    new THREE.Vector3()
                );


            model.position.sub(
                center
            );


            scene.add(model);


            const loading =
                element.querySelector(
                    ".three-loading"
                );


            if (loading) {

                loading.classList
                    .add("loaded");

            }


            /* DEFAULT SCROLL */

            if (
                scenes.length < 2
            ) {

                gsap.to(
                    model.rotation,
                    {

                        y:
                            Math.PI * 2,

                        x:
                            Math.PI * .25,

                        scrollTrigger: {

                            trigger:
                                element,

                            scroller:
                                ".project-page-scroll",

                            start:
                                "top top",

                            end:
                                "bottom bottom",

                            scrub: 1

                        }

                    }
                );

            }


            /* CUSTOM KEYFRAMES */

            else {

                const timeline =
                    gsap.timeline({

                        scrollTrigger: {

                            trigger:
                                element,

                            scroller:
                                ".project-page-scroll",

                            start:
                                "top top",

                            end:
                                "bottom bottom",

                            scrub: 1

                        }

                    });


                scenes.forEach(
                    (
                        keyframe,
                        index
                    ) => {

                        if (
                            index === 0
                        ) {

                            if (
                                keyframe.position
                            ) {

                                model.position.set(
                                    ...keyframe.position
                                );

                            }


                            if (
                                keyframe.rotation
                            ) {

                                model.rotation.set(
                                    ...keyframe.rotation
                                );

                            }

                            return;

                        }


                        const previous =
                            scenes[index - 1];


                        const duration =
                            keyframe.at -
                            previous.at;


                        timeline.to(
                            model.position,
                            {

                                x:
                                    keyframe.position?.[0]
                                    ??
                                    model.position.x,

                                y:
                                    keyframe.position?.[1]
                                    ??
                                    model.position.y,

                                z:
                                    keyframe.position?.[2]
                                    ??
                                    model.position.z,

                                duration:
                                    duration,

                                ease:
                                    "none"

                            }
                        );


                        if (
                            keyframe.rotation
                        ) {

                            timeline.to(
                                model.rotation,
                                {

                                    x:
                                        keyframe.rotation[0],

                                    y:
                                        keyframe.rotation[1],

                                    z:
                                        keyframe.rotation[2],

                                    duration:
                                        duration,

                                    ease:
                                        "none"

                                },

                                "<"
                            );

                        }

                    }
                );

            }

        }

    );


    function animate() {

        if (
            !element.isConnected
        ) return;


        requestAnimationFrame(
            animate
        );


        renderer.render(
            scene,
            camera
        );

    }


    animate();

}



/* ==================================================
   PARTICLES
================================================== */

function initParticles(element) {

    if (
        element.dataset.initialized
    ) return;


    element.dataset.initialized =
        "true";


    const scene =
        new THREE.Scene();


    const camera =
        new THREE.PerspectiveCamera(
            60,
            element.clientWidth /
            element.clientHeight,
            .1,
            100
        );


    camera.position.z = 6;


    const renderer =
        createRenderer(element);


    registerScene(
        element,
        camera,
        renderer
    );


    const count =
        Number(
            element.dataset.count
        ) || 800;


    const geometry =
        new THREE.BufferGeometry();


    const positions =
        new Float32Array(
            count * 3
        );


    for (
        let i = 0;
        i < count * 3;
        i++
    ) {

        positions[i] =
            (
                Math.random() - .5
            ) * 12;

    }


    geometry.setAttribute(

        "position",

        new THREE.BufferAttribute(
            positions,
            3
        )

    );


    const material =
        new THREE.PointsMaterial({

            color:
                0xffffff,

            size:
                .025,

            transparent:
                true,

            opacity:
                .65

        });


    const particles =
        new THREE.Points(
            geometry,
            material
        );


    scene.add(particles);


    let mouseX = 0;
    let mouseY = 0;


    element.addEventListener(
        "mousemove",
        e => {

            const rect =
                element
                    .getBoundingClientRect();


            mouseX =
                (
                    e.clientX -
                    rect.left
                ) /
                rect.width -
                .5;


            mouseY =
                (
                    e.clientY -
                    rect.top
                ) /
                rect.height -
                .5;

        }
    );


    const speed =
        Number(
            element.dataset.speed
        ) || 1;


    function animate() {

        if (
            !element.isConnected
        ) return;


        requestAnimationFrame(
            animate
        );


        particles.rotation.y +=
            .0006 * speed;


        particles.rotation.x +=
            (
                mouseY * .08 -
                particles.rotation.x
            ) * .01;


        particles.rotation.y +=
            (
                mouseX * .08 -
                particles.rotation.y
            ) * .005;


        renderer.render(
            scene,
            camera
        );

    }


    animate();

}



/* ==================================================
   INIT PROJECT 3D
================================================== */

function initProject3D() {

    document
        .querySelectorAll(
            ".content-3d-viewer"
        )
        .forEach(
            init3DViewer
        );


    document
        .querySelectorAll(
            ".content-3d-scroll"
        )
        .forEach(
            init3DScroll
        );


    document
        .querySelectorAll(
            ".content-particles"
        )
        .forEach(
            initParticles
        );

}



/* ==================================================
   START
================================================== */

initHero3D();

initProjects3D();


window.addEventListener(
    "projectContentReady",
    () => {

        setTimeout(
            initProject3D,
            50
        );

    }
);
