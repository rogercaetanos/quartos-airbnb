(function readyJS(win,doc){
'use strict';
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
           console.log(res);
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

	// This will run either way
	// All three of these are optional, depending on what you're trying to do
	console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72');
xhr.send();

})(window,document)


