async function addProduct(event){
    event.preventDefault();
    console.log("reached here");

    let title=document.getElementById("title");
    console.log(title);
    let description=document.getElementById("description");
    console.log(description);
    let image_url=document.getElementById("image_url");
    console.log(image_url);
    let catogory=document.getElementById("catogory");
    console.log(catogory);
    let price=document.getElementById("price");
    console.log(price);
    let rating=document.getElementById("rating");
    console.log(rating);


    let datas={
        title,
        description,
        image_url,
        price,
        rating,
        catogory
    }
    console.log(datas);

    let json_data=JSON.stringify(datas);
    console.log(json_data);

    let responce=await fetch('/products',{
        method : "POST",
        headers : {
            'Content-Type' : "application/json",
        },
        body : json_data,
    });
    console.log(responce);

    let parsed_response = await response.text();
    console.log("parsed_response : ", parsed_response);

    if(parsed_response) {
        alert(parsed_response);
        return;
    }else {
        alert("Something went wrong");
    }

}