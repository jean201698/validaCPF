// 076429725  20

// 0 * 10 = 0
// 7 * 9 = 63
// 6 * 8 = 48
// 4 * 7 = 28
// 2 * 6 = 12
// 9 * 5 = 45
// 7 * 4 = 28
// 2 * 3 = 6
// 5 * 2 = 25

// 11 - (240 % 11)

// 11 * 0 = 11
// 10 * 7 = 70 
// 9 * 6 = 54
// 8 * 4 = 32
// 7 * 2 = 14
// 6 * 9 = 54
// 5 * 7 = 35
// 4 * 2 = 8
// 3 * 5 = 15
// 2 * 2 = 4


// 07642972520 === 07642972520



function ValidaCPF(cpfEnviado){


	Object.defineProperty(this, 'cpfLimpo', {
		enumerable:true,
		get: function(){
			return cpfEnviado.replace('.', '').replace('.', '').replace('-', '')}
	})
	
}
	

ValidaCPF.prototype.valida = function(){

    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false
	if(this.isSequencia()) return false
	const cpfParcial = this.cpfLimpo.slice(0, -2)
	
	const digito1 = this.criaDigito(cpfParcial)
	const digito2 = this.criaDigito(cpfParcial + digito1)
	const novoCpf = cpfParcial + digito1 + digito2

	return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
	const cpfArray = Array.from(cpfParcial)
	let regressivo = cpfArray.length + 1
	const total = cpfArray.reduce((ac, val)=>{
		
		ac += (regressivo * Number(val));
		regressivo--
		return ac;
		
	}, 0)
   

	const digito = 11 - (total % 11)
	return digito > 9 ? '0' : String(digito);
	
}

ValidaCPF.prototype.isSequencia = function(){
	const sequencia =  this.cpfLimpo[0].repeat(this.cpfLimpo.length)
	return sequencia === this.cpfLimpo
}


const v1  = new ValidaCPF('07642972520')


if(v1.valida()) {
	console.log('cpf valido');
} else{
	console.log('cpf Invalido');
}
	


