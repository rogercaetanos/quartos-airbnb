(function readyJS(win,doc){
'use strict';
let myres = '';
let myProducts = '';
doc.getElementById("txtFind").onkeydown = (event)=>{
  doc.getElementById("boxProducts").innerHTML = "";
  myProducts = '';
  if(event.keyCode == 13){
    let q = doc.getElementById("txtFind").value == ""?"#":doc.getElementById("txtFind").value;
    console.log(q);
    for(let i = 0; i < myres.length;i++){
     
      if(myres[i].property_type.match(q)!= null && myres[i].property_type.match(q)!= "#"){
         // console.log(myres[i].name);
          myProducts+= "<div id='boxProduct'>"+
                             "<div class='boxProductImage'><img style='width: 100%;' src='"+ myres[i].photo + "'/></div>"+
                              "<div class='boxProductText'><p><strong>"+myres[i].property_type + 
                              "</strong> "+(myres[i].price).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })+"</p><p>"+ 
                                            myres[i].name + "</p></div></div>"; 
      }else if(q == "#"){
        myProducts+= "<div id='boxProduct'>"+
        "<div class='boxProductImage'><img style='width: 100%;' src='"+ myres[i].photo + "'/></div>"+
         "<div class='boxProductText'><p><strong>"+myres[i].property_type + 
         "</strong> "+(myres[i].price).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })+"</p><p>"+ 
                       myres[i].name + "</p></div></div>"; 
      }
    }
    doc.getElementById("boxProducts").innerHTML = myProducts;
    //var idx = myres[0].name.match(q);
    //alert(idx);
  }
   
};

doc.getElementById("btnFind").onclick = (event)=>{
  
  doc.getElementById("boxProducts").innerHTML = "";
  myProducts = '';
  
    let q = doc.getElementById("txtFind").value == ""?"#":doc.getElementById("txtFind").value;
    console.log(q);
    for(let i = 0; i < myres.length;i++){
     
      if(myres[i].property_type.match(q)!= null && myres[i].property_type.match(q)!= "#"){
         // console.log(myres[i].name);
          myProducts+= "<div id='boxProduct'>"+
                             "<div class='boxProductImage'><img style='width: 100%;' src='"+ myres[i].photo + "'/></div>"+
                              "<div class='boxProductText'><p><strong>"+myres[i].property_type + 
                              "</strong> "+(myres[i].price).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })+"</p><p>"+ 
                                            myres[i].name + "</p></div></div>"; 
      }else if(q == "#"){
        myProducts+= "<div id='boxProduct'>"+
        "<div class='boxProductImage'><img style='width: 100%;' src='"+ myres[i].photo + "'/></div>"+
         "<div class='boxProductText'><p><strong>"+myres[i].property_type + 
         "</strong> "+(myres[i].price).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })+"</p><p>"+ 
                       myres[i].name + "</p></div></div>"; 
      }
    }
    doc.getElementById("boxProducts").innerHTML = myProducts;
    
};



  // Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// This will run when the request is successful
        console.log('success!', xhr);
        
       if(xhr.status === 200 && xhr.readyState === 4){
           console.log('Tudo Ok');
           let res = JSON.parse(xhr.responseText);
         //  console.log(res);
            myres = [...res];
           console.log(myres);
          

           let products = '';
           for(let i = 0; i < res.length;i++){
               if(i % 3 == 0){
                products+= "<div class='break'></div>";
               }
               products+= "<div id='boxProduct'>"+
                             "<div class='boxProductImage'><img style='width: 100%;' src='"+ res[i].photo + "'/></div>"+
                              "<div class='boxProductText'><p><strong>"+res[i].property_type + 
                              "</strong> "+(res[i].price).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })+"</p><p>"+ 
                                            res[i].name + "</p></div></div>"; 
           }
           doc.getElementById("boxProducts").innerHTML = products;
       }


	} else {
		// This will run when it's not
		console.log('The request failed!');
	}


};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72');
xhr.send();

})(window,document)


