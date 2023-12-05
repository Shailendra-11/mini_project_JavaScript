
var arr = [
    {
        dp: "https://images.unsplash.com/photo-1701491809352-ba4c11bcf864?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://unsplash.com/photos/a-wooden-door-with-a-wreath-hanging-on-it-ri1ogP275qY"
    },
    {
        dp: "https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1692073613790-37187f23d23e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
    },
    {
        dp: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://unsplash.com/photos/a-wooden-door-with-a-wreath-hanging-on-it-ri1ogP275qY"
    },
    {
        dp: "https://images.unsplash.com/photo-1701491809352-ba4c11bcf864?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://unsplash.com/photos/a-wooden-door-with-a-wreath-hanging-on-it-ri1ogP275qY"
    },
    {
        dp: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://unsplash.com/photos/a-wooden-door-with-a-wreath-hanging-on-it-ri1ogP275qY"
    },
    {
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
        story: "https://unsplash.com/photos/a-wooden-door-with-a-wreath-hanging-on-it-ri1ogP275qY"
    },
    {
        dp: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
        story: "https://unsplash.com/photos/a-wooden-door-with-a-wreath-hanging-on-it-ri1ogP275qY"
    },


]

var clutter =" "
arr.forEach(function(elem){
    clutter += `
    <div class="story">
    <img  src=" ${elem.dp}" alt="">
  </div> `
    
})

document.querySelector(".stories").innerHTML =clutter;
document.querySelector(".stories").addEventListener('click', function(dets){
      document.querySelector("#full-screen").style.display= "block"
      document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
})