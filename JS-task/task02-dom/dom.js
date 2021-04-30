function changeOuterLinks() {
    const navElements = document.querySelectorAll('nav#link-list a');
    navElements.forEach( element => {
        if ( element.innerHTML.includes('outer-link') ) {
            element.target ='_blank';
            element.innerHTML = `<strong>${element.innerHTML}</strong>`;
        }
    })


    document.querySelectorAll("nav").forEach((c) => {
        c.style.display = "flex";
        c.style.flexDirection = "column";
        c.style.margin = "0px auto";
        c.style.width = "30%";
        c.style.border = "1px solid blue";
        c.style.padding = "16px";
      });
}

export { changeOuterLinks };