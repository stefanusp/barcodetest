var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
		function (result) {
			var kode = result.text;
			alert(kode);
//$.mobile.loading("show");
		/* $.ajax({
				url: "http://192.168.43.46/basic/web/index.php?r=siswa/cari",
				method : "POST",
				data : {kode:kode},
				dataType: "json",
				success: function(parsed_json) {
					 $.each(parsed_json, function(i,item){
			
						var kode_kawan=item.kode_siswa;
						var nama=item.nama;
						var alamat=item.alamat;
						var nope=item.nope;	
									$("#kode_kawan").val(kode_kawan);
						$("#nama").val(nama);
						$("#alamat").val(alamat);
						$("#nope").val(nope);
					});
				   $.mobile.loading("hide");
				 //  $('#formkawan').form('refresh');
				 document.getElementById("formkawan").reload();
			   }, 
			   timeout: 30000,    
			   error:function(xhr, status, error) {
  alert(xhr.responseText);
			   alert("Periksa Kembali Koneksi Internet Anda, Closing Application...");
			   navigator.app.exitApp();
			   }   
		}); */
		/*
			var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
			resultDiv.innerHTML = s;
			*/
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}