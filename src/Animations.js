import gsap from "gsap"

//Animate text 
export const textIntro = elem => {
    gsap.from(elem, {
        yPercent: 30,
        opacity: 0,
        duration: 2,
        ease: "circ",
    });
};

export const textIntro2 = elem => {
    gsap.from(elem, {
        xPercent: 30,
        opacity: 0,
        duration: 2,
        ease: "circ",
    });
};