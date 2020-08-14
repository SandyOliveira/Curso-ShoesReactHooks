import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://cdn.awsli.com.br/600x450/646/646838/produto/41303021/30a8488031.jpg"
          alt="Tênis Esportivo"
        />
        <strong>Tênis esportivo feminino </strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span> Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://cdn.awsli.com.br/600x450/646/646838/produto/41303021/30a8488031.jpg"
          alt="Tênis Esportivo"
        />
        <strong>Tênis esportivo feminino </strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span> Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}


