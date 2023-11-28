//Document listener for left and right key arrow press 
const focusableElements = document.querySelectorAll(".tab");
document.addEventListener("keyup", handleDocumentItemArrowKeypress);

let position = 1;
let PreviousPosition = 1;
function handleDocumentItemArrowKeypress(e){
    const firstItem = focusableElements.item(0);
    const lastItem = focusableElements.item(focusableElements.length-1);

    if (e.key === "ArrowRight") {
        nextPosition();
    }
    function nextPosition(){
        if (position > (focusableElements.length - 1)) {
            firstItem.focus();
            index = 1;
        } else{
            const nextItem = focusableElements.item(position++);
            nextItem.focus();
            previousPosition = position - 2;
            
        }
        
    }
    function PreviousIndex(){
        if (previousPosition >= 0) {
            const nextItem = focusableElements.item(previousPosition--);
            nextItem.focus();
            position = previousPosition + 2; 
        } else {
            lastItem.focus();
            previousPosition = (focusableElements.length - 2);
        }
        
}
    if(e.key === "ArrowLeft"){
        PreviousIndex();
    }

}

//Toggle for user profile
const profile = document.querySelector(".profile-btn");
const profileMenu = document.querySelector(".profile-menu");
profile.addEventListener("click", ()=>{
    if (profileMenu.classList.contains("expand")) {
        closeProfile();       
    }else{
        openProfile()
    }
})
function closeProfile() {
    profileMenu.classList.toggle("expand");
    const expanded = profileMenu.classList.contains("expand");
    if (expanded) {
        profileMenu.ariaExpanded = "true";
    } else{
        profileMenu.ariaExpanded = "flase";
    }
    profile.focus();
}
function openProfile(){
    profileMenu.classList.toggle("expand");
    const expanded = profileMenu.classList.contains("expand");
    if (expanded) {
        profileMenu.ariaExpanded = "true";
    } else{
        profileMenu.ariaExpanded = "flase";
    }

    const profileMenuItems = document.querySelectorAll(".profile-menu-item");
    profileMenuItems.item(0).focus();
}
profileMenu.addEventListener("keyup", (e)=>{
    if (e.key === "Escape") {
        closeProfile();
    }
})
profileMenu.addEventListener("keyup", handleProfileItemArrowKeypress);


//handles profile menu up and down key press
let index = 1;
let previousIndex = 1;
function handleProfileItemArrowKeypress(e){
   
    const profileMenuItems = document.querySelectorAll(".profile-menu-item");
    const firstItem = profileMenuItems.item(0);
    const lastItem = profileMenuItems.item(profileMenuItems.length - 1);
        if (e.key === "ArrowDown") {
            nextIndex();
        }
        function nextIndex(){
            if (index > 7) {
                firstItem.focus();
                index = 1;
            } else{
                const nextItem = profileMenuItems.item(index++);
                nextItem.focus();
                previousIndex = index - 2;
            }
            
        }
        function PreviousIndex(){
            if (previousIndex >= 0) {
                const nextItem = profileMenuItems.item(previousIndex--);
                nextItem.focus();
                index = previousIndex + 2; 
                
            } else {
                lastItem.focus();
                previousIndex = 6;
            }
            
    }
        if(e.key === "ArrowUp"){
            PreviousIndex();
        }
}


//Notification toggle
const notification = document.querySelector(".notification-btn");
const notificationDrop = document.querySelector(".notification-menu");
notification.addEventListener("click", ()=>{
    if (notificationDrop.classList.contains("expand")) {
        closeNotification();
    }else{
        openNotification();
    } 
} )

function closeNotification(){
    notificationDrop.classList.toggle("expand");
    const expanded = notificationDrop.classList.contains("expand");
    
    if (expanded) {
        notification.ariaExpanded = "true";
    } else{
        notification.ariaExpanded = "flase";
    }
    notification.focus();
}
function openNotification(){
    notificationDrop.classList.toggle("expand");
    const expanded = notificationDrop.classList.contains("expand");
    
    if (expanded) {
        notification.ariaExpanded = "true";
    } else{
        notification.ariaExpanded = "flase";
    }

    const notificationMenuItems = document.querySelectorAll(".notification-menu-btn");
    notificationMenuItems.item(0).focus();
}
notificationDrop.addEventListener("keyup", (e)=>{
    if (e.key === "Escape") {
        closeNotification();
    }
})


//close button listener for select plan
const selectPlan = document.querySelector(".select-plan");
const close = document.querySelector(".close").addEventListener("click",()=>{
    selectPlan.style.display = "none";
})

//collaspe-icon toggle for setup Guide
const collaspeIcon = document.querySelector(".collaspe-icon");
const colIcon = document.querySelector(".col-icon");
const setupGuideItems = document.querySelector(".setup-guide-items");
collaspeIcon.addEventListener("click", ()=>{
colIcon.classList.toggle("collasped");
setupGuideItems.classList.toggle("expand");
if (setupGuideItems.classList.contains("expand")) {
    collaspeIcon.ariaExpanded = "false";
} else {
    collaspeIcon.ariaExpanded = "true";
}
})

//Items select
const itemContainers = document.querySelectorAll(".item");
const items = document.querySelectorAll(".item-title");
const check = document.querySelectorAll(".check");
const itemInfos = document.querySelectorAll(".item-info");
const itemImages = document.querySelectorAll(".item-image");
const checkBoxes = document.querySelectorAll("input[type='checkbox']")
const progressBar = document.querySelector(".progress");
const oneOf = document.querySelector(".one-of");

let numberIndicator = 0;
oneOf.innerHTML = `${numberIndicator}/5 completed`;

let ProgressBarWidth = 0;
progressBar.style.width = ProgressBarWidth;

//Clicking on the select guide items
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", ()=>{
    itemContainers.forEach(itemContainer => {
        itemContainer.classList.remove("light-bck");
    });
    itemInfos.forEach(itemInfo => {
        itemInfo.classList.remove("expand");
    });
    itemImages.forEach(itemImage => {
        itemImage.classList.remove("expand");
    });

    let lightBck = items[i].classList.contains("light-bck");

    if (lightBck === false) {
        itemContainers[i].classList.add("light-bck");
    }

    itemInfos[i].classList.add("expand");
    itemImages[i].classList.add("expand");
    })
}

//When the check box is checked and unchecked
for (let c = 0; c < checkBoxes.length; c++) {
    checkBoxes[c].addEventListener("click", ()=>{
        if (checkBoxes[c].checked === true) {
            checkBoxes[c].ariaChecked = "true";
            expandNextItem()
        }else if(checkBoxes[c].checked === false){
            checkBoxes[c].ariaChecked = "false";
            expandCurrentItem();
        }
        //Expands the next selct guide item
        function expandNextItem(){
            itemContainers.forEach(itemContainer => {
                itemContainer.classList.remove("light-bck");
            });
            itemInfos.forEach(itemInfo => {
                itemInfo.classList.remove("expand");
            });
            itemImages.forEach(itemImage => {
                itemImage.classList.remove("expand");
            });

            let element = checkBoxes[c].name;
            let index = parseInt(element);
            if (index < 5) {
                itemContainers[index].classList.add("light-bck")
                itemInfos[index].classList.add("expand");
                itemImages[index].classList.add("expand");
            }else{
                itemContainers[c].classList.add("light-bck")
                itemInfos[c].classList.add("expand");
                itemImages[c].classList.add("expand");
            }
            
            numberIndicator = numberIndicator + 1
            oneOf.innerHTML = `${numberIndicator}/5 completed`;
            ProgressBarWidth = ProgressBarWidth + 20;
            progressBar.style.width = `${ProgressBarWidth}%`;

            //The checkAnimation functios changes the style of the input
            checkAnimation();

            function checkAnimation(){
                const checkIcons = document.querySelectorAll(".checked-icon");

                    let indexes = c;

                    //The setTimeout functions progressively change the style of the input 
                    setTimeout(function(){
                        checkIcons[indexes].classList.add("rotate");
                    }, 20);
                    setTimeout(function(){
                        checkIcons[indexes].innerHTML =  `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none">
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#8A8A8A"
                            stroke-width="2.08333"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>`
                    }, 130);
                    setTimeout(function(){
                        checkIcons[indexes].innerHTML =  `<svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            fill="#D9D9D9"
                            stroke="#8A8A8A"
                            stroke-width="2.08333"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>`
                    }, 130);
                    setTimeout(function(){
                        checkIcons[indexes].innerHTML =  `<svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
                            stroke="#1C181D"
                            stroke-width="2.08333"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>`
                    }, 130);
                    setTimeout(function(){
                        checkIcons[indexes].innerHTML =  `<svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12"
                            stroke="#1C181D"
                            stroke-width="2.08333"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>`
                    }, 130);
                    setTimeout(function(){
                        checkIcons[indexes].innerHTML =  `<svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <ellipse
                            opacity="0.6"
                            cx="7.00008"
                            cy="7.00004"
                            rx="7.00008"
                            ry="7.00004"
                            transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)"
                            fill="#1C181D"
                            stroke="#1C181D"
                            stroke-width="1.45835"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                        <g opacity="0.6">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z"
                                fill="white"/>
                        </g>
                    </svg>`
                    }, 130);
                    setTimeout(function(){
                        checkIcons[indexes].innerHTML =  `<svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="11.9996"
                            cy="12"
                            r="10"
                            fill="#1C181D"
                            stroke="#1C181D"
                            stroke-width="2.08333"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.8163 8.64149C17.0604 8.88557 17.0604 9.2813 16.8163 9.52538L11.3997 14.942C11.1556 15.1861 10.7599 15.1861 10.5158 14.942L7.80745 12.2337C7.56337 11.9896 7.56337 11.5939 7.80745 11.3498C8.05153 11.1057 8.44725 11.1057 8.69133 11.3498L10.9577 13.6162L15.9324 8.64149C16.1765 8.39742 16.5723 8.39742 16.8163 8.64149Z"
                            fill="white"/>
                    </svg>`
                    }, 130);
                    setTimeout(function(){
                        checkIcons[indexes].innerHTML =  `<svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="11.9996"
                            cy="12"
                            r="10"
                            fill="#1C181D"
                            stroke="#1C181D"
                            stroke-width="2.08333"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.8162 8.64149C17.0603 8.88557 17.0603 9.2813 16.8162 9.52538L11.3995 14.942C11.1555 15.1861 10.7597 15.1861 10.5157 14.942L7.80733 12.2337C7.56325 11.9896 7.56325 11.5939 7.80733 11.3498C8.0514 11.1057 8.44713 11.1057 8.69121 11.3498L10.9576 13.6162L15.9323 8.64149C16.1764 8.39742 16.5721 8.39742 16.8162 8.64149Z"
                            fill="white"/>
                    </svg>`
                    }, 130);

                        
                }  
              
                }

        //Expand the current unchecked item
        function expandCurrentItem(){   
                    itemContainers.forEach(itemContainer => {
                        itemContainer.classList.remove("light-bck");
                    });
                    itemInfos.forEach(itemInfo => {
                        itemInfo.classList.remove("expand");
                    });
                    itemImages.forEach(itemImage => {
                        itemImage.classList.remove("expand");
                    });
        
                    let lightBck = items[c].classList.contains("light-bck");
        
                    if (lightBck === false) {
                    itemContainers[c].classList.add("light-bck");
                    }
        
        
                    itemInfos[c].classList.add("expand");
                    itemImages[c].classList.add("expand");
                    
                    numberIndicator = numberIndicator - 1;
                    oneOf.innerHTML = `${numberIndicator}/5 completed`;
                    ProgressBarWidth = ProgressBarWidth - 20;
                    progressBar.style.width = `${ProgressBarWidth}%`;
                    
                    //The unCheckAnimation reverts the style of the input
                    unCheckAnimation();
        
                    function unCheckAnimation(){
                        const checkIcons = document.querySelectorAll(".checked-icon");

                        setTimeout(function(){
                            checkIcons[indexes].classList.remove("rotate");
                        }, 20);

                        setTimeout(function(){
                            checkIcons[c].innerHTML =  `<svg
                            width="24"
                            height="24"
                            viewbox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle
                                cx="11.9996"
                                cy="12"
                                r="10"
                                fill="#1C181D"
                                stroke="#1C181D"
                                stroke-width="2.08333"
                                stroke-linecap="round"
                                stroke-linejoin="round"/>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16.8162 8.64149C17.0603 8.88557 17.0603 9.2813 16.8162 9.52538L11.3995 14.942C11.1555 15.1861 10.7597 15.1861 10.5157 14.942L7.80733 12.2337C7.56325 11.9896 7.56325 11.5939 7.80733 11.3498C8.0514 11.1057 8.44713 11.1057 8.69121 11.3498L10.9576 13.6162L15.9323 8.64149C16.1764 8.39742 16.5721 8.39742 16.8162 8.64149Z"
                                fill="white"/>
                        </svg>`
                        }, 120)
                        setTimeout(function(){
                            checkIcons[c].innerHTML =  `<svg
                            width="24"
                            height="24"
                            viewbox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle
                                cx="11.9996"
                                cy="12"
                                r="10"
                                fill="#1C181D"
                                stroke="#1C181D"
                                stroke-width="2.08333"
                                stroke-linecap="round"
                                stroke-linejoin="round"/>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16.8163 8.64149C17.0604 8.88557 17.0604 9.2813 16.8163 9.52538L11.3997 14.942C11.1556 15.1861 10.7599 15.1861 10.5158 14.942L7.80745 12.2337C7.56337 11.9896 7.56337 11.5939 7.80745 11.3498C8.05153 11.1057 8.44725 11.1057 8.69133 11.3498L10.9577 13.6162L15.9324 8.64149C16.1765 8.39742 16.5723 8.39742 16.8163 8.64149Z"
                                fill="white"/>
                        </svg>`
                        }, 120)
                        setTimeout(function(){
                            checkIcons[c].innerHTML =  `<svg
                            width="24"
                            height="24"
                            viewbox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <ellipse
                                opacity="0.6"
                                cx="7.00008"
                                cy="7.00004"
                                rx="7.00008"
                                ry="7.00004"
                                transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)"
                                fill="#1C181D"
                                stroke="#1C181D"
                                stroke-width="1.45835"
                                stroke-linecap="round"
                                stroke-linejoin="round"/>
                            <g opacity="0.6">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z"
                                    fill="white"/>
                            </g>
                        </svg>`
                        }, 120);
                        setTimeout(function(){
                            checkIcons[c].innerHTML =  `<svg
                            width="24"
                            height="24"
                            viewbox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12"
                                stroke="#1C181D"
                                stroke-width="2.08333"
                                stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>`
                        }, 120);
                        setTimeout(function(){
                            checkIcons[c].innerHTML =  `<svg
                            width="24"
                            height="24"
                            viewbox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
                                stroke="#1C181D"
                                stroke-width="2.08333"
                                stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>`
                        }, 120);
                        setTimeout(function(){
                            checkIcons[c].innerHTML =  `<svg
                            width="24"
                            height="24"
                            viewbox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                fill="#D9D9D9"
                                stroke="#8A8A8A"
                                stroke-width="2.08333"
                                stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>`
                        }, 120);
                        setTimeout(function(){
                            checkIcons[c].innerHTML =  `<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewbox="0 0 24 24"
                            fill="none">
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="#8A8A8A"
                                stroke-width="2.08333"
                                stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>`
                        }, 120);
                        setTimeout(function(){
                            checkIcons[c].innerHTML =  `<svg
                            width="24"
                            height="24"
                            viewbox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="#8A8A8A"
                                stroke-width="2.08333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-dasharray="5 5"/>
                        </svg>`
                        }, 120);              
                    }
                    
        
                }
            });
    
                  
            }

        

