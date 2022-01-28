const posts=[
    {no:"1",title:"this post one"},
    {no:"2",title:"this post two"}

]

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output +=`<li>${post.title}</li>`
        });
        document.getElementById('con').innerHTML=output;
    },1000)
}

function createPost(post){
    setTimeout(()=>{
        posts.push(post);
    },2000);

}

getPost();

createPost({
    no:"3",
    title:"post three"
})