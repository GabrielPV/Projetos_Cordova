let app = {
	
	inicializar: function(){
		console.log("Inicializar: function(){...");
		document.addEventListener('deviceready', app.onMyDeviceReady, false);
		document.addEventListener('onResume', app.retornoAoPrimeiroPlano, false);
		},
		
		onMyDeviceReady: function(){
			console.log('#####=> Running cordova-' + cordova.pltformId + '@' + cordova.version);
			document.getElementById("btnSelecionaContato").addEventListener('click', app.selecionarContato);
		},
		
		retornoAoPrimeiroPlano:function(){
			console.log("retornoAoPrimeiroPlano:function(){...");
			},
			
		selecionarContato: function(){
			console.log("selecionarContato : function(){...");
			navigator.contacts.pickContact(function(c){
				console.log("####=> Contato Selecionado");
				console.log(c);
			},function(err){
				console.log("####=> Contato nao selecionado");
				console.log(err);
			});
	}
		
		
}

app.inicializar();
    
	
	
	

	
	
	
	
	
	
	
	
	
	