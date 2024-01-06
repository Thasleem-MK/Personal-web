function sendmail() {
    if(document.getElementById('name').value.length>0
    &&document.getElementById('email').value.length>0
    &&document.getElementById('message').value.length>0
    &&document.getElementById('subject').value.length>0
    &&document.getElementById('email').value.includes("@")){
  
    var params={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('message').value,
        subject:document.getElementById('subject').value
    }
    const serviceId="service_vxp5f98"
  const templateId="template_3ma19n8"
  emailjs.send(serviceId,templateId,params)
  .then(
    res => {
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        document.getElementById('message').value="";
        document.getElementById('subject').value="";
        console.log(res);
        alert('message send succesfully');
    })
  .catch(err=>{console.log(err);})
  }else{
    alert("please fill the form correctly")
  }
  }
