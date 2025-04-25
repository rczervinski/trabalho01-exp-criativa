# Trabalho 5 Período de Ciência da Computação - Experiência Criativa  

## Configurações iniciais :
• Abra 2 Janelas do VScode, onde uma você abre na pasta my-app, e outra no api_banco  
• Após abrir, você precisa abrir seu banco de dados(MySqlWorkBench), e importar o banco.sql que esta localizado em:  
api_banco  > banco > banco.sql  
• Em seguida, usando MySqlWorkbench, vá em Server > DataImport, selecione Import from Self-Contained File, e localize o arquivo banco.sql no seu sistema  
  
## Rodando a API
• Abra a pasta api_banco, vá ate a pasta API, depois navegue até index.js e rode o arquivo (Utilizo CodeRunner)  
  • Se tudo ocorreu certo, aparecerá uma mensagem escrita que o servidor esta rodando na porta 8800  
  • Caso tenha ocorrido algum erro, você precisa alterar os dados da conexão do seu banco em /db.js (caso voce rode em uma porta diferente ou tenha usado outro nome na database).  
  
• Após rodar o banco, vá na sua janela do VScode onde está a pasta my-app, no terminal do VScode, execute -> npm start  
• Vá para seu navegador padrão, onde abrirá uma janela do programa pra vc utilizar.
