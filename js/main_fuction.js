let dropdownBool = true
let arrowRotate = 0
const selectedTag = document.querySelector(".select_tag>p")
const selectOption = document.querySelector(".tag_option")
let selectedValue = null
const wrap = document.querySelector(".wrap")
const backgroundImage = ["light_seoul.png","dark_seoul.webp"]


wrap.setAttribute("style",`background-image:url(../img/${backgroundImage[Math.floor(Math.random() * 2)]})`)


document.querySelector(".select_tag").addEventListener("click",()=>{
    if(dropdownBool){
    selectOption.setAttribute("style","padding-bottom:207px;")
    dropdownBool = false
    }else{
        closeDown()
    }
    arrowRotate -= 180
    if(arrowRotate == -360){
        arrowRotate = 0
    }
        document.querySelector(".select_tag>i").setAttribute("style",`transform: rotate(${arrowRotate}deg);`)
    })

        // console.log(document.querySelectorAll(".tag_option>li"))

        document.querySelectorAll(".tag_option>li").forEach(el=>{
            el.addEventListener("click",()=>{
                if(el.getAttribute("value") == "carts"){
                    selectedTag.textContent = "돈까스"
                    selectedValue = el.getAttribute("value")
                    selectedTag.setAttribute("style","color:black;")
                    closeDown()

                }else if(el.getAttribute("value") == "ramen"){
                    selectedTag.textContent = "라멘"
                    selectedValue = el.getAttribute("value")
                    selectedTag.setAttribute("style","color:black;")
                    closeDown()

                }else if(el.getAttribute("value") == "meat"){
                    selectedTag.textContent = "고깃집"
                    selectedValue = el.getAttribute("value")
                    selectedTag.setAttribute("style","color:black;")
                    closeDown()

                }else if(el.getAttribute("value") == "hotRiceCake"){
                    selectedTag.textContent = "떡볶이"
                    selectedValue = el.getAttribute("value")
                    selectedTag.setAttribute("style","color:black;")
                    closeDown()

                }else{
                    selectedTag.textContent = "국밥집"
                    selectedValue = el.getAttribute("value")
                    selectedTag.setAttribute("style","color:black;")
                    closeDown()
                }
            })
        })

        
const closeDown = () => {
    selectOption.setAttribute("style","padding-bottom:0px;")
    dropdownBool = true
}
document.querySelector(".search_button").addEventListener("click",()=>{
    if(!selectedValue){
        alert("검색 태그를 선택해주세요")
    }else{
        localStorage.setItem("selectedTag",selectedValue)
        location.href = "../html/selectFood.html"
    }
})