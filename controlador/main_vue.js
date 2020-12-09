url = "modelo/modelo_user.php";
let app = new Vue({
  el: "#main",
  data: {
    js_nombre: "",
    registros: [],
    js_apellidoPaterno: "",
    js_apellidoMaterno: "",
    js_edad: "",
    js_sexo: "",
    js_foto: "",
    //edita_data
   /* edi_nombre:  "",
    edi_apellidoPaterno:  "",
    edi_apellidoMaterno:  "",
    edi_edad:  "",
    edi_sexo:  "",
    edi_foto:  "",*/
    save_id: []
  },
 /* mounted: function(){
  },*/
  methods: {
    submit: function (e) {
      if (
        this.js_nombre != "" &&
        this.js_apellidoPaterno != "" &&
        this.js_apellidoMaterno != "" &&
        this.js_edad != "" &&
        this.js_sexo &&
        this.js_foto != ""
      ) {
        var form = document.getElementById("datos");
        var formData = new FormData(form);
        formData.append("opcion", 1);
        axios.post(url, formData).then(
          (response) => {
            /*  this.prueva=response.data;
              console.log(response.data);*/
            msm_final(response.data);
          },
          (response) => {
            // error callback
          }
        );
      } else {
        msm_confimar();
      }
    },
  
    listardatos(){
      var formData = new FormData();
      formData.append("opcion", 4);
      axios.post(url, formData).then((response) => {
        this.registros = response.data;
        this.cleartable();
      });
    },

     fn_eliminar(id){
      $.confirm({
        title: 'Eliminar',
        content: 'Esta seguro de eliminar',
        type: 'dark',
        typeAnimated: true,
        buttons: {
        confirm: {
         text: 'Ok',
         btnClass: 'btn-dark',
         action: function(){
          var formData = new FormData();
          formData.append("opcion", 2);
          formData.append("id_delite", id);
          axios.post(url, formData).then((response) => {
            msm_final(response.data);
            this.cleartable();
          });
           }
        }, 
        cancel:{
          text:'Cancelar',
          btnClass:'btn-red'
          }
        }
     });
    },
    fn_editar(id,nombre,apellPaterno,apellMater,edad,sexo,imgUser)
    {
    
      document.getElementById("enombre").value = nombre;
      document.getElementById("eapell_p").value = apellPaterno;
      document.getElementById("eapell_m").value =apellMater;
      document.getElementById("eedad").value = edad;
      document.getElementById("esexo").value =sexo;
      document.getElementById("imgUser").src =imgUser;

        this.save_id=id;
        /* this.tareas.push({
                   nombre:this.nuevoTares,
                   estado:false
               }); */
    },
    inf_editar() {
      //document.querySelector('#imgUser').style.display = "block";
   //   document.querySelector('#image').style.display = "none";

  let id =this.save_id
  var form = document.getElementById("datosEditar");
  

  var formData = new FormData(form);
  formData.append("opcion", 3);
  formData.append("id_edi", id);

  axios.post(url, formData).then(
    (response) => {
     msm_final(response.data);
    
    },
    (response) => {
      // error callback
    }
  );

    
    },
    previewimg()
    { 
      //document.querySelector('#image').style.display = "block";
      const $form = document.querySelector('#datosEditar')
      const formData = new FormData($form)
      this.renderImage(formData)
      document.querySelector('#imgUser').style.display = "none";
     
      
    },
   renderImage(formData) {
    const $image = document.querySelector('#image')
    
      const file = formData.get('image')
      const image = URL.createObjectURL(file)
      $image.setAttribute('src', image)
    },

    cleartable(){
      $('#tbl_user').DataTable().destroy();
      app.$nextTick(function(){
        $('#tbl_user').DataTable({
          "language": {"url": "js/Spanish.json"},
          'destroy':true,
          'stateSave':true,
        }).draw();
      })
    }
  },
  created: function () {
    this.listardatos();
  }
});
