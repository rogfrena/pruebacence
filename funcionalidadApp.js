var provider = new firebase.auth.GoogleAuthProvider();

$('#logueo').click(function(){
    //firebase.auth()
    //.signinWithPopup(provider)
    //.then(function(result){
      //  console.log(result.user);
        //almacenaDatos(result.user);


        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            //console.log(result.user);
            almacenaDatos(result.user);
        $('#logueo').hide();
        $('#principal').append("<img src=" +result.user.photoURL+"/>")
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
});

// guardado de la base de datos automatico

function almacenaDatos(user){
    var datosDelUsuario={
        nombre:user.displayName,
        email:user.email,
        foto:user.photoURL,
        uid:user.uid
    }
   // firebase.database().ref("https://app-de-autenticacion-a9a70.firebaseio.com/"+ user.uid)
   firebase.database().ref("https://console.firebase.google.com/u/0/project/app-de-autenticacion-a9a70/database/app-de-autenticacion-a9a70/data/"+user.uid)
    .push(datosDelUsuario)
}
 firebase.database().ref("https://console.firebase.google.com/u/0/project/app-de-autenticacion-a9a70/database/app-de-autenticacion-a9a70/data")
 .on("child_added",function(s){
     var usuario2= s.val();
     $('#principal').append(`<img width='150px' src= +user.foto+/>`);
 })