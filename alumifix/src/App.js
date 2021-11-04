import './App.css';
/*import {Link} from 'react-router-dom';*/
function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
        <div className="menu">
          <div className="logo">
            </div>
            <div className="item-menu">
              <a href='#'>LOGIN</a>
              <a href="#">CADASTRAR</a>
              <a href="#">GARANTIA</a>
              <a href="#">SOBRE-NÓS</a>
              <a href="#">FALE-CONOSCO</a>
              <a href="#">CARRINHO</a>
              
            </div>
            </div>
    </div>
    </div>
    <div className="pesquisa">
      <input type="search" id="texto" list="historico" placeholder="Busque aqui"/>
    <img src="https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-magnifying-glass-icon-png-image_889405.jpg"className="btn" />
      
    </div>


    
    
    {/* temporario */}
    <div className="mcontainer">
        <div className="mcontent">
          <div className="mleft">
          <div className="table_categorias">
    <ol>
      <h2>CATEGORIAS</h2>
    <div>
    <div className="prod">
    <div className="fv"><img src="data:image/png;base64,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" className="icon"/><div className="duto">MÓDULOS FV</div></div>
    <div className="fv"><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1MC41LDQ1LjY4NzVsLTY0LjUsLTIyLjg0Mzc1bC02NC41LDIyLjg0Mzc1djgwLjYyNWw2NC41LDIyLjg0Mzc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2YxYzQwZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSw0NS42ODc1bC02NC41LC0yMi44NDM3NWwtNjQuNSwyMi44NDM3NXY4MC42MjVsNjQuNSwyMi44NDM3NWw2NC41LC0yMi44NDM3NXpNMTUwLjUsNDUuNjg3NWwtNjQuNSwtMjIuODQzNzUiIGZpbGw9IiNmMWM0MGYiPjwvcGF0aD48cGF0aCBkPSJNODYsMTUzLjE4NzVjLTAuNDAzMTMsMCAtMC45NDA2MiwtMC4xMzQzOCAtMS4zNDM3NSwtMC4yNjg3NWwtNjQuNSwtMjIuODQzNzVjLTEuNjEyNSwtMC41Mzc1IC0yLjY4NzUsLTIuMTUgLTIuNjg3NSwtMy43NjI1di04MC42MjVjMCwtMS43NDY4NyAxLjA3NSwtMy4yMjUgMi42ODc1LC0zLjc2MjVsNjQuNSwtMjIuODQzNzVjMi4xNSwtMC44MDYyNSA0LjQzNDM4LDAuNDAzMTIgNS4xMDYyNSwyLjQxODc1YzAuODA2MjUsMi4xNSAtMC40MDMxMyw0LjQzNDM3IC0yLjQxODc1LDUuMTA2MjVsLTYxLjgxMjUsMjEuOTAzMTN2NzQuOTgxMjVsNjEuODEyNSwyMS45MDMxM2MyLjE1LDAuODA2MjUgMy4yMjUsMy4wOTA2MiAyLjQxODc1LDUuMTA2MjVjLTAuNTM3NSwxLjYxMjUgLTIuMTUsMi42ODc1IC0zLjc2MjUsMi42ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSw0NS42ODc1bC02NC41LC0yMi44NDM3NU0xNTAuNSw0NS42ODc1bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2YxYzQwZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTQuNTMxMjUsNDUuNTUzMTNjMCwtMC4xMzQzOCAwLC0wLjQwMzEzIDAsLTAuNTM3NXYtMC4xMzQzN2MtMC4yNjg3NSwtMS4zNDM3NSAtMS4yMDkzNywtMi41NTMxMyAtMi41NTMxMiwtMi45NTYyNWwtMzIuMjUsLTExLjQyMTg3aC0wLjEzNDM3Yy0wLjgwNjI1LC0wLjI2ODc1IC0xLjg4MTI1LC0wLjQwMzEzIC0yLjgyMTg3LDBsLTYzLjAyMTg4LDIyLjE3MTg4Yy0xLjYxMjUsMC41Mzc1IC0yLjY4NzUsMi4xNSAtMi42ODc1LDMuNzYyNXYxNC43ODEyNWMwLDIuMjg0MzcgMS43NDY4Nyw0LjAzMTI1IDQuMDMxMjUsNC4wMzEyNWMyLjI4NDM4LDAgNC4wMzEyNSwtMS43NDY4OCA0LjAzMTI1LC00LjAzMTI1di0xMS45NTkzOGw1OC44NTYyNSwtMjAuODI4MTJsMjAuNDI1LDcuMjU2MjVsLTUzLjc1LDE5LjA4MTI1Yy0xLjYxMjUsMC41Mzc1IC0yLjY4NzUsMi4wMTU2MyAtMi42ODc1LDMuNzYyNWMwLDAgMCwwIDAsMC4xMzQzOHY3NC45ODEyNWwtNTYuNDM3NSwtMjAuMTU2MjV2LTc0Ljk4MTI1bDYxLjgxMjUsLTIxLjkwMzEyYzIuMTUsLTAuODA2MjUgMy4yMjUsLTMuMDkwNjIgMi40MTg3NSwtNS4xMDYyNWMtMC44MDYyNSwtMi4xNSAtMy4wOTA2MywtMy4yMjUgLTUuMTA2MjUsLTIuNDE4NzVsLTY0LjUsMjIuODQzNzVjLTEuNjEyNSwwLjUzNzUgLTIuNjg3NSwyLjE1IC0yLjY4NzUsMy43NjI1djgwLjYyNWMwLDEuNzQ2ODcgMS4wNzUsMy4yMjUgMi42ODc1LDMuNzYyNWw2NC41LDIyLjg0Mzc1djBjMC40MDMxMywwLjEzNDM4IDAuOTQwNjIsMC4yNjg3NSAxLjM0Mzc1LDAuMjY4NzVjMC40MDMxMywwIDAuOTQwNjIsLTAuMTM0MzggMS4zNDM3NSwtMC4yNjg3NWw2NC41LC0yMi44NDM3NWMxLjYxMjUsLTAuNTM3NSAyLjY4NzUsLTIuMTUgMi42ODc1LC0zLjc2MjV2LTgwLjc1OTM4YzAsMC4xMzQzNyAwLDAgMCwwek0xNDYuNDY4NzUsMTIzLjQ5MDYzbC01Ni40Mzc1LDIwLjAyMTg4di03Mi4xNTkzOGw1Ni40Mzc1LC0yMC4wMjE4OHoiIGZpbGw9IiM0NDRiNTQiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" className="icon2"/><div className="duto">MÓDULOS FV</div></div>
    <div className="fv"><img src="https://img.icons8.com/ios-filled/50/000000/pliers.png" className="icon3"/><div className="duto">MÓDULOS FV</div></div>
    <div className="editor">
    <button className="botões">TODOS OS PRODUTOS</button>

    </div>
    </div>
    </div>
    </ol>
    </div>
    
          </div>
          <div className="mcenter">
          <div className="central">
    <img src="data:image/png;base64,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" className="setas"/>
  <img src="https://emapsolar.com.br/wp-content/uploads/2019/09/painel-fotovoltaico-797x548.jpg" />
  <img src="data:image/png;base64,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" className="setas"/>
  </div>
            </div>
          <div className="mrigth">direita</div>
        </div>
        <div className="mcontent">
        <div className="mleft">esquerda</div>
          <div className="mcenter">centro</div>
          <div className="mrigth">direita</div>
          
          
        </div>
        
          
    </div>
    {/* final temporario */}

    <footer className="rodape_final"> 
    
    <article className="art_rod">
      <img src="https://alumifixsolar.com.br/wp-content/uploads/2020/10/logo_site.png" className="img-roda"></img>
    <article><p className="siga"><h2>siga-nos:</h2></p>
    <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
    <img src="https://img.icons8.com/fluency/48/000000/twitter.png"/>
    <img src="https://img.icons8.com/color/48/000000/youtube-play.png"/>
    <img src="https://img.icons8.com/fluency/48/000000/facebook.png"/>
    </article>
    </article>
    <article className="art_rod center">
    <article className="venda">
      <img src= "https://img.icons8.com/office/25/000000/whatsapp--v1.png" className="img_whats"/>
      </article>
      <article className="vendas">
      <p><h2>WhatsApp Vendas</h2></p>
    <p>Allison (41) 9 9777 1655</p>
    <p>Eduardo (41) 9 9821 0384</p>
    <p>Elisabet (41) 9 9866 0143</p>
    <p>Fernanda (41) 9 9931 0263</p>
    <p>Yusbeilit (41) 9 9647 0356</p>

</article>
    </article>
    <article className="art_rod center">
    <article className="venda">
      <img src= "https://img.icons8.com/office/25/000000/whatsapp--v1.png" className="img_whats"/>
      </article>
      <article className="vendas">
      <p><h2>WhatsApp Vendas</h2></p>
      <p>Italo (41) 9 9757 3478</p>
      <p>João (41)9 9647 0332</p>
      <p>Ricardo (41) 9 9647 0068</p>
      <p>Roberto (41) 9 9972 0943</p>
      
      
</article>
    </article>
    <article className="art_rod center">
    <article className="venda">
      <img src= "https://img.icons8.com/office/25/000000/whatsapp--v1.png" className="img_whats"/>
      </article>
      <article className="vendas">
      <p><h2>WhatsApp Gerente Comercial</h2></p>
      <p>William (41) 9 9931 0272</p>
      
</article>
    </article>
      </footer>
    </div>
  );
}

export default App;