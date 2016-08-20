// JavaScript Document
document.querySelector('#validarUsuario').onclick=function(){
        nomeUsuario = document.getElementById('nomeUsuario').value;
        loginUsuario = document.getElementById('loginUsuario').value;
		senhaUsuario = document.getElementById('senhaUsuario').value;
		
		message = document.getElementById('resultUsuario');
        message.innerHTML = "";
        
        try{
            if(nomeUsuario == "") throw "Por Favor, Não deixe o nome de usuario em branco!";
			if(loginUsuario == "") throw "Por Favor, digite um login!";
			if(senhaUsuario == "") throw "Por Favor, digite uma senha!";
                       
        }catch(erro){
            message.innerHTML = erro;
			return false;           
        }
    }


document.querySelector('#validarCategoria').onclick=function(){
        nomeCategoria = document.getElementById('nomeCategoria').value;
        descricaoCategoria = document.getElementById('descricaoCategoria').value;
		
		message = document.getElementById('result');
        message.innerHTML = "";
        
        try{
            if(nomeCategoria == "") throw "Por Favor, Não deixe o nome da categoria em branco!";
			if(descricaoCategoria == "") throw "Por Favor, preencha uma descricão!";
                       
        }catch(erro){
            message.innerHTML = erro;
			return false;           
        }
    }

document.querySelector('#validarProduto').onclick=function(){
        nomeProduto = document.getElementById('nomeProduto').value;
        descProduto = document.getElementById('descProduto').value;
		status = document.getElementById('status').value;
		categoria = document.getElementById('categoria').value;
		qtdMinEstoque = document.getElementById('qtdMinEstoque').value;
		precProduto = document.getElementById('precProduto').value;
		descontoPromocao = document.getElementById('descontoPromocao').value;
		
		message = document.getElementById('resultProduto');
        message.innerHTML = "";
        
        try{
            if(nomeProduto == "") 		throw "Por Favor, Não deixe o nome do produto em branco!";
			if(descProduto == "") 		throw "Por Favor, preencha uma descricão!";
			if(status == "")      		throw "Por Favor, escolha um status!";
			if(categoria == "")   		throw "Por Favor, escolha uma categoria!";
			if(qtdMinEstoque == "") 	throw "Por Favor, Não deixe a quantidade minimo em estoque vazio!";
            if(isNaN(qtdMinEstoque)) 	throw "Por Favor, digite um numero na quantidade minimo em estoque!";
			if(precProduto == "") 		throw "Por Favor, Não deixe preço vazio!";
          	if(descontoPromocao == "") 	throw "Por Favor, Não deixe desconto da Promocao vazio!";
           	if(descontoPromocao <= 0 || descontoPromocao > 50) throw "Por Favor, Desconto permitido de 01 a 50%";
			
			
			           
        }catch(erro){
            message.innerHTML = erro;
			return false;           
        }
    }

  

		
            


