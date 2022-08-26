const items = [
{
  id:0,
  nome: "Nike Dunk Low Club 58",
  img: 'images/dunklow.jpg',
  quantidade: 0,
  preco: 799.00
},
{
  id: 1,
  nome: "Camiseta No Way Home",
  img: 'images/miranha.jpg',
  quantidade: 0,
  preco: 120.00
},
{
  id: 2,
  nome: "Tênis Nike Air Max 90 Masculino",
  img: 'images/airmax90.jpg',
  quantidade: 0,
  preco: 799.00
},
{
  id: 3,
  nome: "Shoulder Bag Nike Core 3.0",
  img: 'images/bagnike.jpg',
  quantidade: 0,
  preco: 150.00
  
}];

inicializarLoja = () =>{
  var containerProdutos = document.querySelector("#produtos");
  for(prod of items){
    containerProdutos.innerHTML += `
      <div class="produto_single">
          <img src="${prod.img}" class="padrao"/>
          <p> ${prod.nome}</p>
          <p class="estilo-preco">R$ ${prod.preco}</p>
          <a  key="${prod.id}"href="#">Adicionar ao Carrinho<a/>
      </div>
    `
  }
  /* MÉTODO SECUNDÁRIO  
    items.map((val)=>{
    console.log(val.nome);
  })
   */
}
inicializarLoja();


atualizarCarrinho = () =>{
  let containerCarrinho = document.querySelector("#carrinhos");
  containerCarrinho.innerHTML = "";
    for(prod of items){
      if(prod.quantidade > 0 ){
        containerCarrinho.innerHTML +=`

          <div class ="info-single-checkout">
          <p style="float:left">Produto: ${prod.nome}</p>
          <p class="style-preco">Valor: ${prod.preco}</p>
          <p style="float:right">Quantidade: ${prod.quantidade}</p>
          <div style="clear:both"></div>
          </div><br>
        `
      }
      
    }
    calcularTotal(); 
containerCarrinho.innerHTML += `<button id="finalizar-compra" class="button-finalizar">Finalizar Compra<button>`     
}

calcularTotal = () =>{
  let carrinho = document.querySelector("#carrinhos");
  let valor_total = 0;
  for(item of items){
    if(item.quantidade > 0){
      valor_total += item.preco*item.quantidade
      
    }
  };
  carrinho.innerHTML += `<p class="valor-total">Valor total: ${valor_total}</p><br>`
}
const carrinho = () =>{
  let links = document.getElementsByTagName("a");
  for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
      let key = this.getAttribute("key");
      items[key].quantidade++;
      atualizarCarrinho()
      return false
    
    })
};
}

carrinho()



